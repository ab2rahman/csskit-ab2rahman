import type { Animation } from "../data/animations";

const entranceClip: Animation = {
  slug: "entrance-clip",
  name: "Clip Reveal",
  category: "entrance",
  description:
    "Element reveals using clip-path from center outward. Clean, geometric entrance animation with mask-based reveal.",
  tags: ["entrance", "clip", "reveal", "mask", "geometric", "clean"],
  css: `.entrance-clip {
  --ecc-color: #3b82f6;
  --ecc-speed: 0.6s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  background: var(--ecc-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  animation: ecc-clip var(--ecc-speed) ease-out both;
}

@keyframes ecc-clip {
  0% { clip-path: circle(0% at 50% 50%); opacity: 0; }
  100% { clip-path: circle(100% at 50% 50%); opacity: 1; }
}`,
  html: '<div class="entrance-clip">Revealed</div>',
  params: [
    { name: "--ecc-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--ecc-speed", label: "Speed", type: "duration", default: 0.6, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default entranceClip;
