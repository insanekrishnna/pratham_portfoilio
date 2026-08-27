"use client"

import { MotionConfig } from "framer-motion"

/**
 * One transition curve for the whole site, and a global opt-out that
 * honours the OS reduced-motion setting for every Motion animation.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ type: "spring", stiffness: 260, damping: 30, mass: 0.6 }}
    >
      {children}
    </MotionConfig>
  )
}

export default MotionProvider
