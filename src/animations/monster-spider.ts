import type { Animation } from "../data/animations";
const MonsterSpider: Animation = {
  slug: "monster-spider", name: "Giant Spider", category: "pixel",
  description: "Venomous giant spider with creeping legs. Eight-legged terror with poisonous bite.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterSpider { --msp-speed:1s; --msp-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--msp-scale));
  animation:msp-idle var(--msp-speed) ease-in-out infinite;}
@keyframes msp-idle { 0%,100% { box-shadow:5px 0px #1e293b, 6px 0px #1e293b, 4px 1px #1e293b, 5px 1px #1e293b, 6px 1px #1e293b, 7px 1px #1e293b, 3px 2px #1e293b, 4px 2px #1e293b, 5px 2px #1e293b, 6px 2px #1e293b, 7px 2px #1e293b, 8px 2px #1e293b, 2px 3px #1e293b, 3px 3px #ef4444, 5px 3px #1e293b, 6px 3px #1e293b, 8px 3px #1e293b, 9px 3px #1e293b, 2px 4px #1e293b, 3px 4px #1e293b, 4px 4px #1e293b, 5px 4px #1e293b, 6px 4px #1e293b, 7px 4px #1e293b, 8px 4px #1e293b, 9px 4px #1e293b, 3px 5px #1e293b, 4px 5px #1e293b, 5px 5px #1e293b, 6px 5px #1e293b, 7px 5px #1e293b, 8px 5px #1e293b, 2px 6px #374151, 3px 6px #374151, 5px 6px #374151, 6px 6px #374151, 8px 6px #374151, 9px 6px #374151, 2px 7px #374151, 5px 7px #374151, 6px 7px #374151, 9px 7px #374151, 0px 8px #374151, 11px 8px #374151; } 50% { box-shadow:5px 0px #1e293b, 6px 0px #1e293b, 4px 1px #1e293b, 5px 1px #1e293b, 6px 1px #1e293b, 7px 1px #1e293b, 3px 2px #1e293b, 4px 2px #1e293b, 5px 2px #1e293b, 6px 2px #1e293b, 7px 2px #1e293b, 8px 2px #1e293b, 2px 3px #1e293b, 3px 3px #ef4444, 5px 3px #1e293b, 6px 3px #1e293b, 8px 3px #1e293b, 9px 3px #1e293b, 2px 4px #1e293b, 3px 4px #1e293b, 4px 4px #1e293b, 5px 4px #1e293b, 6px 4px #1e293b, 7px 4px #1e293b, 8px 4px #1e293b, 9px 4px #1e293b, 3px 5px #1e293b, 4px 5px #1e293b, 5px 5px #1e293b, 6px 5px #1e293b, 7px 5px #1e293b, 8px 5px #1e293b, 2px 6px #374151, 5px 6px #374151, 6px 6px #374151, 9px 6px #374151, 0px 7px #374151, 3px 7px #374151, 4px 7px #374151, 7px 7px #374151, 8px 7px #374151, 11px 7px #374151;transform:scale(var(--msp-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterSpider"></div>',
  params: [
    { name: "--spi-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--spi-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterSpider;
