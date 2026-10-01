"use client";

// components/motion/word-reveal.tsx — editorial word-by-word reveal used by the
// immersive hero (and any headline that wants it). Each word rises out of a
// mask with a branded ease; disabled (plain text) under reduced motion and on
// first paint. If javascript never arrives, the words are simply visible.

import { motion, useReducedMotion } from "motion/react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.055,
  once = true,
  amount = 0.4,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "115%", opacity: 0.001 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once, amount }}
            transition={{
              duration: 0.9,
              ease: EASE,
              delay: delay + i * stagger,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}