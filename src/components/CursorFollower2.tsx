"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorFollower2() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent): any {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    const body = document.querySelector("body");

    body?.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <motion.div
        className="fixed z-[9999] w-3 h-3 rounded-full bg-red-500  m-[-6px] pointer-events-none mix-blend-plus-lighter"
        // animate={{ x: cursorPosition.x, y: cursorPosition.y }}
        style={{
          x: cursorPosition.x,
          y: cursorPosition.y,
        }}
      ></motion.div>
      <motion.div
        className="fixed z-[9999] w-10 h-10 rounded-full bg-red-500 opacity-50 m-[-20px] pointer-events-none"
        // animate={{ x: cursorPosition.x, y: cursorPosition.y }}
        animate={{
          x: cursorPosition.x,
          y: cursorPosition.y,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 20 }}
      ></motion.div>
    </>
  );
}
