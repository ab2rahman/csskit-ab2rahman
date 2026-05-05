import type { Animation } from "../data/animations";

const entranceBlur: Animation = {
  slug: "entrance-blur",
  name: "Blur In",
  category: "entrance",
  description:
    "Element sharpens from blur into clear focus. Cinematic reveal effect for content sections.",
  tags: ["entrance", "blur", "focus", "sharp", "cinematic", "reveal"],
  css: `.entrance-blur {
  --ebl-color: #14b8a6;
  --ebl-speed: 0.8s;
  width: 120px;
  height: 60px;
  background: var(--ebl-color);
  border-radius: 12px;
  filter: blur(20px);
  opacity: 0;
  animation: ebl-focus var(--ebl-speed) ease-out forwards;
}

@keyframes ebl-focus {
  0% {
    filter: blur(20px);
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    filter: blur(0px);
    opacity: 1;
    transform: scale(1);
  }
}`,
  html: '<div class="entrance-blur"></div>',
  params: [
    { name: "--ebl-color", label: "Color", type: "color", default: "#14b8a6" },
    { name: "--ebl-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default entranceBlur;
