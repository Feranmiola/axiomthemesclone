"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import QuoteIcon from "./Icons/QuoteIcon";

const testimonials = [
  {
    image:
      "https://res.cloudinary.com/debiu7z1b/image/upload/v1744378736/image-1-300x300_lnwm8j.jpg",
    text: "Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
    name: "John Dou",
    role: "Expert",
  },
  {
    image:
      "https://res.cloudinary.com/debiu7z1b/image/upload/v1744378736/image-1-300x300_lnwm8j.jpg",
    text: "Another great testimonial about our amazing service and how it changed their life for the better.",
    name: "Jane Smith",
    role: "Client",
  },
  {
    image:
      "https://res.cloudinary.com/debiu7z1b/image/upload/v1744378736/image-1-300x300_lnwm8j.jpg",
    text: "The best experience I've had with any service provider. Highly recommended!",
    name: "Mike Johnson",
    role: "Customer",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const sliderRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
    animate(x, -nextIndex * 800, { duration: 0.5 });
  };

  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    setCurrentIndex(prevIndex);
    animate(x, -prevIndex * 800, { duration: 0.5 });
  };

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      handlePrev();
    } else if (info.offset.x < -threshold) {
      handleNext();
    } else {
      animate(x, -currentIndex * 800, { duration: 0.5 });
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="flex flex-row items-center justify-center space-x-5">
        <div
          className="p-2 border rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handlePrev}
        >
          <ArrowLeft />
        </div>

        <motion.div ref={sliderRef} className="w-[800px] overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={sliderRef}
            style={{ x }}
            className="flex"
            onDragEnd={handleDragEnd}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-[800px] flex-shrink-0 flex flex-col items-center space-y-5"
              >
                <img
                  src={testimonial.image}
                  alt="testimonial_Image"
                  className="rounded-full w-[100px] h-auto"
                />
                <p className="text-2xl max-w-[800px] text-center">
                  {testimonial.text}
                </p>

                <div className="flex flex-col space-y-5 items-center">
                  <div className="scale-x-[-1] rotate-180">
                    <QuoteIcon />
                  </div>
                  <div className="flex flex-col space-y-1 items-center">
                    <p className="font-medium text-2xl">{testimonial.name}</p>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div
          className="p-2 border rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handleNext}
        >
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
