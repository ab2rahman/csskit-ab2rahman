import type { Animation } from "../data/animations";

const magneticHover: Animation = {
  slug: "magnetic-hover",
  name: "Magnetic Hover",
  category: "button",
  description: "Button follows cursor slightly on hover for a magnetic feel. Uses minimal JS for mouse tracking.",
  tags: ["button", "magnetic", "cursor", "interactive", "follow"],
  css: `.magnetic-hover {
  --mag-color: #8b5cf6;
  --mag-strength: 8px;
  display: inline-block;
  padding: 14px 36px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: var(--mag-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-out;
}

.magnetic-hover:hover {
  transform: translate(var(--mx, 0), var(--my, 0));
}`,
  html: `<button class="magnetic-hover" onmousemove="this.style.setProperty('--mx', ((event.offsetX - this.offsetWidth/2) / this.offsetWidth * 8) + 'px'); this.style.setProperty('--my', ((event.offsetY - this.offsetHeight/2) / this.offsetHeight * 8) + 'px')" onmouseleave="this.style.setProperty('--mx', '0px'); this.style.setProperty('--my', '0px')">Magnetic</button>`,
  params: [
    { name: "--mag-color", label: "Color", type: "color", default: "#8b5cf6" },
  ],
  preview: { width: 300, height: 150, darkBg: true },
};

export default magneticHover;
