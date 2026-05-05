import type { Animation } from "../data/animations";

const BabyElectricMouse: Animation = {
  slug: "baby-electric-mouse",
  name: "Electric Mouse Baby",
  category: "pixel",
  description: "Tiny electric mouse baby with sparky cheeks. Cute electric starter with lightning glow.",
  tags: ["pixel","baby","electric","mouse","monster-taming","pixel-art","box-shadow"],
  css: `.babyElectricMouse { --bem-speed:0.6s; --bem-scale:3; --bem-glow:#facc15;
  width:1px;height:1px;position:relative;left:-24px;top:-24px;
  transform:scale(var(--bem-scale));filter:drop-shadow(0 0 4px var(--bem-glow));
  animation:bem-hop var(--bem-speed) ease-in-out infinite;}
@keyframes bem-hop { 0%,100% { box-shadow:0px 0px #fbbf24, 1px 0px #fbbf24, 8px 0px #fbbf24, 9px 0px #fbbf24, 1px 1px #fbbf24, 2px 1px #fbbf24, 7px 1px #fbbf24, 8px 1px #fbbf24, 2px 2px #facc15, 3px 2px #facc15, 4px 2px #facc15, 5px 2px #facc15, 6px 2px #facc15, 7px 2px #facc15, 2px 3px #facc15, 4px 3px #22d3ee, 5px 3px #22d3ee, 7px 3px #facc15, 2px 4px #facc15, 3px 4px #facc15, 4px 4px #facc15, 5px 4px #facc15, 6px 4px #facc15, 7px 4px #facc15, 2px 5px #facc15, 3px 5px #facc15, 4px 5px #f472b6, 5px 5px #f472b6, 6px 5px #facc15, 7px 5px #facc15, 3px 6px #facc15, 4px 6px #facc15, 5px 6px #facc15, 6px 6px #facc15, 2px 8px #facc15, 7px 8px #facc15, 2px 9px #facc15, 3px 9px #facc15, 6px 9px #facc15, 7px 9px #facc15; } 50% { box-shadow:0px 0px #fbbf24, 1px 0px #fbbf24, 8px 0px #fbbf24, 9px 0px #fbbf24, 1px 1px #fbbf24, 2px 1px #fbbf24, 7px 1px #fbbf24, 8px 1px #fbbf24, 2px 2px #facc15, 3px 2px #facc15, 4px 2px #facc15, 5px 2px #facc15, 6px 2px #facc15, 7px 2px #facc15, 2px 3px #facc15, 4px 3px #22d3ee, 5px 3px #22d3ee, 7px 3px #facc15, 2px 4px #facc15, 3px 4px #facc15, 4px 4px #facc15, 5px 4px #facc15, 6px 4px #facc15, 7px 4px #facc15, 2px 5px #facc15, 3px 5px #facc15, 4px 5px #f472b6, 5px 5px #f472b6, 6px 5px #facc15, 7px 5px #facc15, 3px 6px #facc15, 4px 6px #facc15, 5px 6px #facc15, 6px 6px #facc15, 2px 8px #facc15, 7px 8px #facc15, 2px 9px #facc15, 7px 9px #facc15;transform:scale(var(--bem-scale)) translateY(-4px);filter:drop-shadow(0 0 10px var(--bem-glow)); } }`,
  html: '<div class="babyElectricMouse"></div>',
  params: [{name:"--bem-speed",label:"Speed",type:"duration",default:0.6,min:0.2,max:2,step:0.1,unit:"s"},{name:"--bem-scale",label:"Scale",type:"range",default:3,min:2,max:5,step:0.5,unit:"x"},{name:"--bem-glow",label:"Spark Glow",type:"color",default:"#facc15"}],
  preview: { width: 300, height: 250, darkBg: true },
};

export default BabyElectricMouse;
