import { useState } from "react";

import { Box } from "theme-ui";
import BubbleArt from "components/bubbles/Scene";

/*
There are two different cases where we'll need a placeholder:
- Placeholder while doing dynamic import on index page.
- Placeholder while r3f canvas has not been created.
*/
const Container = () => {
  const [transitionIn, setTransitionIn] = useState(false);

  const handleCreated = () => {
    setTransitionIn(true);
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

        transition: opacity 300ms ease-in-out;
        opacity: ${transitionIn ? 1 : 0.1};
      `}
    >
      <BubbleArt onCreated={handleCreated} transitionIn={transitionIn} />
      <Box
        css={`
          pointer-events: none;

          position: absolute;
          user-select: none;
          touch-action: none;
          height: 100%;
          width: 100%;

          transition: opacity 300ms ease-in-out;
          background-color: black;
          opacity: ${transitionIn ? 0 : 1};
        `}
      />
    </Box>
  );
};

export default Container;
