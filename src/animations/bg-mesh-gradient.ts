import type { Animation } from "../data/animations";

const bgMeshGradient: Animation = {
  slug: "bg-mesh-gradient",
  name: "Mesh Gradient",
  category: "background",
  description:
    "Slowly morphing multi-color mesh gradient. Modern, organic background effect with smooth color transitions.",
  tags: ["background", "gradient", "mesh", "morph", "color", "modern"],
  css: `.bg-mesh-gradient {
  --bmg-c1: #3b82f6;
  --bmg-c2: #8b5cf6;
  --bmg-c3: #06b6d4;
  --bmg-speed: 8s;
  width: 300px;
  height: 200px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--bmg-c1), var(--bmg-c2), var(--bmg-c3), var(--bmg-c1));
  background-size: 400% 400%;
  animation: bmg-morph var(--bmg-speed) ease infinite;
}

@keyframes bmg-morph {
  0% { background-position: 0% 50%; }
  25% { background-position: 100% 50%; }
  50% { background-position: 100% 0%; }
  75% { background-position: 0% 100%; }
  100% { background-position: 0% 50%; }
}`,
  html: '<div class="bg-mesh-gradient"></div>',
  params: [
    { name: "--bmg-c1", label: "Color 1", type: "color", default: "#3b82f6" },
    { name: "--bmg-c2", label: "Color 2", type: "color", default: "#8b5cf6" },
    { name: "--bmg-c3", label: "Color 3", type: "color", default: "#06b6d4" },
    { name: "--bmg-speed", label: "Speed", type: "duration", default: 8, min: 3, max: 20, step: 1, unit: "s" },
  ],
  preview: { width: 350, height: 220, darkBg: true },
};

export default bgMeshGradient;
