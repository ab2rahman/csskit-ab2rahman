import type { Animation } from "../data/animations";

const gradientShift: Animation = {
  slug: "gradient-shift",
  name: "Gradient Shift",
  category: "background",
  description: "Slowly shifting gradient background. Customize colors and animation speed.",
  tags: ["background", "gradient", "colorful", "ambient", "smooth"],
  css: `.gradient-shift {
  --gs-color-1: #0f0c29;
  --gs-color-2: #302b63;
  --gs-color-3: #24243e;
  --gs-speed: 8s;
  width: 100%;
  height: 200px;
  background: linear-gradient(
    -45deg,
    var(--gs-color-1),
    var(--gs-color-2),
    var(--gs-color-3),
    var(--gs-color-1)
  );
  background-size: 400% 400%;
  animation: gs-shift var(--gs-speed) ease infinite;
  border-radius: 12px;
}

@keyframes gs-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  html: `<div class="gradient-shift"></div>`,
  params: [
    { name: "--gs-color-1", label: "Color 1", type: "color", default: "#0f0c29" },
    { name: "--gs-color-2", label: "Color 2", type: "color", default: "#302b63" },
    { name: "--gs-color-3", label: "Color 3", type: "color", default: "#24243e" },
    { name: "--gs-speed", label: "Speed", type: "duration", default: 8, min: 2, max: 20, step: 1, unit: "s" },
  ],
  preview: { width: 400, height: 200, darkBg: true },
};

export default gradientShift;
