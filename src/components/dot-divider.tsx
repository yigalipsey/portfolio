import { cn } from "@/lib/utils";
import React from "react";

// Add hideTopBorder prop to the interface
interface DotDividerProps {
  className?: string;
  hideTopBorder?: boolean;
}

export function DotDivider({
  className,
  hideTopBorder = false,
}: DotDividerProps) {
  return (
    // Conditionally apply border-t based on hideTopBorder prop
    <div
      className={cn(
        "relative w-full h-[20px]",
        "border-b border-zinc-400 dark:border-zinc-800", // Always apply bottom border
        !hideTopBorder && "border-t border-zinc-400 dark:border-zinc-800", // Apply top border only if hideTopBorder is false
        // Styles for the top dashed line pseudo-element (::before)
        "before:content-[''] before:absolute before:top-[1px] before:left-0 before:right-0",
        "before:h-px before:border-t before:border-dashed",
        "before:border-zinc-400 dark:before:border-zinc-800",
        // Styles for the bottom dashed line pseudo-element (::after)
        "after:content-[''] after:absolute after:bottom-[1px] after:left-0 after:right-0",
        "after:h-px after:border-t after:border-dashed", // Use border-t to draw the line
        "after:border-zinc-400 dark:after:border-zinc-800",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-80",
          "[background-size:15px_15px]", // Back to 15px size for 30px height (2 rows visible)
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          "[background-position:0px_2.5px]" // Center 15px pattern in 20px height
        )}
      />
    </div>
  );
}
