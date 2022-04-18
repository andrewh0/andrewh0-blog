import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useUserPreferences } from "@react-three/a11y";
import Clump from "./Clump";

const colors = ["#C2A6E3", "#E7D9A7", "#DEA4A3", "#A0E2E9", "#C0E4AA"];
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
      {sizes.map((size) =>
        colors.map((color) => (
          <Clump key={`${size}${color}`} size={size} color={color} />
        ))
      )}
    </group>
  );
}

export default ClumpGroup;
