import type { Animation } from "../data/animations";

const textBounceIn: Animation = {
  slug: "text-bounce-in",
  name: "Bounce In Text",
  category: "text",
  description:
    "Each letter bounces in from below with elastic overshoot. Playful entrance animation with staggered letter timing.",
  tags: ["text", "bounce", "entrance", "letters", "stagger", "elastic"],
  css: `.text-bounce-in {
  --tbi-color: #f97316;
  --tbi-speed: 0.6s;
  color: var(--tbi-color);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  gap: 2px;
}

.text-bounce-in span {
  display: inline-block;
  opacity: 0;
  transform: translateY(40px);
  animation: tbi-bounce var(--tbi-speed) cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.text-bounce-in span:nth-child(1) { animation-delay: 0s; }
.text-bounce-in span:nth-child(2) { animation-delay: 0.08s; }
.text-bounce-in span:nth-child(3) { animation-delay: 0.16s; }
.text-bounce-in span:nth-child(4) { animation-delay: 0.24s; }
.text-bounce-in span:nth-child(5) { animation-delay: 0.32s; }
.text-bounce-in span:nth-child(6) { animation-delay: 0.40s; }

@keyframes tbi-bounce {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  60% {
    opacity: 1;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}`,
  html: '<div class="text-bounce-in"><span>B</span><span>o</span><span>u</span><span>n</span><span>c</span><span>e</span></div>',
  params: [
    { name: "--tbi-color", label: "Color", type: "color", default: "#f97316" },
    { name: "--tbi-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default textBounceIn;
