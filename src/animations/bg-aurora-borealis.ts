import type { Animation } from "../data/animations";

const bgAuroraBorealis: Animation = {
  slug: "bg-aurora-borealis",
  name: "Aurora Borealis",
  category: "background",
  description:
    "Northern lights flowing effect with multiple color bands. Ethereal, nature-inspired animated background.",
  tags: ["background", "aurora", "borealis", "northern lights", "flow", "nature"],
  css: `.bg-aurora-borealis {
  --bab-color1: #00ff87;
  --bab-color2: #60efff;
  --bab-color3: #7b2ff7;
  --bab-speed: 8s;
  width: 300px;
  height: 150px;
  position: relative;
  overflow: hidden;
  background: #0a0a1a;
  border-radius: 8px;
}

.bg-aurora-borealis::before,
.bg-aurora-borealis::after {
  content: '';
  position: absolute;
  width: 200%;
  height: 60%;
  top: 10%;
  left: -50%;
  filter: blur(40px);
  opacity: 0.6;
  animation: bab-flow var(--bab-speed) ease-in-out infinite alternate;
}

.bg-aurora-borealis::before {
  background: linear-gradient(90deg, var(--bab-color1), var(--bab-color2), var(--bab-color3));
}

.bg-aurora-borealis::after {
  background: linear-gradient(90deg, var(--bab-color3), var(--bab-color1), var(--bab-color2));
  top: 30%;
  animation-delay: calc(var(--bab-speed) * -0.5);
  opacity: 0.4;
}

@keyframes bab-flow {
  0% { transform: translateX(-20%) skewX(-5deg); }
  100% { transform: translateX(20%) skewX(5deg); }
}`,
  html: '<div class="bg-aurora-borealis"></div>',
  params: [
    { name: "--bab-color1", label: "Color 1", type: "color", default: "#00ff87" },
    { name: "--bab-color2", label: "Color 2", type: "color", default: "#60efff" },
    { name: "--bab-color3", label: "Color 3", type: "color", default: "#7b2ff7" },
    { name: "--bab-speed", label: "Speed", type: "duration", default: 8, min: 3, max: 20, step: 1, unit: "s" },
  ],
  preview: { width: 300, height: 180, darkBg: true },
};

export default bgAuroraBorealis;
