"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function AvailableButton() {
  return (
    <button
      className={cn(
        "relative flex cursor-pointer items-center border-none gap-1 ",
        "font-semibold text-foreground text-sm"
      )}
    >
      <div className="relative flex mb-1 size-4 items-center justify-center rounded-full border-2 ">
        <div className="absolute size-3  rounded-full bg-green-400" />
        {/* Outline needs specific keyframes, applied via style for now */}
        <div className="absolute size-4 rounded-full" />
      </div>
      <h1 className="opacity-80">Available</h1>
    </button>
  );
}
