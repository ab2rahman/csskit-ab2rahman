import type { Animation } from "../data/animations";

const dividerDiagonal: Animation = {
  slug: "divider-diagonal",
  name: "Diagonal Slide",
  category: "divider",
  description:
    "Diagonal line sliding across continuously. Modern section separator with angled motion.",
  tags: ["divider", "diagonal", "line", "slide", "modern", "angled"],
  css: `.divider-diagonal {
  --ddl-color: #ec4899;
  --ddl-speed: 3s;
  width: 240px;
  height: 40px;
  position: relative;
  overflow: hidden;
}

.divider-diagonal::before {
  content: '';
  position: absolute;
  top: 50%;
  left: -100%;
  width: 200%;
  height: 2px;
  background: repeating-linear-gradient(
    -45deg,
    var(--ddl-color),
    var(--ddl-color) 10px,
    transparent 10px,
    transparent 20px
  );
  animation: ddl-slide var(--ddl-speed) linear infinite;
}

@keyframes ddl-slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(50%); }
}`,
  html: '<div class="divider-diagonal"></div>',
  params: [
    { name: "--ddl-color", label: "Color", type: "color", default: "#ec4899" },
    { name: "--ddl-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 350, height: 100, darkBg: false },
};

export default dividerDiagonal;
