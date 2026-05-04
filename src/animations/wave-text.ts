import type { Animation } from "../data/animations";

const waveText: Animation = {
  slug: "wave-text",
  name: "Wave Text",
  category: "text",
  description: "Each letter bounces in a wave pattern. Customize amplitude and speed.",
  tags: ["text", "wave", "bounce", "fun", "playful"],
  css: `.wave-text {
  --wave-color: #a855f7;
  --wave-speed: 0.6s;
  --wave-amplitude: -20px;
  --wave-size: 2rem;
  display: inline-flex;
  font-size: var(--wave-size);
  font-weight: 800;
  color: var(--wave-color);
}

.wave-text span {
  display: inline-block;
  animation: wave-bounce var(--wave-speed) ease-in-out infinite;
}

.wave-text span:nth-child(1) { animation-delay: 0s; }
.wave-text span:nth-child(2) { animation-delay: 0.1s; }
.wave-text span:nth-child(3) { animation-delay: 0.2s; }
.wave-text span:nth-child(4) { animation-delay: 0.3s; }
.wave-text span:nth-child(5) { animation-delay: 0.4s; }

@keyframes wave-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(var(--wave-amplitude)); }
}`,
  html: `<div class="wave-text">
  <span>W</span><span>A</span><span>V</span><span>E</span><span>!</span>
</div>`,
  params: [
    { name: "--wave-color", label: "Color", type: "color", default: "#a855f7" },
    { name: "--wave-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
    { name: "--wave-amplitude", label: "Amplitude", type: "range", default: -20, min: -40, max: -5, step: 1, unit: "px" },
  ],
  preview: { width: 350, height: 150, darkBg: true },
};

export default waveText;
