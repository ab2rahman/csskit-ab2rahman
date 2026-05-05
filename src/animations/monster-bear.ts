import type { Animation } from "../data/animations";
const MonsterBear: Animation = {
  slug: "monster-bear", name: "Cave Bear", category: "pixel",
  description: "Massive cave bear with standing animation. Powerful beast with crushing paws.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterBear { --mbe-speed:1s; --mbe-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--mbe-scale));
  animation:mbe-idle var(--mbe-speed) ease-in-out infinite;}
@keyframes mbe-idle { 0%,100% { box-shadow:2px 0px #92400e, 3px 0px #92400e, 6px 0px #92400e, 7px 0px #92400e, 2px 1px #92400e, 3px 1px #92400e, 4px 1px #92400e, 5px 1px #92400e, 6px 1px #92400e, 7px 1px #92400e, 2px 2px #92400e, 4px 2px #92400e, 5px 2px #92400e, 7px 2px #92400e, 2px 3px #92400e, 3px 3px #92400e, 4px 3px #92400e, 5px 3px #92400e, 6px 3px #92400e, 7px 3px #92400e, 2px 4px #92400e, 3px 4px #92400e, 4px 4px #92400e, 5px 4px #92400e, 6px 4px #92400e, 7px 4px #92400e, 2px 5px #92400e, 3px 5px #92400e, 4px 5px #92400e, 5px 5px #92400e, 6px 5px #92400e, 7px 5px #92400e, 0px 6px #78350f, 1px 6px #78350f, 2px 6px #78350f, 3px 6px #78350f, 4px 6px #78350f, 5px 6px #78350f, 6px 6px #78350f, 7px 6px #78350f, 8px 6px #78350f, 9px 6px #78350f, 0px 7px #78350f, 1px 7px #78350f, 2px 7px #78350f, 3px 7px #78350f, 4px 7px #78350f, 5px 7px #78350f, 6px 7px #78350f, 7px 7px #78350f, 8px 7px #78350f, 9px 7px #78350f, 1px 8px #78350f, 2px 8px #78350f, 3px 8px #78350f, 4px 8px #78350f, 5px 8px #78350f, 6px 8px #78350f, 7px 8px #78350f, 8px 8px #78350f, 2px 9px #6b4f2a, 3px 9px #6b4f2a, 6px 9px #6b4f2a, 7px 9px #6b4f2a; } 50% { box-shadow:2px 0px #92400e, 3px 0px #92400e, 6px 0px #92400e, 7px 0px #92400e, 2px 1px #92400e, 3px 1px #92400e, 4px 1px #92400e, 5px 1px #92400e, 6px 1px #92400e, 7px 1px #92400e, 2px 2px #92400e, 4px 2px #92400e, 5px 2px #92400e, 7px 2px #92400e, 2px 3px #92400e, 3px 3px #92400e, 4px 3px #92400e, 5px 3px #92400e, 6px 3px #92400e, 7px 3px #92400e, 2px 4px #92400e, 3px 4px #92400e, 4px 4px #92400e, 5px 4px #92400e, 6px 4px #92400e, 7px 4px #92400e, 2px 5px #92400e, 3px 5px #92400e, 4px 5px #92400e, 5px 5px #92400e, 6px 5px #92400e, 7px 5px #92400e, 0px 6px #78350f, 1px 6px #78350f, 2px 6px #78350f, 3px 6px #78350f, 4px 6px #78350f, 5px 6px #78350f, 6px 6px #78350f, 7px 6px #78350f, 8px 6px #78350f, 9px 6px #78350f, 0px 7px #78350f, 1px 7px #78350f, 2px 7px #78350f, 3px 7px #78350f, 4px 7px #78350f, 5px 7px #78350f, 6px 7px #78350f, 7px 7px #78350f, 8px 7px #78350f, 9px 7px #78350f, 1px 8px #78350f, 2px 8px #78350f, 3px 8px #78350f, 4px 8px #78350f, 5px 8px #78350f, 6px 8px #78350f, 7px 8px #78350f, 8px 8px #78350f, 2px 9px #6b4f2a, 3px 9px #6b4f2a, 6px 9px #6b4f2a, 7px 9px #6b4f2a;transform:scale(var(--mbe-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterBear"></div>',
  params: [
    { name: "--bea-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--bea-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterBear;
