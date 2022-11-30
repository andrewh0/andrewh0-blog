import { Box, Text } from "theme-ui";
import { gray } from "@radix-ui/colors";
import { Record } from "types/sfMap";
import { shadow } from "views/sfMap";

const Popup = ({ selectedPlace }: { selectedPlace: Record }) => (
  <Box
    sx={{
      width: "320px",
      bg: "white",
      p: 3,
      borderRadius: "16px",
      boxShadow: shadow,
      pointerEvents: "auto",
    }}
  >
    <Text
      as="p"
      sx={{
        color: gray.gray12,
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
        color: gray.gray11,
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

export default Popup;
