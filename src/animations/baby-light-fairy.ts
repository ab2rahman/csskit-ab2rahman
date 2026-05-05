import type { Animation } from "../data/animations";

const BabyLightFairy: Animation = {
  slug: "baby-light-fairy",
  name: "Light Fairy Baby",
  category: "pixel",
  description: "Tiny light fairy baby with twinkling glow. Holy radiant starter with divine sparkle.",
  tags: ["pixel","baby","light","fairy","monster-taming","pixel-art","box-shadow"],
  css: `.babyLightFairy { --blf-speed:1s; --blf-scale:3; --blf-glow:#fbbf24;
  width:1px;height:1px;position:relative;left:-24px;top:-24px;
  transform:scale(var(--blf-scale));filter:drop-shadow(0 0 6px var(--blf-glow));
  animation:blf-twinkle var(--blf-speed) ease-in-out infinite;}
@keyframes blf-twinkle { 0%,100% { box-shadow:4px 0px #fef9c3, 5px 0px #fef9c3, 3px 1px #fef9c3, 4px 1px #fef9c3, 5px 1px #fef9c3, 6px 1px #fef9c3, 2px 2px #fef9c3, 3px 2px #fef9c3, 4px 2px #fef9c3, 5px 2px #fef9c3, 6px 2px #fef9c3, 7px 2px #fef9c3, 2px 3px #fef9c3, 4px 3px #fbbf24, 5px 3px #fef9c3, 7px 3px #fbbf24, 2px 4px #fef9c3, 3px 4px #fef9c3, 4px 4px #fef9c3, 5px 4px #fef9c3, 6px 4px #fef9c3, 7px 4px #fef9c3, 3px 5px #fde68a, 4px 5px #fde68a, 5px 5px #fde68a, 6px 5px #fde68a, 2px 6px #fde68a, 3px 6px #fde68a, 4px 6px #fde68a, 5px 6px #fde68a, 6px 6px #fde68a, 7px 6px #fde68a, 1px 7px #fbbf24, 2px 7px #fbbf24, 3px 7px #fbbf24, 4px 7px #fbbf24, 5px 7px #fbbf24, 6px 7px #fbbf24, 7px 7px #fbbf24, 8px 7px #fbbf24, 0px 8px #fbbf24, 1px 8px #fbbf24, 2px 8px #fbbf24, 3px 8px #fbbf24, 4px 8px #fbbf24, 5px 8px #fbbf24, 6px 8px #fbbf24, 7px 8px #fbbf24, 8px 8px #fbbf24, 9px 8px #fbbf24, 4px 9px #fbbf24, 5px 9px #fbbf24; } 50% { box-shadow:4px 0px #ffffff, 5px 0px #ffffff, 3px 1px #ffffff, 4px 1px #ffffff, 5px 1px #ffffff, 6px 1px #ffffff, 2px 2px #fef9c3, 3px 2px #fef9c3, 4px 2px #fef9c3, 5px 2px #fef9c3, 6px 2px #fef9c3, 7px 2px #fef9c3, 2px 3px #fef9c3, 4px 3px #ffffff, 5px 3px #fef9c3, 7px 3px #ffffff, 2px 4px #fef9c3, 3px 4px #fef9c3, 4px 4px #fef9c3, 5px 4px #fef9c3, 6px 4px #fef9c3, 7px 4px #fef9c3, 3px 5px #fde68a, 4px 5px #fde68a, 5px 5px #fde68a, 6px 5px #fde68a, 2px 6px #fde68a, 3px 6px #fde68a, 4px 6px #fde68a, 5px 6px #fde68a, 6px 6px #fde68a, 7px 6px #fde68a, 1px 7px #fbbf24, 2px 7px #fbbf24, 3px 7px #fbbf24, 4px 7px #fbbf24, 5px 7px #fbbf24, 6px 7px #fbbf24, 7px 7px #fbbf24, 8px 7px #fbbf24, 0px 8px #fbbf24, 1px 8px #fbbf24, 2px 8px #fbbf24, 3px 8px #fbbf24, 4px 8px #fbbf24, 5px 8px #fbbf24, 6px 8px #fbbf24, 7px 8px #fbbf24, 8px 8px #fbbf24, 9px 8px #fbbf24, 4px 9px #fbbf24, 5px 9px #fbbf24;filter:drop-shadow(0 0 14px var(--blf-glow));transform:scale(var(--blf-scale)) translateY(-3px) scale(1.05); } }`,
  html: '<div class="babyLightFairy"></div>',
  params: [{name:"--blf-speed",label:"Speed",type:"duration",default:1,min:0.3,max:4,step:0.1,unit:"s"},{name:"--blf-scale",label:"Scale",type:"range",default:3,min:2,max:5,step:0.5,unit:"x"},{name:"--blf-glow",label:"Holy Glow",type:"color",default:"#fbbf24"}],
  preview: { width: 300, height: 250, darkBg: true },
};

export default BabyLightFairy;
