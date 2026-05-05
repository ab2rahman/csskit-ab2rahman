import type { Animation } from "../data/animations";
const MonsterOwl: Animation = {
  slug: "monster-owl", name: " Mystic Owl", category: "pixel",
  description: "Wise mystic owl with head rotation. Nocturnal seer with glowing amber eyes.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterOwl { --mow-speed:1s; --mow-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--mow-scale));
  animation:mow-idle var(--mow-speed) ease-in-out infinite;}
@keyframes mow-idle { 0%,100% { box-shadow:3px 0px #92400e, 4px 0px #92400e, 5px 0px #92400e, 6px 0px #92400e, 2px 1px #92400e, 3px 1px #92400e, 4px 1px #92400e, 5px 1px #92400e, 6px 1px #92400e, 7px 1px #92400e, 2px 2px #92400e, 4px 2px #92400e, 5px 2px #92400e, 7px 2px #92400e, 2px 3px #92400e, 3px 3px #92400e, 4px 3px #92400e, 5px 3px #92400e, 6px 3px #92400e, 7px 3px #92400e, 8px 3px #92400e, 9px 3px #92400e, 3px 4px #92400e, 4px 4px #92400e, 5px 4px #92400e, 6px 4px #92400e, 2px 5px #78350f, 3px 5px #78350f, 4px 5px #78350f, 5px 5px #78350f, 6px 5px #78350f, 7px 5px #78350f, 2px 6px #78350f, 3px 6px #78350f, 6px 6px #78350f, 7px 6px #78350f, 2px 7px #78350f, 7px 7px #78350f; } 50% { box-shadow:3px 0px #92400e, 4px 0px #92400e, 5px 0px #92400e, 6px 0px #92400e, 2px 1px #92400e, 3px 1px #92400e, 4px 1px #92400e, 5px 1px #92400e, 6px 1px #92400e, 7px 1px #92400e, 2px 2px #92400e, 4px 2px #92400e, 5px 2px #92400e, 7px 2px #92400e, 2px 3px #92400e, 3px 3px #92400e, 4px 3px #92400e, 5px 3px #92400e, 6px 3px #92400e, 7px 3px #92400e, 8px 3px #92400e, 9px 3px #92400e, 3px 4px #92400e, 4px 4px #92400e, 5px 4px #92400e, 6px 4px #92400e, 2px 5px #78350f, 3px 5px #78350f, 4px 5px #78350f, 5px 5px #78350f, 6px 5px #78350f, 7px 5px #78350f, 2px 6px #78350f, 3px 6px #78350f, 6px 6px #78350f, 7px 6px #78350f, 2px 7px #78350f, 7px 7px #78350f;transform:scale(var(--mow-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterOwl"></div>',
  params: [
    { name: "--owl-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--owl-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterOwl;
