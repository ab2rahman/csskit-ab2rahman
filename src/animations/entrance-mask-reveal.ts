import type { Animation } from "../data/animations";

const entranceMaskReveal: Animation = {
  slug: "entrance-mask-reveal",
  name: "Mask Reveal",
  category: "entrance",
  description: "Teks cinematic yang dari blur menjadi fokus, sama seperti demo Bapak IT Cinematic.",
  tags: ["entrance", "mask", "reveal", "circle", "clip-path", "spotlight"],
  css: `.entrance-mask-reveal {
  --emr-color: #ad93ff;
  --emr-speed: 2.3s;
  display: grid;
  place-items: center;
  gap: .8rem;
  min-height: 10rem;
  text-align: center;
  font-family: Inter, system-ui, sans-serif;
}

.entrance-mask-reveal__title {
  color: #f7fbff;
  font-size: clamp(1.75rem, 6.3vw, 2.5rem);
  font-weight: 700;
  line-height: .88;
  letter-spacing: -.08em;
  animation: emr-focus var(--emr-speed) ease-in-out infinite;
}

@keyframes emr-focus {
  0%,100% { filter: blur(5px); opacity: .55; transform: scale(.96); }
  55% { filter: none; opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .entrance-mask-reveal__title { animation: none; filter: none; opacity: 1; transform: none; }
}`,
  html: '<div class="entrance-mask-reveal"><strong class="entrance-mask-reveal__title">DEPLOY<br>BERHASIL</strong></div>',
  params: [
    { name: "--emr-color", label: "Accent", type: "color", default: "#ad93ff" },
    { name: "--emr-speed", label: "Focus Cycle", type: "duration", default: 2.3, min: 0.8, max: 5, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: true },
};

export default entranceMaskReveal;
