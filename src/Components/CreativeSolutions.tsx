"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CreativeSolutions = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <div
      ref={containerRef}
      className="flex flex-row items-center justify-center w-full py-10"
    >
      <div className="flex flex-col space-y-3">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          CREATIVE SOLUTIONS
        </motion.p>
        <div className="flex flex-row space-x-28">
          <motion.p
            className="text-[64px] font-medium leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We make unique & <br />
            memorable brands
          </motion.p>
          <motion.div
            className="flex flex-col space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              <br />
              blanditiis praesentium voluptatum deleniti atque lorem in
              voluptate
              <br /> velit iusto odio dignissimos duci esse.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              <br />
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa{" "}
              <br />
              quae.
            </motion.p>

            <motion.a
              href="mailto:info@email.com"
              className="text-black cursor-pointer hover:font-medium transition-all ease-in-out duration-200 relative group w-max"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Read More
              <span className="absolute left-0 bottom-0 h-[1px] bg-black w-full group-hover:w-0 transition-all duration-300 origin-left group-hover:transition-all group-hover:duration-300 group-hover:origin-left"></span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CreativeSolutions;
