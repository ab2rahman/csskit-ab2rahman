import type { Animation } from "../data/animations";
const MonsterMushroom: Animation = {
  slug: "monster-mushroom", name: "Fungal Shroom", category: "pixel",
  description: "Animated fungal mushroom with swaying cap. Poisonous forest dweller with spore release.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterMushroom { --mfu-speed:1s; --mfu-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--mfu-scale));
  animation:mfu-idle var(--mfu-speed) ease-in-out infinite;}
@keyframes mfu-idle { 0%,100% { box-shadow:2px 0px #dc2626, 3px 0px #dc2626, 4px 0px #dc2626, 5px 0px #dc2626, 6px 0px #dc2626, 7px 0px #dc2626, 2px 1px #dc2626, 3px 1px #dc2626, 4px 1px #dc2626, 5px 1px #dc2626, 6px 1px #dc2626, 7px 1px #dc2626, 8px 1px #ef4444, 9px 1px #ef4444, 1px 2px #ef4444, 2px 2px #dc2626, 3px 2px #dc2626, 4px 2px #dc2626, 5px 2px #dc2626, 6px 2px #dc2626, 7px 2px #dc2626, 8px 2px #ef4444, 1px 3px #ef4444, 3px 3px #dc2626, 4px 3px #dc2626, 5px 3px #dc2626, 6px 3px #dc2626, 8px 3px #ef4444, 0px 4px #ef4444, 1px 4px #ef4444, 2px 4px #f1f5f9, 3px 4px #f1f5f9, 4px 4px #f1f5f9, 5px 4px #f1f5f9, 6px 4px #f1f5f9, 7px 4px #f1f5f9, 8px 4px #ef4444, 9px 4px #ef4444, 3px 5px #f1f5f9, 4px 5px #f1f5f9, 5px 5px #f1f5f9, 6px 5px #f1f5f9, 3px 6px #f1f5f9, 4px 6px #f1f5f9, 5px 6px #f1f5f9, 6px 6px #f1f5f9, 3px 7px #f1f5f9, 4px 7px #f1f5f9, 5px 7px #f1f5f9, 6px 7px #f1f5f9, 2px 8px #f1f5f9, 3px 8px #f1f5f9, 6px 8px #f1f5f9, 7px 8px #f1f5f9; } 50% { box-shadow:2px 0px #dc2626, 3px 0px #dc2626, 4px 0px #dc2626, 5px 0px #dc2626, 6px 0px #dc2626, 7px 0px #dc2626, 2px 1px #dc2626, 3px 1px #dc2626, 4px 1px #dc2626, 5px 1px #dc2626, 6px 1px #dc2626, 7px 1px #dc2626, 8px 1px #ef4444, 9px 1px #ef4444, 1px 2px #ef4444, 2px 2px #dc2626, 3px 2px #dc2626, 4px 2px #dc2626, 5px 2px #dc2626, 6px 2px #dc2626, 7px 2px #dc2626, 8px 2px #ef4444, 1px 3px #ef4444, 3px 3px #dc2626, 4px 3px #dc2626, 5px 3px #dc2626, 6px 3px #dc2626, 8px 3px #ef4444, 0px 4px #ef4444, 1px 4px #ef4444, 2px 4px #f1f5f9, 3px 4px #f1f5f9, 4px 4px #f1f5f9, 5px 4px #f1f5f9, 6px 4px #f1f5f9, 7px 4px #f1f5f9, 8px 4px #ef4444, 9px 4px #ef4444, 3px 5px #f1f5f9, 4px 5px #f1f5f9, 5px 5px #f1f5f9, 6px 5px #f1f5f9, 3px 6px #f1f5f9, 4px 6px #f1f5f9, 5px 6px #f1f5f9, 6px 6px #f1f5f9, 3px 7px #f1f5f9, 4px 7px #f1f5f9, 5px 7px #f1f5f9, 6px 7px #f1f5f9, 2px 8px #f1f5f9, 3px 8px #f1f5f9, 6px 8px #f1f5f9, 7px 8px #f1f5f9;transform:scale(var(--mfu-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterMushroom"></div>',
  params: [
    { name: "--mus-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--mus-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterMushroom;
