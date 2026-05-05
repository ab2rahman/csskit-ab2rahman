import type { Animation } from "../data/animations";

const textBlurFocus: Animation = {
  slug: "text-blur-focus",
  name: "Blur to Focus",
  category: "text",
  description:
    "Text starts completely blurry and smoothly sharpens into focus. Cinematic reveal effect for headings and titles.",
  tags: ["text", "blur", "focus", "reveal", "cinematic", "sharpen"],
  css: `.text-blur-focus {
  --tbf-color: #1e293b;
  --tbf-speed: 1.5s;
  color: var(--tbf-color);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  filter: blur(12px);
  opacity: 0;
  animation: tbf-focus var(--tbf-speed) ease-out forwards;
}

@keyframes tbf-focus {
  0% {
    filter: blur(12px);
    opacity: 0;
    transform: scale(1.05);
  }
  50% {
    opacity: 0.6;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
    transform: scale(1);
  }
}`,
  html: '<div class="text-blur-focus">Focus</div>',
  params: [
    { name: "--tbf-color", label: "Color", type: "color", default: "#1e293b" },
    { name: "--tbf-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 4, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default textBlurFocus;
