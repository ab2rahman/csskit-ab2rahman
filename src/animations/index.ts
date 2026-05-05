import type { Animation } from "../data/animations";
import textGlitch from "./text-glitch";
import typewriter from "./typewriter";
import gradientText from "./gradient-text";
import waveText from "./wave-text";
import blurReveal from "./blur-reveal";
import neonGlow from "./neon-glow";
import fillUp from "./fill-up";
import underlineSlide from "./underline-slide";
import scaleShadow from "./scale-shadow";
import borderDraw from "./border-draw";
import shineSweep from "./shine-sweep";
import flipCard from "./flip-card";
import pulseDots from "./pulse-dots";
import spinningRing from "./spinning-ring";
import morphingShape from "./morphing-shape";
import progressBar from "./progress-bar";
import skeletonLoader from "./skeleton-loader";
import gradientShift from "./gradient-shift";
import floatingParticles from "./floating-particles";
import aurora from "./aurora";
import ripple from "./ripple";
import fadeSlideUp from "./fade-slide-up";
import bounceIn from "./bounce-in";
import blurIn from "./blur-in";
import rotateIn from "./rotate-in";
import staggerChildren from "./stagger-children";
import rippleClick from "./ripple-click";
import bouncePress from "./bounce-press";
import gradientBorder from "./gradient-border";
import magneticHover from "./magnetic-hover";
import pixelBat from "./pixel-bat";
import attentionShake from "./attention-shake";
import attentionPulseGlow from "./attention-pulse-glow";
import attentionRubber from "./attention-rubber";
import cardFlip3d from "./card-flip-3d";
import cardStack from "./card-stack";
import cardGlass from "./card-glass";
import attentionBounce from "./attention-bounce";
import attentionFlash from "./attention-flash";
import attentionHeartbeat from "./attention-heartbeat";
import attentionJello from "./attention-jello";
import attentionSwing from "./attention-swing";
import cardExpand from "./card-expand";
import cardSpotlight from "./card-spotlight";
import cardShuffle from "./card-shuffle";
import cardBorderGlow from "./card-border-glow";
import cardTilt from "./card-tilt";
import textRetro from "./text-retro";
import textScramble from "./text-scramble";
import textSplit from "./text-split";
import textStroke from "./text-stroke";
import hoverCurl from "./hover-curl";
import hoverGlitch from "./hover-glitch";
import hoverPulse from "./hover-pulse";
import hoverSlideBg from "./hover-slide-bg";
import hoverSwap from "./hover-swap";
import hoverZoom from "./hover-zoom";
import loadingBars from "./loading-bars";
import loadingCircle from "./loading-circle";
import loadingDotsBounce from "./loading-dots-bounce";
import loadingOrbit from "./loading-orbit";
import loadingSquare from "./loading-square";
import loadingWave from "./loading-wave";
import bgBubbles from "./bg-bubbles";
import bgConfetti from "./bg-confetti";
import bgGridPulse from "./bg-grid-pulse";
import bgMeshGradient from "./bg-mesh-gradient";
import bgRain from "./bg-rain";
import bgStars from "./bg-stars";
import entranceClip from "./entrance-clip";
import entranceFlip from "./entrance-flip";
import entranceSlide from "./entrance-slide";
import entranceSwing from "./entrance-swing";
import entranceZoom from "./entrance-zoom";
import btnFillSlide from "./btn-fill-slide";
import btnGlow from "./btn-glow";
import btnShine from "./btn-shine";
import btnSwap from "./btn-swap";
import exitFadeDown from "./exit-fade-down";
import exitFlipOut from "./exit-flip-out";
import exitScaleDown from "./exit-scale-down";
import exitSlideOut from "./exit-slide-out";
import exitZoomOut from "./exit-zoom-out";
import dividerDraw from "./divider-draw";
import dividerFade from "./divider-fade";
import dividerGlow from "./divider-glow";
import dividerWave from "./divider-wave";

export const animations: Animation[] = [
  // Text
  textGlitch,
  typewriter,
  gradientText,
  waveText,
  blurReveal,
  neonGlow,
  textRetro,
  textScramble,
  textSplit,
  textStroke,
  // Hover
  fillUp,
  underlineSlide,
  scaleShadow,
  borderDraw,
  shineSweep,
  flipCard,
  hoverCurl,
  hoverGlitch,
  hoverPulse,
  hoverSlideBg,
  hoverSwap,
  hoverZoom,
  // Loading
  pulseDots,
  spinningRing,
  morphingShape,
  progressBar,
  skeletonLoader,
  loadingBars,
  loadingCircle,
  loadingDotsBounce,
  loadingOrbit,
  loadingSquare,
  loadingWave,
  // Background
  gradientShift,
  floatingParticles,
  aurora,
  ripple,
  bgBubbles,
  bgConfetti,
  bgGridPulse,
  bgMeshGradient,
  bgRain,
  bgStars,
  // Entrance
  fadeSlideUp,
  bounceIn,
  blurIn,
  rotateIn,
  staggerChildren,
  entranceClip,
  entranceFlip,
  entranceSlide,
  entranceSwing,
  entranceZoom,
  // Exit
  exitFadeDown,
  exitFlipOut,
  exitScaleDown,
  exitSlideOut,
  exitZoomOut,
  // Button
  rippleClick,
  bouncePress,
  gradientBorder,
  magneticHover,
  btnFillSlide,
  btnGlow,
  btnShine,
  btnSwap,
  // Attention
  attentionShake,
  attentionPulseGlow,
  attentionRubber,
  attentionBounce,
  attentionFlash,
  attentionHeartbeat,
  attentionJello,
  attentionSwing,
  // Card
  cardFlip3d,
  cardStack,
  cardGlass,
  cardExpand,
  cardSpotlight,
  cardShuffle,
  cardBorderGlow,
  cardTilt,
  // Divider
  dividerDraw,
  dividerFade,
  dividerGlow,
  dividerWave,
  // Pixel
  pixelBat,
];

export function getAnimationBySlug(slug: string): Animation | undefined {
  return animations.find((a) => a.slug === slug);
}

export function getAnimationsByCategory(category: string): Animation[] {
  return animations.filter((a) => a.category === category);
}
