import type { Animation } from "../data/animations";

const btnShine: Animation = {
  slug: "btn-shine",
  name: "Button Shine",
  category: "button",
  description: "Button percaya diri dengan kilau yang lewat terus, persis seperti demo Codingan CSS Bapak.",
  tags: ["button", "shine", "sweep", "light", "gloss", "premium"],
  css: `.btn-shine {
  --bsh-color: #c7ff87;
  --bsh-speed: 2.4s;
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 1.15rem 1.55rem;
  border: 1px solid rgba(255,255,255,.53);
  border-radius: .7rem;
  color: #07101e;
  background: var(--bsh-color);
  font: 700 .9rem/1 Inter, system-ui, sans-serif;
  letter-spacing: .03em;
}

.btn-shine::after {
  content: "";
  position: absolute;
  inset: -50% auto -50% -70%;
  width: 28%;
  background: rgba(255,255,255,.6);
  transform: skewX(-22deg);
  animation: bsh-shine var(--bsh-speed) linear infinite;
}

@keyframes bsh-shine {
  from { transform: translateX(-310%) skewX(-22deg); }
  to { transform: translateX(680%) skewX(-22deg); }
}

@media (prefers-reduced-motion: reduce) {
  .btn-shine::after { animation: none; }
}`,
  html: '<div class="btn-shine">LANJUT, PAK →</div>',
  params: [
    { name: "--bsh-color", label: "Button Color", type: "color", default: "#c7ff87" },
    { name: "--bsh-speed", label: "Shine Cycle", type: "duration", default: 2.4, min: 0.8, max: 5, step: 0.1, unit: "s" },
  ],
  preview: { width: 250, height: 120, darkBg: true },
};

export default btnShine;
