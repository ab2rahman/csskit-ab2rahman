import type { Animation } from "../data/animations";

const BabyEarthMole: Animation = {
  slug: "baby-earth-mole",
  name: "Earth Mole Baby",
  category: "pixel",
  description: "Tiny earth mole baby with digging motion. Ground-dwelling starter with rocky glow.",
  tags: ["pixel","baby","earth","mole","monster-taming","pixel-art","box-shadow"],
  css: `.babyEarthMole { --bem-speed:0.8s; --bem2-scale:3; --bem2-glow:#a16207;
  width:1px;height:1px;position:relative;left:-20px;top:-24px;
  transform:scale(var(--bem2-scale));filter:drop-shadow(0 0 4px var(--bem2-glow));
  animation:bem-dig var(--bem-speed) ease-in-out infinite;}
@keyframes bem-dig { 0%,100% { box-shadow:2px 0px #a16207, 3px 0px #a16207, 4px 0px #a16207, 5px 0px #a16207, 1px 1px #a16207, 2px 1px #a16207, 3px 1px #a16207, 4px 1px #a16207, 5px 1px #a16207, 6px 1px #a16207, 1px 2px #a16207, 3px 2px #fef08a, 4px 2px #a16207, 6px 2px #fef08a, 1px 3px #a16207, 2px 3px #a16207, 3px 3px #a16207, 4px 3px #a16207, 5px 3px #a16207, 6px 3px #a16207, 1px 4px #a16207, 2px 4px #a16207, 3px 4px #a16207, 4px 4px #a16207, 5px 4px #a16207, 6px 4px #a16207, 2px 5px #92400e, 3px 5px #92400e, 4px 5px #92400e, 5px 5px #92400e, 1px 6px #92400e, 2px 6px #92400e, 3px 6px #92400e, 4px 6px #92400e, 5px 6px #92400e, 6px 6px #92400e, 0px 7px #92400e, 1px 7px #92400e, 2px 7px #92400e, 3px 7px #92400e, 4px 7px #92400e, 5px 7px #92400e, 6px 7px #92400e, 7px 7px #92400e, 2px 8px #92400e, 5px 8px #92400e, 2px 9px #92400e, 5px 9px #92400e; } 50% { box-shadow:2px 0px #ca8a04, 3px 0px #ca8a04, 4px 0px #ca8a04, 5px 0px #ca8a04, 1px 1px #ca8a04, 2px 1px #ca8a04, 3px 1px #ca8a04, 4px 1px #ca8a04, 5px 1px #ca8a04, 6px 1px #ca8a04, 1px 2px #ca8a04, 3px 2px #fef08a, 4px 2px #ca8a04, 6px 2px #fef08a, 1px 3px #ca8a04, 2px 3px #ca8a04, 3px 3px #ca8a04, 4px 3px #ca8a04, 5px 3px #ca8a04, 6px 3px #ca8a04, 1px 4px #ca8a04, 2px 4px #ca8a04, 3px 4px #ca8a04, 4px 4px #ca8a04, 5px 4px #ca8a04, 6px 4px #ca8a04, 2px 5px #a16207, 3px 5px #a16207, 4px 5px #a16207, 5px 5px #a16207, 1px 6px #a16207, 2px 6px #a16207, 3px 6px #a16207, 4px 6px #a16207, 5px 6px #a16207, 6px 6px #a16207, 0px 7px #a16207, 1px 7px #a16207, 2px 7px #a16207, 3px 7px #a16207, 4px 7px #a16207, 5px 7px #a16207, 6px 7px #a16207, 7px 7px #a16207, 2px 8px #a16207, 5px 8px #a16207, 2px 9px #a16207, 5px 9px #a16207;transform:scale(var(--bem2-scale)) translateY(2px); } }`,
  html: '<div class="babyEarthMole"></div>',
  params: [{name:"--bem-speed",label:"Speed",type:"duration",default:0.8,min:0.3,max:3,step:0.1,unit:"s"},{name:"--bem2-scale",label:"Scale",type:"range",default:3,min:2,max:5,step:0.5,unit:"x"},{name:"--bem2-glow",label:"Earth Glow",type:"color",default:"#a16207"}],
  preview: { width: 300, height: 250, darkBg: true },
};

export default BabyEarthMole;
