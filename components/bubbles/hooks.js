import { useUserPreferences } from "@react-three/a11y";

const useDarkModeEnabled = () => {
  const { a11yPrefersState } = useUserPreferences();
  return (
    a11yPrefersState.prefersDarkScheme ||
    // Hack to prevent flash of light content if dark mode is enabled.
    // a11yPrefersState.prefersDarkScheme defaults to false.
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
};

export { useDarkModeEnabled };
