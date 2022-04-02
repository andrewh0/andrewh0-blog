// Forked from https://codesandbox.io/s/object-clump-ssbdsw
// https://codesandbox.io/s/lamina-environment-maps-mih0lx
// https://codesandbox.io/s/building-live-envmaps-lwo219

import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
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
import { useDarkModeEnabled } from "./hooks";

const CanvasContainer = styled.div`
  padding: 40px;
  height: 100%;
  user-select: none;
  touch-action: none;

  @media screen and (max-width: 568px) {
    padding: 16px;
  }
`;

const StyledCanvas = styled(Canvas)`
  border-radius: 16px;
  box-shadow: 0px 0.5px 0.6px hsl(var(--shadow-color) / 0.36),
    0px 1.6px 1.8px -0.8px hsl(var(--shadow-color) / 0.36),
    0px 4px 4.5px -1.7px hsl(var(--shadow-color) / 0.36),
    0px 9.8px 11px -2.5px hsl(var(--shadow-color) / 0.36);

  background-image: ${(props) =>
    props.isDarkModeEnabled ? `url("/bg-purple.jpg")` : `url("/bg-blue.jpg")`};
  background-size: cover;

  @media (prefers-color-scheme: dark) {
    box-shadow: none;
  }
`;

function takeScreenshot(gl) {
  gl.domElement.toBlob(
    (blob) => {
      const anchorEl = document.createElement("a");
      const url = URL.createObjectURL(blob);
      anchorEl.href = url;
      anchorEl.download = "canvas.jpg";
      anchorEl.click();
    },
    "image/jpg",
    1.0
  );
}

// Set gl on the state so that it can be used to
// take a screenshot.
// Based on https://github.com/pmndrs/react-three-fiber/discussions/592
export const SceneExposer = ({ onGlChange }) => {
  const { gl } = useThree();
  useEffect(() => {
    onGlChange(gl);
  }, [gl, onGlChange]);

  return null;
};

const Scene = () => {
  const isDarkModeEnabled = useDarkModeEnabled();
  const [gl, setGl] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    takeScreenshot(gl);
  };
  return (
    <CanvasContainer>
      <Suspense fallback={null}>
        <StyledCanvas
          shadows
          dpr={0.8}
          camera={{ position: [0, 0, 15], fov: 35, near: 1, far: 50 }}
          mode="concurrent"
          isDarkModeEnabled={isDarkModeEnabled}
          gl={{
            antialias: false,
            stencil: false,
            depth: false,
            // Needed to be able to capture screenshots
            // preserveDrawingBuffer: true,
          }}
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
          {/* <SceneExposer onGlChange={(gl) => setGl(gl)} /> */}
        </StyledCanvas>
      </Suspense>
      {/* <button onClick={handleClick}>Download</button> */}
    </CanvasContainer>
  );
};

export default Scene;
