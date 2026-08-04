import type { Animation } from "../data/animations";

const creatorBeforeAfter: Animation = {
  slug: "creator-before-after",
  name: "Before After Swipe",
  category: "creator",
  description: "Animated before-and-after reveal with a moving divider for transformations, portfolios, and product demos.",
  tags: ["creator", "before-after", "transformation", "reveal", "portfolio", "demo"],
  css: `.creator-before-after {
  --cba-before: #475569;
  --cba-after: #34d399;
  --cba-speed: 2.8s;
  position: relative;
  width: min(100%, 22rem);
  height: 12.5rem;
  overflow: hidden;
  border: 0.16rem solid #ffffff;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 0 #020617;
  font-family: Inter, system-ui, sans-serif;
  font-weight: 900;
}

.creator-before-after__before,
.creator-before-after__after {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #ffffff;
  font-size: 1.2rem;
  letter-spacing: 0.12em;
}

.creator-before-after__before { background: linear-gradient(135deg, var(--cba-before), #1e293b); }
.creator-before-after__after {
  background: linear-gradient(135deg, var(--cba-after), #0f766e);
  clip-path: inset(0 0 0 52%);
  animation: cba-reveal var(--cba-speed) ease-in-out infinite alternate;
}

.creator-before-after__after span { transform: translateX(3.7rem); }

.creator-before-after__divider {
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 52%;
  width: 0.22rem;
  background: #ffffff;
  box-shadow: 0 0 0.75rem rgba(255,255,255,0.8);
  animation: cba-divider var(--cba-speed) ease-in-out infinite alternate;
}

.creator-before-after__divider::after {
  content: "↔";
  position: absolute;
  top: 50%;
  left: 50%;
  display: grid;
  width: 2.2rem;
  height: 2.2rem;
  place-items: center;
  color: #0f172a;
  background: #ffffff;
  border-radius: 50%;
  font-size: 1.15rem;
  transform: translate(-50%, -50%);
}

@keyframes cba-reveal { to { clip-path: inset(0 0 0 18%); } }
@keyframes cba-divider { to { left: 18%; } }

@media (prefers-reduced-motion: reduce) {
  .creator-before-after__after,
  .creator-before-after__divider { animation: none; }
}`,
  html: '<div class="creator-before-after"><div class="creator-before-after__before">BEFORE</div><div class="creator-before-after__after"><span>AFTER</span></div><div class="creator-before-after__divider"></div></div>',
  params: [
    { name: "--cba-before", label: "Before", type: "color", default: "#475569" },
    { name: "--cba-after", label: "After", type: "color", default: "#34d399" },
    { name: "--cba-speed", label: "Swipe Speed", type: "duration", default: 2.8, min: 1, max: 7, step: 0.1, unit: "s" },
  ],
  preview: { width: 380, height: 250, darkBg: true },
};

export default creatorBeforeAfter;
