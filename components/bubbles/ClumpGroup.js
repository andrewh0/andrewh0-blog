import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useUserPreferences } from "@react-three/a11y";
import Clump from "./Clump";

const colors = ["#B37DFF", "#FFD666", "#E86D60", "#66D6E8", "#94FF70"];
const sizes = [0.75, 0.5, 0.25];

function ClumpGroup() {
  const clumpRef = useRef();
  const { a11yPrefersState } = useUserPreferences();

  useFrame(({ clock }) => {
    if (!a11yPrefersState.prefersReducedMotion) {
      clumpRef.current.position.y += Math.sin(clock.elapsedTime) / 400;
      clumpRef.current.rotation.y = clock.elapsedTime / 24;
    }
  });
  return (
    <group ref={clumpRef}>
      <Clump size={sizes[0]} color={colors[0]} />
    </group>
    // <group ref={clumpRef}>
    //   {sizes.map((size) =>
    //     colors.map((color) => (
    //       <Clump key={`${size}${color}`} size={size} color={color} />
    //     ))
    //   )}
    // </group>
  );
}

export default ClumpGroup;
