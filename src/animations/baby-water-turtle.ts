import type { Animation } from "../data/animations";

const BabyWaterTurtle: Animation = {
  slug: "baby-water-turtle",
  name: "Water Turtle Baby",
  category: "pixel",
  description: "Tiny water turtle baby with bobbing animation. Cute aquatic starter with shell glow.",
  tags: ["pixel","baby","water","turtle","monster-taming","pixel-art","box-shadow"],
  css: `.babyWaterTurtle { --bwt-speed:1.2s; --bwt-scale:3; --bwt-glow:#3b82f6;
  width:1px;height:1px;position:relative;left:-24px;top:-22px;
  transform:scale(var(--bwt-scale));filter:drop-shadow(0 0 4px var(--bwt-glow));
  animation:bwt-bob var(--bwt-speed) ease-in-out infinite;}
@keyframes bwt-bob { 0%,100% { box-shadow:3px 0px #3b82f6, 4px 0px #3b82f6, 5px 0px #3b82f6, 6px 0px #3b82f6, 2px 1px #3b82f6, 3px 1px #3b82f6, 4px 1px #3b82f6, 5px 1px #3b82f6, 6px 1px #3b82f6, 7px 1px #3b82f6, 2px 2px #3b82f6, 4px 2px #164e63, 5px 2px #3b82f6, 7px 2px #22d3ee, 2px 3px #3b82f6, 3px 3px #3b82f6, 4px 3px #3b82f6, 5px 3px #3b82f6, 6px 3px #3b82f6, 7px 3px #3b82f6, 1px 4px #1d4ed8, 2px 4px #1d4ed8, 3px 4px #1d4ed8, 4px 4px #1d4ed8, 5px 4px #1d4ed8, 6px 4px #1d4ed8, 7px 4px #1d4ed8, 8px 4px #1d4ed8, 0px 5px #2563eb, 1px 5px #2563eb, 2px 5px #2563eb, 3px 5px #2563eb, 4px 5px #2563eb, 5px 5px #2563eb, 6px 5px #2563eb, 7px 5px #2563eb, 8px 5px #2563eb, 9px 5px #2563eb, 1px 6px #1d4ed8, 2px 6px #1d4ed8, 3px 6px #1d4ed8, 4px 6px #1d4ed8, 5px 6px #1d4ed8, 6px 6px #1d4ed8, 7px 6px #1d4ed8, 8px 6px #1d4ed8, 2px 7px #60a5fa, 7px 7px #60a5fa, 2px 8px #60a5fa, 3px 8px #60a5fa, 6px 8px #60a5fa, 7px 8px #60a5fa; } 50% { box-shadow:3px 0px #3b82f6, 4px 0px #3b82f6, 5px 0px #3b82f6, 6px 0px #3b82f6, 2px 1px #3b82f6, 3px 1px #3b82f6, 4px 1px #3b82f6, 5px 1px #3b82f6, 6px 1px #3b82f6, 7px 1px #3b82f6, 2px 2px #3b82f6, 4px 2px #164e63, 5px 2px #3b82f6, 7px 2px #22d3ee, 2px 3px #3b82f6, 3px 3px #3b82f6, 4px 3px #3b82f6, 5px 3px #3b82f6, 6px 3px #3b82f6, 7px 3px #3b82f6, 1px 4px #1d4ed8, 2px 4px #1d4ed8, 3px 4px #1d4ed8, 4px 4px #1d4ed8, 5px 4px #1d4ed8, 6px 4px #1d4ed8, 7px 4px #1d4ed8, 8px 4px #1d4ed8, 0px 5px #2563eb, 1px 5px #2563eb, 2px 5px #2563eb, 3px 5px #2563eb, 4px 5px #2563eb, 5px 5px #2563eb, 6px 5px #2563eb, 7px 5px #2563eb, 8px 5px #2563eb, 9px 5px #2563eb, 1px 6px #1d4ed8, 2px 6px #1d4ed8, 3px 6px #1d4ed8, 4px 6px #1d4ed8, 5px 6px #1d4ed8, 6px 6px #1d4ed8, 7px 6px #1d4ed8, 8px 6px #1d4ed8, 2px 7px #60a5fa, 7px 7px #60a5fa, 2px 8px #60a5fa, 7px 8px #60a5fa;transform:scale(var(--bwt-scale)) translateY(-3px); } }`,
  html: '<div class="babyWaterTurtle"></div>',
  params: [{name:"--bwt-speed",label:"Speed",type:"duration",default:1.2,min:0.4,max:4,step:0.2,unit:"s"},{name:"--bwt-scale",label:"Scale",type:"range",default:3,min:2,max:5,step:0.5,unit:"x"},{name:"--bwt-glow",label:"Water Glow",type:"color",default:"#3b82f6"}],
  preview: { width: 300, height: 250, darkBg: true },
};

export default BabyWaterTurtle;
