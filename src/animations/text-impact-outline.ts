import type { Animation } from "../data/animations";

const textImpactOutline: Animation = {
  slug: "text-impact-outline",
  name: "Impact Outline",
  category: "text",
  description:
    "High-impact outlined headline that slams into place with a colorful offset shadow. Designed for strong video hooks.",
  tags: ["text", "headline", "impact", "outline", "hook", "video"],
  css: `.text-impact-outline {
  --tio-fill: #f8fafc;
  --tio-stroke: #0f172a;
  --tio-accent: #fb7185;
  --tio-speed: 0.64s;
  position: relative;
  color: var(--tio-fill);
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: clamp(2.2rem, 9vw, 5.2rem);
  font-weight: 900;
  line-height: 0.82;
  letter-spacing: 0.025em;
  text-align: center;
  text-shadow: 0.075em 0.075em 0 var(--tio-accent);
  -webkit-text-stroke: 0.035em var(--tio-stroke);
  paint-order: stroke fill;
  transform: scale(1.6) rotate(-4deg);
  opacity: 0;
  animation: tio-impact var(--tio-speed) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.text-impact-outline::after {
  content: "";
  position: absolute;
  inset: -0.1em;
  border: 0.045em solid var(--tio-accent);
  border-radius: 0.1em;
  transform: rotate(2deg) scale(0.7);
  opacity: 0;
  animation: tio-frame var(--tio-speed) cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
}

@keyframes tio-impact {
  0% { opacity: 0; transform: scale(1.6) rotate(-4deg); filter: blur(8px); }
  68% { opacity: 1; transform: scale(0.94) rotate(1deg); filter: blur(0); }
  100% { opacity: 1; transform: scale(1) rotate(0); filter: blur(0); }
}

@keyframes tio-frame {
  to { opacity: 1; transform: rotate(2deg) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .text-impact-outline,
  .text-impact-outline::after { animation: none; opacity: 1; }
  .text-impact-outline { transform: none; filter: none; }
  .text-impact-outline::after { transform: rotate(2deg) scale(1); }
}`,
  html: '<div class="text-impact-outline">STOP SCROLL!</div>',
  params: [
    { name: "--tio-fill", label: "Fill", type: "color", default: "#f8fafc" },
    { name: "--tio-stroke", label: "Outline", type: "color", default: "#0f172a" },
    { name: "--tio-accent", label: "Accent", type: "color", default: "#fb7185" },
    { name: "--tio-speed", label: "Speed", type: "duration", default: 0.64, min: 0.2, max: 2, step: 0.05, unit: "s" },
  ],
  preview: { width: 360, height: 180, darkBg: true },
};

export default textImpactOutline;
