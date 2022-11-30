import { useState, useMemo } from "react";
import { Box, Text, Link as ThemeLink } from "theme-ui";
import Link from "next/link";
import Head from "next/head";
import Map, {
  Marker,
  GeolocateControl,
  NavigationControl,
  useMap,
} from "react-map-gl";
import { blue, gray } from "@radix-ui/colors";

import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const AIRTABLE_SF_BASE = process.env.AIRTABLE_SF_BASE;
const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_SF_BASE}/places?view=list`;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

function parseLocations(locations) {
  const result = [];
  for (let location of locations) {
    const [lat, lng] = location.split("!8m2!3d")[1].split("!4d");
    result.push([lng]);
  }
  console.log(result.join("\n"));
}

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

export async function getServerSideProps(context) {
  let locations = [];
  let offset = null;

  do {
    const { records, nextOffset } = await listPlaces(offset);
    locations = locations.concat(records);
    offset = nextOffset;
  } while (offset);

  return { props: { data: locations } };
}

const pinMap = {
  restaurant: "🍽️",
  cafe: "☕",
  dessert: "🍦",
  bar: "🍸",
  activity: "📍",
  bakery: "🥖",
  other: "📍",
};

const Pin = ({ type, name, isSelected }) => {
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

const Popup = ({ fields }) => {
  return (
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
        {fields.name}
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
        {fields.type}
      </Text>
    </Box>
  );
};

const SfMapPage = ({ data }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapRef = useMap();

  const pins = useMemo(
    () =>
      data.map(({ fields, id }, index) => {
        const isSelected = id === selectedPlace?.id;
        return (
          <Marker
            key={`marker-${id}`}
            longitude={fields.lon}
            latitude={fields.lat}
            anchor="bottom"
            onClick={(e) => {
              // If we let the click event propagate to the map, it will immediately close the popup
              // with `closeOnClick: true`
              e.originalEvent.stopPropagation();
              setSelectedPlace({ fields, id });
              if (mapRef?.current) {
                mapRef.current.flyTo({
                  center: [fields.lon, fields.lat],
                  essential: true,
                });
              }
            }}
            style={{
              zIndex: isSelected ? 1 : "auto",
            }}
          >
            <Pin
              type={fields.type}
              name={fields.name}
              isSelected={isSelected}
            />
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
            <Link href={"/"} passHref>
              <ThemeLink
                sx={{
                  color: "muted",
                }}
              >
                Andrew
              </ThemeLink>
            </Link>
          </Text>
          {selectedPlace && <Popup fields={selectedPlace.fields} />}
        </Box>
        <Map
          initialViewState={{
            longitude: -122.45,
            latitude: 37.778,
            zoom: 13,
            fitBoundsOptions: {
              maxZoom: 13,
            },
          }}
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
