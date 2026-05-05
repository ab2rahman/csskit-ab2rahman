import type { Animation } from "../data/animations";

const textScramble: Animation = {
  slug: "text-scramble",
  name: "Text Scramble",
  category: "text",
  description:
    "Characters scramble through random symbols before resolving to final text. Hacker/decode reveal effect popular in sci-fi UIs.",
  tags: ["text", "scramble", "decode", "hacker", "random", "matrix"],
  css: `.text-scramble {
  --tsc-color: #22c55e;
  --tsc-speed: 2s;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 28px;
  font-weight: 700;
  color: var(--tsc-color);
  text-shadow: 0 0 8px var(--tsc-color);
  display: inline-block;
}

.text-scramble span {
  display: inline-block;
  animation: scramble-char var(--tsc-speed) steps(1) both;
}

.text-scramble span:nth-child(1) { animation-delay: 0s; }
.text-scramble span:nth-child(2) { animation-delay: 0.15s; }
.text-scramble span:nth-child(3) { animation-delay: 0.3s; }
.text-scramble span:nth-child(4) { animation-delay: 0.45s; }
.text-scramble span:nth-child(5) { animation-delay: 0.6s; }
.text-scramble span:nth-child(6) { animation-delay: 0.75s; }

@keyframes scramble-char {
  0% { content: '!'; opacity: 0.3; }
  14% { content: '@'; opacity: 0.4; }
  28% { content: '#'; opacity: 0.5; }
  42% { content: '&'; opacity: 0.6; }
  57% { content: '%'; opacity: 0.7; }
  71% { content: '?'; opacity: 0.8; }
  85% { content: '$'; opacity: 0.9; }
  100% { content: ''; opacity: 1; }
}`,
  html: '<div class="text-scramble"><span>D</span><span>E</span><span>C</span><span>O</span><span>D</span><span>E</span></div>',
  params: [
    { name: "--tsc-color", label: "Color", type: "color", default: "#22c55e" },
    { name: "--tsc-speed", label: "Speed", type: "duration", default: 2, min: 0.5, max: 5, step: 0.25, unit: "s" },
  ],
  preview: { width: 350, height: 150, darkBg: true },
};

export default textScramble;
