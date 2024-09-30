"use client";

import { useScroll, motion, useSpring, useMotionValueEvent, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function TableOfContent() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleY = useSpring(scrollYProgress, { damping: 30, stiffness: 100 });
  const controls = useAnimationControls();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 120) {
      controls.start({ bottom: 0 });
    } else {
      controls.start({ bottom: "100%" });
    }

    console.log("Page scroll: ", latest);
  });

  return (
    <div className="fixed top-10 right-10">
      <motion.div className="absolute inset-0 origin-top bg-black" style={{ scaleY: scaleY }} />
      <div className="h-[300px] w-1.5 rounded-[100%] bg-blue-500"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-blue-500 overflow-hidden">
        <motion.div className="absolute top-0 right-0 left-0 bg-black" animate={controls} />
        <div className="absolute inset-1 bg-white rounded-full "></div>
      </div>
      <div className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-blue-500">
        <div className="absolute inset-1 bg-white rounded-full "></div>
      </div>
      <div className="absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-blue-500">
        <div className="absolute inset-1 bg-white rounded-full "></div>
      </div>
    </div>
  );
}
