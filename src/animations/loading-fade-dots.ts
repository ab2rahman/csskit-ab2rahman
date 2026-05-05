import type { Animation } from "../data/animations";

const loadingFadeDots: Animation = {
  slug: "loading-fade-dots",
  name: "Fade Dots",
  category: "loading",
  description:
    "Dots fade in and out in sequence. Simple, clean loading with staggered opacity animation.",
  tags: ["loading", "fade", "dots", "sequence", "opacity", "simple"],
  css: `.loading-fade-dots {
  --lfd-color: #64748b;
  --lfd-speed: 1.2s;
  display: flex;
  gap: 8px;
  align-items: center;
}

.loading-fade-dots span {
  width: 10px;
  height: 10px;
  background: var(--lfd-color);
  border-radius: 50%;
  animation: lfd-fade var(--lfd-speed) ease-in-out infinite;
}

.loading-fade-dots span:nth-child(1) { animation-delay: 0s; }
.loading-fade-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-fade-dots span:nth-child(3) { animation-delay: 0.4s; }
.loading-fade-dots span:nth-child(4) { animation-delay: 0.6s; }

@keyframes lfd-fade {
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1); }
}`,
  html: '<div class="loading-fade-dots"><span></span><span></span><span></span><span></span></div>',
  params: [
    { name: "--lfd-color", label: "Color", type: "color", default: "#64748b" },
    { name: "--lfd-speed", label: "Speed", type: "duration", default: 1.2, min: 0.3, max: 4, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingFadeDots;
