import { Environment, Lightformer } from "@react-three/drei";
import { BackSide } from "three";
import { LayerMaterial, Color, Depth } from "lamina";
import { useDarkModeEnabled } from "./hooks";

const WrappedEnvironment = () => {
  const darkModeEnabled = useDarkModeEnabled();
  return (
    <Environment background resolution={32}>
      {darkModeEnabled ? (
        <mesh scale={100}>
          <sphereGeometry args={[1, 16, 16]} />
          <LayerMaterial side={BackSide}>
            <Color color="#34006f" alpha={1} mode="normal" />
            <Depth
              colorA="#787878"
              colorB="#150422"
              alpha={1}
              mode="normal"
              near={0}
              far={270}
              origin={[0, 150, 100]}
            />
          </LayerMaterial>
        </mesh>
      ) : (
        <>
          <Lightformer
            intensity={3}
            rotation-x={Math.PI / 2}
            position={[0, 30, 0]}
            scale={[100, 100, 1]}
            target={[0, 0, 0]}
          />
          <mesh scale={100}>
            <sphereGeometry args={[1, 16, 16]} />
            <LayerMaterial side={BackSide}>
              <Color color="#2f84c0" alpha={1} mode="normal" />
              <Depth
                colorA="#fff"
                colorB="#000"
                alpha={0.3}
                mode="normal"
                near={0}
                far={300}
                origin={[0, 100, 150]}
              />
            </LayerMaterial>
          </mesh>
        </>
      )}
    </Environment>
  );
};

export default WrappedEnvironment;
