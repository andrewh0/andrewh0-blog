import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import InstancedBalls from "./InstancedBalls";

const colors = ["#C2A6E3", "#E7D9A7", "#DEA4A3", "#A0E2E9", "#C0E4AA"];

function BallGroup() {
  const clumpRef = useRef();

  useFrame(({ clock }) => {
    clumpRef.current.position.y += Math.sin(clock.elapsedTime) / 400;
    clumpRef.current.rotation.y = clock.elapsedTime / 24;
  });
  return (
    <group ref={clumpRef}>
      {colors.map((c) => (
        <InstancedBalls key={c} color={c} />
      ))}
    </group>
  );
}

export default BallGroup;
