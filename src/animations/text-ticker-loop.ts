import type { Animation } from "../data/animations";

const textTickerLoop: Animation = {
  slug: "text-ticker-loop",
  name: "Ticker Loop",
  category: "text",
  description:
    "Seamless scrolling lower-third ticker for announcements, livestream overlays, promos, and recurring video captions.",
  tags: ["text", "ticker", "loop", "lower-third", "livestream", "video"],
  css: `.text-ticker-loop {
  --ttl-fill: #38bdf8;
  --ttl-text: #082f49;
  --ttl-speed: 10s;
  width: min(100%, 34rem);
  overflow: hidden;
  color: var(--ttl-text);
  background: var(--ttl-fill);
  border: 0.12em solid #ffffff;
  border-radius: 999px;
  box-shadow: 0 0.18em 0 #0f172a;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: clamp(1.1rem, 4vw, 2rem);
  font-weight: 900;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.text-ticker-loop__track {
  display: flex;
  width: max-content;
  white-space: nowrap;
  animation: ttl-scroll var(--ttl-speed) linear infinite;
}

.text-ticker-loop__item {
  display: inline-flex;
  align-items: center;
  gap: 0.65em;
  padding: 0.45em 0.85em;
}

.text-ticker-loop__item::before {
  content: "✦";
  color: #ffffff;
  text-shadow: 0.06em 0.06em 0 #0f172a;
}

@keyframes ttl-scroll {
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .text-ticker-loop__track { animation: none; }
}`,
  html: '<div class="text-ticker-loop"><div class="text-ticker-loop__track"><span class="text-ticker-loop__item">KONTEN BARU SETIAP HARI</span><span class="text-ticker-loop__item" aria-hidden="true">KONTEN BARU SETIAP HARI</span></div></div>',
  params: [
    { name: "--ttl-fill", label: "Fill", type: "color", default: "#38bdf8" },
    { name: "--ttl-text", label: "Text", type: "color", default: "#082f49" },
    { name: "--ttl-speed", label: "Loop Speed", type: "duration", default: 10, min: 3, max: 20, step: 0.5, unit: "s" },
  ],
  preview: { width: 380, height: 140, darkBg: true },
};

export default textTickerLoop;
