import type { Animation } from "../data/animations";
const MonsterGhostFlame: Animation = {
  slug: "monster-ghost-flame", name: "Ghost Flame", category: "pixel",
  description: "Eerie ghost flame with flickering wisps. Undead fire spirit from the nether realm.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterGhostFlame { --mgf-speed:1s; --mgf-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--mgf-scale));
  animation:mgf-idle var(--mgf-speed) ease-in-out infinite;}
@keyframes mgf-idle { 0%,100% { box-shadow:4px 0px #67e8f9, 5px 0px #67e8f9, 3px 1px #67e8f9, 4px 1px #67e8f9, 5px 1px #67e8f9, 6px 1px #67e8f9, 2px 2px #67e8f9, 4px 2px #67e8f9, 5px 2px #67e8f9, 7px 2px #67e8f9, 2px 3px #22d3ee, 3px 3px #22d3ee, 4px 3px #22d3ee, 5px 3px #22d3ee, 6px 3px #22d3ee, 7px 3px #22d3ee, 2px 4px #22d3ee, 3px 4px #22d3ee, 4px 4px #22d3ee, 5px 4px #22d3ee, 6px 4px #22d3ee, 7px 4px #22d3ee, 3px 5px #06b6d4, 4px 5px #06b6d4, 5px 5px #06b6d4, 6px 5px #06b6d4, 2px 6px #06b6d4, 4px 6px #06b6d4, 5px 6px #06b6d4, 7px 6px #06b6d4, 1px 7px #0891b2, 4px 7px #0891b2, 5px 7px #0891b2, 8px 7px #0891b2, 0px 8px #0891b2, 4px 8px #0891b2, 5px 8px #0891b2, 9px 8px #0891b2; } 50% { box-shadow:4px 0px #67e8f9, 5px 0px #67e8f9, 3px 1px #67e8f9, 4px 1px #67e8f9, 5px 1px #67e8f9, 6px 1px #67e8f9, 2px 2px #67e8f9, 4px 2px #67e8f9, 5px 2px #67e8f9, 7px 2px #67e8f9, 2px 3px #22d3ee, 3px 3px #22d3ee, 4px 3px #22d3ee, 5px 3px #22d3ee, 6px 3px #22d3ee, 7px 3px #22d3ee, 2px 4px #22d3ee, 3px 4px #22d3ee, 4px 4px #22d3ee, 5px 4px #22d3ee, 6px 4px #22d3ee, 7px 4px #22d3ee, 3px 5px #06b6d4, 4px 5px #06b6d4, 5px 5px #06b6d4, 6px 5px #06b6d4, 2px 6px #06b6d4, 4px 6px #06b6d4, 5px 6px #06b6d4, 7px 6px #06b6d4, 0px 7px #0891b2, 4px 7px #0891b2, 5px 7px #0891b2, 9px 7px #0891b2;transform:scale(var(--mgf-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterGhostFlame"></div>',
  params: [
    { name: "--gho-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--gho-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterGhostFlame;
