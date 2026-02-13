"use client"

import type React from "react"
import { MotionConfig } from "framer-motion"

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig 
      reducedMotion="user" 
      transition={{ 
        type: "spring", 
        stiffness: 120, 
        damping: 35, 
        mass: 0.4,
        duration: 0.6
      }}
    >
      {children}
    </MotionConfig>
  )
}
