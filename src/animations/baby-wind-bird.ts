import type { Animation } from "../data/animations";

const BabyWindBird: Animation = {
  slug: "baby-wind-bird",
  name: "Wind Bird Baby",
  category: "pixel",
  description: "Tiny wind bird baby with flapping wings. Swift aerial starter with breeze glow.",
  tags: ["pixel","baby","wind","bird","monster-taming","pixel-art","box-shadow"],
  css: `.babyWindBird { --bwbi-speed:0.4s; --bwbi-scale:3; --bwbi-glow:#94a3b8;
  width:1px;height:1px;position:relative;left:-20px;top:-22px;
  transform:scale(var(--bwbi-scale));filter:drop-shadow(0 0 3px var(--bwbi-glow));
  animation:bwbi-fly var(--bwbi-speed) ease-in-out infinite;}
@keyframes bwbi-fly { 0%,100% { box-shadow:2px 0px #94a3b8, 3px 0px #94a3b8, 4px 0px #94a3b8, 5px 0px #94a3b8, 1px 1px #94a3b8, 2px 1px #94a3b8, 3px 1px #94a3b8, 4px 1px #94a3b8, 5px 1px #94a3b8, 6px 1px #94a3b8, 1px 2px #94a3b8, 3px 2px #22d3ee, 4px 2px #94a3b8, 6px 2px #22d3ee, 1px 3px #94a3b8, 2px 3px #94a3b8, 3px 3px #94a3b8, 4px 3px #94a3b8, 5px 3px #94a3b8, 6px 3px #94a3b8, 2px 4px #94a3b8, 3px 4px #94a3b8, 4px 4px #94a3b8, 5px 4px #94a3b8, 1px 5px #64748b, 2px 5px #64748b, 3px 5px #64748b, 4px 5px #64748b, 5px 5px #64748b, 6px 5px #64748b, 0px 6px #cbd5e1, 1px 6px #cbd5e1, 3px 6px #cbd5e1, 4px 6px #cbd5e1, 6px 6px #cbd5e1, 7px 6px #cbd5e1, 3px 7px #64748b, 4px 7px #64748b, 2px 8px #64748b, 5px 8px #64748b; } 50% { box-shadow:2px 0px #94a3b8, 3px 0px #94a3b8, 4px 0px #94a3b8, 5px 0px #94a3b8, 1px 1px #94a3b8, 2px 1px #94a3b8, 3px 1px #94a3b8, 4px 1px #94a3b8, 5px 1px #94a3b8, 6px 1px #94a3b8, 1px 2px #94a3b8, 3px 2px #22d3ee, 4px 2px #94a3b8, 6px 2px #22d3ee, 1px 3px #94a3b8, 2px 3px #94a3b8, 3px 3px #94a3b8, 4px 3px #94a3b8, 5px 3px #94a3b8, 6px 3px #94a3b8, 2px 4px #94a3b8, 3px 4px #94a3b8, 4px 4px #94a3b8, 5px 4px #94a3b8, 1px 5px #64748b, 2px 5px #64748b, 3px 5px #64748b, 4px 5px #64748b, 5px 5px #64748b, 6px 5px #64748b, 0px 6px #cbd5e1, 3px 6px #cbd5e1, 4px 6px #cbd5e1, 7px 6px #cbd5e1, 3px 7px #64748b, 4px 7px #64748b, 2px 8px #64748b, 5px 8px #64748b;transform:scale(var(--bwbi-scale)) translateY(-3px); } }`,
  html: '<div class="babyWindBird"></div>',
  params: [{name:"--bwbi-speed",label:"Speed",type:"duration",default:0.4,min:0.2,max:2,step:0.1,unit:"s"},{name:"--bwbi-scale",label:"Scale",type:"range",default:3,min:2,max:5,step:0.5,unit:"x"},{name:"--bwbi-glow",label:"Wind Glow",type:"color",default:"#94a3b8"}],
  preview: { width: 300, height: 250, darkBg: true },
};

export default BabyWindBird;
