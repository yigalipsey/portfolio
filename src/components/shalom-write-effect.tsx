// src/components/shalom-write-effect.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface WriteEffectProps {
  speed?: number;
  onAnimationComplete?: () => void;
  className?: string;
}

const shalomPaths = [
  `M399.507 170.618C393.552 191.462 377.671 208.336 351.368 208.336C325.314 208.336 310.425 187.74 311.418 153.993C312.41 119.254 332.715 88.7326 358.068 88.7326C375.681 88.7326 384.615 102.402 381.393 121.239C375.686 153.993 338.961 170.37 288.341 173.844`,
  `M249.632 133.894C220.848 134.887 198.515 157.219 200.252 184.018C200.996 200.147 211.915 208.832 224.818 208.832C243.925 208.832 257.82 193.199 256.083 162.926C254.347 134.643 237.627 98.9484 236.658 63.59C235.787 31.7642 249.913 8.0875 276.927 8.0875C295.821 8.0875 307.395 19.2133 314.148 31.9088`,
  `M162.535 91.214C161.294 128.435 156.083 172.852 147.646 206.35`,
  `M29.2843 90.7177C71.7085 90.7177 107.448 133.894 106.207 178.063C105.711 197.417 95.5374 206.35 80.1528 206.35C55.1117 206.35 32.581 167.921 29.0361 91.9584`,
  `M29.0361 91.9584C25.0658 132.653 18.8624 170.867 8.19238 206.35`,
];

export const ShalomWriteEffect: React.FC<WriteEffectProps> = ({
  speed = 1,
  onAnimationComplete,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 407 217"
    fill="none"
    className={cn("w-full h-auto", className)}
  >
    {shalomPaths.map((d, i) => (
      <motion.path
        key={i}
        d={d}
        stroke="currentColor"
        strokeWidth={14.8883}
        // נתחיל עם קו ללא round־cap, כדי שלא יראו נקודה
        initial={{ pathLength: 0, strokeLinecap: "butt" }}
        // נעבור ל־round רק כשהקו מתגלה
        animate={{ pathLength: 1, strokeLinecap: "round" }}
        transition={{
          delay: i * 0.4 * speed,
          duration: 0.8 * speed,
          ease: "easeInOut",
        }}
        onAnimationComplete={
          i === shalomPaths.length - 1 ? onAnimationComplete : undefined
        }
      />
    ))}
  </svg>
);
