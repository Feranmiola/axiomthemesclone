"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const WhoWeAre = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-row items-center justify-center space-x-28 py-20"
    >
      <motion.div
        className="flex flex-col space-y-5"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.p
          className="font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          WHO WE ARE
        </motion.p>
        <motion.p
          className="text-[64px] font-medium leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          We provide best
          <br />
          digital services
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit{" "}
          <br />
          aspernatur aut odit aut fugit sed quia.
        </motion.p>

        <motion.button
          className="flex items-center justify-center w-max px-7 py-3 font-semibold mt-5 mb-24 text-white bg-blue-400 hover:bg-blue-500 transition ease-in-out rounded-3xl cursor-pointer duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Discover Now
        </motion.button>
      </motion.div>
      <motion.div
        className="relative w-[600px] h-[560px]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1744374067/h32r_cslda9.webp"
            alt="h32r"
            width={461}
            height={485}
            className="absolute top-0 right-0 z-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Image
            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1744374067/h32l_kgbity.webp"
            alt="h3r"
            width={412}
            height={413}
            className="absolute left-0 bottom-0 z-10"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhoWeAre;
