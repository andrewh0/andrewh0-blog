import { useState, useMemo } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Map, { GeolocateControl, NavigationControl } from "react-map-gl";
import { MapboxEvent } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { Record } from "types/sfMap";
import { CustomMarker, Heading } from "views/sfMap";
import { mapInitialViewState } from "views/sfMap/constants";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const AIRTABLE_SF_BASE = process.env.AIRTABLE_SF_BASE;
const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_SF_BASE}/places?view=app`;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;

async function listPlaces(offset?: string) {
  const res = await fetch(
    offset ? `${AIRTABLE_API_URL}&offset=${offset}` : AIRTABLE_API_URL,
    {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    },
  );
  const { records, offset: nextOffset } = await res.json();
  return { records, nextOffset };
}

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
    [data, selectedPlace],
  );

  return (
    <div className="h-full">
      <Head>
        <title>SF Map &middot; Andrew Ho</title>
      </Head>
      <div className="relative h-full">
        <Heading selectedPlace={selectedPlace} />
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
      </div>
    </div>
  );
};

export default SfMapPage;
