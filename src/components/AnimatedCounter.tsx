
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimatedCounterProps {
  start: number;
  end: number;
  duration: number;
  delay?: number;
  suffix?: string;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  start = 0,
  end,
  duration = 2,
  delay = 0,
  suffix = "",
  className = "",
}) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      
      let startTime: number;
      let animationFrameId: number;
      
      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * (end - start) + start));
        
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCount);
        }
      };
      
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(updateCount);
      }, delay * 1000);
      
      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, [isInView, start, end, duration, delay, controls]);
  
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      <span>{count}</span>
      {suffix}
    </motion.div>
  );
};

export default AnimatedCounter;
