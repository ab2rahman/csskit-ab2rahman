import type { Animation } from "../data/animations";

const attentionFlash: Animation = {
  slug: "attention-flash",
  name: "Flash",
  category: "attention",
  description:
    "Quick opacity flash on and off. Simple but effective for drawing immediate attention to alerts or status changes.",
  tags: ["attention", "flash", "opacity", "alert", "status", "blink"],
  css: `.attention-flash {
  --af-color: #10b981;
  --af-speed: 0.5s;
  display: inline-block;
  padding: 12px 28px;
  border-radius: 10px;
  background: var(--af-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  animation: flash-op var(--af-speed) ease-in-out;
}

@keyframes flash-op {
  0%, 100% { opacity: 1; }
  20% { opacity: 0.1; }
  40% { opacity: 1; }
  60% { opacity: 0.2; }
  80% { opacity: 0.9; }
}`,
  html: '<div class="attention-flash">Updated!</div>',
  params: [
    { name: "--af-color", label: "Color", type: "color", default: "#10b981" },
    { name: "--af-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default attentionFlash;
