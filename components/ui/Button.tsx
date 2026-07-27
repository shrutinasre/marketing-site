import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-blue-500 text-white hover:bg-blue-400 shadow-[0_8px_30px_-8px_rgba(37,99,235,0.6)]",
  secondary:
    "bg-white text-navy-900 border border-neutral-200 hover:border-blue-300 hover:text-blue-500",
  ghost: "text-white/90 hover:text-white border border-white/20 hover:border-white/40",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98]";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: CommonProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  )) {
  const classes = cn(base, variantClasses[variant], sizeClasses[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {props.children}
      </Link>
    );
  }
  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {props.children}
    </button>
  );
}
