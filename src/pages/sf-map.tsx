import { Box, Text } from "theme-ui";
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
          display: "relative",
        }}
      >
        <Text
          as="h1"
          sx={{
            color: "text",
            fontFamily: "heading",
            lineHeight: "heading",
            fontWeight: "heading",
            fontSize: [3, 4],
            letterSpacing: [0, "-0.03em"],
            position: "absolute",
            top: 0,
            zIndex: 1,
            padding: 4,
          }}
        >
          San Francisco Food and Fun
        </Text>
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
