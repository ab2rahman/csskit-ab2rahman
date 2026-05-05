import type { Animation } from "../data/animations";
const MonsterVenomPlant: Animation = {
  slug: "monster-venom-plant", name: "Venom Plant", category: "pixel",
  description: "Carnivorous venom plant with dripping toxins. Carnivorous flora that poisons prey.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterVenomPlant { --ven-speed:1s; --ven-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--ven-scale));
  animation:ven-idle var(--ven-speed) ease-in-out infinite;}
@keyframes ven-idle { 0%,100% { box-shadow:4px 0px #ef4444, 5px 0px #ef4444, 3px 1px #ef4444, 4px 1px #ef4444, 5px 1px #ef4444, 6px 1px #ef4444, 2px 2px #ef4444, 4px 2px #ef4444, 5px 2px #ef4444, 7px 2px #ef4444, 2px 3px #22c55e, 3px 3px #22c55e, 4px 3px #22c55e, 5px 3px #22c55e, 6px 3px #22c55e, 7px 3px #22c55e, 1px 4px #22c55e, 3px 4px #22c55e, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 8px 4px #22c55e, 1px 5px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 6px 5px #22c55e, 7px 5px #22c55e, 8px 5px #22c55e, 0px 6px #16a34a, 1px 6px #16a34a, 2px 6px #16a34a, 3px 6px #16a34a, 4px 6px #16a34a, 5px 6px #16a34a, 6px 6px #16a34a, 7px 6px #16a34a, 8px 6px #16a34a, 9px 6px #16a34a, 2px 7px #16a34a, 3px 7px #16a34a, 4px 7px #16a34a, 5px 7px #16a34a, 6px 7px #16a34a, 7px 7px #16a34a, 3px 8px #16a34a, 4px 8px #16a34a, 5px 8px #16a34a, 6px 8px #16a34a; } 50% { box-shadow:4px 0px #ef4444, 5px 0px #ef4444, 3px 1px #ef4444, 4px 1px #ef4444, 5px 1px #ef4444, 6px 1px #ef4444, 2px 2px #ef4444, 4px 2px #ef4444, 5px 2px #ef4444, 7px 2px #ef4444, 2px 3px #22c55e, 3px 3px #22c55e, 4px 3px #22c55e, 5px 3px #22c55e, 6px 3px #22c55e, 7px 3px #22c55e, 1px 4px #22c55e, 3px 4px #22c55e, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 8px 4px #22c55e, 1px 5px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 6px 5px #22c55e, 7px 5px #22c55e, 8px 5px #22c55e, 0px 6px #16a34a, 1px 6px #16a34a, 2px 6px #16a34a, 3px 6px #16a34a, 4px 6px #16a34a, 5px 6px #16a34a, 6px 6px #16a34a, 7px 6px #16a34a, 8px 6px #16a34a, 9px 6px #16a34a, 2px 7px #16a34a, 3px 7px #16a34a, 4px 7px #16a34a, 5px 7px #16a34a, 6px 7px #16a34a, 7px 7px #16a34a, 3px 8px #16a34a, 4px 8px #16a34a, 5px 8px #16a34a, 6px 8px #16a34a;transform:scale(var(--ven-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterVenomPlant"></div>',
  params: [
    { name: "--ven-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--ven-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterVenomPlant;
