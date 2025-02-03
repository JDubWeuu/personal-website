"use client";
import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ArrowButton({
  children,
  className,
  ...props
}: ArrowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={cn(
        "relative bg-white text-black rounded-md transition-all duration-300 flex items-center justify-center",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className="mr-2">{children}</span>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isHovered ? 3 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowRight size={16} />
      </motion.div>
    </span>
  );
}
