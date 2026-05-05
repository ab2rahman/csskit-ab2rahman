import type { Animation } from "../data/animations";

const loadingEllipsis: Animation = {
  slug: "loading-ellipsis",
  name: "Ellipsis",
  category: "loading",
  description:
    "Animated ellipsis dots that appear one by one. Simple, clean loading indicator for text-based interfaces.",
  tags: ["loading", "ellipsis", "dots", "simple", "text", "clean"],
  css: `.loading-ellipsis {
  --le-color: #64748b;
  --le-speed: 1.5s;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.8rem;
  color: var(--le-color);
}

.loading-ellipsis span {
  opacity: 0;
  animation: le-dot var(--le-speed) ease-in-out infinite;
}

.loading-ellipsis span:nth-child(1) { animation-delay: 0s; }
.loading-ellipsis span:nth-child(2) { animation-delay: 0.3s; }
.loading-ellipsis span:nth-child(3) { animation-delay: 0.6s; }

@keyframes le-dot {
  0%, 100% { opacity: 0; }
  30%, 60% { opacity: 1; }
}`,
  html: '<div class="loading-ellipsis"><span>.</span><span>.</span><span>.</span></div>',
  params: [
    { name: "--le-color", label: "Color", type: "color", default: "#64748b" },
    { name: "--le-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 4, step: 0.25, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingEllipsis;
