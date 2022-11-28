import { Box } from "theme-ui";
import Head from "next/head";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const sfMapPage = () => {
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
        }}
      >
        <Map
          initialViewState={{
            longitude: -122.45,
            latitude: 37.778,
            zoom: 13,
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/andrewlho/clb18xxcn000214pc9hcuirrp"
          mapboxAccessToken={MAPBOX_TOKEN}
        />
      </Box>
    </Box>
  );
};

export default sfMapPage;
