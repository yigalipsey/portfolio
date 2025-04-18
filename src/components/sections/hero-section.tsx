// components/sections/hero-section.tsx
"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { CheckCircle2 } from "lucide-react";
import { HyperText } from "@/components/magicui/hyper-text";

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
          {/* שורה 1 - Ensure equal height using flex-1 */}
          <div className="flex-1 flex items-center px-4 text-muted-foreground">
            Available for work
          </div>

          {/* שורה 2 - Ensure equal height using flex-1 */}
          <div className="flex-1 flex items-center px-4 gap-2">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              {DATA.name}
            </h1>
            <CheckCircle2 size={24} className="text-blue-500" />
          </div>

          {/* שורה 3 - Ensure equal height using flex-1 */}
          <div className="flex-1 flex items-center px-4 text-muted-foreground">
            <HyperText
              as="p"
              className="w-full text-base lg:text-lg"
              startOnView
              delay={0.08}
            >
              {DATA.description}
            </HyperText>
          </div>
        </div>
      </div>
    </section>
  );
}
