import { useUserPreferences } from "@react-three/a11y";
import { Physics } from "@react-three/rapier";

const WrappedPhysics = (props) => {
  const { a11yPrefersState } = useUserPreferences();
  return <Physics paused={a11yPrefersState.prefersReducedMotion} {...props} />;
};

export default WrappedPhysics;
