import { LngLatBounds } from "mapbox-gl";

// Center view around San Francisco
export const mapInitialViewState = {
  bounds: new LngLatBounds(
    { lon: -122.514239, lat: 37.732597 },
    { lon: -122.383097, lat: 37.815894 }
  ),
};

export const shadow =
  "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)";
