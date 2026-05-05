import type { Animation } from "../data/animations";

const btnSwap: Animation = {
  slug: "btn-swap",
  name: "Button Swap",
  category: "button",
  description:
    "Text slides up on hover and new text slides in from below. Smart CTA pattern that reveals secondary action text.",
  tags: ["button", "swap", "text", "slide", "cta", "replace"],
  css: `.btn-swap {
  --bsw-color: #3b82f6;
  --bsw-speed: 0.25s;
  display: inline-block;
  padding: 12px 28px;
  border-radius: 8px;
  background: var(--bsw-color);
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  font-family: system-ui, sans-serif;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 44px;
  line-height: 20px;
}

.btn-swap-label {
  display: block;
  transition: transform var(--bsw-speed) ease, opacity var(--bsw-speed) ease;
}

.btn-swap-alt {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  opacity: 0;
  transition: transform var(--bsw-speed) ease, opacity var(--bsw-speed) ease;
}

.btn-swap:hover .btn-swap-label {
  transform: translateY(-100%);
  opacity: 0;
}

.btn-swap:hover .btn-swap-alt {
  transform: translateY(0);
  opacity: 1;
}`,
  html: '<div class="btn-swap"><span class="btn-swap-label">Subscribe</span><span class="btn-swap-alt">$9.99/mo</span></div>',
  params: [
    { name: "--bsw-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--bsw-speed", label: "Speed", type: "duration", default: 0.25, min: 0.1, max: 0.8, step: 0.05, unit: "s" },
  ],
  preview: { width: 250, height: 120, darkBg: true },
};

export default btnSwap;
