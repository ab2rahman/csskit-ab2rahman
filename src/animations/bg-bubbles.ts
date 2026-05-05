import type { Animation } from "../data/animations";

const bgBubbles: Animation = {
  slug: "bg-bubbles",
  name: "Bubbles",
  category: "background",
  description:
    "Floating translucent bubbles rising slowly. Calm, ambient background effect for hero sections or loading states.",
  tags: ["background", "bubbles", "floating", "rise", "ambient", "calm"],
  css: `.bg-bubbles {
  --bb-color: #3b82f6;
  --bb-speed: 6s;
  position: relative;
  width: 300px;
  height: 200px;
  overflow: hidden;
  background: #050b18;
  border-radius: 12px;
}

.bg-bubbles-bubble {
  position: absolute;
  bottom: -20px;
  border-radius: 50%;
  background: var(--bb-color);
  opacity: 0.12;
  animation: bb-rise var(--bb-speed) ease-in infinite;
}

.bg-bubbles-bubble:nth-child(1) { width: 40px; height: 40px; left: 10%; animation-duration: var(--bb-speed); animation-delay: 0s; }
.bg-bubbles-bubble:nth-child(2) { width: 25px; height: 25px; left: 30%; animation-duration: calc(var(--bb-speed) * 1.3); animation-delay: 1s; }
.bg-bubbles-bubble:nth-child(3) { width: 55px; height: 55px; left: 55%; animation-duration: calc(var(--bb-speed) * 0.9); animation-delay: 0.5s; }
.bg-bubbles-bubble:nth-child(4) { width: 20px; height: 20px; left: 75%; animation-duration: calc(var(--bb-speed) * 1.1); animation-delay: 2s; }
.bg-bubbles-bubble:nth-child(5) { width: 35px; height: 35px; left: 90%; animation-duration: calc(var(--bb-speed) * 1.2); animation-delay: 1.5s; }

@keyframes bb-rise {
  0% { bottom: -20px; transform: translateX(0); }
  50% { transform: translateX(15px); }
  100% { bottom: 110%; transform: translateX(-10px); }
}`,
  html: '<div class="bg-bubbles"><div class="bg-bubbles-bubble"></div><div class="bg-bubbles-bubble"></div><div class="bg-bubbles-bubble"></div><div class="bg-bubbles-bubble"></div><div class="bg-bubbles-bubble"></div></div>',
  params: [
    { name: "--bb-color", label: "Color", type: "color", default: "#3b82f6" },
    { name: "--bb-speed", label: "Speed", type: "duration", default: 6, min: 2, max: 15, step: 0.5, unit: "s" },
  ],
  preview: { width: 350, height: 220, darkBg: true },
};

export default bgBubbles;
