import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useDrag } from "@use-gesture/react";
import { BallCollider, RigidBody } from "@react-three/rapier";

const initialPointerPosition = [-10, -10, -10];
const initialPositionVec = new THREE.Vector3(...initialPointerPosition);
const POINTER_SIZE = 2;

function Pointer() {
  const { viewport, mouse } = useThree();
  const ref = useRef();
  const bind = useDrag(
    ({ active }) => {
      if (active) {
        const vec = new THREE.Vector3(
          (mouse.x * viewport.width) / 2,
          (mouse.y * viewport.height) / 2,
          0
        );
        // Using setNextKinematicTranslation with a lerp'd vector
        // was causing simulation to drop frames.
        ref.current.setTranslation(vec);
        return;
      }
      // Move the pointer ball out of the way on mouse up.
      // (Not using setNextKinematicTranslation to avoid applying force to balls.)
      ref.current.setTranslation(initialPositionVec);
    },
    { pointerEvents: true }
  );

  return (
    <>
      {/* Use a transparent wall to detect drag events. */}
      <mesh {...bind()} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial opacity={0} alphaTest={1} />
      </mesh>
      <RigidBody
        position={initialPointerPosition}
        type="kinematicPosition"
        colliders={false}
        ref={ref}
      >
        {/* Uncomment to debug */}
        {/* <mesh ref={ref} scale={POINTER_SIZE}>
          <sphereBufferGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="red" />
        </mesh> */}
        <BallCollider args={[POINTER_SIZE]} />
      </RigidBody>
    </>
  );
}

export default Pointer;
