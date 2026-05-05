export type Category =
  | "text"
  | "hover"
  | "loading"
  | "background"
  | "entrance"
  | "exit"
  | "attention"
  | "button"
  | "card"
  | "pixel";

export interface Param {
  name: string;
  label: string;
  type: "color" | "range" | "text" | "select" | "duration";
  default: string | number;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  options?: { label: string; value: string }[];
}

export interface Animation {
  slug: string;
  name: string;
  category: Category;
  description: string;
  tags: string[];
  css: string;
  html: string;
  params: Param[];
  preview: {
    width: number;
    height: number;
    darkBg: boolean;
  };
}

export const categories: { slug: Category; label: string; icon: string }[] = [
  { slug: "text", label: "Text", icon: "T" },
  { slug: "hover", label: "Hover", icon: "↗" },
  { slug: "loading", label: "Loading", icon: "◌" },
  { slug: "background", label: "Background", icon: "▦" },
  { slug: "entrance", label: "Entrance", icon: "↓" },
  { slug: "exit", label: "Exit", icon: "↑" },
  { slug: "button", label: "Button", icon: "☐" },
  { slug: "attention", label: "Attention", icon: "★" },
  { slug: "card", label: "Card", icon: "▢" },
  { slug: "divider", label: "Divider", icon: "—" },
  { slug: "pixel", label: "Pixel", icon: "▪" },
];
