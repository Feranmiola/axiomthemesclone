"use client";
import { SendIcon } from "lucide-react";
import React from "react";
import { Checkbox } from "./ui/checkbox";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Subscribe = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <div
      ref={containerRef}
      className="flex flex-row items-center justify-center space-x-20 w-full py-20"
    >
      <motion.p
        className="text-[54px] font-medium leading-none"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Subscribe for the
        <br />
        exclusive updates!
      </motion.p>
      <motion.div
        className="flex flex-row space-x-3"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex flex-col space-y-2">
          <motion.input
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white w-[420px] h-[48px] rounded-3xl shadow-sm outline-none focus:outline-none  px-3"
            type="email"
            placeholder="Enter Your Email Address"
          />
          <motion.div
            className="flex flex-row items-center space-x-1"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Checkbox id="privacyPolicy" />

            <label htmlFor="privacyPolicy" className="font-light">
              I agree to the{" "}
              <span className="font-medium underline underline-offset-4 transition ease-in-out cursor-pointer opacity-60 hover:opacity-100">
                Privacy Policy
              </span>
              .
            </label>
          </motion.div>
        </div>
        <motion.button
          className="flex flex-row items-center justify-center text-white space-x-2 px-8 py-3 h-max rounded-3xl bg-blue-700 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ backgroundColor: "#1d4ed8" }}
        >
          <div className="pr-2">
            <SendIcon color="white" />
          </div>
          Subscribe
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Subscribe;
