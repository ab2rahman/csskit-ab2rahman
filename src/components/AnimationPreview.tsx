import { useState, useCallback, useEffect } from "react";
import type { Animation, Param } from "../data/animations";

interface Props {
  animation: Animation;
}

export default function AnimationPreview({ animation }: Props) {

  const [baseCSS] = useState(() => animation.css);

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

  const generateCSS = useCallback(() => {
    let css = baseCSS;
    animation.params.forEach((p) => {
      const val = paramValues[p.name];
      const unit = p.type === "duration" ? (p.unit || "s") : "";
      const regex = new RegExp(`(${p.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:\\s*)([^;]+)(;)`, "g");
      css = css.replace(regex, `$1${val}${unit}$3`);
    });
    return css;
  }, [baseCSS, animation, paramValues]);

  const generateHTML = useCallback(() => {
    let html = animation.html;
    animation.params.forEach((p) => {
      if (p.type === "text") {
        const val = String(paramValues[p.name]);
        const styleRegex = new RegExp(`(--${p.name.replace(/^--/, "")}\\s*:\\s*)'[^']*'`, "g");
        html = html.replace(styleRegex, `$1'${val}'`);
        const defaultVal = String(p.default);
        if (html.includes(`>${defaultVal}<`)) {
          html = html.replace(`>${defaultVal}<`, `>${val}<`);
        }
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
        className={`rounded-xl border border-border flex items-center justify-center ${
          animation.preview.darkBg ? "bg-black" : "bg-bg-primary"
        }`}
        style={{ minHeight: `${Math.max(animation.preview.height, 160)}px` }}
      >
        <style dangerouslySetInnerHTML={{ __html: css }} />
        <div className="w-full h-full flex items-center justify-center p-4" style={{ minHeight: 'inherit' }} dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      {/* Parameter Controls */}
      <div className="mt-6 space-y-4">
        <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest font-mono">Parameters</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {animation.params.map((param) => (
            <ParamControl key={param.name} param={param} value={paramValues[param.name]} onChange={(v) => updateParam(param.name, v)} />
          ))}
        </div>
      </div>

      <CodeBlock css={css} html={html} />
    </div>
  );
}

function ParamControl({ param, value, onChange }: { param: Param; value: string | number; onChange: (v: string | number) => void }) {
  if (param.type === "color") {
    return (
      <label className="flex items-center gap-3 p-3 rounded-lg bg-bg-surface border border-border">
        <input type="color" value={String(value)} onChange={(e) => onChange(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent" />
        <div>
          <div className="text-xs font-medium text-text-primary">{param.label}</div>
          <div className="text-xs text-text-muted font-mono">{String(value)}</div>
        </div>
      </label>
    );
  }

  if (param.type === "range" || param.type === "duration") {
    const numVal = Number(value);
    const unit = param.unit || (param.type === "duration" ? "s" : "");
    return (
      <label className="p-3 rounded-lg bg-bg-surface border border-border">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-text-primary">{param.label}</span>
          <span className="text-xs text-tech-blue font-mono">{numVal}{unit}</span>
        </div>
        <input type="range" min={param.min} max={param.max} step={param.step || 1} value={numVal} onChange={(e) => onChange(Number(e.target.value))} className="w-full h-1.5 rounded-full appearance-none bg-bg-surface-hover cursor-pointer accent-tech-blue" />
      </label>
    );
  }

  if (param.type === "text") {
    return (
      <label className="p-3 rounded-lg bg-bg-surface border border-border">
        <div className="text-xs font-medium text-text-primary mb-2">{param.label}</div>
        <input type="text" value={String(value)} onChange={(e) => onChange(e.target.value)} className="w-full px-3 py-1.5 text-sm bg-bg-primary border border-border rounded-md text-text-primary focus:outline-none focus:border-tech-blue font-mono" />
      </label>
    );
  }

  if (param.type === "select" && param.options) {
    return (
      <label className="p-3 rounded-lg bg-bg-surface border border-border">
        <div className="text-xs font-medium text-text-primary mb-2">{param.label}</div>
        <select value={String(value)} onChange={(e) => onChange(e.target.value)} className="w-full px-3 py-1.5 text-sm bg-bg-primary border border-border rounded-md text-text-primary focus:outline-none focus:border-tech-blue">
          {param.options.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}
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
    navigator.clipboard.writeText(code).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  return (
    <div className="mt-6">
      <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest font-mono mb-3">Generated Code</h3>
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="flex border-b border-border bg-bg-surface">
          <button onClick={() => setActiveTab("css")} className={`px-4 py-2.5 text-xs font-semibold transition-colors font-mono ${activeTab === "css" ? "text-tech-blue border-b-2 border-tech-blue" : "text-text-muted hover:text-text-primary"}`}>CSS</button>
          <button onClick={() => setActiveTab("html")} className={`px-4 py-2.5 text-xs font-semibold transition-colors font-mono ${activeTab === "html" ? "text-tech-blue border-b-2 border-tech-blue" : "text-text-muted hover:text-text-primary"}`}>HTML</button>
          <div className="flex-1" />
          <button onClick={handleCopy} className="px-4 py-2.5 text-xs font-medium text-text-muted hover:text-tech-blue transition-colors font-mono">
            {copied ? "copied!" : "copy"}
          </button>
        </div>
        <pre className="p-4 text-xs leading-relaxed overflow-x-auto bg-bg-primary text-text-muted max-h-80 font-mono">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
