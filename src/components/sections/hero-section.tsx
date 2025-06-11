// components/sections/hero-section.tsx

import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import TextFlip from "@/components/magicui/text-flip";
import { AvailableButton } from "@/components/available-button";

export function HeroSection() {
  return (
    <section id="hero">
      <div
        className="
          mx-auto w-full max-w-2xl
          flex
          border-t border-b border-zinc-400 dark:border-zinc-800
        "
      >
        {/* עמודה שמאלית - Adjusted width and removed padding */}
        <div
          className="
            w-32 lg:w-48 flex-shrink-0
            border-r border-zinc-400 dark:border-zinc-800
            flex items-center justify-center
          "
        >
          {/* Avatar size - Changed mobile size to w-32 h-32 */}
          <Avatar className="w-32 h-32 lg:w-48 lg:h-48">
            <AvatarImage src={DATA.avatarUrl} alt={DATA.name} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        {/* עמודה ימנית, מחולקת ל‑3 שורות שוות */}
        <div
          className="
            flex-1 flex flex-col
            divide-y divide-zinc-400 dark:divide-zinc-800
          "
        >
          {/* שורה 1 - Changed items-center to items-end */}
          <div className="flex-1 flex items-end justify-start px-4 pt-2 pb-1">
            <AvailableButton />
          </div>

          {/* שורה 2 - Removed flex-1 to allow natural height */}
          <div className="flex   items-center px-4 gap-1">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              {DATA.name}
            </h1>
            {/* Inlined SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width={24}
              height={24}
              className="inline-block ml-1 mt-1"
            >
              <polygon
                className="fill-blue-700"
                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
              />
              <polygon
                fill="#fff"
                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
              />
            </svg>
          </div>

          {/* שורה 3 - Removed flex-1 to allow natural height */}
          <div className="flex items-center px-4 text-muted-foreground pb-1">
            {/* Replaced TypingText with TextFlip */}
            <TextFlip />
          </div>
        </div>
      </div>
    </section>
  );
}
