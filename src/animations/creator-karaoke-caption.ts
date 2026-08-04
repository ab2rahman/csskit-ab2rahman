import type { Animation } from "../data/animations";

const creatorKaraokeCaption: Animation = {
  slug: "creator-karaoke-caption",
  name: "Karaoke Caption",
  category: "creator",
  description: "Three-line karaoke caption with a spotlight moving word by word. Built for talking heads, podcast clips, and educational Reels.",
  tags: ["creator", "caption", "karaoke", "subtitle", "podcast", "reels"],
  css: `.creator-karaoke-caption {
  --ckc-text: #8190a5;
  --ckc-active: #80dfff;
  --ckc-speed: 0.4s;
  display: grid;
  justify-items: center;
  gap: 0.25em;
  color: var(--ckc-text);
  font-family: Inter, system-ui, sans-serif;
  font-size: clamp(1.25rem, 4.5vw, 1.7rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.05em;
  text-align: center;
}

.creator-karaoke-caption__row {
  display: flex;
  justify-content: center;
  gap: 0.32em;
}

.creator-karaoke-caption__row span {
  display: inline-block;
  color: var(--ckc-text);
  font-style: normal;
  animation: ckc-active calc(var(--ckc-speed) * 12) linear infinite;
  animation-delay: var(--ckc-delay);
}

@keyframes ckc-active {
  0%, 100% { color: var(--ckc-text); text-shadow: none; transform: scale(1); }
  8%, 13% { color: var(--ckc-active); text-shadow: 0 0 18px var(--ckc-active); transform: scale(1.13); }
}

@media (prefers-reduced-motion: reduce) {
  .creator-karaoke-caption__row span { animation: none; }
  .creator-karaoke-caption__row:first-child span:first-child { color: var(--ckc-active); }
}`,
  html: '<div class="creator-karaoke-caption"><div class="creator-karaoke-caption__row"><span style="--ckc-delay: 0s">Jawabnya</span><span style="--ckc-delay: .4s">ada</span><span style="--ckc-delay: .8s">...</span></div><div class="creator-karaoke-caption__row"><span style="--ckc-delay: 1.6s">di</span><span style="--ckc-delay: 2s">ujung</span><span style="--ckc-delay: 2.4s">langit</span><span style="--ckc-delay: 2.8s">...</span></div><div class="creator-karaoke-caption__row"><span style="--ckc-delay: 3.2s">kita</span><span style="--ckc-delay: 3.6s">kesana</span><span style="--ckc-delay: 4s">dengan</span><span style="--ckc-delay: 4.4s">...</span></div></div>',
  params: [
    { name: "--ckc-text", label: "Inactive Text", type: "color", default: "#8190a5" },
    { name: "--ckc-active", label: "Spotlight Color", type: "color", default: "#80dfff" },
    { name: "--ckc-speed", label: "Word Speed", type: "duration", default: 0.4, min: 0.2, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 360, height: 180, darkBg: true },
};

export default creatorKaraokeCaption;
