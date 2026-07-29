"use client";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  name: string;
  level: number;
  color?: "blue" | "violet" | "emerald" | "amber" | "teal";
}

const colorMap = {
  blue:    "bg-blue-500",
  violet:  "bg-violet-500",
  emerald: "bg-emerald-400",
  amber:   "bg-amber-400",
  teal:    "bg-teal-400",
};

export default function SkillBar({ name, level, color = "blue" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-slate-500 text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#1e3150] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${colorMap[color]} transition-all duration-700 ease-out`}
          style={{
            width: isInView ? `${level}%` : "0%",
            transitionDelay: "150ms",
          }}
        />
      </div>
    </div>
  );
}
