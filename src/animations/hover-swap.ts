import type { Animation } from "../data/animations";

const hoverSwap: Animation = {
  slug: "hover-swap",
  name: "Text Swap",
  category: "hover",
  description:
    "Text slides up and is replaced by new text on hover. Simple but effective CTA pattern for buttons and links.",
  tags: ["hover", "text", "swap", "replace", "slide", "cta"],
  css: `.hover-swap {
  --hsw-color: #3b82f6;
  --hsw-speed: 0.3s;
  display: inline-block;
  padding: 14px 32px;
  border-radius: 10px;
  background: var(--hsw-color);
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  font-family: system-ui, sans-serif;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 48px;
  line-height: 20px;
}

.hover-swap-text {
  display: block;
  transition: transform var(--hsw-speed) ease;
}

.hover-swap-alt {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(100%);
  transition: transform var(--hsw-speed) ease;
}

.hover-swap:hover .hover-swap-text {
  transform: translateY(-100%);
}

.hover-swap:hover .hover-swap-alt {
  transform: translateY(0);
}`,
  html: '<div class="hover-swap"><span class="hover-swap-text">Submit</span><span class="hover-swap-alt">Send →</span></div>',
  params: [
    { name: "--hsw-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--hsw-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 280, height: 120, darkBg: true },
};

export default hoverSwap;
