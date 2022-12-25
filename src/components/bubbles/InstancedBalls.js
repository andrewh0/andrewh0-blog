import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { InstancedRigidBodies, BallCollider } from "@react-three/rapier";
import { Vector3, MathUtils } from "three";

import { useDarkModeEnabled } from "./hooks";

const COUNT = 5;
const ATTRACTION_AMT = 0.7;
const rfs = MathUtils.randFloatSpread;

const getRandomIndex = (arr) => {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

const InstancedBalls = ({ color }) => {
  const darkModeEnabled = useDarkModeEnabled();
  const instancedApi = useRef(null);
  const positions = Array.from({ length: COUNT }, () => [
    rfs(20),
    -(rfs(20) + 17.5),
    rfs(20),
  ]);

  const scales = Array.from({ length: COUNT }, () => {
    const size = getRandomIndex([0.75, 0.5, 0.25]);
    return [size, size, size];
  });

  useFrame((_state, delta) => {
    if (instancedApi.current) {
      instancedApi.current.forEach((api) => {
        delta = Math.min(0.01, delta);
        const multiplier = -100 * api.mass() * ATTRACTION_AMT * delta;
        api.applyImpulse(
          new Vector3().copy(api.translation()).normalize().multiply({
            x: multiplier,
            y: multiplier,
            z: multiplier,
          })
        );
      });
    }
  });

  return (
    <InstancedRigidBodies
      angularDamping={0.5}
      linearDamping={0.8}
      friction={0.2}
      restitution={0.5}
      positions={positions}
      ref={instancedApi}
      scales={scales}
      colliders={false}
      dispose={null}
    >
      <instancedMesh
        args={[undefined, undefined, COUNT]}
        castShadow={!darkModeEnabled}
        receiveShadow={!darkModeEnabled}
      >
        <sphereGeometry args={[1, 32, 32]} />
        {darkModeEnabled ? (
          <meshStandardMaterial
            color={color}
            envMapIntensity={0.25}
            emissive="black"
          />
        ) : (
          <meshStandardMaterial
            color={color}
            envMapIntensity={0.25}
            metalness={0.16}
            emissive="black"
            roughness={0.43}
          />
        )}
        <BallCollider args={[1]} />
      </instancedMesh>
    </InstancedRigidBodies>
  );
};

export default InstancedBalls;
