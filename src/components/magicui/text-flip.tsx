"use client";

import { useEffect, useMemo, useRef } from "react";

export default function TextFlip() {
  // Updated words list
  const words = useMemo(
    () => [
      "Full Stack Developer",
      "Designer",
      "Problem Solver",
      "Full Stack Developer",
    ],
    []
  );

  const tallestRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 0;
      const parent = tallestRef.current; // Cache parent element

      // Clear any previous spans if words change (though they don't in this example)
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }

      // Create spans to measure height
      const tempContainer = document.createElement("div");
      tempContainer.style.position = "absolute";
      tempContainer.style.opacity = "0";
      tempContainer.style.pointerEvents = "none"; // Prevent interaction
      tempContainer.style.top = "-9999px"; // Move off-screen
      tempContainer.style.left = "-9999px";
      document.body.appendChild(tempContainer); // Append temporary container to body

      words.forEach((word) => {
        const span = document.createElement("span");
        // Apply relevant styles that affect height (e.g., from globals.css or parent)
        // For simplicity, we assume default styles or inherit from where TextFlip is used
        span.textContent = word;
        tempContainer.appendChild(span); // Append to off-screen container
        const height = span.offsetHeight;

        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      document.body.removeChild(tempContainer); // Clean up temporary container

      // Add the actual animating spans back to the original container
      words.forEach((word, index) => {
        const span = document.createElement("span");
        span.className = "animate-flip-words"; // Apply animation class
        span.textContent = word;
        parent.appendChild(span);
      });

      if (maxHeight > 0) {
        parent.style.height = `${maxHeight}px`;
      }
    }
  }, [words]); // Rerun if words change

  return (
    <div className="box-content flex gap-2 text-base lg:text-lg font-sans">
      <div
        ref={tallestRef}
        className="flex flex-col overflow-hidden text-muted-foreground"
      >
        {/* Spans are now added dynamically in useEffect */}
      </div>
    </div>
  );
}
