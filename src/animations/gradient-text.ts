import type { Animation } from "../data/animations";

const gradientText: Animation = {
  slug: "gradient-text",
  name: "Gradient Text",
  category: "text",
  description: "Flowing color gradient across text with customizable colors and animation speed.",
  tags: ["text", "gradient", "colorful", "flowing", "rainbow"],
  css: `.gradient-text {
  --grad-color-1: #ff6b6b;
  --grad-color-2: #feca57;
  --grad-color-3: #48dbfb;
  --grad-speed: 3s;
  --grad-text: "GRADIENT";
  font-size: 3.5rem;
  font-weight: 900;
  background: linear-gradient(
    90deg,
    var(--grad-color-1),
    var(--grad-color-2),
    var(--grad-color-3),
    var(--grad-color-1)
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-shift var(--grad-speed) ease infinite;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  html: `<span class="gradient-text">GRADIENT</span>`,
  params: [
    { name: "--grad-color-1", label: "Color 1", type: "color", default: "#ff6b6b" },
    { name: "--grad-color-2", label: "Color 2", type: "color", default: "#feca57" },
    { name: "--grad-color-3", label: "Color 3", type: "color", default: "#48dbfb" },
    { name: "--grad-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 400, height: 180, darkBg: true },
};

export default gradientText;
