"use client";

import { motion, useMotionValue, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://res.cloudinary.com/debiu7z1b/image/upload/v1744377186/image-14_ij5wpu.webp",
  "https://res.cloudinary.com/debiu7z1b/image/upload/v1744377186/image-15_1_tnj7mp.webp",
  "https://res.cloudinary.com/debiu7z1b/image/upload/v1744377186/image-16_ujhlhm.png",
  "https://res.cloudinary.com/debiu7z1b/image/upload/v1744377186/image-17_wtomnm.png",
  "https://res.cloudinary.com/debiu7z1b/image/upload/v1744377186/image-16_ujhlhm.png",
  "https://res.cloudinary.com/debiu7z1b/image/upload/v1744377186/image-15_dvben7.webp",
];

const ImageSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const x = useMotionValue(0);
  const boundedX = useTransform(x, (value) => {
    if (!sliderRef.current) return value;
    const maxScroll =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    return Math.max(Math.min(0, value), -maxScroll);
  });

  return (
    <div ref={containerRef} className="py-20">
      <motion.div
        ref={sliderRef}
        id="slider"
        className="flex justify-center items-center overflow-hidden"
        whileTap={{ cursor: "grabbing" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          drag="x"
          dragConstraints={sliderRef}
          style={{ x: boundedX }}
          className="flex gap-10 items-center pl-[400px] select-none"
        >
          {images.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative ${
                i % 2 === 0 ? "min-w-[400px] h-auto" : "min-w-[400px] h-auto"
              } pointer-events-none`}
            >
              <img
                src={image}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover rounded-lg"
                draggable="false"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageSlider;
