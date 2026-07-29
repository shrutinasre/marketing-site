import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Placeholder for a real photo (team, office, etc.) that hasn't been
 * supplied yet. Swap this out for a Next.js <Image> once a real photo
 * is available — the rounded-card, aspect ratio, and border keep the
 * layout stable either way so no other styling needs to change.
 */
export function PhotoSlot({
  label,
  aspect = "aspect-[4/3]",
  className,
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-card border border-dashed border-neutral-300 bg-neutral-50 text-neutral-400",
        aspect,
        className
      )}
    >
      <ImageIcon className="h-8 w-8" />
      <span className="px-4 text-center text-xs">{label}</span>
    </div>
  );
}
