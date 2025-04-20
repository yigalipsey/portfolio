import { cn } from "@/lib/utils";
import React from "react";

// Define animation duration and timing function as constants
const animation = "5s ease-in-out infinite";

export function AvailableButton() {
  return (
    <button
      className={cn(
        "relative flex cursor-pointer items-center border-none gap-2 opacity-70",
        "font-semibold text-foreground text-sm"
      )}
    >
      <div
        className="relative flex size-4 items-center justify-center rounded-full border-2 border-[#178d00] bg-transparent"
        style={{ animation: `circle-keys ${animation}` }}
      >
        <div
          className="absolute size-3 rounded-full bg-[#178d00]"
          style={{ animation: `dot-keys ${animation}` }}
        />
        {/* Outline needs specific keyframes, applied via style for now */}
        <div
          className="absolute size-4 rounded-full"
          style={{ animation: `outline-keys ${animation}` }}
        />
      </div>
      Available
    </button>
  );
}
