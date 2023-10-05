import { Box, Text, Link as ThemeLink } from "theme-ui";
import Link from "next/link";
import { gray } from "@radix-ui/colors";
import { Record } from "types/sfMap";
import { Popup } from "views/sfMap";

const Heading = ({ selectedPlace }: { selectedPlace: Record | null }) => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      zIndex: 9,
      padding: [3, 4],
      height: "100%",
      width: "100%",
      pointerEvents: "none",
      display: "flex",
      flexDirection: "column",
      justifyContent: ["space-between", "flex-start"],
    }}
  >
    <Box>
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
          color: gray.gray11,
          fontFamily: "body",
          lineHeight: "heading",
          fontWeight: 500,
          fontSize: [2, 3],
          letterSpacing: [0, "-0.03em"],
          mb: [3, 4],
          pointerEvents: "auto",
        }}
      >
        made by{" "}
        <Link href="/" passHref legacyBehavior>
          <ThemeLink
            sx={{
              color: gray.gray11,
            }}
          >
            Andrew
          </ThemeLink>
        </Link>
      </Text>
    </Box>
    {selectedPlace && <Popup selectedPlace={selectedPlace} />}
  </Box>
);

export default Heading;
