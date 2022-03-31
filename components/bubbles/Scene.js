// Forked from https://codesandbox.io/s/object-clump-ssbdsw
// https://codesandbox.io/s/lamina-environment-maps-mih0lx
// https://codesandbox.io/s/building-live-envmaps-lwo219

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  // Stats,
  OrbitControls,
  Preload,
  AdaptiveDpr,
} from "@react-three/drei";
import { A11yUserPreferences } from "@react-three/a11y";
import styled from "styled-components";

import ClumpGroup from "./ClumpGroup";
import Pointer from "./Pointer";
import Effects from "./Effects";
import Lights from "./Lights";
import WrappedPhysics from "./WrappedPhysics";
import WrappedEnvironment from "./WrappedEnvironment";

const CanvasContainer = styled.div`
  padding: 40px;
  height: 100%;
  user-select: none;
  touch-action: none;
`;

const StyledCanvas = styled(Canvas)`
  border-radius: 16px;
  box-shadow: 0px 0.5px 0.6px hsl(var(--shadow-color) / 0.36),
    0px 1.6px 1.8px -0.8px hsl(var(--shadow-color) / 0.36),
    0px 4px 4.5px -1.7px hsl(var(--shadow-color) / 0.36),
    0px 9.8px 11px -2.5px hsl(var(--shadow-color) / 0.36);

  @media (prefers-color-scheme: dark) {
    box-shadow: none;
  }
`;

const Scene = () => {
  return (
    <CanvasContainer>
      <Suspense fallback={null}>
        <StyledCanvas
          shadows
          dpr={0.8}
          camera={{ position: [0, 0, 15], fov: 35, near: 1, far: 50 }}
          mode="concurrent"
        >
          <A11yUserPreferences>
            <Lights />
            <WrappedPhysics gravity={[0, 0, 0]} iterations={7} broadphase="SAP">
              <Pointer />
              <ClumpGroup />
            </WrappedPhysics>
            <WrappedEnvironment />
            {/* This allows the ball depth to be calculated in the right order. */}
            <Effects />
            {/* <Stats /> */}
            <OrbitControls enabled={false} />
          </A11yUserPreferences>
          <Preload all />
          <AdaptiveDpr pixelated />
        </StyledCanvas>
      </Suspense>
    </CanvasContainer>
  );
};

export default Scene;
