import { useState, useCallback, useMemo } from "react";
import type { Animation, Category } from "../data/animations";
import SearchBar from "./SearchBar";

interface Props {
  animations: Animation[];
  categories: { slug: Category; label: string; icon: string }[];
  initialCategory?: string;
}

export default function HomePage({ animations, categories, initialCategory }: Props) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || "all");
  const [searchResults, setSearchResults] = useState<Animation[]>(animations);

  const displayed = useMemo(() => {
    if (activeCategory === "all") return searchResults;
    return searchResults.filter((a) => a.category === activeCategory);
  }, [activeCategory, searchResults]);

  const handleFilter = useCallback((results: Animation[]) => {
    setSearchResults(results);
  }, []);

  return (
    <div>
      {/* Search */}
      <div className="max-w-xl mb-8">
        <SearchBar animations={animations} onFilter={handleFilter} />
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
            activeCategory === "all"
              ? "bg-brand text-white"
              : "bg-surface-light text-text-muted hover:text-text hover:bg-surface-lighter/50"
          }`}
        >
          All ({animations.length})
        </button>
        {categories.map((cat) => {
          const count = animations.filter((a) => a.category === cat.slug).length;
          return (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeCategory === cat.slug
                  ? "bg-brand text-white"
                  : "bg-surface-light text-text-muted hover:text-text hover:bg-surface-lighter/50"
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Animation grid */}
      {displayed.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-text-muted text-lg">No animations found</p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchResults(animations);
            }}
            className="mt-4 px-4 py-2 text-sm text-brand hover:text-brand-light transition-colors"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((anim) => (
            <a
              key={anim.slug}
              href={`/animations/${anim.slug}`}
              className="group block rounded-xl border border-border bg-surface-light hover:border-brand/50 hover:bg-surface-lighter/30 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`relative flex items-center justify-center overflow-hidden ${
                  anim.preview.darkBg ? "bg-black" : "bg-surface"
                }`}
                style={{ height: `${Math.min(anim.preview.height, 180)}px` }}
              >
                <style dangerouslySetInnerHTML={{ __html: anim.css }} />
                <div
                  className="scale-[0.65] sm:scale-75 origin-center pointer-events-none"
                  dangerouslySetInnerHTML={{ __html: anim.html }}
                />

                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="px-3 py-1.5 bg-surface/90 rounded-full text-xs font-medium text-brand border border-brand/30">
                    View & Customize &rarr;
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-text text-sm mb-1 group-hover:text-brand transition-colors">
                  {anim.name}
                </h3>
                <p className="text-xs text-text-muted line-clamp-2">{anim.description}</p>
                <div className="flex gap-1.5 mt-3 flex-wrap">
                  {anim.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] rounded-full bg-surface-lighter/50 text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
