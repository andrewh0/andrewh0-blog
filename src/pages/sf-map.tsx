import { useState, useMemo } from "react";
import { Box, Text, Link as ThemeLink } from "theme-ui";
import Link from "next/link";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Map, {
  Marker,
  GeolocateControl,
  NavigationControl,
  useMap,
} from "react-map-gl";
import { blue, gray } from "@radix-ui/colors";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapboxEvent } from "mapbox-gl";

type PlaceType =
  | "activity"
  | "bakery"
  | "bar"
  | "cafe"
  | "dessert"
  | "other"
  | "restaurant";

type Record = {
  id: string;
  createdAt: string;
  fields: {
    name: string;
    starred: boolean;
    type: PlaceType;
    url: string;
    lat: number;
    lon: number;
    price?: string;
  };
};

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const AIRTABLE_SF_BASE = process.env.AIRTABLE_SF_BASE;
const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_SF_BASE}/places?view=app`;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

// Center view around San Francisco
const mapInitialViewState = {
  longitude: -122.45,
  latitude: 37.778,
  zoom: 13,
};

const pinMap = {
  restaurant: "🍽️",
  cafe: "☕",
  dessert: "🍦",
  bar: "🍸",
  activity: "📍",
  bakery: "🥖",
  other: "📍",
};

const shadow = "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";

async function listPlaces(offset?: string) {
  const res = await fetch(
    offset ? `${AIRTABLE_API_URL}&offset=${offset}` : AIRTABLE_API_URL,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    }
  );
  const { records, offset: nextOffset } = await res.json();
  return { records, nextOffset };
}

const Pin = ({
  type,
  isSelected,
}: {
  type: PlaceType;
  isSelected: boolean;
}) => {
  const emoji = pinMap[type] || pinMap["other"];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "12px",
        borderRadius: "100%",
        background: "white",
        padding: "2px",
        width: "24px",
        height: "24px",
        boxShadow: shadow,
        border: isSelected ? `2px solid ${blue.blue7}` : "none",
      }}
    >
      {emoji}
    </Box>
  );
};

const CustomMarker = ({
  record,
  onSelect,
  isSelected,
}: {
  record: Record;
  onSelect: (record: Record) => void;
  isSelected: boolean;
}) => {
  const mapRef = useMap();
  const handleClick = (mapboxEvent: MapboxEvent<MouseEvent>) => {
    // If we let the click event propagate to the map, it will immediately close the popup.
    mapboxEvent.originalEvent.stopPropagation();
    onSelect(record);
    if (mapRef?.current) {
      mapRef.current.flyTo({
        center: [record.fields.lon, record.fields.lat],
        duration: 1000,
        essential: true,
      });
    }
  };

  return (
    <Marker
      key={`marker-${record.id}`}
      longitude={record.fields.lon}
      latitude={record.fields.lat}
      anchor="bottom"
      onClick={handleClick}
      style={{
        zIndex: isSelected ? 1 : "auto",
      }}
    >
      <Pin type={record.fields.type} isSelected={isSelected} />
    </Marker>
  );
};

const Popup = ({ selectedPlace }: { selectedPlace: Record }) => (
  <Box
    sx={{
      width: "320px",
      bg: "white",
      p: 3,
      borderRadius: "16px",
      boxShadow: shadow,
      pointerEvents: "auto",
    }}
  >
    <Text
      as="p"
      sx={{
        color: gray.gray12,
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: [2, 3],
        letterSpacing: [0, "-0.03em"],
      }}
    >
      {selectedPlace.fields.name}
    </Text>
    <Text
      as="p"
      sx={{
        color: gray.gray11,
        fontFamily: "body",
        lineHeight: "body",
        fontWeight: "body",
        fontSize: 2,
      }}
    >
      {selectedPlace.fields.type}
    </Text>
  </Box>
);

const MapHeading = ({ selectedPlace }: { selectedPlace: Record | null }) => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      zIndex: 9,
      padding: 4,
      pointerEvents: "none",
    }}
  >
    <Text
      as="h1"
      sx={{
        display: "block",
        color: gray.gray12,
        fontFamily: "heading",
        lineHeight: "heading",
        fontWeight: "heading",
        fontSize: [3, 4],
        letterSpacing: [0, "-0.03em"],
        mb: 1,
        pointerEvents: "auto",
      }}
    >
      San Francisco Food and Fun
    </Text>
    <Text
      as="p"
      sx={{
        color: gray.gray11,
        fontFamily: "body",
        lineHeight: "heading",
        fontWeight: 500,
        fontSize: [2, 3],
        letterSpacing: [0, "-0.03em"],
        mb: 4,
        pointerEvents: "auto",
      }}
    >
      made by{" "}
      <Link href="/" passHref>
        <ThemeLink
          sx={{
            color: gray.gray11,
          }}
        >
          Andrew
        </ThemeLink>
      </Link>
    </Text>
    {selectedPlace && <Popup selectedPlace={selectedPlace} />}
  </Box>
);

export const getServerSideProps: GetServerSideProps = async (_context) => {
  let locations: Record[] = [];
  let offset;

  do {
    const { records, nextOffset }: { records: Record[]; nextOffset?: string } =
      await listPlaces(offset);
    locations = locations.concat(records);
    offset = nextOffset;
  } while (offset);

  return { props: { data: locations } };
};

const SfMapPage = ({ data }: { data: Record[] }) => {
  const [selectedPlace, setSelectedPlace] = useState<Record | null>(null);

  const handleSelect = (record: Record) => {
    setSelectedPlace(record);
  };

  const handleMapClick = (_mapboxEvent: MapboxEvent<MouseEvent>) => {
    setSelectedPlace(null);
  };

  const pins = useMemo(
    () =>
      data.map((record) => {
        const isSelected = record.id === selectedPlace?.id;
        return (
          <CustomMarker
            key={`marker-${record.id}`}
            record={record}
            onSelect={handleSelect}
            isSelected={isSelected}
          />
        );
      }),
    [data, selectedPlace]
  );

  return (
    <Box
      sx={{
        height: "100%",
      }}
    >
      <Head>
        <title>SF Map &middot; Andrew Ho</title>
      </Head>
      <Box
        sx={{
          height: "100%",
          display: "relative",
        }}
      >
        <MapHeading selectedPlace={selectedPlace} />
        <Map
          initialViewState={mapInitialViewState}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/andrewlho/clb18xxcn000214pc9hcuirrp"
          mapboxAccessToken={MAPBOX_TOKEN}
          onClick={handleMapClick}
        >
          <GeolocateControl position="bottom-right" />
          <NavigationControl showCompass={false} position="bottom-right" />
          {pins}
        </Map>
      </Box>
    </Box>
  );
};

export default SfMapPage;
