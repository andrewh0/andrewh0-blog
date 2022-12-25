// Forked from https://codesandbox.io/s/object-clump-ssbdsw
// See also:
// https://codesandbox.io/s/bestservedbold-christmas-baubles-zxpv7?file=/src/App.js
// https://codesandbox.io/s/lamina-environment-maps-mih0lx
// https://codesandbox.io/s/building-live-envmaps-lwo219
// Original: https://dribbble.com/shots/5708399-Christmas-Collisions
// By: 𝔅𝔢𝔰𝔱𝔖𝔢𝔯𝔳𝔢𝔡𝔅𝔬𝔩𝔡 @bstsrvdbld

import { Suspense, useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { AdaptiveDpr } from "@react-three/drei";
import { A11yUserPreferences } from "@react-three/a11y";
import { Box } from "theme-ui";
import styled from "@emotion/styled";

import BallGroup from "./BallGroup";
import Pointer from "./Pointer";
import Effects from "./Effects";
import Lights from "./Lights";
import WrappedPhysics from "./WrappedPhysics";
import WrappedEnvironment from "./WrappedEnvironment";

/*
I've tried different ways to make the canvas load less jarring,
but using a background and loading a placeholder image is the best
I can do so far.

Also tried
- using Suspense fallbacks
- adding a shimmer effect

Firefox seems fine, but Chrome and Safari show a blank screen for a
long time while waiting for the canvas to render.

*/

const StyledCanvas = styled(Canvas)`
  border-radius: 16px;
  background-color: #4ba2cb;

  @media (prefers-color-scheme: dark) {
    box-shadow: none;
    background-color: #201c31;
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

const Scene = ({ onCreated, transitionIn }) => {
  const [gl, setGl] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    takeScreenshot(gl);
  };
  return (
    <Box
      css={`
        position: absolute;
        user-select: none;
        touch-action: none;
        height: 100%;
        width: 100%;
        transition: opacity 300ms ease-in-out;
        opacity: ${transitionIn ? 1 : 0};
      `}
    >
      <Suspense fallback={null}>
        <StyledCanvas
          shadows
          dpr={1}
          camera={{ position: [0, 0, 15], fov: 35, near: 1, far: 50 }}
          performance={{
            min: 0.7,
            debounce: 200,
          }}
          gl={{
            antialias: false,
            stencil: false,
            depth: false,
            // Needed to be able to capture screenshots
            // preserveDrawingBuffer: true,
          }}
          onCreated={onCreated}
        >
          <A11yUserPreferences>
            <Lights />
            <WrappedPhysics gravity={[0, 0, 0]}>
              <Pointer />
              <BallGroup />
            </WrappedPhysics>
            <WrappedEnvironment />
            {/* This allows the ball depth to be calculated in the right order. */}
            <Effects />
            {/* <Stats /> */}
          </A11yUserPreferences>
          <AdaptiveDpr pixelated />
          {/* <SceneExposer onGlChange={(gl) => setGl(gl)} /> */}
        </StyledCanvas>
      </Suspense>
      {/* <button onClick={handleClick}>Download</button> */}
    </Box>
  );
};

export default Scene;
