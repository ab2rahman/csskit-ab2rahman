import type { Animation } from "../data/animations";

const dividerDots: Animation = {
  slug: "divider-dots",
  name: "Dot March",
  category: "divider",
  description:
    "Animated dots marching across the screen. Classic loading-style divider with moving dot pattern.",
  tags: ["divider", "dots", "march", "loading", "animated", "pattern"],
  css: `.divider-dots {
  --dd-color: #3b82f6;
  --dd-dot-size: 6px;
  --dd-speed: 1s;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 200px;
  justify-content: center;
}

.divider-dots span {
  width: var(--dd-dot-size);
  height: var(--dd-dot-size);
  background: var(--dd-color);
  border-radius: 50%;
  animation: dd-march var(--dd-speed) ease-in-out infinite;
}

.divider-dots span:nth-child(1) { animation-delay: 0s; }
.divider-dots span:nth-child(2) { animation-delay: 0.15s; }
.divider-dots span:nth-child(3) { animation-delay: 0.3s; }
.divider-dots span:nth-child(4) { animation-delay: 0.45s; }
.divider-dots span:nth-child(5) { animation-delay: 0.6s; }

@keyframes dd-march {
  0%, 100% { opacity: 0.3; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-6px); }
}`,
  html: '<div class="divider-dots"><span></span><span></span><span></span><span></span><span></span></div>',
  params: [
    { name: "--dd-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--dd-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 350, height: 100, darkBg: false },
};

export default dividerDots;
