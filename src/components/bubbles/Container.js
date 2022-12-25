import { useState } from "react";

import { Box } from "theme-ui";
import BubbleArt from "components/bubbles/Scene";
import { useIsClientDarkMode } from "hooks";

/*
There are two different cases where we'll need a placeholder:
- Placeholder while doing dynamic import on index page.
- Placeholder while r3f canvas has not been created.
*/
const Container = () => {
  const [isSceneReady, setIsSceneReady] = useState(false);
  const isDarkMode = useIsClientDarkMode();

  const handleCreated = () => {
    setIsSceneReady(true);
  };

  return (
    <Box
      css={`
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
        max-height: 800px;
        border-radius: 16px;
        overflow: hidden;
      `}
    >
      <BubbleArt onCreated={handleCreated} isSceneReady={isSceneReady} />
      <Box
        css={`
          pointer-events: none;

          position: absolute;
          user-select: none;
          touch-action: none;
          height: 100%;
          width: 100%;

          transition: opacity 300ms ease-in-out;
          opacity: ${isSceneReady ? 0 : 1};
        `}
        sx={{
          bg: isDarkMode === null ? "none" : "gray2",
        }}
      />
    </Box>
  );
};

export default Container;
