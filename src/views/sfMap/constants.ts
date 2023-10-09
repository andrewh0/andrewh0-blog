import { LngLatBounds } from "mapbox-gl";

// Center view around San Francisco
export const mapInitialViewState = {
  bounds: new LngLatBounds(
    { lon: -122.514239, lat: 37.732597 },
    { lon: -122.383097, lat: 37.815894 },
  ),
};
