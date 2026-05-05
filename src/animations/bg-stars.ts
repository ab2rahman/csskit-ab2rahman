import type { Animation } from "../data/animations";

const bgStars: Animation = {
  slug: "bg-stars",
  name: "Starfield",
  category: "background",
  description:
    "Parallax starfield with twinkling stars at different depths. Space-themed background for dark UIs and sci-fi projects.",
  tags: ["background", "stars", "starfield", "space", "parallax", "twinkle"],
  css: `.bg-stars {
  --bst-color: #ffffff;
  --bst-speed: 3s;
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  background: #020617;
  border-radius: 12px;
}

.bg-stars-star {
  position: absolute;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: var(--bst-color);
  animation: bst-twinkle var(--bst-speed) ease-in-out infinite;
}

.bg-stars-star:nth-child(1) { top: 15%; left: 20%; animation-delay: 0s; }
.bg-stars-star:nth-child(2) { top: 35%; left: 65%; animation-delay: 0.4s; width: 3px; height: 3px; }
.bg-stars-star:nth-child(3) { top: 55%; left: 10%; animation-delay: 0.8s; }
.bg-stars-star:nth-child(4) { top: 75%; left: 80%; animation-delay: 1.2s; width: 3px; height: 3px; }
.bg-stars-star:nth-child(5) { top: 25%; left: 85%; animation-delay: 1.6s; }
.bg-stars-star:nth-child(6) { top: 65%; left: 40%; animation-delay: 2s; width: 3px; height: 3px; }
.bg-stars-star:nth-child(7) { top: 45%; left: 50%; animation-delay: 0.3s; }
.bg-stars-star:nth-child(8) { top: 85%; left: 25%; animation-delay: 0.7s; }
.bg-stars-star:nth-child(9) { top: 10%; left: 45%; animation-delay: 1.1s; width: 3px; height: 3px; }
.bg-stars-star:nth-child(10) { top: 50%; left: 90%; animation-delay: 1.5s; }
.bg-stars-star:nth-child(11) { top: 70%; left: 55%; animation-delay: 1.9s; }
.bg-stars-star:nth-child(12) { top: 90%; left: 5%; animation-delay: 0.5s; }

@keyframes bst-twinkle {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.5); }
}`,
  html: '<div class="bg-stars"><div class="bg-stars-star"></div><div class="bg-stars-star"></div><div class="bg-stars-star"></div><div class="bg-stars-star"></div><div class="bg-stars-star"></div><div class="bg-stars-star"></div><div class="bg-stars-star"></div><div class="bg-stars-star"></div><div class="bg-stars-star"></div><div class="bg-stars-star"></div><div class="bg-stars-star"></div><div class="bg-stars-star"></div></div>',
  params: [
    { name: "--bst-color", label: "Color", type: "color", default: "#ffffff" },
    { name: "--bst-speed", label: "Speed", type: "duration", default: 3, min: 1, max: 8, step: 0.5, unit: "s" },
  ],
  preview: { width: 350, height: 220, darkBg: true },
};

export default bgStars;
