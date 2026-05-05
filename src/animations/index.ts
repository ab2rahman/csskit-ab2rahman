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

export const animations: Animation[] = [
  // Text
  textGlitch,
  typewriter,
  gradientText,
  waveText,
  blurReveal,
  neonGlow,
  // Hover
  fillUp,
  underlineSlide,
  scaleShadow,
  borderDraw,
  shineSweep,
  flipCard,
  // Loading
  pulseDots,
  spinningRing,
  morphingShape,
  progressBar,
  skeletonLoader,
  // Background
  gradientShift,
  floatingParticles,
  aurora,
  ripple,
  // Entrance
  fadeSlideUp,
  bounceIn,
  blurIn,
  rotateIn,
  staggerChildren,
  // Button
  rippleClick,
  bouncePress,
  gradientBorder,
  magneticHover,
  // Attention
  attentionShake,
  attentionPulseGlow,
  attentionRubber,
  // Card
  cardFlip3d,
  cardStack,
  cardGlass,
  // Pixel
  pixelBat,
];

export function getAnimationBySlug(slug: string): Animation | undefined {
  return animations.find((a) => a.slug === slug);
}

export function getAnimationsByCategory(category: string): Animation[] {
  return animations.filter((a) => a.category === category);
}
