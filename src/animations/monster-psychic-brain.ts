import type { Animation } from "../data/animations";
const MonsterPsychicBrain: Animation = {
  slug: "monster-psychic-brain", name: "Psychic Brain", category: "pixel",
  description: "Floating psychic brain with mental waves. Psionic horror that feeds on thoughts.",
  tags: ["pixel","monster","monster-taming","pixel-art","box-shadow"],
  css: `.MonsterPsychicBrain { --psy-speed:1s; --psy-scale:2.5;
  width:1px;height:1px;position:relative;left:-34px;top:-28px;
  transform:scale(var(--psy-scale));
  animation:psy-idle var(--psy-speed) ease-in-out infinite;}
@keyframes psy-idle { 0%,100% { box-shadow:3px 0px #f0abfc, 4px 0px #f0abfc, 5px 0px #f0abfc, 6px 0px #f0abfc, 2px 1px #f0abfc, 3px 1px #f0abfc, 4px 1px #f0abfc, 5px 1px #f0abfc, 6px 1px #f0abfc, 7px 1px #f0abfc, 2px 2px #f0abfc, 4px 2px #f0abfc, 5px 2px #f0abfc, 7px 2px #f0abfc, 0px 3px #d946ef, 1px 3px #d946ef, 2px 3px #d946ef, 3px 3px #d946ef, 4px 3px #d946ef, 5px 3px #d946ef, 6px 3px #d946ef, 7px 3px #d946ef, 8px 3px #d946ef, 9px 3px #d946ef, 0px 4px #d946ef, 1px 4px #d946ef, 2px 4px #d946ef, 3px 4px #d946ef, 4px 4px #d946ef, 5px 4px #d946ef, 6px 4px #d946ef, 7px 4px #d946ef, 8px 4px #d946ef, 9px 4px #d946ef, 0px 5px #d946ef, 1px 5px #d946ef, 2px 5px #d946ef, 3px 5px #d946ef, 4px 5px #d946ef, 5px 5px #d946ef, 6px 5px #d946ef, 7px 5px #d946ef, 8px 5px #d946ef, 9px 5px #d946ef, 2px 6px #a21caf, 3px 6px #a21caf, 4px 6px #a21caf, 5px 6px #a21caf, 6px 6px #a21caf, 7px 6px #a21caf, 3px 7px #a21caf, 4px 7px #a21caf, 5px 7px #a21caf, 6px 7px #a21caf; } 50% { box-shadow:3px 0px #f0abfc, 4px 0px #f0abfc, 5px 0px #f0abfc, 6px 0px #f0abfc, 2px 1px #f0abfc, 3px 1px #f0abfc, 4px 1px #f0abfc, 5px 1px #f0abfc, 6px 1px #f0abfc, 7px 1px #f0abfc, 2px 2px #f0abfc, 4px 2px #f0abfc, 5px 2px #f0abfc, 7px 2px #f0abfc, 0px 3px #d946ef, 1px 3px #d946ef, 2px 3px #d946ef, 3px 3px #d946ef, 4px 3px #d946ef, 5px 3px #d946ef, 6px 3px #d946ef, 7px 3px #d946ef, 8px 3px #d946ef, 9px 3px #d946ef, 0px 4px #d946ef, 1px 4px #d946ef, 2px 4px #d946ef, 3px 4px #d946ef, 4px 4px #d946ef, 5px 4px #d946ef, 6px 4px #d946ef, 7px 4px #d946ef, 8px 4px #d946ef, 9px 4px #d946ef, 0px 5px #d946ef, 1px 5px #d946ef, 2px 5px #d946ef, 3px 5px #d946ef, 4px 5px #d946ef, 5px 5px #d946ef, 6px 5px #d946ef, 7px 5px #d946ef, 8px 5px #d946ef, 9px 5px #d946ef, 2px 6px #a21caf, 3px 6px #a21caf, 4px 6px #a21caf, 5px 6px #a21caf, 6px 6px #a21caf, 7px 6px #a21caf, 3px 7px #a21caf, 4px 7px #a21caf, 5px 7px #a21caf, 6px 7px #a21caf;transform:scale(var(--psy-scale)) translateY(-2px); } }`,
  html: '<div class="MonsterPsychicBrain"></div>',
  params: [
    { name: "--psy-speed", label: "Speed", type: "duration", default: 1, min: 0.3, max: 4, step: 0.1, unit: "s" },
    { name: "--psy-scale", label: "Scale", type: "range", default: 2.5, min: 1.5, max: 4, step: 0.5, unit: "x" },
  ],
  preview: { width: 300, height: 250, darkBg: true },
};
export default MonsterPsychicBrain;
