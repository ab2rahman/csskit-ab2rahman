import type { Animation } from "../data/animations";

const loadingDna: Animation = {
  slug: "loading-dna",
  name: "DNA Helix",
  category: "loading",
  description:
    "Double helix rotating strands creating a DNA molecule effect. Scientific and biotech loading animation.",
  tags: ["loading", "dna", "helix", "science", "rotate", "strands"],
  css: `.loading-dna {
  --ld-color: #8b5cf6;
  --ld-speed: 2s;
  width: 40px;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 3px;
}

.loading-dna .ld-strand {
  width: 6px;
  height: 6px;
  background: var(--ld-color);
  border-radius: 50%;
  animation: ld-helix var(--ld-speed) ease-in-out infinite;
}

.loading-dna .ld-strand:nth-child(1) { animation-delay: 0s; }
.loading-dna .ld-strand:nth-child(2) { animation-delay: -0.25s; }
.loading-dna .ld-strand:nth-child(3) { animation-delay: -0.5s; }
.loading-dna .ld-strand:nth-child(4) { animation-delay: -0.75s; }
.loading-dna .ld-strand:nth-child(5) { animation-delay: -1s; }
.loading-dna .ld-strand:nth-child(6) { animation-delay: -1.25s; }
.loading-dna .ld-strand:nth-child(7) { animation-delay: -1.5s; }
.loading-dna .ld-strand:nth-child(8) { animation-delay: -1.75s; }

@keyframes ld-helix {
  0%, 100% { transform: translateY(-12px) scale(0.6); opacity: 0.4; }
  25% { transform: translateY(-4px) scale(1); opacity: 1; }
  50% { transform: translateY(4px) scale(0.6); opacity: 0.4; }
  75% { transform: translateY(12px) scale(1); opacity: 1; }
}`,
  html: '<div class="loading-dna"><div class="ld-strand"></div><div class="ld-strand"></div><div class="ld-strand"></div><div class="ld-strand"></div><div class="ld-strand"></div><div class="ld-strand"></div><div class="ld-strand"></div><div class="ld-strand"></div></div>',
  params: [
    { name: "--ld-color", label: "Color", type: "color", default: "#8b5cf6" },
    { name: "--ld-speed", label: "Speed", type: "duration", default: 2, min: 1, max: 5, step: 0.25, unit: "s" },
  ],
  preview: { width: 300, height: 160, darkBg: false },
};

export default loadingDna;
