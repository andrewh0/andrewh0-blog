import { useState } from "react";
import classNames from "classnames";

import BubbleArt from "components/bubbles/Scene";
import { useIsClientDarkMode } from "lib/hooks";

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
    <div className="relative flex aspect-square max-h-[640px] overflow-hidden rounded-2xl">
      <BubbleArt onCreated={handleCreated} isSceneReady={isSceneReady} />
      <div
        className={classNames(
          "pointer-events-none absolute h-full w-full touch-none select-none rounded-2xl transition-opacity duration-300 ease-in-out",
          isSceneReady ? "opacity-0" : "opacity-100",
          isDarkMode === null ? "bg-none" : "bg-gray-2",
        )}
      />
    </div>
  );
};

export default Container;
