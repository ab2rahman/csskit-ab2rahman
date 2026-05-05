import type { Animation } from "../data/animations";

const attentionHeartbeat: Animation = {
  slug: "attention-heartbeat",
  name: "Heartbeat",
  category: "attention",
  description:
    "Double-pulse heartbeat rhythm effect. Great for health-related UIs, favorites, or living indicators.",
  tags: ["attention", "heartbeat", "pulse", "health", "love", "living"],
  css: `.attention-heartbeat {
  --ah-color: #ef4444;
  --ah-speed: 1.5s;
  --ah-scale: 1.3;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  border-radius: 10px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #fca5a5;
  font-family: system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.attention-heartbeat-icon {
  width: 28px;
  height: 28px;
  animation: heartbeat var(--ah-speed) ease-in-out infinite;
  transform-origin: center center;
}

.attention-heartbeat-icon svg {
  width: 100%;
  height: 100%;
  fill: var(--ah-color);
}

@keyframes heartbeat {
  0% { transform: scale(1); }
  14% { transform: scale(var(--ah-scale)); }
  28% { transform: scale(1); }
  42% { transform: scale(calc(var(--ah-scale) * 0.9)); }
  56% { transform: scale(1); }
  100% { transform: scale(1); }
}`,
  html: '<div class="attention-heartbeat"><div class="attention-heartbeat-icon"><svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></div>72 bpm</div>',
  params: [
    { name: "--ah-color", label: "Color", type: "color", default: "#ef4444" },
    { name: "--ah-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default attentionHeartbeat;
