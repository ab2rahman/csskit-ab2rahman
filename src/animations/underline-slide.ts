import type { Animation } from "../data/animations";

const underlineSlide: Animation = {
  slug: "underline-slide",
  name: "Underline Slide",
  category: "hover",
  description: "Animated underline that slides in on hover. Customize color and thickness.",
  tags: ["hover", "underline", "link", "nav", "slide"],
  css: `.underline-slide {
  --ul-color: #f59e0b;
  --ul-height: 3px;
  --ul-speed: 0.3s;
  position: relative;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.underline-slide::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: var(--ul-height);
  background: var(--ul-color);
  transition: width var(--ul-speed) ease;
}

.underline-slide:hover::after {
  width: 100%;
}`,
  html: `<a class="underline-slide">Hover This Link</a>`,
  params: [
    { name: "--ul-color", label: "Color", type: "color", default: "#f59e0b" },
    { name: "--ul-height", label: "Thickness", type: "range", default: 3, min: 1, max: 6, step: 1, unit: "px" },
    { name: "--ul-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 350, height: 120, darkBg: true },
};

export default underlineSlide;
