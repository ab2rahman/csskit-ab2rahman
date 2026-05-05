import type { Animation } from "../data/animations";
const MonsterWolf: Animation = {
  slug: "monster-wolf", name: "Battle Wolf", category: "pixel",
  description: "Fierce battle wolf with prowling animation. Loyal beast companion with sharp fangs.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterWolf { --mwo-speed:1s; --mwo-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--mwo-scale));
  animation:mwo-idle var(--mwo-speed) ease-in-out infinite;}
@keyframes mwo-idle { 0%,100% { box-shadow:4px 0px #e2e8f0, 5px 0px #e2e8f0, 6px 0px #e2e8f0, 7px 0px #e2e8f0, 3px 1px #e2e8f0, 4px 1px #e2e8f0, 5px 1px #e2e8f0, 6px 1px #e2e8f0, 7px 1px #e2e8f0, 8px 1px #e2e8f0, 2px 2px #e2e8f0, 3px 2px #e2e8f0, 5px 2px #e2e8f0, 6px 2px #e2e8f0, 8px 2px #e2e8f0, 9px 2px #e2e8f0, 2px 3px #94a3b8, 3px 3px #94a3b8, 4px 3px #94a3b8, 5px 3px #94a3b8, 6px 3px #94a3b8, 7px 3px #94a3b8, 8px 3px #94a3b8, 9px 3px #94a3b8, 2px 4px #94a3b8, 3px 4px #94a3b8, 4px 4px #94a3b8, 5px 4px #94a3b8, 6px 4px #94a3b8, 7px 4px #94a3b8, 8px 4px #94a3b8, 9px 4px #94a3b8, 3px 5px #94a3b8, 4px 5px #94a3b8, 5px 5px #94a3b8, 6px 5px #94a3b8, 7px 5px #94a3b8, 8px 5px #94a3b8, 2px 6px #64748b, 3px 6px #64748b, 4px 6px #64748b, 5px 6px #64748b, 6px 6px #64748b, 7px 6px #64748b, 8px 6px #64748b, 9px 6px #64748b, 2px 7px #64748b, 3px 7px #64748b, 5px 7px #64748b, 6px 7px #64748b, 8px 7px #64748b, 9px 7px #64748b, 2px 8px #64748b, 8px 8px #64748b; } 50% { box-shadow:4px 0px #e2e8f0, 5px 0px #e2e8f0, 6px 0px #e2e8f0, 7px 0px #e2e8f0, 3px 1px #e2e8f0, 4px 1px #e2e8f0, 5px 1px #e2e8f0, 6px 1px #e2e8f0, 7px 1px #e2e8f0, 8px 1px #e2e8f0, 2px 2px #e2e8f0, 3px 2px #e2e8f0, 5px 2px #e2e8f0, 6px 2px #e2e8f0, 8px 2px #e2e8f0, 9px 2px #e2e8f0, 2px 3px #94a3b8, 3px 3px #94a3b8, 4px 3px #94a3b8, 5px 3px #94a3b8, 6px 3px #94a3b8, 7px 3px #94a3b8, 8px 3px #94a3b8, 9px 3px #94a3b8, 2px 4px #94a3b8, 3px 4px #94a3b8, 4px 4px #94a3b8, 5px 4px #94a3b8, 6px 4px #94a3b8, 7px 4px #94a3b8, 8px 4px #94a3b8, 9px 4px #94a3b8, 3px 5px #94a3b8, 4px 5px #94a3b8, 5px 5px #94a3b8, 6px 5px #94a3b8, 7px 5px #94a3b8, 8px 5px #94a3b8, 2px 6px #64748b, 3px 6px #64748b, 4px 6px #64748b, 5px 6px #64748b, 6px 6px #64748b, 7px 6px #64748b, 8px 6px #64748b, 9px 6px #64748b, 2px 7px #64748b, 3px 7px #64748b, 5px 7px #64748b, 6px 7px #64748b, 8px 7px #64748b, 9px 7px #64748b, 3px 8px #64748b, 7px 8px #64748b;transform:scale(var(--mwo-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterWolf"></div>',
  params: [
    { name: "--wol-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--wol-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterWolf;
