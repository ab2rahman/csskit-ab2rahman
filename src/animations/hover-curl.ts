import type { Animation } from "../data/animations";

const hoverCurl: Animation = {
  slug: "hover-curl",
  name: "Page Curl",
  category: "hover",
  description:
    "Corner curl/peel effect on hover. Simulates a physical page being peeled back, great for cards or image previews.",
  tags: ["hover", "curl", "peel", "page", "corner", "paper"],
  css: `.hover-curl {
  --hc-color: #1e293b;
  --hc-size: 30px;
  --hc-speed: 0.3s;
  position: relative;
  width: 220px;
  height: 160px;
  background: var(--hc-color);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: system-ui, sans-serif;
  color: #94a3b8;
  font-size: 14px;
  font-weight: 500;
}

.hover-curl::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  background: linear-gradient(225deg, #050b18 50%, #334155 50%);
  border-radius: 0 0 10px 0;
  transition: all var(--hc-speed) ease;
  z-index: 2;
}

.hover-curl::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  background: linear-gradient(225deg, transparent 50%, rgba(255,255,255,0.08) 50%);
  transition: all var(--hc-speed) ease;
  z-index: 3;
}

.hover-curl:hover::before {
  width: var(--hc-size);
  height: var(--hc-size);
}

.hover-curl:hover::after {
  width: calc(var(--hc-size) + 3px);
  height: calc(var(--hc-size) + 3px);
}`,
  html: '<div class="hover-curl">Hover corner</div>',
  params: [
    { name: "--hc-color", label: "BG Color", type: "color", default: "#1e293b" },
    { name: "--hc-speed", label: "Speed", type: "duration", default: 0.3, min: 0.1, max: 1, step: 0.05, unit: "s" },
  ],
  preview: { width: 300, height: 220, darkBg: true },
};

export default hoverCurl;
