import type { Animation } from "../data/animations";
const MonsterSandWorm: Animation = {
  slug: "monster-sand-worm", name: "Sand Worm", category: "pixel",
  description: "Giant sand worm emerging from desert. Subterranean terror of the arid wastes.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterSandWorm { --san-speed:1s; --san-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--san-scale));
  animation:san-idle var(--san-speed) ease-in-out infinite;}
@keyframes san-idle { 0%,100% { box-shadow:4px 0px #fbbf24, 5px 0px #fbbf24, 3px 1px #fbbf24, 4px 1px #fbbf24, 5px 1px #fbbf24, 6px 1px #fbbf24, 2px 2px #fbbf24, 3px 2px #fbbf24, 4px 2px #fbbf24, 5px 2px #fbbf24, 6px 2px #fbbf24, 7px 2px #fbbf24, 2px 3px #d4a017, 4px 3px #d4a017, 5px 3px #d4a017, 7px 3px #d4a017, 2px 4px #d4a017, 3px 4px #d4a017, 4px 4px #d4a017, 5px 4px #d4a017, 6px 4px #d4a017, 7px 4px #d4a017, 0px 5px #d4a017, 1px 5px #d4a017, 2px 5px #d4a017, 3px 5px #d4a017, 4px 5px #d4a017, 5px 5px #d4a017, 6px 5px #d4a017, 7px 5px #d4a017, 8px 5px #d4a017, 9px 5px #d4a017, 0px 6px #a16207, 1px 6px #a16207, 2px 6px #a16207, 3px 6px #a16207, 4px 6px #a16207, 5px 6px #a16207, 6px 6px #a16207, 7px 6px #a16207, 8px 6px #a16207, 9px 6px #a16207, 1px 7px #a16207, 2px 7px #a16207, 3px 7px #a16207, 4px 7px #a16207, 5px 7px #a16207, 6px 7px #a16207, 7px 7px #a16207, 8px 7px #a16207, 2px 8px #a16207, 3px 8px #a16207, 4px 8px #a16207, 5px 8px #a16207, 6px 8px #a16207, 7px 8px #a16207, 3px 9px #a16207, 4px 9px #a16207, 5px 9px #a16207, 6px 9px #a16207; } 50% { box-shadow:4px 0px #fbbf24, 5px 0px #fbbf24, 3px 1px #fbbf24, 4px 1px #fbbf24, 5px 1px #fbbf24, 6px 1px #fbbf24, 2px 2px #fbbf24, 3px 2px #fbbf24, 4px 2px #fbbf24, 5px 2px #fbbf24, 6px 2px #fbbf24, 7px 2px #fbbf24, 2px 3px #d4a017, 4px 3px #d4a017, 5px 3px #d4a017, 7px 3px #d4a017, 2px 4px #d4a017, 3px 4px #d4a017, 4px 4px #d4a017, 5px 4px #d4a017, 6px 4px #d4a017, 7px 4px #d4a017, 0px 5px #d4a017, 1px 5px #d4a017, 2px 5px #d4a017, 3px 5px #d4a017, 4px 5px #d4a017, 5px 5px #d4a017, 6px 5px #d4a017, 7px 5px #d4a017, 8px 5px #d4a017, 9px 5px #d4a017, 0px 6px #a16207, 1px 6px #a16207, 2px 6px #a16207, 3px 6px #a16207, 4px 6px #a16207, 5px 6px #a16207, 6px 6px #a16207, 7px 6px #a16207, 8px 6px #a16207, 9px 6px #a16207, 1px 7px #a16207, 2px 7px #a16207, 3px 7px #a16207, 4px 7px #a16207, 5px 7px #a16207, 6px 7px #a16207, 7px 7px #a16207, 8px 7px #a16207, 2px 8px #a16207, 3px 8px #a16207, 4px 8px #a16207, 5px 8px #a16207, 6px 8px #a16207, 7px 8px #a16207, 3px 9px #a16207, 4px 9px #a16207, 5px 9px #a16207, 6px 9px #a16207;transform:scale(var(--san-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterSandWorm"></div>',
  params: [
    { name: "--san-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--san-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterSandWorm;
