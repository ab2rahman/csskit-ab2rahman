import type { Animation } from "../data/animations";

const blurIn: Animation = {
  slug: "blur-in",
  name: "Blur In",
  category: "entrance",
  description: "Element enters from a blurred state. Customize blur amount and speed.",
  tags: ["entrance", "blur", "fade", "smooth", "reveal"],
  css: `.blur-in {
  --blin-color: #e2e8f0;
  --blin-amount: 20px;
  --blin-speed: 0.8s;
  font-size: 2rem;
  font-weight: 800;
  color: var(--blin-color);
  animation: blin-enter var(--blin-speed) ease-out forwards;
}

@keyframes blin-enter {
  from {
    opacity: 0;
    filter: blur(var(--blin-amount));
    transform: scale(1.1);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
  }
}`,
  html: `<div class="blur-in">Blur In</div>`,
  params: [
    { name: "--blin-color", label: "Color", type: "color", default: "#e2e8f0" },
    { name: "--blin-amount", label: "Blur", type: "range", default: 20, min: 5, max: 40, step: 1, unit: "px" },
    { name: "--blin-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 350, height: 150, darkBg: true },
};

export default blurIn;
