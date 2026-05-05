import type { Animation } from "../data/animations";

const loadingHamburger: Animation = {
  slug: "loading-hamburger",
  name: "Hamburger",
  category: "loading",
  description:
    "CSS hamburger menu icon morphs into an X and back. Menu toggle animation with smooth line transitions.",
  tags: ["loading", "hamburger", "menu", "toggle", "morph", "x"],
  css: `.loading-hamburger {
  --lh-color: #334155;
  --lh-speed: 2s;
  width: 30px;
  height: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: lh-morph var(--lh-speed) ease-in-out infinite;
}

.loading-hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background: var(--lh-color);
  border-radius: 2px;
  transition: all 0.3s;
}

@keyframes lh-morph {
  0%, 45% {
    transform: none;
  }
  50%, 95% {
    transform: rotate(0deg);
  }
}

.loading-hamburger span:nth-child(1) {
  animation: lh-top var(--lh-speed) ease-in-out infinite;
}

.loading-hamburger span:nth-child(2) {
  animation: lh-mid var(--lh-speed) ease-in-out infinite;
}

.loading-hamburger span:nth-child(3) {
  animation: lh-bot var(--lh-speed) ease-in-out infinite;
}

@keyframes lh-top {
  0%, 40% { transform: translateY(0); }
  50%, 90% { transform: translateY(9.5px) rotate(45deg); }
  100% { transform: translateY(0); }
}

@keyframes lh-mid {
  0%, 40% { opacity: 1; }
  50%, 90% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes lh-bot {
  0%, 40% { transform: translateY(0); }
  50%, 90% { transform: translateY(-9.5px) rotate(-45deg); }
  100% { transform: translateY(0); }
}`,
  html: '<div class="loading-hamburger"><span></span><span></span><span></span></div>',
  params: [
    { name: "--lh-color", label: "Color", type: "color", default: "#334155" },
    { name: "--lh-speed", label: "Speed", type: "duration", default: 2, min: 1, max: 5, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingHamburger;
