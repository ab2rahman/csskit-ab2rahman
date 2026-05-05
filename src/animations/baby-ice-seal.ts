import type { Animation } from "../data/animations";

const BabyIceSeal: Animation = {
  slug: "baby-ice-seal",
  name: "Ice Seal Baby",
  category: "pixel",
  description: "Tiny ice seal baby with shivering animation. Cute frozen starter with icy sparkle glow.",
  tags: ["pixel","baby","ice","seal","monster-taming","pixel-art","box-shadow"],
  css: `.babyIceSeal { --bis-speed:1s; --bis-scale:3; --bis-glow:#67e8f9;
  width:1px;height:1px;position:relative;left:-20px;top:-22px;
  transform:scale(var(--bis-scale));filter:drop-shadow(0 0 4px var(--bis-glow));
  animation:bis-shiver var(--bis-speed) ease-in-out infinite;}
@keyframes bis-shiver { 0%,100% { box-shadow:2px 0px #e0f2fe, 3px 0px #e0f2fe, 4px 0px #e0f2fe, 5px 0px #e0f2fe, 1px 1px #e0f2fe, 2px 1px #e0f2fe, 3px 1px #e0f2fe, 4px 1px #e0f2fe, 5px 1px #e0f2fe, 6px 1px #e0f2fe, 1px 2px #bae6fd, 3px 2px #a5f3fc, 4px 2px #bae6fd, 6px 2px #a5f3fc, 1px 3px #bae6fd, 2px 3px #bae6fd, 3px 3px #bae6fd, 4px 3px #bae6fd, 5px 3px #bae6fd, 6px 3px #bae6fd, 2px 4px #bae6fd, 3px 4px #bae6fd, 4px 4px #bae6fd, 5px 4px #bae6fd, 1px 5px #bae6fd, 2px 5px #bae6fd, 3px 5px #bae6fd, 4px 5px #bae6fd, 5px 5px #bae6fd, 6px 5px #bae6fd, 0px 6px #7dd3fc, 1px 6px #bae6fd, 2px 6px #bae6fd, 3px 6px #bae6fd, 4px 6px #bae6fd, 5px 6px #bae6fd, 6px 6px #bae6fd, 7px 6px #7dd3fc, 1px 7px #bae6fd, 2px 7px #bae6fd, 3px 7px #bae6fd, 4px 7px #bae6fd, 5px 7px #bae6fd, 6px 7px #bae6fd, 2px 8px #bae6fd, 5px 8px #bae6fd; } 25% { transform:scale(var(--bis-scale)) translateX(1px); } 50% { box-shadow:2px 0px #ffffff, 3px 0px #ffffff, 4px 0px #ffffff, 5px 0px #ffffff, 1px 1px #ffffff, 2px 1px #ffffff, 3px 1px #ffffff, 4px 1px #ffffff, 5px 1px #ffffff, 6px 1px #ffffff, 1px 2px #e0f2fe, 3px 2px #ffffff, 4px 2px #e0f2fe, 6px 2px #ffffff, 1px 3px #e0f2fe, 2px 3px #e0f2fe, 3px 3px #e0f2fe, 4px 3px #e0f2fe, 5px 3px #e0f2fe, 6px 3px #e0f2fe, 2px 4px #e0f2fe, 3px 4px #e0f2fe, 4px 4px #e0f2fe, 5px 4px #e0f2fe, 1px 5px #e0f2fe, 2px 5px #e0f2fe, 3px 5px #e0f2fe, 4px 5px #e0f2fe, 5px 5px #e0f2fe, 6px 5px #e0f2fe, 0px 6px #bae6fd, 1px 6px #e0f2fe, 2px 6px #e0f2fe, 3px 6px #e0f2fe, 4px 6px #e0f2fe, 5px 6px #e0f2fe, 6px 6px #e0f2fe, 7px 6px #bae6fd, 1px 7px #e0f2fe, 2px 7px #e0f2fe, 3px 7px #e0f2fe, 4px 7px #e0f2fe, 5px 7px #e0f2fe, 6px 7px #e0f2fe, 2px 8px #e0f2fe, 5px 8px #e0f2fe; } 75% { transform:scale(var(--bis-scale)) translateX(-1px); } }`,
  html: '<div class="babyIceSeal"></div>',
  params: [{name:"--bis-speed",label:"Speed",type:"duration",default:1,min:0.3,max:4,step:0.1,unit:"s"},{name:"--bis-scale",label:"Scale",type:"range",default:3,min:2,max:5,step:0.5,unit:"x"},{name:"--bis-glow",label:"Ice Glow",type:"color",default:"#67e8f9"}],
  preview: { width: 300, height: 250, darkBg: true },
};

export default BabyIceSeal;
