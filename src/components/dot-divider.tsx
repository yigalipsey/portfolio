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
        "relative w-full h-[30px]",
        "border-b border-zinc-400 dark:border-zinc-800", // Always apply bottom border
        !hideTopBorder && "border-t border-zinc-400 dark:border-zinc-800", // Apply top border only if hideTopBorder is false
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 opacity-80",
          "[background-size:15px_15px]", // Same size as before
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
    </div>
  );
}
