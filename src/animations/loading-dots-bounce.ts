import type { Animation } from "../data/animations";

const loadingDotsBounce: Animation = {
  slug: "loading-dots-bounce",
  name: "Bouncing Dots",
  category: "loading",
  description:
    "Dots bouncing in a wave sequence like a messenger typing indicator. Friendly, approachable loading animation.",
  tags: ["loading", "dots", "bounce", "typing", "messenger", "wave"],
  css: `.loading-dots-bounce {
  --ldb-color: #9ca3af;
  --ldb-speed: 1.4s;
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 40px;
}

.loading-dots-bounce-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--ldb-color);
  animation: ldb-bounce var(--ldb-speed) ease-in-out infinite;
}

.loading-dots-bounce-dot:nth-child(2) { animation-delay: 0.16s; }
.loading-dots-bounce-dot:nth-child(3) { animation-delay: 0.32s; }

@keyframes ldb-bounce {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-18px); }
}`,
  html: '<div class="loading-dots-bounce"><div class="loading-dots-bounce-dot"></div><div class="loading-dots-bounce-dot"></div><div class="loading-dots-bounce-dot"></div></div>',
  params: [
    { name: "--ldb-color", label: "Color", type: "color", default: "#9ca3af" },
    { name: "--ldb-speed", label: "Speed", type: "duration", default: 1.4, min: 0.5, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 200, height: 120, darkBg: true },
};

export default loadingDotsBounce;
