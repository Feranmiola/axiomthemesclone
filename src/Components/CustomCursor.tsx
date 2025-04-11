"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const [isFooterHovered, setIsFooterHovered] = useState(false);

  const springConfig = { damping: 20, stiffness: 200 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (isSliderHovered) {
        // Center the cursor when enlarged
        cursorX.set(e.clientX - 24); // Half of the enlarged width (48px)
        cursorY.set(e.clientY - 24); // Half of the enlarged height (48px)
      } else {
        // Offset by 25px when small
        cursorX.set(e.clientX + 25);
        cursorY.set(e.clientY + 25);
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const sliderElement = target.closest("#slider");
      const footerElement = target.closest("#footer");

      if (sliderElement) {
        setIsSliderHovered(true);
      }
      if (footerElement) {
        setIsFooterHovered(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const sliderElement = target.closest("#slider");
      const footerElement = target.closest("#footer");

      if (!sliderElement) {
        setIsSliderHovered(false);
      }
      if (!footerElement) {
        setIsFooterHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [cursorX, cursorY, isSliderHovered]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <motion.div
        className={`rounded-full flex items-center justify-center relative ${
          isSliderHovered ? "w-12 h-12" : "w-2 h-2"
        } ${isFooterHovered ? "bg-white" : "bg-[#000000]"}`}
        animate={{
          scale: isSliderHovered ? 1 : 1,
        }}
      >
        {isSliderHovered && (
          <>
            <ChevronLeft className="absolute left-1 text-white w-4 h-4" />
            <ChevronRight className="absolute right-1 text-white w-4 h-4" />
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
