import { useEffect, useState } from "react";

// Adapted from https://scastiel.dev/a-react-hook-for-dark-theme
const useIsClientDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const getMql = () =>
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    if (isDarkMode === null) {
      setIsDarkMode(getMql().matches);
    }

    const onBrowserThemeChanged = (callback: (isDarkMode: boolean) => void) => {
      const mql = getMql();
      const mqlListener = (e: MediaQueryListEvent) => callback(e.matches);
      mql && mql.addEventListener("change", mqlListener);
      return () => mql && mql.removeEventListener("change", mqlListener);
    };

    return onBrowserThemeChanged(setIsDarkMode);
  }, [isDarkMode]);

  return isDarkMode;
};

export { useIsClientDarkMode };
