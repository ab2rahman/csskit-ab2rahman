import type { Animation } from "../data/animations";

const textMarkerReveal: Animation = {
  slug: "text-marker-reveal",
  name: "Marker Reveal",
  category: "text",
  description:
    "A handwritten-style marker swipe reveals the key phrase. Great for quote cards, explainer videos, and educational content.",
  tags: ["text", "marker", "highlight", "quote", "video", "reveal"],
  css: `.text-marker-reveal {
  --tmr-color: #f8fafc;
  --tmr-marker: #facc15;
  --tmr-speed: 0.8s;
  color: var(--tmr-color);
  max-width: 14ch;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: clamp(1.8rem, 6vw, 3.5rem);
  font-weight: 900;
  line-height: 1.04;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;
}

.text-marker-reveal span {
  position: relative;
  display: inline;
  isolation: isolate;
}

.text-marker-reveal span::after {
  content: "";
  position: absolute;
  z-index: -1;
  inset: 50% -0.08em 0.04em;
  background: var(--tmr-marker);
  border-radius: 0.08em 0.18em 0.1em 0.04em;
  transform: scaleX(0) rotate(-1.5deg);
  transform-origin: left;
  animation: tmr-swipe var(--tmr-speed) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.text-marker-reveal span {
  animation: tmr-text var(--tmr-speed) cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes tmr-swipe {
  from { transform: scaleX(0) rotate(-1.5deg); }
  to { transform: scaleX(1) rotate(-1.5deg); }
}

@keyframes tmr-text {
  from { opacity: 0; filter: blur(6px); }
  to { opacity: 1; filter: blur(0); }
}

@media (prefers-reduced-motion: reduce) {
  .text-marker-reveal span,
  .text-marker-reveal span::after { animation: none; }
  .text-marker-reveal span::after { transform: scaleX(1) rotate(-1.5deg); }
}`,
  html: '<p class="text-marker-reveal"><span>JANGAN CUMA POSTING.</span> BIKIN ORANG BERHENTI SCROLL.</p>',
  params: [
    { name: "--tmr-color", label: "Text Color", type: "color", default: "#f8fafc" },
    { name: "--tmr-marker", label: "Marker", type: "color", default: "#facc15" },
    { name: "--tmr-speed", label: "Speed", type: "duration", default: 0.8, min: 0.25, max: 2, step: 0.05, unit: "s" },
  ],
  preview: { width: 360, height: 180, darkBg: true },
};

export default textMarkerReveal;
