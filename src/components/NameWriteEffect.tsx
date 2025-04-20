// src/components/NameWriteEffect.tsx
"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShalomWriteEffect } from "./shalom-write-effect";
import { AppleHelloEnglishEffect as HelloWriteEffect } from "./AppleHelloEnglishEffect";

export interface NameWriteEffectProps {
  speed?: number;
  onAnimationComplete?: () => void;
  className?: string;
}

export const NameWriteEffect: React.FC<NameWriteEffectProps> = ({
  speed = 1,
  onAnimationComplete,
  className,
}) => {
  const [showHello, setShowHello] = React.useState(false);

  return (
    <div
      className={cn(
        "relative w-full mt-7 md:mt-10 h-48 flex justify-center items-center overflow-hidden",
        className
      )}
    >
      {/* רקע הנקודות */}
      <div
        className={cn(
          "absolute inset-0 opacity-80",
          "[background-size:15px_15px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      <AnimatePresence mode="wait">
        {!showHello ? (
          <motion.div
            key="shalom"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <ShalomWriteEffect
              speed={speed}
              onAnimationComplete={() => setShowHello(true)}
              className="relative z-10 h-14 md:h-20 w-auto"
            />
          </motion.div>
        ) : (
          <motion.div
            key="hello"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <HelloWriteEffect
              speed={speed}
              onAnimationComplete={onAnimationComplete}
              className="relative z-10 h-14 md:h-20 w-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
