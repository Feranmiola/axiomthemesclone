"use client";
import { ArrowUp, MessageSquareIcon } from "lucide-react";
import React, { useState, useEffect } from "react";

const ChatWithUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-8 left-8 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="flex items-center gap-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="rounded-full p-4 bg-green-500 flex items-center justify-center cursor-pointer transition-colors duration-200">
          <MessageSquareIcon color="white" />
        </div>
        <div
          className={`bg-green-500 text-white px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 transform origin-left ${
            isHovered ? "scale-x-100" : "scale-x-0"
          }`}
        >
          Chat with us
        </div>
      </div>
    </div>
  );
};

export default ChatWithUs;
