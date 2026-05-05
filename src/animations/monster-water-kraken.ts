import type { Animation } from "../data/animations";
const MonsterWaterKraken: Animation = {
  slug: "monster-water-kraken", name: "Water Kraken", category: "pixel",
  description: "Deep sea kraken with writhing tentacles. Ancient ocean terror of the abyss.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterWaterKraken { --wat-speed:1s; --wat-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--wat-scale));
  animation:wat-idle var(--wat-speed) ease-in-out infinite;}
@keyframes wat-idle { 0%,100% { box-shadow:2px 0px #0ea5e9, 3px 0px #0ea5e9, 4px 0px #0ea5e9, 5px 0px #0ea5e9, 1px 1px #0ea5e9, 2px 1px #0ea5e9, 3px 1px #0ea5e9, 4px 1px #0ea5e9, 5px 1px #0ea5e9, 6px 1px #0ea5e9, 1px 2px #0ea5e9, 3px 2px #0ea5e9, 4px 2px #0ea5e9, 6px 2px #0ea5e9, 0px 3px #0284c7, 1px 3px #0284c7, 2px 3px #0284c7, 3px 3px #0284c7, 4px 3px #0284c7, 5px 3px #0284c7, 6px 3px #0284c7, 7px 3px #0284c7, 0px 4px #0284c7, 1px 4px #0284c7, 2px 4px #0284c7, 3px 4px #0284c7, 4px 4px #0284c7, 5px 4px #0284c7, 6px 4px #0284c7, 7px 4px #0284c7, 0px 5px #0284c7, 1px 5px #0284c7, 2px 5px #0284c7, 3px 5px #0284c7, 4px 5px #0284c7, 5px 5px #0284c7, 6px 5px #0284c7, 7px 5px #0284c7, 0px 6px #0369a1, 2px 6px #0369a1, 3px 6px #0369a1, 5px 6px #0369a1, 6px 6px #0369a1, 0px 7px #0369a1, 1px 7px #0369a1, 4px 7px #0369a1, 5px 7px #0369a1, 0px 8px #0369a1, 7px 8px #0369a1; } 50% { box-shadow:2px 0px #0ea5e9, 3px 0px #0ea5e9, 4px 0px #0ea5e9, 5px 0px #0ea5e9, 1px 1px #0ea5e9, 2px 1px #0ea5e9, 3px 1px #0ea5e9, 4px 1px #0ea5e9, 5px 1px #0ea5e9, 6px 1px #0ea5e9, 1px 2px #0ea5e9, 3px 2px #0ea5e9, 4px 2px #0ea5e9, 6px 2px #0ea5e9, 0px 3px #0284c7, 1px 3px #0284c7, 2px 3px #0284c7, 3px 3px #0284c7, 4px 3px #0284c7, 5px 3px #0284c7, 6px 3px #0284c7, 7px 3px #0284c7, 0px 4px #0284c7, 1px 4px #0284c7, 2px 4px #0284c7, 3px 4px #0284c7, 4px 4px #0284c7, 5px 4px #0284c7, 6px 4px #0284c7, 7px 4px #0284c7, 0px 5px #0284c7, 1px 5px #0284c7, 2px 5px #0284c7, 3px 5px #0284c7, 4px 5px #0284c7, 5px 5px #0284c7, 6px 5px #0284c7, 7px 5px #0284c7, 0px 6px #0369a1, 1px 6px #0369a1, 3px 6px #0369a1, 4px 6px #0369a1, 6px 6px #0369a1, 7px 6px #0369a1, 0px 7px #0369a1, 3px 7px #0369a1, 4px 7px #0369a1, 7px 7px #0369a1, 0px 8px #0369a1, 7px 8px #0369a1;transform:scale(var(--wat-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterWaterKraken"></div>',
  params: [
    { name: "--wat-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--wat-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterWaterKraken;
