"use client";
import React from "react";
import DesignIcon from "./Icons/DesignIcon";
import UploadIcon from "./Icons/UploadIcon";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CreativeAgency = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <div
      ref={containerRef}
      className="flex flex-row items-center justify-center w-full space-x-28 py-10"
    >
      <div className="relative w-[600px] h-[600px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1744362475/h3l_uytasz.webp"
            alt="h3l"
            width={412}
            height={413}
            className="absolute left-0 top-0 z-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1744362474/h3r_ggqhl3.webp"
            alt="h3r"
            width={416}
            height={485}
            className="absolute right-0 bottom-0 z-10"
          />
        </motion.div>
      </div>

      <motion.div
        className="flex flex-col space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.p
          className="font-medium"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          CREATIVE AGENCY
        </motion.p>
        <motion.p
          className="text-[64px] font-medium leading-none"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          We help your
          <br />
          business grow
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas <br />
          sit aspernatur aut odit aut fugit, sed quia.
        </motion.p>

        <motion.div
          className="flex flex-row items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <DesignIcon />

          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-semibold">Creative Design</p>
            <p>Natus error sit voluptatem accus antium doloremque.</p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-row items-center space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <UploadIcon />

          <div className="flex flex-col space-y-3">
            <p className="text-2xl font-semibold">Endless possibilities</p>
            <p>Sit voluptatem accus antium doloremque laudan.</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CreativeAgency;
