import type { Animation } from "../data/animations";

const BabyDarkBat: Animation = {
  slug: "baby-dark-bat",
  name: "Dark Bat Baby",
  category: "pixel",
  description: "Tiny dark bat baby with flapping wings. Cute shadow starter with purple mist glow.",
  tags: ["pixel","baby","dark","bat","monster-taming","pixel-art","box-shadow"],
  css: `.babyDarkBat { --bdb-speed:0.5s; --bdb-scale:3; --bdb-glow:#7c3aed;
  width:1px;height:1px;position:relative;left:-20px;top:-20px;
  transform:scale(var(--bdb-scale));filter:drop-shadow(0 0 4px var(--bdb-glow));
  animation:bdb-flap var(--bdb-speed) ease-in-out infinite;}
@keyframes bdb-flap { 0%,100% { box-shadow:2px 0px #7c3aed, 3px 0px #7c3aed, 4px 0px #7c3aed, 5px 0px #7c3aed, 1px 1px #7c3aed, 2px 1px #7c3aed, 3px 1px #7c3aed, 4px 1px #7c3aed, 5px 1px #7c3aed, 6px 1px #7c3aed, 1px 2px #7c3aed, 3px 2px #fbbf24, 4px 2px #7c3aed, 6px 2px #fbbf24, 1px 3px #7c3aed, 2px 3px #7c3aed, 3px 3px #7c3aed, 4px 3px #7c3aed, 5px 3px #7c3aed, 6px 3px #7c3aed, 2px 4px #7c3aed, 3px 4px #7c3aed, 4px 4px #7c3aed, 5px 4px #7c3aed, 1px 5px #6d28d9, 2px 5px #6d28d9, 5px 5px #6d28d9, 6px 5px #6d28d9, 0px 6px #6d28d9, 1px 6px #6d28d9, 2px 6px #6d28d9, 5px 6px #6d28d9, 6px 6px #6d28d9, 7px 6px #6d28d9, 2px 7px #6d28d9, 5px 7px #6d28d9; } 50% { box-shadow:2px 0px #7c3aed, 3px 0px #7c3aed, 4px 0px #7c3aed, 5px 0px #7c3aed, 1px 1px #7c3aed, 2px 1px #7c3aed, 3px 1px #7c3aed, 4px 1px #7c3aed, 5px 1px #7c3aed, 6px 1px #7c3aed, 1px 2px #7c3aed, 3px 2px #fbbf24, 4px 2px #7c3aed, 6px 2px #fbbf24, 1px 3px #7c3aed, 2px 3px #7c3aed, 3px 3px #7c3aed, 4px 3px #7c3aed, 5px 3px #7c3aed, 6px 3px #7c3aed, 2px 4px #7c3aed, 3px 4px #7c3aed, 4px 4px #7c3aed, 5px 4px #7c3aed, 0px 5px #6d28d9, 1px 5px #6d28d9, 6px 5px #6d28d9, 7px 5px #6d28d9, 0px 6px #6d28d9, 1px 6px #6d28d9, 6px 6px #6d28d9, 7px 6px #6d28d9;transform:scale(var(--bdb-scale)) translateY(-2px); } }`,
  html: '<div class="babyDarkBat"></div>',
  params: [{name:"--bdb-speed",label:"Speed",type:"duration",default:0.5,min:0.2,max:2,step:0.1,unit:"s"},{name:"--bdb-scale",label:"Scale",type:"range",default:3,min:2,max:5,step:0.5,unit:"x"},{name:"--bdb-glow",label:"Shadow Glow",type:"color",default:"#7c3aed"}],
  preview: { width: 300, height: 250, darkBg: true },
};

export default BabyDarkBat;
