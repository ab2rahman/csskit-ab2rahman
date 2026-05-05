import type { Animation } from "../data/animations";
const MonsterStormEagle: Animation = {
  slug: "monster-storm-eagle", name: "Storm Eagle", category: "pixel",
  description: "Fierce storm eagle with crackling aura. Tempest raptor that rides thunderheads.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterStormEagle { --sto-speed:1s; --sto-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--sto-scale));
  animation:sto-idle var(--sto-speed) ease-in-out infinite;}
@keyframes sto-idle { 0%,100% { box-shadow:4px 0px #60a5fa, 5px 0px #60a5fa, 3px 1px #60a5fa, 4px 1px #60a5fa, 5px 1px #60a5fa, 6px 1px #60a5fa, 2px 2px #60a5fa, 4px 2px #60a5fa, 5px 2px #60a5fa, 7px 2px #60a5fa, 0px 3px #3b82f6, 1px 3px #3b82f6, 2px 3px #3b82f6, 3px 3px #3b82f6, 4px 3px #3b82f6, 5px 3px #3b82f6, 6px 3px #3b82f6, 7px 3px #3b82f6, 8px 3px #3b82f6, 9px 3px #3b82f6, 0px 4px #3b82f6, 1px 4px #3b82f6, 2px 4px #3b82f6, 3px 4px #3b82f6, 4px 4px #3b82f6, 5px 4px #3b82f6, 6px 4px #3b82f6, 7px 4px #3b82f6, 8px 4px #3b82f6, 9px 4px #3b82f6, 1px 5px #3b82f6, 2px 5px #3b82f6, 4px 5px #3b82f6, 5px 5px #3b82f6, 7px 5px #3b82f6, 8px 5px #3b82f6, 2px 6px #1d4ed8, 3px 6px #1d4ed8, 4px 6px #1d4ed8, 5px 6px #1d4ed8, 3px 7px #1d4ed8, 4px 7px #1d4ed8, 2px 8px #1d4ed8, 5px 8px #1d4ed8; } 50% { box-shadow:4px 0px #60a5fa, 5px 0px #60a5fa, 3px 1px #60a5fa, 4px 1px #60a5fa, 5px 1px #60a5fa, 6px 1px #60a5fa, 2px 2px #60a5fa, 4px 2px #60a5fa, 5px 2px #60a5fa, 7px 2px #60a5fa, 0px 3px #3b82f6, 1px 3px #3b82f6, 2px 3px #3b82f6, 3px 3px #3b82f6, 4px 3px #3b82f6, 5px 3px #3b82f6, 6px 3px #3b82f6, 7px 3px #3b82f6, 8px 3px #3b82f6, 9px 3px #3b82f6, 0px 4px #3b82f6, 1px 4px #3b82f6, 2px 4px #3b82f6, 3px 4px #3b82f6, 4px 4px #3b82f6, 5px 4px #3b82f6, 6px 4px #3b82f6, 7px 4px #3b82f6, 8px 4px #3b82f6, 9px 4px #3b82f6, 0px 5px #3b82f6, 3px 5px #3b82f6, 4px 5px #3b82f6, 7px 5px #3b82f6, 3px 6px #1d4ed8, 4px 6px #1d4ed8, 5px 6px #1d4ed8, 6px 6px #1d4ed8, 3px 7px #1d4ed8, 4px 7px #1d4ed8, 2px 8px #1d4ed8, 5px 8px #1d4ed8;transform:scale(var(--sto-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterStormEagle"></div>',
  params: [
    { name: "--sto-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--sto-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterStormEagle;
