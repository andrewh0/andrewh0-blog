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
import { useControls, folder } from "leva";
import {
  KawaseBlurPass,
  Resizer,
  KernelSize,
  BlendFunction,
} from "postprocessing";
import { useDarkModeEnabled } from "./hooks";

function Effects(props) {
  const {
    // focusDistance,
    // focalLength,
    // bokehScale,
    // hue,
    // saturation,
    // brightness,
    // contrast,
    noiseAmt,
    premultiply,
    blendFunc,
    bloomIntensity,
    luminanceThreshold,
    luminanceSmoothing,
  } = useControls({
    noise: folder({
      noiseAmt: { value: 0.5, min: 0, max: 1 },
      premultiply: true,
      blendFunc: {
        value: BlendFunction.SCREEN,
        options: [
          BlendFunction.SKIP,
          BlendFunction.ADD,
          BlendFunction.ALPHA,
          BlendFunction.AVERAGE,
          BlendFunction.COLOR_BURN,
          BlendFunction.COLOR_DODGE,
          BlendFunction.DARKEN,
          BlendFunction.DIFFERENCE,
          BlendFunction.EXCLUSION,
          BlendFunction.LIGHTEN,
          BlendFunction.MULTIPLY,
          BlendFunction.DIVIDE,
          BlendFunction.NEGATION,
          BlendFunction.NORMAL,
          BlendFunction.OVERLAY,
          BlendFunction.REFLECT,
          BlendFunction.SCREEN,
          BlendFunction.SOFT_LIGHT,
          BlendFunction.SUBTRACT,
        ],
      },
    }),
    focusDistance: { value: 0.42, min: 0, max: 1, step: 0.01 },
    focalLength: { value: 0.48, min: 0, max: 1, step: 0.01 },
    bokehScale: { value: 2, min: 1, max: 10, step: 1 },
    color: folder({
      hue: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      saturation: { value: 0, min: -Math.PI, max: Math.PI, step: 0.01 },
      brightness: { value: 0, min: -1, max: 1, step: 0.1 },
      contrast: { value: 0, min: -1, max: 1, step: 0.1 },
    }),
    bloom: folder({
      luminanceThreshold: { value: 0, min: 0, max: 1 },
      luminanceSmoothing: { value: 1, min: 0, max: 1 },
      bloomIntensity: { value: 0.5, min: 0, max: 20 },
    }),
  });

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
            intensity={bloomIntensity}
            blurPass={KawaseBlurPass} // A blur pass.
            width={Resizer.AUTO_SIZE} // render width
            height={Resizer.AUTO_SIZE} // render height
            // kernelSize={KernelSize.LARGE} // blur kernel size
            luminanceThreshold={luminanceThreshold} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={luminanceSmoothing} // smoothness of the luminance threshold. Range is [0, 1]
          />
        </>
      )}
      <Noise
        premultiply={premultiply} // enables or disables noise premultiplication
        blendFunction={blendFunc} // blend mode
        opacity={noiseAmt}
      />
      <ChromaticAberration offset={[0.001, 0.001]} />
      <Vignette eskil={false} offset={0.4} darkness={0.3} />
    </EffectComposer>
  );
}

export default Effects;
