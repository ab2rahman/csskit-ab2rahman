import type { Animation } from "../data/animations";

const textKineticCaption: Animation = {
  slug: "text-kinetic-caption",
  name: "Kinetic Caption",
  category: "text",
  description:
    "Bold word-by-word caption reveal with a punchy highlight swipe. Built for Reels, Shorts, hooks, and video subtitles.",
  tags: ["text", "caption", "video", "reels", "subtitle", "kinetic", "highlight"],
  css: `.text-kinetic-caption {
  --tkc-color: #ffffff;
  --tkc-accent: #facc15;
  --tkc-speed: 0.68s;
  color: var(--tkc-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.12em;
  max-width: 12ch;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: clamp(2rem, 8vw, 4.5rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: 0.025em;
  text-align: center;
  text-transform: uppercase;
}

.text-kinetic-caption span {
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 0.08em 0.1em 0.14em;
}

.text-kinetic-caption span::before {
  content: "";
  position: absolute;
  z-index: 0;
  inset: 54% 0.02em 0.08em;
  background: var(--tkc-accent);
  transform: scaleX(0) skewX(-14deg);
  transform-origin: left;
  animation: tkc-swipe calc(var(--tkc-speed) * 0.72) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.text-kinetic-caption b {
  position: relative;
  z-index: 1;
  display: inline-block;
  opacity: 0;
  text-shadow: 0.055em 0.065em 0 #0f172a;
  transform: translateY(115%) skewY(7deg) scale(1.08);
  animation: tkc-word var(--tkc-speed) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.text-kinetic-caption span:nth-child(1)::before { animation-delay: 0.04s; }
.text-kinetic-caption span:nth-child(1) b { animation-delay: 0.04s; }
.text-kinetic-caption span:nth-child(2)::before { animation-delay: calc(var(--tkc-speed) * 0.42); }
.text-kinetic-caption span:nth-child(2) b { animation-delay: calc(var(--tkc-speed) * 0.42); }
.text-kinetic-caption span:nth-child(3)::before { animation-delay: calc(var(--tkc-speed) * 0.84); }
.text-kinetic-caption span:nth-child(3) b { animation-delay: calc(var(--tkc-speed) * 0.84); }

@keyframes tkc-word {
  0% { opacity: 0; transform: translateY(115%) skewY(7deg) scale(1.08); }
  72% { opacity: 1; transform: translateY(-0.06em) skewY(-2deg) scale(1); }
  100% { opacity: 1; transform: translateY(0) skewY(0) scale(1); }
}

@keyframes tkc-swipe {
  from { transform: scaleX(0) skewX(-14deg); }
  to { transform: scaleX(1) skewX(-14deg); }
}

@media (prefers-reduced-motion: reduce) {
  .text-kinetic-caption span::before,
  .text-kinetic-caption b {
    animation: none;
  }

  .text-kinetic-caption span::before { transform: scaleX(1) skewX(-14deg); }
  .text-kinetic-caption b { opacity: 1; transform: none; }
}`,
  html: '<div class="text-kinetic-caption"><span><b>BIKIN</b></span><span><b>KONTEN</b></span><span><b>MELEDAK</b></span></div>',
  params: [
    { name: "--tkc-color", label: "Text Color", type: "color", default: "#ffffff" },
    { name: "--tkc-accent", label: "Highlight", type: "color", default: "#facc15" },
    { name: "--tkc-speed", label: "Speed", type: "duration", default: 0.68, min: 0.25, max: 2, step: 0.05, unit: "s" },
  ],
  preview: { width: 360, height: 180, darkBg: true },
};

export default textKineticCaption;
