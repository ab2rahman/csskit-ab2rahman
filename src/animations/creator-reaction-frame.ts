import type { Animation } from "../data/animations";

const creatorReactionFrame: Animation = {
  slug: "creator-reaction-frame",
  name: "Split Reaction Frame",
  category: "creator",
  description: "Two-panel layout for remix, duet, picture-in-picture reactions, and commentary clips.",
  tags: ["creator", "reaction", "duet", "remix", "split-screen", "picture-in-picture"],
  css: `.creator-reaction-frame {
  --crf-accent: #f472b6;
  --crf-speed: 2s;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  width: min(100%, 23rem);
  height: 12.5rem;
  overflow: hidden;
  background: #0f172a;
  border: 0.16rem solid #ffffff;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 0 #020617;
  font-family: Inter, system-ui, sans-serif;
}

.creator-reaction-frame__source {
  position: relative;
  display: grid;
  place-items: center;
  overflow: hidden;
  color: #ffffff;
  background: linear-gradient(140deg, #2563eb, #7c3aed 54%, #ec4899);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

.creator-reaction-frame__source::before {
  content: "";
  position: absolute;
  width: 6rem;
  height: 6rem;
  border: 0.5rem solid rgba(255,255,255,0.34);
  border-radius: 50%;
  animation: crf-pulse var(--crf-speed) ease-in-out infinite;
}

.creator-reaction-frame__reaction {
  position: relative;
  display: grid;
  place-items: center;
  color: #0f172a;
  background: #f8fafc;
}

.creator-reaction-frame__face {
  display: grid;
  width: 5.2rem;
  height: 5.2rem;
  place-items: center;
  background: var(--crf-accent);
  border: 0.26rem solid #0f172a;
  border-radius: 46% 54% 48% 52%;
  box-shadow: 0.25rem 0.25rem 0 #0f172a;
  font-size: 2.7rem;
  animation: crf-bob var(--crf-speed) ease-in-out infinite;
}

.creator-reaction-frame__label {
  position: absolute;
  bottom: 0.65rem;
  left: 50%;
  padding: 0.28rem 0.5rem;
  color: #ffffff;
  background: #0f172a;
  border-radius: 999px;
  font-size: 0.55rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  transform: translateX(-50%);
}

@keyframes crf-pulse { 50% { transform: scale(1.3); opacity: 0; } }
@keyframes crf-bob { 50% { transform: rotate(-6deg) translateY(-0.3rem); } }

@media (prefers-reduced-motion: reduce) {
  .creator-reaction-frame__source::before,
  .creator-reaction-frame__face { animation: none; }
}`,
  html: '<div class="creator-reaction-frame"><div class="creator-reaction-frame__source">ORIGINAL</div><div class="creator-reaction-frame__reaction"><div class="creator-reaction-frame__face">😮</div><span class="creator-reaction-frame__label">MY REACTION</span></div></div>',
  params: [
    { name: "--crf-accent", label: "Reaction Color", type: "color", default: "#f472b6" },
    { name: "--crf-speed", label: "Motion", type: "duration", default: 2, min: 0.8, max: 5, step: 0.1, unit: "s" },
  ],
  preview: { width: 380, height: 240, darkBg: true },
};

export default creatorReactionFrame;
