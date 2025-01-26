import classNames from "classnames";
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
    <div
      className={classNames(
        "flex h-6 w-6 cursor-pointer flex-col items-center justify-center rounded-full p-0.5 text-xs shadow-sm",
        isSelected ? "bg-blue-4" : "bg-gray-1",
        isSelected
          ? "border-2 border-blue-7"
          : isStarred
          ? "border-2 border-yellow-7"
          : "border-none",
      )}
    >
      {emoji}
    </div>
  );
};

export default Pin;
