import type { Animation } from "../data/animations";

const BabyGrassBulb: Animation = {
  slug: "baby-grass-bulb",
  name: "Grass Bulb Baby",
  category: "pixel",
  description: "Tiny plant bulb baby with swaying leaves. Cute nature starter with leaf glow.",
  tags: ["pixel","baby","grass","bulb","monster-taming","pixel-art","box-shadow"],
  css: `.babyGrassBulb { --bgb-speed:1.5s; --bgb-scale:3; --bgb-glow:#22c55e;
  width:1px;height:1px;position:relative;left:-20px;top:-24px;
  transform:scale(var(--bgb-scale));filter:drop-shadow(0 0 4px var(--bgb-glow));
  animation:bgb-sway var(--bgb-speed) ease-in-out infinite;}
@keyframes bgb-sway { 0%,100% { box-shadow:3px 0px #22c55e, 4px 0px #22c55e, 2px 1px #22c55e, 3px 1px #22c55e, 4px 1px #22c55e, 5px 1px #22c55e, 1px 2px #22c55e, 2px 2px #22c55e, 3px 2px #22c55e, 4px 2px #22c55e, 5px 2px #22c55e, 6px 2px #22c55e, 1px 3px #22c55e, 3px 3px #164e63, 4px 3px #22c55e, 6px 3px #164e63, 1px 4px #22c55e, 2px 4px #22c55e, 3px 4px #22c55e, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 1px 6px #16a34a, 2px 6px #16a34a, 3px 6px #16a34a, 4px 6px #16a34a, 5px 6px #16a34a, 6px 6px #16a34a, 0px 7px #15803d, 1px 7px #15803d, 2px 7px #15803d, 3px 7px #15803d, 4px 7px #15803d, 5px 7px #15803d, 6px 7px #15803d, 7px 7px #15803d, 2px 8px #15803d, 3px 8px #15803d, 4px 8px #15803d, 5px 8px #15803d, 3px 9px #15803d, 4px 9px #15803d; } 50% { box-shadow:3px 0px #4ade80, 4px 0px #4ade80, 2px 1px #4ade80, 3px 1px #4ade80, 4px 1px #4ade80, 5px 1px #4ade80, 1px 2px #22c55e, 2px 2px #22c55e, 3px 2px #22c55e, 4px 2px #22c55e, 5px 2px #22c55e, 6px 2px #22c55e, 1px 3px #22c55e, 3px 3px #164e63, 4px 3px #22c55e, 6px 3px #164e63, 1px 4px #22c55e, 2px 4px #22c55e, 3px 4px #22c55e, 4px 4px #22c55e, 5px 4px #22c55e, 6px 4px #22c55e, 2px 5px #22c55e, 3px 5px #22c55e, 4px 5px #22c55e, 5px 5px #22c55e, 1px 6px #16a34a, 2px 6px #16a34a, 3px 6px #16a34a, 4px 6px #16a34a, 5px 6px #16a34a, 6px 6px #16a34a, 0px 7px #15803d, 1px 7px #15803d, 2px 7px #15803d, 3px 7px #15803d, 4px 7px #15803d, 5px 7px #15803d, 6px 7px #15803d, 7px 7px #15803d, 2px 8px #15803d, 3px 8px #15803d, 4px 8px #15803d, 5px 8px #15803d, 3px 9px #15803d, 4px 9px #15803d;transform:scale(var(--bgb-scale)) rotate(3deg); } }`,
  html: '<div class="babyGrassBulb"></div>',
  params: [{name:"--bgb-speed",label:"Speed",type:"duration",default:1.5,min:0.5,max:5,step:0.25,unit:"s"},{name:"--bgb-scale",label:"Scale",type:"range",default:3,min:2,max:5,step:0.5,unit:"x"},{name:"--bgb-glow",label:"Leaf Glow",type:"color",default:"#22c55e"}],
  preview: { width: 300, height: 250, darkBg: true },
};

export default BabyGrassBulb;
