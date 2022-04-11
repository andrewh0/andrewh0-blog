import { useUserPreferences } from "@react-three/a11y";
import { Physics } from "@react-three/cannon";

const WrappedPhysics = (props) => {
  const { a11yPrefersState } = useUserPreferences();
  return (
    <Physics isPaused={a11yPrefersState.prefersReducedMotion} {...props} />
  );
};

export default WrappedPhysics;
