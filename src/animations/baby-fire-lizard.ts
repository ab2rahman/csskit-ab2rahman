import type { Animation } from "../data/animations";

const BabyFireLizard: Animation = {
  slug: "baby-fire-lizard",
  name: "Fire Lizard Baby",
  category: "pixel",
  description: "Tiny fire lizard baby with flickering tail flame. Cute starter monster with ember glow.",
  tags: ["pixel","baby","fire","lizard","monster-taming","pixel-art","box-shadow"],
  css: `.babyFireLizard { --bfl-speed:0.8s; --bfl-scale:3; --bfl-glow:#f97316;
  width:1px;height:1px;position:relative;left:-20px;top:-22px;
  transform:scale(var(--bfl-scale));filter:drop-shadow(0 0 4px var(--bfl-glow));
  animation:bfl-idle var(--bfl-speed) ease-in-out infinite;}
@keyframes bfl-idle { 0%,100% { box-shadow:2px 0px #f97316, 3px 0px #f97316, 4px 0px #f97316, 5px 0px #f97316, 1px 1px #f97316, 2px 1px #f97316, 3px 1px #f97316, 4px 1px #f97316, 5px 1px #f97316, 6px 1px #f97316, 1px 2px #ef4444, 3px 2px #164e63, 4px 2px #ef4444, 6px 2px #164e63, 1px 3px #ef4444, 2px 3px #ef4444, 3px 3px #ef4444, 4px 3px #ef4444, 5px 3px #ef4444, 6px 3px #ef4444, 2px 4px #ef4444, 3px 4px #ef4444, 4px 4px #ef4444, 5px 4px #ef4444, 1px 5px #dc2626, 2px 5px #dc2626, 3px 5px #dc2626, 4px 5px #dc2626, 5px 5px #dc2626, 6px 5px #dc2626, 0px 6px #dc2626, 1px 6px #dc2626, 2px 6px #dc2626, 3px 6px #dc2626, 4px 6px #dc2626, 5px 6px #dc2626, 6px 6px #dc2626, 7px 6px #dc2626, 1px 7px #b91c1c, 3px 7px #b91c1c, 4px 7px #b91c1c, 6px 7px #b91c1c, 0px 8px #b91c1c, 7px 8px #b91c1c; } 50% { box-shadow:2px 0px #f97316, 3px 0px #f97316, 4px 0px #f97316, 5px 0px #f97316, 1px 1px #f97316, 2px 1px #f97316, 3px 1px #f97316, 4px 1px #f97316, 5px 1px #f97316, 6px 1px #f97316, 1px 2px #ef4444, 3px 2px #164e63, 4px 2px #ef4444, 6px 2px #164e63, 1px 3px #ef4444, 2px 3px #ef4444, 3px 3px #ef4444, 4px 3px #ef4444, 5px 3px #ef4444, 6px 3px #ef4444, 2px 4px #ef4444, 3px 4px #ef4444, 4px 4px #ef4444, 5px 4px #ef4444, 1px 5px #dc2626, 2px 5px #dc2626, 3px 5px #dc2626, 4px 5px #dc2626, 5px 5px #dc2626, 6px 5px #dc2626, 0px 6px #dc2626, 1px 6px #dc2626, 2px 6px #dc2626, 3px 6px #dc2626, 4px 6px #dc2626, 5px 6px #dc2626, 6px 6px #dc2626, 7px 6px #dc2626, 0px 7px #b91c1c, 3px 7px #b91c1c, 4px 7px #b91c1c, 7px 7px #b91c1c, 7px 8px #b91c1c;transform:scale(var(--bfl-scale)) translateY(-2px); } }`,
  html: '<div class="babyFireLizard"></div>',
  params: [{name:"--bfl-speed",label:"Speed",type:"duration",default:0.8,min:0.3,max:3,step:0.1,unit:"s"},{name:"--bfl-scale",label:"Scale",type:"range",default:3,min:2,max:5,step:0.5,unit:"x"},{name:"--bfl-glow",label:"Flame Glow",type:"color",default:"#f97316"}],
  preview: { width: 300, height: 250, darkBg: true },
};

export default BabyFireLizard;
