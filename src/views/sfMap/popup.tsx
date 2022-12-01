import { Box, Text } from "theme-ui";
import { gray } from "@radix-ui/colors";
import { Record } from "types/sfMap";
import { shadow } from "views/sfMap";

const MEDIA_QUERY_DESKTOP_HOVER = "@media(hover: hover) and (pointer: fine)";

const LinkButton = ({ ...props }) => {
  return (
    <a
      {...props}
      sx={{
        bg: gray.gray6,
        [MEDIA_QUERY_DESKTOP_HOVER]: {
          "&:hover": {
            bg: gray.gray5,
          },
        },
        color: gray.gray12,
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: 2,
        border: 0,
        borderRadius: 4,
        m: 0,
        px: 3,
        py: 2,
        display: "inline-block",
        textAlign: "center",
      }}
    />
  );
};

const Popup = ({ selectedPlace }: { selectedPlace: Record }) => (
  <Box
    sx={{
      width: ["100%", "320px"],
      bg: "white",
      p: 3,
      borderRadius: "16px",
      boxShadow: shadow,
      pointerEvents: "auto",
    }}
  >
    <Box mb={3}>
      <Text
        as="p"
        sx={{
          color: gray.gray12,
          fontFamily: "heading",
          lineHeight: "heading",
          fontWeight: "heading",
          fontSize: 3,
          letterSpacing: [0, "-0.03em"],
        }}
      >
        {selectedPlace.fields.name}
        {selectedPlace.fields.starred ? (
          <>
            {" "}
            <span>⭐</span>
          </>
        ) : (
          ""
        )}
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
        {selectedPlace.fields.price ? ` · ${selectedPlace.fields.price}` : ""}
      </Text>
    </Box>
    <Box>
      <Text
        as="p"
        sx={{
          display: "block",
          color: gray.gray12,
          fontFamily: "heading",
          lineHeight: "heading",
          fontWeight: "heading",
          fontSize: 2,
          mb: 1,
        }}
      >
        Open in…
      </Text>
      <Box
        sx={{
          display: "flex",
          gap: 2,
        }}
      >
        <LinkButton
          href={`https://google.com/maps/search/?api=1&query=${selectedPlace.fields.name}, San Francisco`}
          sx={{ flex: 1 }}
        >
          Google Maps
        </LinkButton>
        <LinkButton
          href={`https://maps.apple.com/?sll=${selectedPlace.fields.lat},${selectedPlace.fields.lon}&q=${selectedPlace.fields.name}`}
          sx={{ flex: 1 }}
        >
          Apple Maps
        </LinkButton>
      </Box>
    </Box>
  </Box>
);

export default Popup;
