"use client";
import { ArrowRight, MailIcon } from "lucide-react";
import React, { useRef } from "react";
import { Checkbox } from "./ui/checkbox";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <div className="w-full h-[600px] relative flex items-center justify-center bg-[#080E17]">
      <div className="custom-shape-divider-top-1744380682">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div
        ref={containerRef}
        className="flex w-full max-w-[65%] flex-col items-center h-full justify-between py-10 pt-[200px]"
      >
        <motion.div
          className="w-full flex items-start justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="flex flex-col space-y-5"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="font-bold text-white text-xl">Office</p>
            <div className="flex flex-col space-y-2">
              <p className="text-[#8F919F]">
                Germany — <br />
                785 15h Street, Office 478 <br />
                Berlin, De 81566
              </p>
              <a
                href="mailto:info@email.com"
                className="text-[#8F919F] cursor-pointer hover:text-white transition-all ease-in-out duration-200 relative group w-max"
              >
                info@email.com
                <span className="absolute left-0 bottom-0 h-[1px] bg-[#8F919F] w-full group-hover:w-0 transition-all duration-300 origin-left group-hover:transition-all group-hover:duration-300 group-hover:origin-left"></span>
              </a>
              <a
                href="tel:+18408412569"
                className="text-[#8F919F] hover:text-white transition-colors ease-in-out duration-200 pt-5 cursor-pointer"
              >
                +1 840 841 25 69
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="font-bold text-white text-xl">Links</p>
            <div className="flex flex-col space-y-3">
              <p className="text-[#8F919F] cursor-pointer hover:text-white transition-all hover:translate-x-1 inline-block ease-in-out duration-200 relative group w-max">
                Home
                <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </p>
              <p className="text-[#8F919F] cursor-pointer hover:text-white transition-all hover:translate-x-1 inline-block ease-in-out duration-200 relative group w-max">
                Services
                <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </p>
              <p className="text-[#8F919F] cursor-pointer hover:text-white transition-all hover:translate-x-1 inline-block ease-in-out duration-200 relative group w-max">
                About Us
                <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </p>
              <p className="text-[#8F919F] cursor-pointer hover:text-white transition-all hover:translate-x-1 inline-block ease-in-out duration-200 relative group w-max">
                Our Team
                <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </p>
              <p className="text-[#8F919F] cursor-pointer hover:text-white transition-all hover:translate-x-1 inline-block ease-in-out duration-200 relative group w-max">
                Contacts
                <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="font-bold text-white text-xl">Socials</p>
            <div className="flex flex-col space-y-3">
              <p className="text-[#8F919F] cursor-pointer hover:text-white transition-all hover:translate-x-1 inline-block ease-in-out duration-200 relative group w-max">
                Facebook
                <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </p>
              <p className="text-[#8F919F] cursor-pointer hover:text-white transition-all hover:translate-x-1 inline-block ease-in-out duration-200 relative group w-max">
                Tritter
                <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </p>
              <p className="text-[#8F919F] cursor-pointer hover:text-white transition-all hover:translate-x-1 inline-block ease-in-out duration-200 relative group w-max">
                Dribble
                <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </p>
              <p className="text-[#8F919F] cursor-pointer hover:text-white transition-all hover:translate-x-1 inline-block ease-in-out duration-200 relative group w-max">
                Instagram
                <span className="absolute left-0 bottom-0 h-[1px] bg-white w-0 group-hover:w-full transition-all duration-300 origin-left"></span>
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-5"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="font-bold text-white text-xl">Newsletter</p>
            <div className="flex flex-row items-center space-x-2">
              <div className="px-4 py-3 rounded-2xl flex flex-row items-center space-x-2 bg-[#131921]">
                <MailIcon size={20} color="#8F919F" />
                <input
                  className="bg-transparent outline-none focus:outline-none text-white placeholder:text-[#8F919F] text-sm"
                  placeholder="Enter Your Email Address"
                />
              </div>

              <motion.div
                className="p-2 bg-[#400AF5] rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight color="white" />
              </motion.div>
            </div>
            <div className="flex flex-row items-center space-x-1">
              <Checkbox id="privacyPolicy" />

              <label
                htmlFor="privacyPolicy"
                className="font-light text-[#8F919F]"
              >
                I agree to the{" "}
                <span className="font-medium underline underline-offset-4 transition ease-in-out cursor-pointer opacity-60 hover:opacity-100">
                  Privacy Policy
                </span>
                .
              </label>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="border-t border-t-[#1D2938] w-full pt-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-[#8F919F] cursor-pointer hover:text-white transition-all hover:translate-x-1 inline-block ease-in-out duration-200 relative">
            AxiomThemes © 2025. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
