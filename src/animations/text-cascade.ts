import type { Animation } from "../data/animations";

const textCascade: Animation = {
  slug: "text-cascade",
  name: "Cascade",
  category: "text",
  description:
    "Letters cascade down like a waterfall with staggered timing. Dramatic vertical text reveal animation.",
  tags: ["text", "cascade", "waterfall", "fall", "stagger", "dramatic"],
  css: `.text-cascade {
  --tc-color: #0ea5e9;
  --tc-speed: 0.8s;
  color: var(--tc-color);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  gap: 2px;
}

.text-cascade span {
  display: inline-block;
  opacity: 0;
  transform: translateY(-30px);
  animation: tc-drop var(--tc-speed) ease-in forwards;
}

.text-cascade span:nth-child(1) { animation-delay: 0s; }
.text-cascade span:nth-child(2) { animation-delay: 0.1s; }
.text-cascade span:nth-child(3) { animation-delay: 0.2s; }
.text-cascade span:nth-child(4) { animation-delay: 0.3s; }
.text-cascade span:nth-child(5) { animation-delay: 0.4s; }
.text-cascade span:nth-child(6) { animation-delay: 0.5s; }
.text-cascade span:nth-child(7) { animation-delay: 0.6s; }

@keyframes tc-drop {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  50% {
    opacity: 1;
  }
  70% {
    transform: translateY(5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`,
  html: '<div class="text-cascade"><span>C</span><span>a</span><span>s</span><span>c</span><span>a</span><span>d</span><span>e</span></div>',
  params: [
    { name: "--tc-color", label: "Color", type: "color", default: "#0ea5e9" },
    { name: "--tc-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default textCascade;
