import type { Animation } from "../data/animations";

const typewriter: Animation = {
  slug: "typewriter",
  name: "Typewriter",
  category: "text",
  description: "Character-by-character typing effect with blinking cursor. Customize text and speed.",
  tags: ["text", "typing", "cursor", "retro", "code"],
  css: `.typewriter-wrapper {
  display: inline-block;
}

.typewriter {
  --type-text: "Hello World!";
  --type-speed: 3s;
  --type-color: #00ff88;
  --type-size: 2rem;
  font-family: monospace;
  font-size: var(--type-size);
  color: var(--type-color);
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid var(--type-color);
  width: 0;
  animation:
    typing var(--type-speed) steps(var(--type-steps, 12)) forwards,
    blink 0.7s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}`,
  html: `<div class="typewriter-wrapper"><div class="typewriter">Hello World!</div></div>`,
  params: [
    { name: "--type-color", label: "Color", type: "color", default: "#00ff88" },
    { name: "--type-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
    { name: "--type-size", label: "Font Size", type: "range", default: 2, min: 1, max: 4, step: 0.25, unit: "rem" },
  ],
  preview: { width: 400, height: 150, darkBg: true },
};

export default typewriter;
