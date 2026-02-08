"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
}

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 40,
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReducedMotion(reduced);
  }, []);

  const isInView = useInView(ref, { once: true, margin: "0px" });

  const directionVariants = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
    fade: { opacity: 0 },
  };

  const animateVariants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0, x: 0 } : directionVariants[direction],
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animateVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Smooth fade-in for text elements
export function FadeInText({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <ScrollAnimation
      direction="fade"
      delay={delay}
      duration={0.6}
      className={className}
    >
      {children}
    </ScrollAnimation>
  );
}

// Smooth slide-up for sections
export function SlideUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <ScrollAnimation
      direction="up"
      delay={delay}
      duration={0.6}
      distance={40}
      className={className}
    >
      {children}
    </ScrollAnimation>
  );
}

// Smooth slide-in from left
export function SlideInLeft({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <ScrollAnimation
      direction="left"
      delay={delay}
      duration={0.6}
      distance={30}
      className={className}
    >
      {children}
    </ScrollAnimation>
  );
}

// Smooth slide-in from right
export function SlideInRight({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <ScrollAnimation
      direction="right"
      delay={delay}
      duration={0.6}
      distance={30}
      className={className}
    >
      {children}
    </ScrollAnimation>
  );
}

// Staggered animation for lists - removed in performance cleanup
// Use SlideUp with delay prop instead for better performance
