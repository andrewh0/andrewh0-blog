import {
  // DepthOfField,
  ChromaticAberration,
  EffectComposer,
  Noise,
  Vignette,
  HueSaturation,
  // BrightnessContrast,
  Bloom,
} from "@react-three/postprocessing";
import {
  KawaseBlurPass,
  Resizer,
  KernelSize,
  BlendFunction,
} from "postprocessing";
import { useDarkModeEnabled } from "./hooks";

function Effects(props) {
  const darkModeEnabled = useDarkModeEnabled();

  return (
    <EffectComposer {...props}>
      {/* Works, but is expensive. */}
      {/* <DepthOfField
        focusDistance={focusDistance} // 0.42
        focalLength={focalLength} // 0.48
        bokehScale={bokehScale} // 6
      /> */}

      {/* <BrightnessContrast
        brightness={brightness} // brightness. min: -1, max: 1
        contrast={contrast} // contrast: min -1, max: 1
      /> */}
      {darkModeEnabled ? (
        <>
          <Bloom
            kernelSize={3}
            luminanceThreshold={0}
            luminanceSmoothing={0.4}
            intensity={3}
          />
          <Bloom
            kernelSize={KernelSize.HUGE}
            luminanceThreshold={0}
            luminanceSmoothing={0}
            intensity={1}
          />
          <HueSaturation
            blendFunction={BlendFunction.NORMAL}
            saturation={0.4}
            hue={0}
          />
        </>
      ) : (
        <>
          <Bloom
            intensity={0.5}
            blurPass={KawaseBlurPass} // A blur pass.
            width={Resizer.AUTO_SIZE} // render width
            height={Resizer.AUTO_SIZE} // render height
            luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={1} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </>
      )}
      <Noise
        premultiply // enables or disables noise premultiplication
        blendFunction={BlendFunction.SCREEN} // blend mode
        opacity={0.5} // noise opacity
      />
      <ChromaticAberration offset={[0.001, 0.001]} />
      <Vignette eskil={false} offset={0.4} darkness={0.3} />
    </EffectComposer>
  );
}

export default Effects;
