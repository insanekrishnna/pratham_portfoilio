"use client"

import type React from "react"
import { MotionConfig } from "framer-motion"

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ type: "spring", stiffness: 280, damping: 26, mass: 0.35 }}>
      {children}
    </MotionConfig>
  )
}
