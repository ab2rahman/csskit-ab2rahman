import type { Animation } from "../data/animations";
const MonsterScorpion: Animation = {
  slug: "monster-scorpion", name: "Death Scorpion", category: "pixel",
  description: "Armored death scorpion with tail strike. Desert predator with venomous stinger.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterScorpion { --msc-speed:1s; --msc-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--msc-scale));
  animation:msc-idle var(--msc-speed) ease-in-out infinite;}
@keyframes msc-idle { 0%,100% { box-shadow:0px 0px #fbbf24, 11px 0px #fbbf24, 1px 1px #fbbf24, 10px 1px #fbbf24, 3px 2px #a16207, 4px 2px #a16207, 7px 2px #a16207, 8px 2px #a16207, 2px 3px #a16207, 3px 3px #a16207, 4px 3px #a16207, 5px 3px #a16207, 6px 3px #a16207, 7px 3px #a16207, 8px 3px #a16207, 9px 3px #a16207, 2px 4px #a16207, 3px 4px #a16207, 4px 4px #a16207, 5px 4px #a16207, 6px 4px #a16207, 7px 4px #a16207, 8px 4px #a16207, 9px 4px #a16207, 3px 5px #a16207, 4px 5px #a16207, 5px 5px #a16207, 6px 5px #a16207, 7px 5px #a16207, 8px 5px #a16207, 4px 6px #92400e, 5px 6px #92400e, 6px 6px #92400e, 7px 6px #92400e, 4px 7px #92400e, 7px 7px #92400e; } 50% { box-shadow:0px 0px #fbbf24, 11px 0px #fbbf24, 1px 1px #fbbf24, 10px 1px #fbbf24, 3px 2px #a16207, 4px 2px #a16207, 7px 2px #a16207, 8px 2px #a16207, 2px 3px #a16207, 3px 3px #a16207, 4px 3px #a16207, 5px 3px #a16207, 6px 3px #a16207, 7px 3px #a16207, 8px 3px #a16207, 9px 3px #a16207, 2px 4px #a16207, 3px 4px #a16207, 4px 4px #a16207, 5px 4px #a16207, 6px 4px #a16207, 7px 4px #a16207, 8px 4px #a16207, 9px 4px #a16207, 3px 5px #a16207, 4px 5px #a16207, 5px 5px #a16207, 6px 5px #a16207, 7px 5px #a16207, 8px 5px #a16207, 4px 6px #92400e, 5px 6px #92400e, 6px 6px #92400e, 7px 6px #92400e, 4px 7px #92400e, 7px 7px #92400e;transform:scale(var(--msc-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterScorpion"></div>',
  params: [
    { name: "--sco-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--sco-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterScorpion;
