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
    price: string;
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
        boxShadow:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        border: isSelected ? `2px solid ${blue.blue7}` : "none",
      }}
    >
      {emoji}
    </Box>
  );
};

const Popup = ({ selectedPlace }: { selectedPlace: Record }) => (
  <Box
    sx={{
      width: "320px",
      bg: "white",
      p: 3,
      borderRadius: "16px",
      boxShadow:
        "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      pointerEvents: "auto",
    }}
  >
    <Text
      as="p"
      sx={{
        color: "text",
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
        color: "muted",
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

export const getServerSideProps: GetServerSideProps = async (_context) => {
  let locations: Record[] = [];
  let offset = undefined;

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
  const mapRef = useMap();

  const pins = useMemo(
    () =>
      data.map((record) => {
        const isSelected = record.id === selectedPlace?.id;
        return (
          <Marker
            key={`marker-${record.id}`}
            longitude={record.fields.lon}
            latitude={record.fields.lat}
            anchor="bottom"
            onClick={(mapboxEvent) => {
              // If we let the click event propagate to the map, it will immediately close the popup.
              mapboxEvent.originalEvent.stopPropagation();
              setSelectedPlace(record);
              if (mapRef?.current) {
                mapRef.current.flyTo({
                  center: [record.fields.lon, record.fields.lat],
                  essential: true,
                });
              }
            }}
            style={{
              zIndex: isSelected ? 1 : "auto",
            }}
          >
            <Pin type={record.fields.type} isSelected={isSelected} />
          </Marker>
        );
      }),
    [data, mapRef, selectedPlace]
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
              color: "muted",
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
                  color: "muted",
                }}
              >
                Andrew
              </ThemeLink>
            </Link>
          </Text>
          {selectedPlace && <Popup selectedPlace={selectedPlace} />}
        </Box>
        <Map
          initialViewState={mapInitialViewState}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/andrewlho/clb18xxcn000214pc9hcuirrp"
          mapboxAccessToken={MAPBOX_TOKEN}
          onClick={() => {
            setSelectedPlace(null);
          }}
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
