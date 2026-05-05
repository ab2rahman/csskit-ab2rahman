import type { Animation } from "../data/animations";
const MonsterShadowCat: Animation = {
  slug: "monster-shadow-cat", name: "Shadow Cat", category: "pixel",
  description: "Sleek shadow cat with glowing eyes. Stealthy dark feline that prowls the void.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterShadowCat { --sha-speed:1s; --sha-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--sha-scale));
  animation:sha-idle var(--sha-speed) ease-in-out infinite;}
@keyframes sha-idle { 0%,100% { box-shadow:2px 0px #374151, 3px 0px #374151, 2px 1px #374151, 3px 1px #374151, 1px 2px #374151, 2px 2px #374151, 3px 2px #374151, 4px 2px #374151, 1px 3px #374151, 3px 3px #374151, 4px 3px #f472b6, 1px 4px #374151, 2px 4px #374151, 3px 4px #374151, 4px 4px #374151, 1px 5px #374151, 2px 5px #374151, 3px 5px #374151, 4px 5px #374151, 0px 6px #1f2937, 1px 6px #1f2937, 2px 6px #1f2937, 3px 6px #1f2937, 4px 6px #1f2937, 5px 6px #1f2937, 1px 7px #1f2937, 4px 7px #1f2937, 0px 8px #1f2937, 5px 8px #1f2937; } 50% { box-shadow:2px 0px #374151, 3px 0px #374151, 2px 1px #374151, 3px 1px #374151, 1px 2px #374151, 2px 2px #374151, 3px 2px #374151, 4px 2px #374151, 1px 3px #374151, 3px 3px #374151, 4px 3px #f472b6, 1px 4px #374151, 2px 4px #374151, 3px 4px #374151, 4px 4px #374151, 1px 5px #374151, 2px 5px #374151, 3px 5px #374151, 4px 5px #374151, 0px 6px #1f2937, 1px 6px #1f2937, 2px 6px #1f2937, 3px 6px #1f2937, 4px 6px #1f2937, 5px 6px #1f2937, 0px 7px #1f2937, 5px 7px #1f2937;transform:scale(var(--sha-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterShadowCat"></div>',
  params: [
    { name: "--sha-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--sha-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterShadowCat;
