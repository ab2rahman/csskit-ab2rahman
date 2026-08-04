import type { Animation } from "../data/animations";

const creatorCommentStack: Animation = {
  slug: "creator-comment-stack",
  name: "Comment React Stack",
  category: "creator",
  description: "Tiga komentar yang hidup dan bertumpuk, sama seperti demo Komentar Jadi Main Cast.",
  tags: ["creator", "comment", "reaction", "social-proof", "reply", "tiktok"],
  css: `.creator-comment-stack {
  --ccs-speed: 2.5s;
  display: grid;
  align-content: center;
  gap: .56rem;
  width: min(100%, 22rem);
  padding: 1.06rem;
  font-family: Inter, system-ui, sans-serif;
}

.creator-comment-stack__card {
  width: 89%;
  margin: 0;
  padding: .75rem;
  border-radius: .75rem;
  color: #06101e;
  background: #fff;
  box-shadow: 0 .5rem 1.25rem rgba(0,0,0,.2);
  animation: ccs-stack var(--ccs-speed) ease-in-out infinite;
}
.creator-comment-stack__card:nth-child(2) { margin-left: 7%; animation-delay: .2s; }
.creator-comment-stack__card:nth-child(3) { margin-left: 12%; animation-delay: .4s; }
.creator-comment-stack__text { font-size: .69rem; font-weight: 700; line-height: 1.35; }

@keyframes ccs-stack {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@media (prefers-reduced-motion: reduce) {
  .creator-comment-stack__card { animation: none; }
}`,
  html: '<div class="creator-comment-stack"><article class="creator-comment-stack__card"><div class="creator-comment-stack__text">“Pak, ini CSS apa sihir?”</div></article><article class="creator-comment-stack__card"><div class="creator-comment-stack__text">“Bikin yang begini dong!”</div></article><article class="creator-comment-stack__card"><div class="creator-comment-stack__text">“Saya baru tahu CSS bisa begini.”</div></article></div>',
  params: [
    { name: "--ccs-speed", label: "Float Cycle", type: "duration", default: 2.5, min: 1, max: 6, step: 0.1, unit: "s" },
  ],
  preview: { width: 360, height: 250, darkBg: true },
};

export default creatorCommentStack;
