import type { Animation } from "../data/animations";

const btnTextLoop: Animation = {
  slug: "btn-text-loop",
  name: "Text Loop",
  category: "button",
  description:
    "Text cycles through different words continuously. Animated button label that rotates between texts.",
  tags: ["button", "text", "loop", "cycle", "rotate", "words"],
  css: `.btn-text-loop {
  --btl-color: #1e293b;
  --btl-accent: #22c55e;
  --btl-speed: 3s;
  width: 160px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  background: var(--btl-color);
  border-radius: 10px;
  cursor: pointer;
}

.btn-text-loop .btl-word {
  display: inline-block;
  color: var(--btl-accent);
  animation: btl-cycle var(--btl-speed) ease-in-out infinite;
}

@keyframes btl-cycle {
  0%, 20% { content: 'Build'; }
  25%, 45% { content: 'Ship'; }
  50%, 70% { content: 'Scale'; }
  75%, 95% { content: 'Grow'; }
}`,
  html: '<div class="btn-text-loop">Let\'s <span class="btl-word">Build</span></div>',
  params: [
    { name: "--btl-accent", label: "Accent", type: "color", default: "#22c55e" },
    { name: "--btl-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default btnTextLoop;
