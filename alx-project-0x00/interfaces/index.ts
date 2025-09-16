export interface PillProps {
  title: string
}

// interfaces/index.ts

export interface ButtonProps {
  style: string,
  title?: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-lg";
  onClick?: () => void;
}
