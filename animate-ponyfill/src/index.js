import { animateWrapper } from "./animate";

const keyframes = [
  { opacity: 0, color: "#fff", offset: 0 },
  { opacity: 1, color: "#999", offset: 0.2 },
  { opacity: 1, color: "#333", offset: 0.9 },
  { opacity: 0, color: "#000", offset: 1 }
];

const options = {
  duration: 9000,
  delay: 9000,
  easing: "ease-out"
};

const elementToAnimate = animateWrapper(
  document.getElementById("animation-el")
);
const animation = elementToAnimate.animate(keyframes, options);
animation.play();
