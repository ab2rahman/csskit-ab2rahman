import type { Animation } from "../data/animations";

const BabyPsychicEye: Animation = {
  slug: "baby-psychic-eye",
  name: "Psychic Eye Baby",
  category: "pixel",
  description: "Tiny psychic eye creature with pulsing vision. Mysterious starter with mind glow.",
  tags: ["pixel","baby","psychic","eye","monster-taming","pixel-art","box-shadow"],
  css: `.babyPsychicEye { --bpe-speed:1.5s; --bpe-scale:3; --bpe-glow:#d946ef;
  width:1px;height:1px;position:relative;left:-20px;top:-24px;
  transform:scale(var(--bpe-scale));filter:drop-shadow(0 0 6px var(--bpe-glow));
  animation:bpe-pulse var(--bpe-speed) ease-in-out infinite;}
@keyframes bpe-pulse { 0%,100% { box-shadow:2px 0px #d946ef, 3px 0px #d946ef, 4px 0px #d946ef, 5px 0px #d946ef, 1px 1px #d946ef, 2px 1px #d946ef, 3px 1px #d946ef, 4px 1px #d946ef, 5px 1px #d946ef, 6px 1px #d946ef, 0px 2px #d946ef, 1px 2px #d946ef, 2px 2px #d946ef, 3px 2px #d946ef, 4px 2px #d946ef, 5px 2px #d946ef, 6px 2px #d946ef, 7px 2px #d946ef, 0px 3px #f0abfc, 1px 3px #f0abfc, 2px 3px #f0abfc, 5px 3px #f0abfc, 6px 3px #f0abfc, 7px 3px #f0abfc, 0px 4px #f0abfc, 1px 4px #f0abfc, 2px 4px #f0abfc, 5px 4px #f0abfc, 6px 4px #f0abfc, 7px 4px #f0abfc, 0px 5px #d946ef, 1px 5px #d946ef, 2px 5px #d946ef, 3px 5px #d946ef, 4px 5px #d946ef, 5px 5px #d946ef, 6px 5px #d946ef, 7px 5px #d946ef, 1px 6px #d946ef, 2px 6px #d946ef, 3px 6px #d946ef, 4px 6px #d946ef, 5px 6px #d946ef, 6px 6px #d946ef, 2px 7px #d946ef, 3px 7px #d946ef, 4px 7px #d946ef, 5px 7px #d946ef, 3px 8px #d946ef, 4px 8px #d946ef, 2px 9px #d946ef, 5px 9px #d946ef; } 50% { box-shadow:2px 0px #e879f9, 3px 0px #e879f9, 4px 0px #e879f9, 5px 0px #e879f9, 1px 1px #e879f9, 2px 1px #e879f9, 3px 1px #e879f9, 4px 1px #e879f9, 5px 1px #e879f9, 6px 1px #e879f9, 0px 2px #e879f9, 1px 2px #e879f9, 2px 2px #e879f9, 3px 2px #e879f9, 4px 2px #e879f9, 5px 2px #e879f9, 6px 2px #e879f9, 7px 2px #e879f9, 0px 3px #f0abfc, 1px 3px #f0abfc, 2px 3px #f0abfc, 5px 3px #f0abfc, 6px 3px #f0abfc, 7px 3px #f0abfc, 0px 4px #f0abfc, 1px 4px #f0abfc, 2px 4px #f0abfc, 5px 4px #f0abfc, 6px 4px #f0abfc, 7px 4px #f0abfc, 0px 5px #e879f9, 1px 5px #e879f9, 2px 5px #e879f9, 3px 5px #e879f9, 4px 5px #e879f9, 5px 5px #e879f9, 6px 5px #e879f9, 7px 5px #e879f9, 1px 6px #e879f9, 2px 6px #e879f9, 3px 6px #e879f9, 4px 6px #e879f9, 5px 6px #e879f9, 6px 6px #e879f9, 2px 7px #e879f9, 3px 7px #e879f9, 4px 7px #e879f9, 5px 7px #e879f9, 3px 8px #e879f9, 4px 8px #e879f9, 2px 9px #e879f9, 5px 9px #e879f9;filter:drop-shadow(0 0 14px var(--bpe-glow));transform:scale(var(--bpe-scale)) scale(1.05); } }`,
  html: '<div class="babyPsychicEye"></div>',
  params: [{name:"--bpe-speed",label:"Speed",type:"duration",default:1.5,min:0.5,max:5,step:0.25,unit:"s"},{name:"--bpe-scale",label:"Scale",type:"range",default:3,min:2,max:5,step:0.5,unit:"x"},{name:"--bpe-glow",label:"Mind Glow",type:"color",default:"#d946ef"}],
  preview: { width: 300, height: 250, darkBg: true },
};

export default BabyPsychicEye;
