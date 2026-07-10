"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  from?: number;
  to: number;
  suffix?: string;
};

export default function Counter({
  from = 0,
  to,
  suffix = "",
}: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        setCount(Math.round(value));
      },
    });

    return () => controls.stop();
  }, [isInView, from, to]);

  return (
    <motion.span ref={ref}>
      {count}
      {suffix}
    </motion.span>
  );
}