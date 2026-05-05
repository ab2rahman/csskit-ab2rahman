import type { Animation } from "../data/animations";
const MonsterFireSalamander: Animation = {
  slug: "monster-fire-salamander", name: "Fire Salamander", category: "pixel",
  description: "Blazing fire salamander with molten skin. Amphibian beast wreathed in eternal flame.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterFireSalamander { --fir-speed:1s; --fir-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--fir-scale));
  animation:fir-idle var(--fir-speed) ease-in-out infinite;}
@keyframes fir-idle { 0%,100% { box-shadow:2px 0px #fbbf24, 3px 0px #fbbf24, 4px 0px #fbbf24, 5px 0px #fbbf24, 1px 1px #fbbf24, 3px 1px #fbbf24, 4px 1px #fbbf24, 6px 1px #fbbf24, 1px 2px #fbbf24, 2px 2px #fbbf24, 3px 2px #fbbf24, 4px 2px #fbbf24, 5px 2px #fbbf24, 6px 2px #fbbf24, 2px 3px #f97316, 3px 3px #f97316, 4px 3px #f97316, 5px 3px #f97316, 2px 4px #f97316, 3px 4px #f97316, 4px 4px #f97316, 5px 4px #f97316, 2px 5px #f97316, 3px 5px #f97316, 4px 5px #f97316, 5px 5px #f97316, 1px 6px #ef4444, 2px 6px #ef4444, 3px 6px #ef4444, 4px 6px #ef4444, 5px 6px #ef4444, 6px 6px #ef4444, 0px 7px #ef4444, 1px 7px #ef4444, 2px 7px #ef4444, 3px 7px #ef4444, 4px 7px #ef4444, 5px 7px #ef4444, 6px 7px #ef4444, 7px 7px #ef4444, 2px 8px #ef4444, 3px 8px #ef4444, 5px 8px #ef4444, 6px 8px #ef4444; } 50% { box-shadow:2px 0px #fbbf24, 3px 0px #fbbf24, 4px 0px #fbbf24, 5px 0px #fbbf24, 1px 1px #fbbf24, 3px 1px #fbbf24, 4px 1px #fbbf24, 6px 1px #fbbf24, 1px 2px #fbbf24, 2px 2px #fbbf24, 3px 2px #fbbf24, 4px 2px #fbbf24, 5px 2px #fbbf24, 6px 2px #fbbf24, 2px 3px #f97316, 3px 3px #f97316, 4px 3px #f97316, 5px 3px #f97316, 2px 4px #f97316, 3px 4px #f97316, 4px 4px #f97316, 5px 4px #f97316, 2px 5px #f97316, 3px 5px #f97316, 4px 5px #f97316, 5px 5px #f97316, 1px 6px #ef4444, 2px 6px #ef4444, 3px 6px #ef4444, 4px 6px #ef4444, 5px 6px #ef4444, 6px 6px #ef4444, 0px 7px #ef4444, 1px 7px #ef4444, 2px 7px #ef4444, 3px 7px #ef4444, 4px 7px #ef4444, 5px 7px #ef4444, 6px 7px #ef4444, 7px 7px #ef4444, 2px 8px #ef4444, 3px 8px #ef4444, 6px 8px #ef4444, 7px 8px #ef4444;transform:scale(var(--fir-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterFireSalamander"></div>',
  params: [
    { name: "--fir-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--fir-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterFireSalamander;
