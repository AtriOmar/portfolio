"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const variants = {
  hidden: {
    width: "100%",
  },
  visible: {
    width: "0%",
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
    // translateY: "60px",
    translateX: "30px",
  },
  visible: {
    opacity: 1,
    // translateY: "0",
    translateX: "0",
  },
};

export default function ShowOnScroll({ children }: Props) {
  return (
    <div className="relative">
      <motion.div
        className="absolute top-0 right-0 bottom-0 bg-red-500"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "1000px 0px 0px 0px" }}
      />
      <motion.div
        variants={childrenVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "1000px 0px 0px 0px" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
