import type { Animation } from "../data/animations";

const loadingTyping: Animation = {
  slug: "loading-typing",
  name: "Typing Indicator",
  category: "loading",
  description:
    "Three dots with animated typing indicator. Chat-style loading animation like messaging apps.",
  tags: ["loading", "typing", "dots", "chat", "messenger", "indicator"],
  css: `.loading-typing {
  --lt-color: #94a3b8;
  --lt-speed: 1.4s;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 18px;
  background: #f1f5f9;
  border-radius: 18px;
}

.loading-typing span {
  width: 8px;
  height: 8px;
  background: var(--lt-color);
  border-radius: 50%;
  animation: lt-dot var(--lt-speed) ease-in-out infinite;
}

.loading-typing span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-typing span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes lt-dot {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-8px);
    opacity: 1;
  }
}`,
  html: '<div class="loading-typing"><span></span><span></span><span></span></div>',
  params: [
    { name: "--lt-color", label: "Color", type: "color", default: "#94a3b8" },
    { name: "--lt-speed", label: "Speed", type: "duration", default: 1.4, min: 0.5, max: 4, step: 0.2, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingTyping;
