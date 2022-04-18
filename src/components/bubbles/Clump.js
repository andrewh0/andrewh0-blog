import { useFrame } from "@react-three/fiber";
import { useSphere } from "@react-three/cannon";
import { Matrix4, Vector3, MathUtils } from "three";
import { useDarkModeEnabled } from "./hooks";

const rfs = MathUtils.randFloatSpread;
const ballCount = 1;

function Clump({ mat = new Matrix4(), vec = new Vector3(), size, color }) {
  const darkModeEnabled = useDarkModeEnabled();

  const [ref, api] = useSphere(() => ({
    args: [size],
    mass: size,
    angularDamping: 0.1,
    linearDamping: 0.65,
    position: [rfs(20), -(rfs(20) + 17.5), rfs(20)],
  }));

  useFrame((_state) => {
    for (let i = 0; i < ballCount; i++) {
      // Get current whereabouts of the instanced sphere
      ref.current.getMatrixAt(i, mat);
      // Normalize the position and multiply by a negative force.
      // This is enough to drive it towards the center-point.
      api.at(i).applyForce(
        vec
          .setFromMatrixPosition(mat)
          .normalize()
          .multiplyScalar(-25 * size)
          .toArray(),
        [0, 0, 0]
      );
    }
  });

  return (
    <instancedMesh
      ref={ref}
      castShadow={!darkModeEnabled}
      receiveShadow={!darkModeEnabled}
      args={[null, null, ballCount]}
    >
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
    </instancedMesh>
  );
}

export default Clump;
