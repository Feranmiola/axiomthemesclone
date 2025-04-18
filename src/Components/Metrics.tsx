"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type MetricProps = {
  end: number;
  label: string;
};

const Metric = ({ end, label }: MetricProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
          setHasAnimated(true);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, hasAnimated, end]);

  return (
    <div ref={ref} className="relative flex items-center justify-center w-1/4">
      {/* Label */}
      <p className="absolute text-2xl text-black font-medium top-1/2 -translate-y-1/2 z-10">
        {label}
      </p>

      {/* Big Number */}
      <p className="text-[180px] text-white font-semibold opacity-70 select-none">
        {count}
      </p>
    </div>
  );
};

const Metrics = () => {
  const data = [
    { end: 98, label: "Projects" },
    { end: 65, label: "People" },
    { end: 10, label: "Years" },
    { end: 15, label: "Offices" },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex w-full justify-center items-center space-x-5 py-10 max-w-[70%]">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <Metric end={item.end} label={item.label} />
            {index < data.length - 1 && (
              <div className="h-[100px] w-px bg-black opacity-20" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
