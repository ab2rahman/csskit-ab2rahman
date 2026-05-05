import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { animations as allAnimations } from "../animations/index";
import { categories as allCategories } from "../data/animations";
import type { Animation, Category } from "../data/animations";

const PAGE_SIZE = 24;

/** Lazy card — only injects CSS when it enters the viewport */
function LazyCard({ anim }: { anim: Animation }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { rootMargin: "200px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={cardRef}
      href={`/animations/${anim.slug}`}
      className="group block rounded-xl border border-border bg-bg-surface hover:border-tech-blue/40 hover:bg-bg-surface-hover transition-all duration-300 overflow-hidden w-full"
    >
      <div className="relative flex items-center justify-center overflow-hidden h-32 sm:h-40">
        {isVisible && (
          <>
            <style dangerouslySetInnerHTML={{ __html: anim.css }} />
            <div
              className="pointer-events-none w-full h-full flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: anim.html }}
            />
          </>
        )}
        <div className="absolute inset-0 bg-tech-blue/0 group-hover:bg-tech-blue/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="px-3 py-1.5 bg-bg-primary/90 rounded-full text-xs font-medium text-tech-blue border border-tech-blue/30 font-mono">
            view &amp; customize →
          </span>
        </div>
      </div>
      <div className="p-4 h-28 flex flex-col">
        <h3 className="font-semibold text-text-primary text-sm mb-1 group-hover:text-tech-blue transition-colors font-heading truncate">
          {anim.name}
        </h3>
        <p className="text-xs text-text-muted line-clamp-2 flex-1">{anim.description}</p>
        <div className="flex gap-1.5 mt-auto pt-2 flex-wrap">
          {anim.tags.slice(0, 3).map((tag: string) => (
            <span key={tag} className="px-2 py-0.5 text-[10px] rounded-full bg-bg-surface-hover text-text-muted font-mono">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

interface Props {
  initialCategory?: string;
}

export default function HomePage({ initialCategory }: Props) {
  const animations = allAnimations;
  const categories = allCategories;
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || "all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const searchRef = useRef<HTMLInputElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const searchResults = useMemo(() => {
    if (!query.trim()) return animations;
    const q = query.toLowerCase();
    return animations.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)) ||
        a.category.toLowerCase().includes(q)
    );
  }, [query, animations]);

  const displayed = useMemo(() => {
    if (activeCategory === "all") return searchResults;
    return searchResults.filter((a) => a.category === activeCategory);
  }, [activeCategory, searchResults]);

  // Reset page when filters change
  useEffect(() => { setVisibleCount(PAGE_SIZE); }, [activeCategory, query]);

  // Infinite scroll sentinel
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisibleCount((c) => c + PAGE_SIZE); },
      { rootMargin: "400px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [displayed]);

  const visible = displayed.slice(0, visibleCount);
  const hasMore = visibleCount < displayed.length;

  const clearFilters = useCallback(() => { setActiveCategory("all"); setQuery(""); }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && hash !== "all") setActiveCategory(hash);

    const handleCategory = (e: Event) => {
      const cat = (e as CustomEvent).detail;
      if (cat) setActiveCategory(cat);
    };
    window.addEventListener("csskit:category", handleCategory);

    const handleHash = () => {
      const h = window.location.hash.replace("#", "");
      setActiveCategory(h || "all");
    };
    window.addEventListener("hashchange", handleHash);

    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); searchRef.current?.focus(); }
      if (e.key === "Escape") { setQuery(""); searchRef.current?.blur(); }
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("csskit:category", handleCategory);
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Search */}
      <div className="max-w-xl mb-8">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={searchRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search animations... (Ctrl+K)"
            className="w-full pl-10 pr-4 py-2.5 bg-bg-surface border border-border rounded-xl text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/50 transition-all"
          />
        </div>
      </div>

      {/* Category tabs — horizontal scroll on mobile */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-none">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
            activeCategory === "all"
              ? "bg-tech-blue text-white"
              : "bg-bg-surface text-text-muted hover:text-text-primary hover:bg-bg-surface-hover border border-border"
          }`}
        >
          All ({animations.length})
        </button>
        {categories.map((cat: { slug: Category; label: string; icon: string }) => {
          const count = animations.filter((a) => a.category === cat.slug).length;
          if (count === 0) return null;
          return (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-3 md:px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5 flex-shrink-0 ${
                activeCategory === cat.slug
                  ? "bg-tech-blue text-white"
                  : "bg-bg-surface text-text-muted hover:text-text-primary hover:bg-bg-surface-hover border border-border"
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              <span className="hidden sm:inline">{cat.label}</span>
              <span className="sm:hidden">{cat.label.slice(0, 3)}</span>
              <span className="text-xs opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Animation grid */}
      {displayed.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-text-muted text-lg">No animations found</p>
          <button onClick={clearFilters} className="mt-4 px-4 py-2 text-sm text-tech-blue hover:text-electric-cyan transition-colors">
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <div className="text-xs text-text-muted mb-4 font-mono">
            Showing {visible.length} of {displayed.length} animations
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {visible.map((anim: Animation) => (
              <LazyCard key={anim.slug} anim={anim} />
            ))}
          </div>
          {/* Infinite scroll sentinel */}
          {hasMore && <div ref={sentinelRef} className="h-4" />}
          {hasMore && (
            <div className="text-center py-8">
              <div className="inline-block w-5 h-5 border-2 border-tech-blue/30 border-t-tech-blue rounded-full animate-spin" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
