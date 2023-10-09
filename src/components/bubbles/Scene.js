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
import { Physics } from "@react-three/rapier";
import classNames from "classnames";

import { useIsClientDarkMode } from "lib/hooks";
import BallGroup from "./BallGroup";
import Pointer from "./Pointer";
import Effects from "./Effects";
import Lights from "./Lights";
import WrappedEnvironment from "./WrappedEnvironment";

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
    1.0,
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

const Scene = ({ onCreated, isSceneReady }) => {
  const isDarkMode = useIsClientDarkMode();
  const [gl, setGl] = useState(null);
  const handleClick = (e) => {
    e.preventDefault();
    takeScreenshot(gl);
  };
  return (
    <div
      className={classNames(
        "absolute h-full w-full cursor-pointer touch-none select-none rounded-2xl transition-opacity duration-300 ease-in-out",
        isSceneReady ? "opacity-100" : "opacity-0",
        isDarkMode === null ? "bg-none" : "bg-gray-2",
      )}
    >
      <Suspense fallback={null}>
        <Canvas
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
          // rounded-2xl is needed because rounded corners weren't showing up on mobile.
          className="rounded-2xl"
        >
          <A11yUserPreferences>
            <Lights />
            <Physics gravity={[0, 0, 0]}>
              <Pointer />
              <BallGroup />
            </Physics>
            <WrappedEnvironment />
            {/* This allows the ball depth to be calculated in the right order. */}
            <Effects />
            {/* <Stats /> */}
          </A11yUserPreferences>
          <AdaptiveDpr pixelated />
          {/* <SceneExposer onGlChange={(gl) => setGl(gl)} /> */}
        </Canvas>
      </Suspense>
      {/* <button onClick={handleClick}>Download</button> */}
    </div>
  );
};

export default Scene;
