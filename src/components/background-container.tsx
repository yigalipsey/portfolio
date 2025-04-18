import { cn } from "@/lib/utils";
import React from "react";

const Ellipses = () => {
  const sharedClasses =
    "rounded-full outline outline-8 dark:outline-gray-950 size-2 md:size-2.5 my-4 outline-gray-50 bg-green-400 sm:my-6 md:my-8";
  return (
    <div className="absolute inset-0 z-0 grid items-center">
      <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
        <div
          className={`${sharedClasses} -mx-[5.5px] transform -translate-y-[2px]`}
        ></div>
        <div
          className={`${sharedClasses} -mx-[5px] place-self-end transform -translate-y-[2px]`}
        ></div>

        <div className={`${sharedClasses} -mx-[4.5px]`}></div>
        <div className={`${sharedClasses} -mx-[4px] place-self-end`}></div>
      </section>
    </div>
  );
};

export const BackgroundContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  // New outer div for full-width border and lines
  <div className="relative">
    {/* Inner dashed line using border-b, matching outer border style */}
    <div className="absolute left-0 top-3 -z-0 h-0 w-full border-b border-dashed m border-zinc-400 opacity-80 dark:border-zinc-800 md:top-7"></div>
    {/* Existing top horizontal line */}
    <div className="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:top-6 md:top-8"></div>
    {/* Existing bottom horizontal line (restored bg-zinc-400) */}
    <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-700 sm:bottom-6 md:bottom-8"></div>

    {/* Original div, now handles padding and contains vertical lines + content */}
    <div className="relative mx-auto w-full px-4 sm:px-6 md:px-8">
      {/* New vertical dashed line (right side) */}
      <div className="absolute top-0 right-3 -z-0 h-full w-0 border-r border-dashed border-zinc-400 opacity-80 dark:border-zinc-800 md:right-7"></div>
      {/* New vertical dashed line (left side) */}
      <div className="absolute top-0 left-3 -z-0 h-full w-0 border-l border-dashed border-zinc-400 opacity-80 dark:border-zinc-800 md:left-7"></div>

      <div className="relative w-full border-x border-zinc-400 dark:border-zinc-700">
        <Ellipses />
        {/* Removed mx-auto, max-w-2xl, px-6. Kept py paddings. */}
        <div className="relative z-20 py-12 sm:py-24">{children}</div>
      </div>
    </div>
  </div>
);
