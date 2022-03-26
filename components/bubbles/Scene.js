// Forked from https://codesandbox.io/s/object-clump-ssbdsw
// https://codesandbox.io/s/lamina-environment-maps-mih0lx
// https://codesandbox.io/s/building-live-envmaps-lwo219

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  // Stats,
  OrbitControls,
} from "@react-three/drei";
import { A11yUserPreferences } from "@react-three/a11y";

import ClumpGroup from "./ClumpGroup";
import Pointer from "./Pointer";
import Effects from "./Effects";
import Lights from "./Lights";
import WrappedPhysics from "./WrappedPhysics";
import WrappedEnvironment from "./WrappedEnvironment";

const Scene = () => {
  return (
    <>
      {/* <div className="canvas-container"> */}
      <Suspense fallback={null}>
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 15], fov: 35, near: 1, far: 50 }}
          mode="concurrent"
        >
          <A11yUserPreferences>
            <Lights />
            <WrappedPhysics gravity={[0, 0, 0]} iterations={7} broadphase="SAP">
              {/* <Pointer /> */}
              <ClumpGroup />
            </WrappedPhysics>
            <WrappedEnvironment />
            {/* This allows the ball depth to be calculated in the right order. */}
            <Effects />
            {/* <Stats /> */}
            <OrbitControls enabled={true} />
          </A11yUserPreferences>
        </Canvas>
      </Suspense>
      {/* </div> */}
    </>
  );
};

export default Scene;
