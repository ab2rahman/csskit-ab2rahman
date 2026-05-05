import type { Animation } from "../data/animations";
const MonsterIceWyrm: Animation = {
  slug: "monster-ice-wyrm", name: "Ice Wyrm", category: "pixel",
  description: "Frozen ice wyrm with crystalline scales. Serpentine beast of the frozen wastes.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterIceWyrm { --ice-speed:1s; --ice-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--ice-scale));
  animation:ice-idle var(--ice-speed) ease-in-out infinite;}
@keyframes ice-idle { 0%,100% { box-shadow:2px 0px #a5f3fc, 3px 0px #a5f3fc, 4px 0px #a5f3fc, 5px 0px #a5f3fc, 2px 1px #a5f3fc, 4px 1px #a5f3fc, 5px 1px #a5f3fc, 2px 2px #a5f3fc, 3px 2px #a5f3fc, 4px 2px #a5f3fc, 5px 2px #a5f3fc, 6px 2px #a5f3fc, 7px 2px #a5f3fc, 2px 3px #67e8f9, 3px 3px #67e8f9, 4px 3px #67e8f9, 5px 3px #67e8f9, 2px 4px #67e8f9, 3px 4px #67e8f9, 4px 4px #67e8f9, 5px 4px #67e8f9, 1px 5px #67e8f9, 2px 5px #67e8f9, 3px 5px #67e8f9, 4px 5px #67e8f9, 5px 5px #67e8f9, 6px 5px #67e8f9, 0px 6px #22d3ee, 1px 6px #22d3ee, 2px 6px #22d3ee, 3px 6px #22d3ee, 4px 6px #22d3ee, 5px 6px #22d3ee, 6px 6px #22d3ee, 7px 6px #22d3ee, 1px 7px #22d3ee, 2px 7px #22d3ee, 3px 7px #22d3ee, 4px 7px #22d3ee, 5px 7px #22d3ee, 6px 7px #22d3ee, 2px 8px #22d3ee, 3px 8px #22d3ee, 4px 8px #22d3ee, 5px 8px #22d3ee, 2px 9px #22d3ee, 3px 9px #22d3ee, 5px 9px #22d3ee, 6px 9px #22d3ee; } 50% { box-shadow:2px 0px #a5f3fc, 3px 0px #a5f3fc, 4px 0px #a5f3fc, 5px 0px #a5f3fc, 2px 1px #a5f3fc, 4px 1px #a5f3fc, 5px 1px #a5f3fc, 2px 2px #a5f3fc, 3px 2px #a5f3fc, 4px 2px #a5f3fc, 5px 2px #a5f3fc, 6px 2px #a5f3fc, 7px 2px #a5f3fc, 2px 3px #67e8f9, 3px 3px #67e8f9, 4px 3px #67e8f9, 5px 3px #67e8f9, 2px 4px #67e8f9, 3px 4px #67e8f9, 4px 4px #67e8f9, 5px 4px #67e8f9, 1px 5px #67e8f9, 2px 5px #67e8f9, 3px 5px #67e8f9, 4px 5px #67e8f9, 5px 5px #67e8f9, 6px 5px #67e8f9, 0px 6px #22d3ee, 1px 6px #22d3ee, 2px 6px #22d3ee, 3px 6px #22d3ee, 4px 6px #22d3ee, 5px 6px #22d3ee, 6px 6px #22d3ee, 7px 6px #22d3ee, 1px 7px #22d3ee, 2px 7px #22d3ee, 3px 7px #22d3ee, 4px 7px #22d3ee, 5px 7px #22d3ee, 6px 7px #22d3ee, 2px 8px #22d3ee, 3px 8px #22d3ee, 4px 8px #22d3ee, 5px 8px #22d3ee, 2px 9px #22d3ee, 3px 9px #22d3ee, 6px 9px #22d3ee, 7px 9px #22d3ee;transform:scale(var(--ice-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterIceWyrm"></div>',
  params: [
    { name: "--ice-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--ice-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterIceWyrm;
