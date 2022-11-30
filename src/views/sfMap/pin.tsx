import { Box } from "theme-ui";
import { blue } from "@radix-ui/colors";
import { shadow } from "views/sfMap";
import { PlaceType } from "types/sfMap";

const pinMap = {
  restaurant: "🍽️",
  cafe: "☕",
  dessert: "🍦",
  bar: "🍸",
  activity: "🎪",
  bakery: "🥖",
  other: "📍",
};

const Pin = ({
  type,
  isSelected,
}: {
  type: PlaceType;
  isSelected: boolean;
}) => {
  const emoji = pinMap[type] || pinMap["other"];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        fontSize: "12px",
        borderRadius: "100%",
        background: "white",
        padding: "2px",
        width: "24px",
        height: "24px",
        boxShadow: shadow,
        border: isSelected ? `2px solid ${blue.blue7}` : "none",
      }}
    >
      {emoji}
    </Box>
  );
};

export default Pin;
