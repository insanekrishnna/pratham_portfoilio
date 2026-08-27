"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

import { greetings } from "@/lib/content/profile"

/** How long each greeting holds before the next fades in. */
const HOLD_MS = 2200

/**
 * Cycles a short greeting in several languages. Only one is mounted at a
 * time and the box reserves its own height, so the name below it never
 * shifts as the words change width.
 */
export function GreetingCycle({ className }: { className?: string }) {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((value) => (value + 1) % greetings.length),
      HOLD_MS
    )
    return () => window.clearInterval(id)
  }, [])

  const greeting = greetings[index]

  return (
    <span
      className={className}
      // The live region is off: this loops forever and would otherwise
      // chatter at a screen reader with nothing new to say.
      aria-live="off"
    >
      <span className="sr-only">{greetings[0].text}</span>
      <span aria-hidden className="relative inline-flex h-4 items-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={greeting.text}
            lang={greeting.lang}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 4 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -4 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="whitespace-nowrap"
          >
            {greeting.text}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  )
}

export default GreetingCycle
