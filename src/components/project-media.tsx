"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { Icons } from "@/components/icons";

export interface ProjectReel {
  href: string;
  title: string;
}

interface Props {
  image: string;
  alt: string;
  href?: string;
  video?: string;
  reel?: ProjectReel;
  className?: string;
}

export function ProjectMedia({ image, alt, href, video, reel, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const el = ref.current;
    if (!el || !video) return;
    if (!window.matchMedia("(hover: hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.play().then(
      () => setPlaying(true),
      () => setPlaying(false)
    );
  };

  const stop = () => {
    const el = ref.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPlaying(false);
  };

  return (
    <Link
      href={reel?.href || href || "#"}
      target={reel ? "_blank" : undefined}
      rel={reel ? "noopener noreferrer" : undefined}
      className={cn("relative block cursor-pointer", className)}
      onPointerEnter={start}
      onPointerLeave={stop}
    >
      <Image
        src={image}
        alt={alt}
        width={320}
        height={160}
        sizes="(max-width: 768px) 100vw, 320px"
        quality={50}
        className="h-40 w-full overflow-hidden object-cover object-top"
      />
      {video && (
        <video
          ref={ref}
          src={video}
          muted
          loop
          playsInline
          preload="none"
          tabIndex={-1}
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-200"
          style={{ opacity: playing ? 1 : 0 }}
        />
      )}
      {reel && (
        <>
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20">
            <span className="flex size-12 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
              <Icons.play className="size-5 translate-x-0.5" />
            </span>
          </span>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-black/75 via-black/35 to-transparent px-2.5 pb-1.5 pt-7 text-[10px] font-medium text-white">
            {reel.title}
          </span>
        </>
      )}
    </Link>
  );
}
