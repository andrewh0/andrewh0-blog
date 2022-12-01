import { Box } from "theme-ui";
import { blue, yellow } from "@radix-ui/colors";
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
  isStarred,
}: {
  type: PlaceType;
  isSelected: boolean;
  isStarred: boolean;
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
        background: isSelected ? `${blue.blue4}` : "white",
        padding: "2px",
        width: "24px",
        height: "24px",
        boxShadow: shadow,
        border: isSelected
          ? `2px solid ${blue.blue7}`
          : isStarred
          ? `2px solid ${yellow.yellow7}`
          : "none",
      }}
    >
      {emoji}
    </Box>
  );
};

export default Pin;
