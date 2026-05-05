import type { Animation } from "../data/animations";

const attentionSwing: Animation = {
  slug: "attention-swing",
  name: "Swing",
  category: "attention",
  description:
    "Pendulum swing from the top pivot point. Classic attention effect that feels like a swinging sign or bell.",
  tags: ["attention", "swing", "pendulum", "rotate", "bell", "classic"],
  css: `.attention-swing {
  --as-color: #f97316;
  --as-speed: 0.8s;
  --as-degrees: 15deg;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 12px;
  background: var(--as-color);
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  font-family: system-ui, sans-serif;
  animation: swing var(--as-speed) ease-in-out;
  transform-origin: top center;
}

@keyframes swing {
  0% { transform: rotate(0deg); }
  15% { transform: rotate(var(--as-degrees)); }
  30% { transform: rotate(calc(-1 * var(--as-degrees) * 0.8)); }
  45% { transform: rotate(calc(var(--as-degrees) * 0.6)); }
  60% { transform: rotate(calc(-1 * var(--as-degrees) * 0.4)); }
  75% { transform: rotate(calc(var(--as-degrees) * 0.2)); }
  100% { transform: rotate(0deg); }
}`,
  html: '<div class="attention-swing">Swing</div>',
  params: [
    { name: "--as-color", label: "Color", type: "color", default: "#f97316" },
    { name: "--as-speed", label: "Speed", type: "duration", default: 0.8, min: 0.3, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 140, darkBg: true },
};

export default attentionSwing;
