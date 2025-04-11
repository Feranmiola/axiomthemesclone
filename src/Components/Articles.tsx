"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useRef, useState } from "react";

const blogPosts = [
  {
    image:
      "https://res.cloudinary.com/debiu7z1b/image/upload/v1744380006/image-12_j8bwbg.jpg",
    category: "MEDIA SEO",
    title: "Why do project managers need to focus on strategy?",
    date: "Apr 21, 2020",
    comments: "0 Comments",
  },
  {
    image:
      "https://res.cloudinary.com/debiu7z1b/image/upload/v1744380006/image-12_j8bwbg.jpg",
    category: "WEB DESIGN",
    title: "How to improve your website's user experience",
    date: "May 15, 2020",
    comments: "3 Comments",
  },
  {
    image:
      "https://res.cloudinary.com/debiu7z1b/image/upload/v1744380006/image-12_j8bwbg.jpg",
    category: "DEVELOPMENT",
    title: "The future of web development in 2023",
    date: "Jun 2, 2020",
    comments: "5 Comments",
  },
  {
    image:
      "https://res.cloudinary.com/debiu7z1b/image/upload/v1744380006/image-12_j8bwbg.jpg",
    category: "MARKETING",
    title: "Digital marketing trends to watch this year",
    date: "Jul 10, 2020",
    comments: "2 Comments",
  },
  {
    image:
      "https://res.cloudinary.com/debiu7z1b/image/upload/v1744380006/image-12_j8bwbg.jpg",
    category: "SEO",
    title: "Advanced SEO techniques for 2023",
    date: "Aug 5, 2020",
    comments: "4 Comments",
  },
  {
    image:
      "https://res.cloudinary.com/debiu7z1b/image/upload/v1744380006/image-12_j8bwbg.jpg",
    category: "DESIGN",
    title: "Creating engaging user interfaces",
    date: "Sep 12, 2020",
    comments: "1 Comment",
  },
];

const Articles = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const x = useMotionValue(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate total number of sets (3 posts per set)
  const totalSets = Math.ceil(blogPosts.length / 3);
  const postWidth = 450;
  const gap = 30;
  const containerWidth = postWidth * 3 + gap * 2;

  const boundedX = useTransform(x, (value) => {
    if (!sliderRef.current) return value;
    const maxScroll = (totalSets - 1) * containerWidth;
    return Math.max(Math.min(0, value), -maxScroll);
  });

  const handleSetChange = (newSet: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSet(newSet);
    animate(x, -newSet * containerWidth, { duration: 0.5 }).then(() => {
      setIsAnimating(false);
    });
  };

  const handleDragEnd = (event: any, info: any) => {
    if (isAnimating) return;
    const threshold = 100;

    if (info.offset.x > threshold && currentSet > 0) {
      handleSetChange(currentSet - 1);
    } else if (info.offset.x < -threshold && currentSet < totalSets - 1) {
      handleSetChange(currentSet + 1);
    } else {
      animate(x, -currentSet * containerWidth, { duration: 0.5 });
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full flex items-center justify-center flex-col space-y-10 py-20"
    >
      <motion.div
        className="flex flex-col space-y-2 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          OUR BLOG
        </motion.p>
        <motion.p
          className="text-[54px] font-medium leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Latest articles
        </motion.p>
      </motion.div>

      <motion.div
        ref={sliderRef}
        className="w-[1410px] overflow-hidden cursor-drag"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div
          drag="x"
          dragConstraints={sliderRef}
          style={{ x: boundedX }}
          className="flex gap-[30px]"
          onDragEnd={handleDragEnd}
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[450px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
            >
              <div className="flex flex-col space-y-2">
                <div className="w-full h-[300px] overflow-hidden rounded-3xl">
                  <motion.img
                    src={post.image}
                    alt="blog1"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                >
                  {post.category}
                </motion.p>
                <motion.p
                  className="text-3xl font-medium"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                >
                  {post.title}
                </motion.p>
                <motion.div
                  className="flex flex-row items-center space-x-2"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 + index * 0.1 }}
                >
                  <p className="text-[#A4A8B6]">{post.date}</p>
                  <div className="rounded-full bg-[#A4A8B6] w-1 h-1"></div>
                  <p className="text-[#A4A8B6]">{post.comments}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="flex space-x-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        {Array.from({ length: totalSets }).map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
              index === currentSet ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => handleSetChange(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Articles;
