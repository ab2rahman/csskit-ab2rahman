import type { Animation } from "../data/animations";

const blurReveal: Animation = {
  slug: "blur-reveal",
  name: "Blur Reveal",
  category: "text",
  description: "Text transitions from blurred to sharp. Customize blur amount and duration.",
  tags: ["text", "blur", "reveal", "fade", "smooth"],
  css: `.blur-reveal {
  --blur-color: #ffffff;
  --blur-amount: 20px;
  --blur-speed: 1.5s;
  font-size: 3rem;
  font-weight: 800;
  color: var(--blur-color);
  animation: blur-in var(--blur-speed) ease-out forwards;
}

@keyframes blur-in {
  0% {
    filter: blur(var(--blur-amount));
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}`,
  html: `<span class="blur-reveal">REVEAL</span>`,
  params: [
    { name: "--blur-color", label: "Color", type: "color", default: "#ffffff" },
    { name: "--blur-amount", label: "Blur Amount", type: "range", default: 20, min: 5, max: 40, step: 1, unit: "px" },
    { name: "--blur-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 4, step: 0.1, unit: "s" },
  ],
  preview: { width: 400, height: 150, darkBg: true },
};

export default blurReveal;
