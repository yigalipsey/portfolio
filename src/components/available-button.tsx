"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function AvailableButton() {
  return (
    <button
      className={cn(
        "relative flex cursor-pointer items-center border-none gap-2 opacity-60",
        "font-semibold text-foreground text-sm"
      )}
    >
      <div className="relative flex size-4 items-center justify-center rounded-full border-2 border-[#178d00] bg-transparent">
        <div className="absolute size-3 rounded-full bg-green-400" />
        {/* Outline needs specific keyframes, applied via style for now */}
        <div className="absolute size-4 rounded-full" />
      </div>
      Available
    </button>
  );
}
