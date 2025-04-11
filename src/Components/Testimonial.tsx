"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const x = useMotionValue(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const extendedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    animate(x, -nextIndex * 800, { duration: 0.5 }).then(() => {
      if (nextIndex === extendedTestimonials.length - 1) {
        setCurrentIndex(1);
        x.set(-800);
      }
      setIsAnimating(false);
    });
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    animate(x, -prevIndex * 800, { duration: 0.5 }).then(() => {
      if (prevIndex === 0) {
        setCurrentIndex(extendedTestimonials.length - 2);
        x.set(-(extendedTestimonials.length - 2) * 800);
      }
      setIsAnimating(false);
    });
  };

  const handleDragEnd = (event: any, info: any) => {
    if (isAnimating) return;
    const threshold = 100;
    if (info.offset.x > threshold) {
      handlePrev();
    } else if (info.offset.x < -threshold) {
      handleNext();
    } else {
      animate(x, -currentIndex * 800, { duration: 0.5 });
    }
  };

  // Calculate the real index for the dots (accounting for the clones)
  const getRealIndex = () => {
    if (currentIndex === 0) return testimonials.length - 1;
    if (currentIndex === extendedTestimonials.length - 1) return 0;
    return currentIndex - 1;
  };

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col items-center justify-center py-20"
    >
      <motion.div
        className="flex flex-row items-center justify-center space-x-5"
        id="slider"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="p-2 border rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handlePrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowLeft />
        </motion.div>

        <motion.div
          ref={sliderRef}
          className="w-[800px] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            drag="x"
            dragConstraints={sliderRef}
            style={{ x }}
            className="flex"
            onDragEnd={handleDragEnd}
          >
            {extendedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-[800px] flex-shrink-0 flex flex-col items-center space-y-5"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
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

        <motion.div
          className="p-2 border rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowRight />
        </motion.div>
      </motion.div>

      <motion.div
        className="flex space-x-2 mt-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === getRealIndex() ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonial;
