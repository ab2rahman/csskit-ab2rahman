import type { Animation } from "../data/animations";

const btnChrome: Animation = {
  slug: "btn-chrome",
  name: "Chrome",
  category: "button",
  description:
    "Metallic chrome sweep on hover. Shiny metallic reflection sliding across the button surface.",
  tags: ["button", "chrome", "metallic", "shine", "reflection", "sweep"],
  css: `.btn-chrome {
  --bch-speed: 0.5s;
  position: relative;
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  color: #334155;
  background: linear-gradient(180deg, #e2e8f0, #94a3b8);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid #cbd5e1;
}

.btn-chrome::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -80%;
  width: 40%;
  height: 200%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  transform: skewX(-20deg);
  transition: left var(--bch-speed) ease;
}

.btn-chrome:hover::after {
  left: 130%;
}`,
  html: '<div class="btn-chrome">Chrome</div>',
  params: [
    { name: "--bch-speed", label: "Speed", type: "duration", default: 0.5, min: 0.2, max: 2, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 120, darkBg: false },
};

export default btnChrome;
