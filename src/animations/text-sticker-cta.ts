import type { Animation } from "../data/animations";

const textStickerCta: Animation = {
  slug: "text-sticker-cta",
  name: "Sticker CTA",
  category: "text",
  description: "Sticker FOLLOW yang masuk mantul lalu mengambang, sama seperti demo Sticker CTA Nabrak.",
  tags: ["text", "sticker", "cta", "follow", "social", "video"],
  css: `.text-sticker-cta {
  --tsc-fill: #f97316;
  --tsc-speed: 1.4s;
  position: relative;
  display: grid;
  min-height: 10rem;
  place-items: center;
  font-family: Inter, system-ui, sans-serif;
}

.text-sticker-cta__label {
  position: relative;
  z-index: 1;
  padding: .45em .72em .5em;
  border: .12em solid #fff;
  border-radius: 999px;
  color: #fff;
  background: var(--tsc-fill);
  box-shadow: .13em .16em 0 #020617;
  font: 900 clamp(1.75rem, 7vw, 2.7rem)/1 Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  letter-spacing: .045em;
  transform: rotate(-7deg);
  animation: tsc-pop .55s cubic-bezier(.34,1.7,.64,1) both, tsc-float var(--tsc-speed) ease-in-out .55s infinite;
}

.text-sticker-cta__sparkle {
  position: absolute;
  color: #fff;
  font: normal 1.5rem/1 sans-serif;
  text-shadow: 3px 3px 0 #020617;
  animation: tsc-sparkle var(--tsc-speed) ease-in-out infinite;
}

.text-sticker-cta__sparkle--one { margin: -5.5rem 0 0 -10.6rem; }
.text-sticker-cta__sparkle--two { margin: 4.75rem -11.1rem 0 0; animation-delay: .35s; }
@keyframes tsc-pop {
  0% { opacity: 0; transform: rotate(-18deg) scale(0); }
  70% { opacity: 1; transform: rotate(3deg) scale(1.1); }
  100% { opacity: 1; transform: rotate(-7deg) scale(1); }
}
@keyframes tsc-float { 50% { translate: 0 -.13em; } }
@keyframes tsc-sparkle { 50% { transform: scale(1.25) rotate(25deg); opacity: .65; } }

@media (prefers-reduced-motion: reduce) {
  .text-sticker-cta__label, .text-sticker-cta__sparkle { animation: none; }
  .text-sticker-cta__label { opacity: 1; transform: rotate(-7deg); }
}`,
  html: '<div class="text-sticker-cta"><strong class="text-sticker-cta__label">FOLLOW!</strong><i class="text-sticker-cta__sparkle text-sticker-cta__sparkle--one">✦</i><i class="text-sticker-cta__sparkle text-sticker-cta__sparkle--two">✦</i></div>',
  params: [
    { name: "--tsc-fill", label: "Sticker Fill", type: "color", default: "#f97316" },
    { name: "--tsc-speed", label: "Float Speed", type: "duration", default: 1.4, min: 0.6, max: 4, step: 0.1, unit: "s" },
  ],
  preview: { width: 320, height: 160, darkBg: true },
};

export default textStickerCta;
