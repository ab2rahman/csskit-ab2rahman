import type { Animation } from "../data/animations";
const MonsterEarthGolem: Animation = {
  slug: "monster-earth-golem", name: "Earth Golem", category: "pixel",
  description: "Massive earth golem with rocky body. Immovable stone guardian of ancient ruins.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterEarthGolem { --ear-speed:1s; --ear-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--ear-scale));
  animation:ear-idle var(--ear-speed) ease-in-out infinite;}
@keyframes ear-idle { 0%,100% { box-shadow:2px 0px #a16207, 3px 0px #a16207, 4px 0px #a16207, 5px 0px #a16207, 6px 0px #a16207, 7px 0px #a16207, 2px 1px #a16207, 4px 1px #a16207, 5px 1px #a16207, 7px 1px #a16207, 2px 2px #a16207, 3px 2px #a16207, 4px 2px #a16207, 5px 2px #a16207, 6px 2px #a16207, 7px 2px #a16207, 8px 2px #a16207, 9px 2px #a16207, 0px 3px #92400e, 1px 3px #92400e, 2px 3px #92400e, 3px 3px #92400e, 4px 3px #92400e, 5px 3px #92400e, 6px 3px #92400e, 7px 3px #92400e, 8px 3px #92400e, 9px 3px #92400e, 0px 4px #92400e, 1px 4px #92400e, 2px 4px #92400e, 3px 4px #92400e, 4px 4px #92400e, 5px 4px #92400e, 6px 4px #92400e, 7px 4px #92400e, 8px 4px #92400e, 9px 4px #92400e, 0px 5px #92400e, 1px 5px #92400e, 2px 5px #92400e, 3px 5px #92400e, 4px 5px #92400e, 5px 5px #92400e, 6px 5px #92400e, 7px 5px #92400e, 8px 5px #92400e, 9px 5px #92400e, 1px 6px #78350f, 2px 6px #78350f, 3px 6px #78350f, 4px 6px #78350f, 5px 6px #78350f, 6px 6px #78350f, 7px 6px #78350f, 8px 6px #78350f, 2px 7px #78350f, 3px 7px #78350f, 4px 7px #78350f, 5px 7px #78350f, 6px 7px #78350f, 7px 7px #78350f, 2px 8px #78350f, 3px 8px #78350f, 6px 8px #78350f, 7px 8px #78350f; } 50% { box-shadow:2px 0px #a16207, 3px 0px #a16207, 4px 0px #a16207, 5px 0px #a16207, 6px 0px #a16207, 7px 0px #a16207, 2px 1px #a16207, 4px 1px #a16207, 5px 1px #a16207, 7px 1px #a16207, 2px 2px #a16207, 3px 2px #a16207, 4px 2px #a16207, 5px 2px #a16207, 6px 2px #a16207, 7px 2px #a16207, 8px 2px #a16207, 9px 2px #a16207, 0px 3px #92400e, 1px 3px #92400e, 2px 3px #92400e, 3px 3px #92400e, 4px 3px #92400e, 5px 3px #92400e, 6px 3px #92400e, 7px 3px #92400e, 8px 3px #92400e, 9px 3px #92400e, 0px 4px #92400e, 1px 4px #92400e, 2px 4px #92400e, 3px 4px #92400e, 4px 4px #92400e, 5px 4px #92400e, 6px 4px #92400e, 7px 4px #92400e, 8px 4px #92400e, 9px 4px #92400e, 0px 5px #92400e, 1px 5px #92400e, 2px 5px #92400e, 3px 5px #92400e, 4px 5px #92400e, 5px 5px #92400e, 6px 5px #92400e, 7px 5px #92400e, 8px 5px #92400e, 9px 5px #92400e, 1px 6px #78350f, 2px 6px #78350f, 3px 6px #78350f, 4px 6px #78350f, 5px 6px #78350f, 6px 6px #78350f, 7px 6px #78350f, 8px 6px #78350f, 2px 7px #78350f, 3px 7px #78350f, 4px 7px #78350f, 5px 7px #78350f, 6px 7px #78350f, 7px 7px #78350f, 2px 8px #78350f, 3px 8px #78350f, 6px 8px #78350f, 7px 8px #78350f;transform:scale(var(--ear-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterEarthGolem"></div>',
  params: [
    { name: "--ear-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--ear-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterEarthGolem;
