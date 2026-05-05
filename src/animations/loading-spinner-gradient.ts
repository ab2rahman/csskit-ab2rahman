import type { Animation } from "../data/animations";

const loadingSpinnerGradient: Animation = {
  slug: "loading-spinner-gradient",
  name: "Gradient Spinner",
  category: "loading",
  description:
    "Spinner with a gradient trail effect. Smooth rotating arc with color fade for modern loading.",
  tags: ["loading", "spinner", "gradient", "trail", "arc", "modern"],
  css: `.loading-spinner-gradient {
  --lsg-color: #3b82f6;
  --lsg-size: 40px;
  --lsg-speed: 1s;
  width: var(--lsg-size);
  height: var(--lsg-size);
  border-radius: 50%;
  background: conic-gradient(from 0deg, transparent 0%, transparent 70%, var(--lsg-color) 100%);
  animation: lsg-spin var(--lsg-speed) linear infinite;
  position: relative;
}

.loading-spinner-gradient::after {
  content: '';
  position: absolute;
  inset: 4px;
  background: #ffffff;
  border-radius: 50%;
}

@keyframes lsg-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
  html: '<div class="loading-spinner-gradient"></div>',
  params: [
    { name: "--lsg-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--lsg-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingSpinnerGradient;
