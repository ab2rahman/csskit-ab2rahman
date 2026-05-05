import type { Animation } from "../data/animations";

const attentionPulseGlow: Animation = {
  slug: "attention-pulse-glow",
  name: "Pulse Glow",
  category: "attention",
  description:
    "Soft pulsing glow effect that gently calls attention. Ideal for notifications, badges, or important UI indicators.",
  tags: ["attention", "pulse", "glow", "notification", "badge", "soft"],
  css: `.attention-pulse-glow {
  --pg-color: #3b82f6;
  --pg-size: 14px;
  --pg-speed: 2s;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: #e2e8f0;
  font-family: system-ui, sans-serif;
  font-size: 14px;
  font-weight: 500;
  animation: pulse-glow-bg var(--pg-speed) ease-in-out infinite;
}

.attention-pulse-glow::before {
  content: '';
  width: var(--pg-size);
  height: var(--pg-size);
  border-radius: 50%;
  background: var(--pg-color);
  animation: pulse-glow-dot var(--pg-speed) ease-in-out infinite;
  box-shadow: 0 0 0 0 var(--pg-color);
}

@keyframes pulse-glow-dot {
  0%, 100% { box-shadow: 0 0 0 0 var(--pg-color); opacity: 1; }
  50% { box-shadow: 0 0 12px 4px var(--pg-color); opacity: 0.8; }
}

@keyframes pulse-glow-bg {
  0%, 100% { background: rgba(59, 130, 246, 0.1); border-color: rgba(59, 130, 246, 0.3); }
  50% { background: rgba(59, 130, 246, 0.18); border-color: rgba(59, 130, 246, 0.5); }
}`,
  html: '<div class="attention-pulse-glow">New message</div>',
  params: [
    { name: "--pg-color", label: "Glow Color", type: "color", default: "#3b82f6" },
    { name: "--pg-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default attentionPulseGlow;
