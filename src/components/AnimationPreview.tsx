import { useState, useRef, useEffect, useCallback } from "react";
import type { Animation, Param } from "../data/animations";

interface Props {
  animation: Animation;
}

export default function AnimationPreview({ animation }: Props) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [paramValues, setParamValues] = useState<Record<string, string | number>>(() => {
    const vals: Record<string, string | number> = {};
    animation.params.forEach((p) => {
      vals[p.name] = p.default;
    });
    return vals;
  });

  const updateParam = useCallback((name: string, value: string | number) => {
    setParamValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Apply CSS variables to preview element
  useEffect(() => {
    if (!previewRef.current) return;
    const el = previewRef.current;
    animation.params.forEach((p) => {
      const val = paramValues[p.name];
      if (p.type === "duration") {
        el.style.setProperty(p.name, `${val}${p.unit || "s"}`);
      } else if (p.type === "range") {
        el.style.setProperty(p.name, `${val}${p.unit || ""}`);
      } else {
        el.style.setProperty(p.name, `${val}`);
      }
    });
  }, [paramValues, animation.params]);

  // Generate the customized code
  const generateCSS = useCallback(() => {
    let css = animation.css;
    animation.params.forEach((p) => {
      const val = paramValues[p.name];
      const unit = p.type === "duration" ? (p.unit || "s") : (p.type === "range" ? (p.unit || "") : "");
      // Replace the default values in CSS custom properties
      const regex = new RegExp(`(${p.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*:\\s*)([^;]+)(;)`, 'g');
      css = css.replace(regex, `$1${val}${unit}$3`);
    });
    return css;
  }, [animation, paramValues]);

  const generateHTML = useCallback(() => {
    let html = animation.html;
    animation.params.forEach((p) => {
      if (p.type === "text") {
        const val = String(paramValues[p.name]);
        html = html.replace(/style="([^"]*)--[^:]+:\s*'[^']*'([^"]*)"/g, (match, before, after) => {
          return match.replace(new RegExp(`--[^:]+:\\s*'[^']*'`), `${p.name}: '${val}'`);
        });
      }
    });
    return html;
  }, [animation, paramValues]);

  const css = generateCSS();
  const html = generateHTML();

  return (
    <div>
      {/* Live Preview */}
      <div
        ref={previewRef}
        className={`rounded-xl border border-border overflow-hidden flex items-center justify-center ${
          animation.preview.darkBg ? "bg-black" : "bg-surface"
        }`}
        style={{
          minHeight: `${Math.max(animation.preview.height, 200)}px`,
          position: "relative",
        }}
      >
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      {/* Parameter Controls */}
      <div className="mt-6 space-y-4">
        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Parameters</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {animation.params.map((param) => (
            <ParamControl
              key={param.name}
              param={param}
              value={paramValues[param.name]}
              onChange={(v) => updateParam(param.name, v)}
            />
          ))}
        </div>
      </div>

      {/* Code Output */}
      <CodeBlock css={css} html={html} />
    </div>
  );
}

function ParamControl({
  param,
  value,
  onChange,
}: {
  param: Param;
  value: string | number;
  onChange: (v: string | number) => void;
}) {
  if (param.type === "color") {
    return (
      <label className="flex items-center gap-3 p-3 rounded-lg bg-surface-light border border-border">
        <input
          type="color"
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent"
        />
        <div>
          <div className="text-xs font-medium text-text">{param.label}</div>
          <div className="text-xs text-text-muted">{String(value)}</div>
        </div>
      </label>
    );
  }

  if (param.type === "range" || param.type === "duration") {
    const numVal = Number(value);
    const unit = param.unit || (param.type === "duration" ? "s" : "");
    return (
      <label className="p-3 rounded-lg bg-surface-light border border-border">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-text">{param.label}</span>
          <span className="text-xs text-brand font-mono">
            {numVal}{unit}
          </span>
        </div>
        <input
          type="range"
          min={param.min}
          max={param.max}
          step={param.step || 1}
          value={numVal}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1.5 rounded-full appearance-none bg-surface-lighter cursor-pointer accent-brand"
        />
      </label>
    );
  }

  if (param.type === "text") {
    return (
      <label className="p-3 rounded-lg bg-surface-light border border-border">
        <div className="text-xs font-medium text-text mb-2">{param.label}</div>
        <input
          type="text"
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-1.5 text-sm bg-surface border border-border rounded-md text-text focus:outline-none focus:border-brand"
        />
      </label>
    );
  }

  if (param.type === "select" && param.options) {
    return (
      <label className="p-3 rounded-lg bg-surface-light border border-border">
        <div className="text-xs font-medium text-text mb-2">{param.label}</div>
        <select
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-1.5 text-sm bg-surface border border-border rounded-md text-text focus:outline-none focus:border-brand"
        >
          {param.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
    );
  }

  return null;
}

function CodeBlock({ css, html }: { css: string; html: string }) {
  const [activeTab, setActiveTab] = useState<"css" | "html">("css");
  const [copied, setCopied] = useState(false);

  const code = activeTab === "css" ? css : html;
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleCopyAll = () => {
    const all = `/* CSS */\n${css}\n\n<!-- HTML -->\n${html}`;
    navigator.clipboard.writeText(all).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Generated Code</h3>
        <div className="flex gap-2">
          <button
            onClick={handleCopyAll}
            className="px-3 py-1.5 text-xs font-medium bg-brand/10 text-brand rounded-lg hover:bg-brand/20 transition-colors"
          >
            {copied ? "Copied!" : "Copy All"}
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-border overflow-hidden">
        <div className="flex border-b border-border bg-surface-light">
          <button
            onClick={() => setActiveTab("css")}
            className={`px-4 py-2.5 text-xs font-semibold transition-colors ${
              activeTab === "css" ? "text-brand border-b-2 border-brand" : "text-text-muted hover:text-text"
            }`}
          >
            CSS
          </button>
          <button
            onClick={() => setActiveTab("html")}
            className={`px-4 py-2.5 text-xs font-semibold transition-colors ${
              activeTab === "html" ? "text-brand border-b-2 border-brand" : "text-text-muted hover:text-text"
            }`}
          >
            HTML
          </button>
          <div className="flex-1" />
          <button
            onClick={handleCopy}
            className="px-3 text-xs text-text-muted hover:text-brand transition-colors"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
        <pre className="p-4 text-xs leading-relaxed overflow-x-auto bg-surface text-text-muted max-h-80">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
