import type { Animation } from "../data/animations";

const textGradientShift: Animation = {
  slug: "text-gradient-shift",
  name: "Gradient Shift",
  category: "text",
  description:
    "Animated gradient colors shift continuously across the text. Eye-catching rainbow or duo-tone text effect.",
  tags: ["text", "gradient", "shift", "color", "rainbow", "animated"],
  css: `.text-gradient-shift {
  --tgs-color1: #f43f5e;
  --tgs-color2: #8b5cf6;
  --tgs-speed: 3s;
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(90deg, var(--tgs-color1), var(--tgs-color2), var(--tgs-color1));
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: tgs-shift var(--tgs-speed) linear infinite;
}

@keyframes tgs-shift {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}`,
  html: '<div class="text-gradient-shift">Gradient</div>',
  params: [
    { name: "--tgs-color1", label: "Color 1", type: "color", default: "#f43f5e" },
    { name: "--tgs-color2", label: "Color 2", type: "color", default: "#8b5cf6" },
    { name: "--tgs-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default textGradientShift;
