import { useDarkModeEnabled } from "./hooks";

function Lights() {
  const darkModeEnabled = useDarkModeEnabled();
  return (
    <>
      <ambientLight intensity={0.55} />
      {darkModeEnabled ? null : (
        <directionalLight
          castShadow
          shadow-mapSize={[512, 512]}
          intensity={0.2}
          position={[10, 10, 10]}
          color="white"
        />
      )}
    </>
  );
}

export default Lights;
