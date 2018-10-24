import { linspace, supportsKeyframe, supportsAnimate } from "./utils";

const canAnimate = supportsAnimate();
const prefix = supportsKeyframe();

function distributeFrames(keyframes) {
  const numOfKeyframes = keyframes.length;

  console.log(linspace(0, 100, numOfKeyframes));
}

function parseKeyframes(keyframes) {
  return `
    @-${prefix}-keyframes animName {

    }
  `;
}

function animate(keyframes, options) {
  parseKeyframes(keyframes, options);
  return {
    play() {
      console.log("play");
    },
    pause() {
      console.log("pause");
    }
  };
}

export function animateWrapper(el) {
  el.animate = animate;
  return el;
}
