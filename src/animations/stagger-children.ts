import type { Animation } from "../data/animations";

const staggerChildren: Animation = {
  slug: "stagger-children",
  name: "Stagger Children",
  category: "entrance",
  description: "Children elements animate in sequence with customizable delay between items.",
  tags: ["entrance", "stagger", "list", "sequence", "cascade"],
  css: `.stagger-children {
  --stagger-delay: 0.1s;
  --stagger-speed: 0.5s;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stagger-item {
  --stagger-color: #4ade80;
  padding: 10px 20px;
  background: var(--stagger-color);
  border-radius: 8px;
  color: #064e3b;
  font-weight: 600;
  font-size: 0.9rem;
  animation: stagger-in var(--stagger-speed) ease-out forwards;
  opacity: 0;
  transform: translateX(-20px);
}

.stagger-item:nth-child(1) { animation-delay: calc(var(--stagger-delay) * 0); }
.stagger-item:nth-child(2) { animation-delay: calc(var(--stagger-delay) * 1); }
.stagger-item:nth-child(3) { animation-delay: calc(var(--stagger-delay) * 2); }
.stagger-item:nth-child(4) { animation-delay: calc(var(--stagger-delay) * 3); }
.stagger-item:nth-child(5) { animation-delay: calc(var(--stagger-delay) * 4); }

@keyframes stagger-in {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}`,
  html: `<div class="stagger-children">
  <div class="stagger-item">Item 1</div>
  <div class="stagger-item">Item 2</div>
  <div class="stagger-item">Item 3</div>
  <div class="stagger-item">Item 4</div>
  <div class="stagger-item">Item 5</div>
</div>`,
  params: [
    { name: "--stagger-color", label: "Color", type: "color", default: "#4ade80" },
    { name: "--stagger-delay", label: "Stagger Delay", type: "duration", default: 0.1, min: 0.05, max: 0.5, step: 0.05, unit: "s" },
    { name: "--stagger-speed", label: "Anim Speed", type: "duration", default: 0.5, min: 0.2, max: 1.5, step: 0.1, unit: "s" },
  ],
  preview: { width: 300, height: 220, darkBg: true },
};

export default staggerChildren;
