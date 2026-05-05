import type { Animation } from "../data/animations";
const MonsterThunderBird: Animation = {
  slug: "monster-thunder-bird", name: "Thunder Bird", category: "pixel",
  description: "Majestic thunder bird with sparking wings. Sky lord that commands lightning bolts.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterThunderBird { --thu-speed:1s; --thu-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--thu-scale));
  animation:thu-idle var(--thu-speed) ease-in-out infinite;}
@keyframes thu-idle { 0%,100% { box-shadow:4px 0px #eab308, 5px 0px #eab308, 3px 1px #eab308, 4px 1px #eab308, 5px 1px #eab308, 6px 1px #eab308, 2px 2px #eab308, 4px 2px #eab308, 5px 2px #eab308, 7px 2px #facc15, 2px 3px #eab308, 3px 3px #eab308, 4px 3px #eab308, 5px 3px #eab308, 6px 3px #eab308, 7px 3px #eab308, 0px 4px #eab308, 1px 4px #eab308, 2px 4px #eab308, 3px 4px #eab308, 4px 4px #eab308, 5px 4px #eab308, 6px 4px #eab308, 7px 4px #eab308, 8px 4px #eab308, 9px 4px #eab308, 0px 5px #fbbf24, 1px 5px #fbbf24, 4px 5px #fbbf24, 5px 5px #fbbf24, 8px 5px #fbbf24, 9px 5px #fbbf24, 2px 6px #a16207, 3px 6px #a16207, 4px 6px #a16207, 5px 6px #a16207, 3px 7px #a16207, 4px 7px #a16207, 2px 8px #a16207, 5px 8px #a16207; } 50% { box-shadow:4px 0px #eab308, 5px 0px #eab308, 3px 1px #eab308, 4px 1px #eab308, 5px 1px #eab308, 6px 1px #eab308, 2px 2px #eab308, 4px 2px #eab308, 5px 2px #eab308, 7px 2px #facc15, 2px 3px #eab308, 3px 3px #eab308, 4px 3px #eab308, 5px 3px #eab308, 6px 3px #eab308, 7px 3px #eab308, 0px 4px #eab308, 1px 4px #eab308, 2px 4px #eab308, 3px 4px #eab308, 4px 4px #eab308, 5px 4px #eab308, 6px 4px #eab308, 7px 4px #eab308, 8px 4px #eab308, 9px 4px #eab308, 0px 5px #fbbf24, 4px 5px #fbbf24, 5px 5px #fbbf24, 9px 5px #fbbf24, 3px 6px #a16207, 4px 6px #a16207, 5px 6px #a16207, 6px 6px #a16207, 3px 7px #a16207, 4px 7px #a16207, 2px 8px #a16207, 5px 8px #a16207;transform:scale(var(--thu-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterThunderBird"></div>',
  params: [
    { name: "--thu-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--thu-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterThunderBird;
