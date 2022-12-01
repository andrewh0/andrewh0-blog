import { Marker, useMap } from "react-map-gl";
import { MapboxEvent } from "mapbox-gl";
import { Pin } from "views/sfMap";
import { Record } from "types/sfMap";

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
        zIndex: isSelected ? 2 : record.fields.starred ? 1 : "auto",
      }}
    >
      <Pin
        type={record.fields.type}
        isSelected={isSelected}
        isStarred={record.fields.starred}
      />
    </Marker>
  );
};

export default CustomMarker;
