import type { Animation } from "../data/animations";
const MonsterJellyfish: Animation = {
  slug: "monster-jellyfish", name: "Deep Jellyfish", category: "pixel",
  description: "Bioluminescent deep jellyfish with pulsing tentacles. Ethereal ocean dweller.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterJellyfish { --mje-speed:1s; --mje-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--mje-scale));
  animation:mje-idle var(--mje-speed) ease-in-out infinite;}
@keyframes mje-idle { 0%,100% { box-shadow:3px 0px #c084fc, 4px 0px #c084fc, 5px 0px #c084fc, 6px 0px #c084fc, 2px 1px #c084fc, 3px 1px #c084fc, 4px 1px #c084fc, 5px 1px #c084fc, 6px 1px #c084fc, 7px 1px #c084fc, 2px 2px #c084fc, 4px 2px #c084fc, 5px 2px #c084fc, 7px 2px #c084fc, 2px 3px #c084fc, 3px 3px #c084fc, 4px 3px #c084fc, 5px 3px #c084fc, 6px 3px #c084fc, 7px 3px #c084fc, 2px 4px #c084fc, 3px 4px #c084fc, 4px 4px #c084fc, 5px 4px #c084fc, 6px 4px #c084fc, 7px 4px #c084fc, 3px 5px #c084fc, 4px 5px #c084fc, 5px 5px #c084fc, 6px 5px #c084fc, 2px 6px #a855f7, 4px 6px #a855f7, 5px 6px #a855f7, 7px 6px #a855f7, 1px 7px #a855f7, 4px 7px #a855f7, 5px 7px #a855f7, 8px 7px #a855f7, 0px 8px #7c3aed, 9px 8px #7c3aed; } 50% { box-shadow:3px 0px #c084fc, 4px 0px #c084fc, 5px 0px #c084fc, 6px 0px #c084fc, 2px 1px #c084fc, 3px 1px #c084fc, 4px 1px #c084fc, 5px 1px #c084fc, 6px 1px #c084fc, 7px 1px #c084fc, 2px 2px #c084fc, 4px 2px #c084fc, 5px 2px #c084fc, 7px 2px #c084fc, 2px 3px #c084fc, 3px 3px #c084fc, 4px 3px #c084fc, 5px 3px #c084fc, 6px 3px #c084fc, 7px 3px #c084fc, 2px 4px #c084fc, 3px 4px #c084fc, 4px 4px #c084fc, 5px 4px #c084fc, 6px 4px #c084fc, 7px 4px #c084fc, 3px 5px #c084fc, 4px 5px #c084fc, 5px 5px #c084fc, 6px 5px #c084fc, 2px 6px #a855f7, 5px 6px #a855f7, 8px 6px #a855f7, 1px 7px #a855f7, 8px 7px #a855f7;transform:scale(var(--mje-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterJellyfish"></div>',
  params: [
    { name: "--jel-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--jel-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterJellyfish;
