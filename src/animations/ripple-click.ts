import type { Animation } from "../data/animations";

const rippleClick: Animation = {
  slug: "ripple-click",
  name: "Ripple Click",
  category: "button",
  description: "Material-design ripple effect on click. Customize ripple color.",
  tags: ["button", "ripple", "click", "material", "wave"],
  css: `.ripple-click {
  --rc-color: rgba(255, 255, 255, 0.4);
  --rc-bg: #2563eb;
  position: relative;
  display: inline-block;
  padding: 14px 36px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: var(--rc-bg);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
}

.ripple-click::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: var(--rc-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  opacity: 0;
}

.ripple-click:active::after {
  width: 300px;
  height: 300px;
  opacity: 1;
  transition: 0s;
}`,
  html: `<button class="ripple-click">Click Me</button>`,
  params: [
    { name: "--rc-bg", label: "Background", type: "color", default: "#2563eb" },
    { name: "--rc-color", label: "Ripple Color", type: "color", default: "#ffffff" },
  ],
  preview: { width: 300, height: 150, darkBg: true },
};

export default rippleClick;
