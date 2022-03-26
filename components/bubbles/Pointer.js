import { useThree } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { useDrag } from "@use-gesture/react";
import { useUserPreferences } from "@react-three/a11y";

const initialPointerPosition = [-10, -10, -10];

function Pointer() {
  const { a11yPrefersState } = useUserPreferences();
  const { viewport, mouse } = useThree();
  const [, api] = useSphere(() => ({
    type: "Kinematic",
    args: [2],
    position: initialPointerPosition,
  }));

  const bind = useDrag(
    ({ active }) => {
      if (a11yPrefersState.prefersReducedMotion) {
        return;
      }
      if (active) {
        api.position.set(
          (mouse.x * viewport.width) / 2,
          (mouse.y * viewport.height) / 2,
          0
        );
      } else {
        api.position.set(...initialPointerPosition);
      }
    },
    { pointerEvents: true }
  );

  return (
    <>
      {/* Use a transparent wall to detect events. */}
      <mesh {...bind()} position={[0, 0, 0]}>
        <planeBufferGeometry args={[10, 10]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial opacity={0} alphaTest={1} />
      </mesh>
      {/* Debug */}
      {/* <mesh ref={ref}>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh> */}
    </>
  );
}

export default Pointer;
