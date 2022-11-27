import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3, MathUtils } from "three";
import { useDarkModeEnabled } from "./hooks";
import { BallCollider, RigidBody } from "@react-three/rapier";

const rfs = MathUtils.randFloatSpread;

function Clump({ vec = new Vector3(), size, color }) {
  const darkModeEnabled = useDarkModeEnabled();

  const api = useRef();
  useFrame((_state, delta) => {
    delta = Math.min(0.01, delta);
    const multiplier = -100 * size * size * delta;
    api.current.applyImpulse(
      vec.copy(api.current.translation()).normalize().multiply({
        x: multiplier,
        y: multiplier,
        z: multiplier,
      })
    );
  });

  return (
    <RigidBody
      angularDamping={0.5}
      linearDamping={0.8}
      friction={0.2}
      restitution={0.5}
      position={[rfs(20), -(rfs(20) + 17.5), rfs(20)]}
      ref={api}
      colliders={false}
      dispose={null}
    >
      <BallCollider args={[size]} />
      <mesh castShadow={!darkModeEnabled} receiveShadow={!darkModeEnabled}>
        <sphereGeometry args={[size, 32, 32]} />
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
      </mesh>
    </RigidBody>
  );
}

export default Clump;
