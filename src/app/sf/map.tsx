"use client";

import { useState, useMemo } from "react";
import Map, { GeolocateControl, NavigationControl } from "react-map-gl";
import { MapboxEvent } from "mapbox-gl";
import { CustomMarker, Heading } from "views/sfMap";
import { mapInitialViewState } from "views/sfMap/constants";
import { Record } from "types/sfMap";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const SanFranciscoMap = ({ data }: { data: Record[] }) => {
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
  );
};

export default SanFranciscoMap;
