"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionMotionProps {
  children: React.ReactNode;
  delay?: number;
}

export default function SectionMotion({ children, delay = 0 }: SectionMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
