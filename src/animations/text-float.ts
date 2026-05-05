import type { Animation } from "../data/animations";

const textFloat: Animation = {
  slug: "text-float",
  name: "Floating Letters",
  category: "text",
  description:
    "Each letter gently floats up and down in a wave pattern. Creates a playful, airy text effect with staggered motion.",
  tags: ["text", "float", "wave", "letters", "playful", "stagger"],
  css: `.text-float {
  --tf-color: #6366f1;
  --tf-speed: 2s;
  --tf-distance: 8px;
  color: var(--tf-color);
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  gap: 2px;
}

.text-float span {
  display: inline-block;
  animation: tf-float var(--tf-speed) ease-in-out infinite;
}

.text-float span:nth-child(1) { animation-delay: 0s; }
.text-float span:nth-child(2) { animation-delay: 0.1s; }
.text-float span:nth-child(3) { animation-delay: 0.2s; }
.text-float span:nth-child(4) { animation-delay: 0.3s; }
.text-float span:nth-child(5) { animation-delay: 0.4s; }

@keyframes tf-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(calc(-1 * var(--tf-distance))); }
}`,
  html: '<div class="text-float"><span>F</span><span>l</span><span>o</span><span>a</span><span>t</span></div>',
  params: [
    { name: "--tf-color", label: "Color", type: "color", default: "#6366f1" },
    { name: "--tf-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.25, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default textFloat;
