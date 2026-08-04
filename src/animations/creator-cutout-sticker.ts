import type { Animation } from "../data/animations";

const creatorCutoutSticker: Animation = {
  slug: "creator-cutout-sticker",
  name: "Cutout Sticker",
  category: "creator",
  description: "A bold cutout-style creator badge with white outline, label, and animated decorative stars.",
  tags: ["creator", "cutout", "sticker", "badge", "personal-brand", "overlay"],
  css: `.creator-cutout-sticker {
  --ccs-fill: #a78bfa;
  --ccs-label: #facc15;
  --ccs-speed: 2s;
  position: relative;
  display: grid;
  width: 11rem;
  height: 11rem;
  place-items: center;
  isolation: isolate;
  color: #0f172a;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.creator-cutout-sticker__portrait {
  position: relative;
  z-index: 1;
  display: grid;
  width: 7.8rem;
  height: 8.7rem;
  place-items: center;
  color: #ffffff;
  background: var(--ccs-fill);
  border: 0.3rem solid #ffffff;
  border-radius: 46% 54% 42% 58% / 42% 44% 56% 58%;
  box-shadow: 0.28rem 0.34rem 0 #0f172a;
  font-size: 1.55rem;
  letter-spacing: 0.07em;
  text-shadow: 0.07em 0.07em 0 #0f172a;
  transform: rotate(-5deg);
}

.creator-cutout-sticker__portrait::before {
  content: "YOUR PHOTO";
  padding: 0.3rem 0.4rem;
  color: #0f172a;
  background: #ffffff;
  border-radius: 0.35rem;
  font-family: Inter, system-ui, sans-serif;
  font-size: 0.52rem;
  font-weight: 900;
  letter-spacing: 0.08em;
}

.creator-cutout-sticker__label {
  position: absolute;
  z-index: 2;
  right: -0.5rem;
  bottom: 0.35rem;
  padding: 0.38rem 0.55rem;
  color: #0f172a;
  background: var(--ccs-label);
  border: 0.16rem solid #0f172a;
  border-radius: 0.4rem;
  box-shadow: 0.14rem 0.16rem 0 #ffffff;
  font-size: 0.95rem;
  letter-spacing: 0.06em;
  transform: rotate(5deg);
}

.creator-cutout-sticker::before,
.creator-cutout-sticker::after {
  position: absolute;
  z-index: 0;
  color: var(--ccs-label);
  font-size: 1.7rem;
  text-shadow: 0.09em 0.09em 0 #0f172a;
  animation: ccs-twinkle var(--ccs-speed) ease-in-out infinite;
}

.creator-cutout-sticker::before { content: "✦"; top: 0.15rem; left: 0.15rem; }
.creator-cutout-sticker::after { content: "✷"; right: 0; bottom: 1.7rem; animation-delay: calc(var(--ccs-speed) / 2); }

@keyframes ccs-twinkle { 50% { transform: scale(1.35) rotate(20deg); } }

@media (prefers-reduced-motion: reduce) {
  .creator-cutout-sticker::before,
  .creator-cutout-sticker::after { animation: none; }
}`,
  html: '<div class="creator-cutout-sticker"><div class="creator-cutout-sticker__portrait">YOU</div><span class="creator-cutout-sticker__label">CREATOR</span></div>',
  params: [
    { name: "--ccs-fill", label: "Portrait Fill", type: "color", default: "#a78bfa" },
    { name: "--ccs-label", label: "Label", type: "color", default: "#facc15" },
    { name: "--ccs-speed", label: "Sparkle Speed", type: "duration", default: 2, min: 0.8, max: 5, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 240, darkBg: true },
};

export default creatorCutoutSticker;
