import type { Animation } from "../data/animations";

const entranceMaskReveal: Animation = {
  slug: "entrance-mask-reveal",
  name: "Mask Reveal",
  category: "entrance",
  description:
    "Circular mask expands to reveal content. Spotlight-style entrance with clip-path animation.",
  tags: ["entrance", "mask", "reveal", "circle", "clip-path", "spotlight"],
  css: `.entrance-mask-reveal {
  --emr-color: #ec4899;
  --emr-speed: 0.8s;
  width: 120px;
  height: 80px;
  background: var(--emr-color);
  border-radius: 12px;
  clip-path: circle(0% at 50% 50%);
  animation: emr-reveal var(--emr-speed) ease-out forwards;
}

@keyframes emr-reveal {
  0% {
    clip-path: circle(0% at 50% 50%);
  }
  100% {
    clip-path: circle(75% at 50% 50%);
  }
}`,
  html: '<div class="entrance-mask-reveal"></div>',
  params: [
    { name: "--emr-color", label: "Color", type: "color", default: "#ec4899" },
    { name: "--emr-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default entranceMaskReveal;
