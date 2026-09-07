"use client";

import { motion } from "motion/react";
import { Children, isValidElement } from "react";

export function Reveal({
  children,
  delay = 0,
  stagger = false,
  staggerDelay = 0.08,
}: {
  children: React.ReactNode;
  delay?: number;
  stagger?: boolean;
  staggerDelay?: number;
}) {
  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  if (stagger) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: staggerDelay, delayChildren: delay }}
      >
        {Children.map(children, (child) =>
          isValidElement(child) ? (
            <motion.div variants={variants} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
              {child}
            </motion.div>
          ) : (
            child
          )
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}