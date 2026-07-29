"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

interface Props {
  to: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({ to, suffix = "", duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent =
            Math.round(value).toLocaleString("pt-BR") + suffix;
        }
      },
    });
    return controls.stop;
  }, [isInView, to, suffix, duration, count]);

  return <span ref={ref}>0{suffix}</span>;
}
