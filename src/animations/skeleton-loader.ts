import type { Animation } from "../data/animations";

const skeletonLoader: Animation = {
  slug: "skeleton-loader",
  name: "Skeleton Loader",
  category: "loading",
  description: "Shimmer skeleton loading placeholder. Customize dimensions and color.",
  tags: ["loading", "skeleton", "placeholder", "shimmer", "content"],
  css: `.skeleton-loader {
  --skel-color: #334155;
  --skel-shimmer: #475569;
  --skel-width: 280px;
  --skel-speed: 1.5s;
  width: var(--skel-width);
}

.skeleton-line {
  height: 14px;
  background: var(--skel-color);
  border-radius: 6px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
}

.skeleton-line::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    var(--skel-shimmer),
    transparent
  );
  animation: skel-shimmer var(--skel-speed) infinite;
}

.skeleton-line:nth-child(1) { width: 70%; }
.skeleton-line:nth-child(2) { width: 100%; }
.skeleton-line:nth-child(3) { width: 85%; }

.skeleton-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--skel-color);
  position: relative;
  overflow: hidden;
  margin-bottom: 10px;
}

.skeleton-circle::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    var(--skel-shimmer),
    transparent
  );
  animation: skel-shimmer var(--skel-speed) infinite;
}

@keyframes skel-shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}`,
  html: `<div class="skeleton-loader">
  <div class="skeleton-circle"></div>
  <div class="skeleton-line"></div>
  <div class="skeleton-line"></div>
  <div class="skeleton-line"></div>
</div>`,
  params: [
    { name: "--skel-color", label: "Base Color", type: "color", default: "#334155" },
    { name: "--skel-shimmer", label: "Shimmer Color", type: "color", default: "#475569" },
    { name: "--skel-speed", label: "Speed", type: "duration", default: 1.5, min: 0.5, max: 3, step: 0.1, unit: "s" },
  ],
  preview: { width: 350, height: 180, darkBg: true },
};

export default skeletonLoader;
