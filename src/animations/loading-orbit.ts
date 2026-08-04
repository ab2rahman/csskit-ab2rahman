import type { Animation } from "../data/animations";

const loadingOrbit: Animation = {
  slug: "loading-orbit",
  name: "Orbit Dots",
  category: "loading",
  description: "Tiga ring loader yang muter terus, sama seperti demo Loader Anak Teladan.",
  tags: ["loading", "orbit", "dots", "atomic", "circular", "elegant"],
  css: `.loading-orbit {
  --lo-color: #ad93ff;
  --lo-speed: 1.1s;
  position: relative;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  gap: .75rem;
  min-height: 8rem;
  font-family: Inter, system-ui, sans-serif;
}

.loading-orbit-dot {
  width: 1.5rem;
  aspect-ratio: 1;
  border: .25rem solid rgba(255,255,255,.09);
  border-top-color: var(--lo-color);
  border-radius: 50%;
  animation: lo-spin var(--lo-speed) linear infinite;
}

.loading-orbit-dot:nth-child(2) {
  width: 2.625rem;
  animation-direction: reverse;
  animation-duration: calc(var(--lo-speed) * 1.36);
}

.loading-orbit-dot:nth-child(3) {
  width: 1rem;
  animation-delay: -.35s;
}

@keyframes lo-spin { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .loading-orbit-dot { animation: none; }
}`,
  html: '<div class="loading-orbit"><i class="loading-orbit-dot"></i><i class="loading-orbit-dot"></i><i class="loading-orbit-dot"></i></div>',
  params: [
    { name: "--lo-color", label: "Ring Color", type: "color", default: "#ad93ff" },
    { name: "--lo-speed", label: "Spin Speed", type: "duration", default: 1.1, min: 0.3, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 200, height: 150, darkBg: true },
};

export default loadingOrbit;
