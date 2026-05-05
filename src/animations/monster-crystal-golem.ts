import type { Animation } from "../data/animations";
const MonsterCrystalGolem: Animation = {
  slug: "monster-crystal-golem", name: "Crystal Golem", category: "pixel",
  description: "Living crystal golem with shimmering body. Magical construct of pure crystallized energy.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterCrystalGolem { --mcg-speed:1s; --mcg-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--mcg-scale));
  animation:mcg-idle var(--mcg-speed) ease-in-out infinite;}
@keyframes mcg-idle { 0%,100% { box-shadow:2px 0px #a5f3fc, 3px 0px #a5f3fc, 4px 0px #a5f3fc, 5px 0px #a5f3fc, 6px 0px #a5f3fc, 7px 0px #a5f3fc, 2px 1px #a5f3fc, 3px 1px #a5f3fc, 4px 1px #a5f3fc, 5px 1px #a5f3fc, 6px 1px #a5f3fc, 7px 1px #a5f3fc, 2px 2px #a5f3fc, 4px 2px #a5f3fc, 5px 2px #a5f3fc, 7px 2px #a5f3fc, 2px 3px #a5f3fc, 3px 3px #a5f3fc, 4px 3px #a5f3fc, 5px 3px #a5f3fc, 6px 3px #a5f3fc, 7px 3px #a5f3fc, 0px 4px #67e8f9, 1px 4px #67e8f9, 2px 4px #67e8f9, 3px 4px #67e8f9, 4px 4px #67e8f9, 5px 4px #67e8f9, 6px 4px #67e8f9, 7px 4px #67e8f9, 8px 4px #67e8f9, 9px 4px #67e8f9, 0px 5px #67e8f9, 1px 5px #67e8f9, 2px 5px #67e8f9, 3px 5px #67e8f9, 4px 5px #67e8f9, 5px 5px #67e8f9, 6px 5px #67e8f9, 7px 5px #67e8f9, 8px 5px #67e8f9, 9px 5px #67e8f9, 0px 6px #67e8f9, 1px 6px #67e8f9, 2px 6px #67e8f9, 3px 6px #67e8f9, 4px 6px #67e8f9, 5px 6px #67e8f9, 6px 6px #67e8f9, 7px 6px #67e8f9, 8px 6px #67e8f9, 9px 6px #67e8f9, 1px 7px #22d3ee, 2px 7px #22d3ee, 3px 7px #22d3ee, 4px 7px #22d3ee, 5px 7px #22d3ee, 6px 7px #22d3ee, 7px 7px #22d3ee, 8px 7px #22d3ee, 2px 8px #22d3ee, 3px 8px #22d3ee, 4px 8px #22d3ee, 5px 8px #22d3ee, 6px 8px #22d3ee, 7px 8px #22d3ee, 2px 9px #06b6d4, 3px 9px #06b6d4, 6px 9px #06b6d4, 7px 9px #06b6d4; } 50% { box-shadow:2px 0px #a5f3fc, 3px 0px #a5f3fc, 4px 0px #a5f3fc, 5px 0px #a5f3fc, 6px 0px #a5f3fc, 7px 0px #a5f3fc, 2px 1px #a5f3fc, 3px 1px #a5f3fc, 4px 1px #a5f3fc, 5px 1px #a5f3fc, 6px 1px #a5f3fc, 7px 1px #a5f3fc, 2px 2px #a5f3fc, 4px 2px #a5f3fc, 5px 2px #a5f3fc, 7px 2px #a5f3fc, 2px 3px #a5f3fc, 3px 3px #a5f3fc, 4px 3px #a5f3fc, 5px 3px #a5f3fc, 6px 3px #a5f3fc, 7px 3px #a5f3fc, 0px 4px #67e8f9, 1px 4px #67e8f9, 2px 4px #67e8f9, 3px 4px #67e8f9, 4px 4px #67e8f9, 5px 4px #67e8f9, 6px 4px #67e8f9, 7px 4px #67e8f9, 8px 4px #67e8f9, 9px 4px #67e8f9, 0px 5px #67e8f9, 1px 5px #67e8f9, 2px 5px #67e8f9, 3px 5px #67e8f9, 4px 5px #67e8f9, 5px 5px #67e8f9, 6px 5px #67e8f9, 7px 5px #67e8f9, 8px 5px #67e8f9, 9px 5px #67e8f9, 0px 6px #67e8f9, 1px 6px #67e8f9, 2px 6px #67e8f9, 3px 6px #67e8f9, 4px 6px #67e8f9, 5px 6px #67e8f9, 6px 6px #67e8f9, 7px 6px #67e8f9, 8px 6px #67e8f9, 9px 6px #67e8f9, 1px 7px #22d3ee, 2px 7px #22d3ee, 3px 7px #22d3ee, 4px 7px #22d3ee, 5px 7px #22d3ee, 6px 7px #22d3ee, 7px 7px #22d3ee, 8px 7px #22d3ee, 2px 8px #22d3ee, 3px 8px #22d3ee, 4px 8px #22d3ee, 5px 8px #22d3ee, 6px 8px #22d3ee, 7px 8px #22d3ee, 2px 9px #06b6d4, 3px 9px #06b6d4, 6px 9px #06b6d4, 7px 9px #06b6d4;transform:scale(var(--mcg-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterCrystalGolem"></div>',
  params: [
    { name: "--cry-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--cry-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterCrystalGolem;
