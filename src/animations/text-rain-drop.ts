import type { Animation } from "../data/animations";

const textRainDrop: Animation = {
  slug: "text-rain-drop",
  name: "Rain Drop",
  category: "text",
  description:
    "Letters drip down into place like raindrops. Wet, fluid text entrance with staggered falling animation.",
  tags: ["text", "rain", "drop", "drip", "fall", "fluid"],
  css: `.text-rain-drop {
  --trd-color: #0ea5e9;
  --trd-speed: 0.8s;
  color: var(--trd-color);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  gap: 2px;
}

.text-rain-drop span {
  display: inline-block;
  opacity: 0;
  transform: translateY(-50px);
  animation: trd-drop var(--trd-speed) cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.text-rain-drop span:nth-child(1) { animation-delay: 0s; }
.text-rain-drop span:nth-child(2) { animation-delay: 0.15s; }
.text-rain-drop span:nth-child(3) { animation-delay: 0.3s; }
.text-rain-drop span:nth-child(4) { animation-delay: 0.45s; }
.text-rain-drop span:nth-child(5) { animation-delay: 0.6s; }

@keyframes trd-drop {
  0% {
    opacity: 0;
    transform: translateY(-50px) scaleY(1.3);
  }
  50% {
    opacity: 1;
  }
  70% {
    transform: translateY(5px) scaleY(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
}`,
  html: '<div class="text-rain-drop"><span>R</span><span>a</span><span>i</span><span>n</span><span>y</span></div>',
  params: [
    { name: "--trd-color", label: "Color", type: "color", default: "#0ea5e9" },
    { name: "--trd-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default textRainDrop;
