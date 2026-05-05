import type { Animation } from "../data/animations";

const textTypewriterDelete: Animation = {
  slug: "text-typewriter-delete",
  name: "Typewriter Delete",
  category: "text",
  description:
    "Types text character by character, then deletes and retypes in a continuous loop. Classic terminal typing effect.",
  tags: ["text", "typewriter", "delete", "terminal", "typing", "loop"],
  css: `.text-typewriter-delete {
  --ttd-color: #10b981;
  --ttd-speed: 3s;
  color: var(--ttd-color);
  font-size: 1.5rem;
  font-family: monospace;
  border-right: 2px solid var(--ttd-color);
  white-space: nowrap;
  overflow: hidden;
  width: 10ch;
  animation: ttd-type var(--ttd-speed) steps(10) infinite alternate,
             ttd-cursor 0.5s step-end infinite alternate;
}

@keyframes ttd-type {
  0% { width: 0; }
  50% { width: 10ch; }
  100% { width: 0; }
}

@keyframes ttd-cursor {
  0% { border-color: var(--ttd-color); }
  50% { border-color: transparent; }
}`,
  html: '<div class="text-typewriter-delete">hello world</div>',
  params: [
    { name: "--ttd-color", label: "Color", type: "color", default: "#10b981" },
    { name: "--ttd-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: true },
};

export default textTypewriterDelete;
