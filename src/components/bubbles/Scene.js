// Forked from https://codesandbox.io/s/object-clump-ssbdsw
// https://codesandbox.io/s/lamina-environment-maps-mih0lx
// https://codesandbox.io/s/building-live-envmaps-lwo219
// Original: https://dribbble.com/shots/5708399-Christmas-Collisions
// By: 𝔅𝔢𝔰𝔱𝔖𝔢𝔯𝔳𝔢𝔡𝔅𝔬𝔩𝔡 @bstsrvdbld

import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  // Stats,
  OrbitControls,
  Preload,
  AdaptiveDpr,
} from "@react-three/drei";
import { A11yUserPreferences } from "@react-three/a11y";
import { Box } from "theme-ui";
import styled from "@emotion/styled";

import ClumpGroup from "./ClumpGroup";
import Pointer from "./Pointer";
import Effects from "./Effects";
import Lights from "./Lights";
import WrappedPhysics from "./WrappedPhysics";
import WrappedEnvironment from "./WrappedEnvironment";
import { useDarkModeEnabled } from "./hooks";

const StyledCanvas = styled(Canvas)`
  border-radius: 16px;
  box-shadow: 0px 0.5px 0.6px hsl(var(--shadow-color) / 0.36),
    0px 1.6px 1.8px -0.8px hsl(var(--shadow-color) / 0.36),
    0px 4px 4.5px -1.7px hsl(var(--shadow-color) / 0.36),
    0px 9.8px 11px -2.5px hsl(var(--shadow-color) / 0.36);

  background-color: #4ba2cb;

  @media (prefers-color-scheme: dark) {
    box-shadow: none;
    background-color: #201c31;
  }
  background-image: ${(props) =>
    props.isDarkModeEnabled ? `url("/bg-purple.jpg")` : `url("/bg-blue.jpg")`};
  background-size: cover;
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
    <Box
      css={`
        user-select: none;
        touch-action: none;
        // This is weird. Not sure why this needs to be < 100%;
        // For canvas to resize vertically correctly.
        height: 50%;
        width: 100%;
        flex: 1;
      `}
    >
      <Suspense fallback={null}>
        <StyledCanvas
          shadows
          dpr={1}
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
    </Box>
  );
};

export default Scene;
