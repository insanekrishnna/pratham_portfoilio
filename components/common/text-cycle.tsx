"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

export type CycleItem = { text: string; lang?: string }

/**
 * Rolls through a list of phrases, one whole phrase at a time - nothing
 * is typed or deleted a character at a time.
 *
 * The outgoing and incoming lines move *together*, stacked on top of one
 * another and clipped by the box: one rides up and out as the next rides
 * up into place, the way a reel turns. Animating them in sequence
 * instead leaves a dead gap between the two and reads as a step.
 *
 * An invisible copy of the longest phrase holds the box open, so the
 * line never changes width mid-roll and nothing after it shifts.
 */
export function TextCycle({
  items,
  holdMs = 2200,
  className,
  boxClassName = "h-5",
  srText,
}: {
  items: readonly CycleItem[]
  holdMs?: number
  className?: string
  boxClassName?: string
  srText?: string
}) {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (items.length < 2) return
    const id = window.setInterval(
      () => setIndex((value) => (value + 1) % items.length),
      holdMs
    )
    return () => window.clearInterval(id)
  }, [items.length, holdMs])

  const widest = useMemo(
    () =>
      items.reduce(
        (longest, entry) =>
          entry.text.length > longest.length ? entry.text : longest,
        ""
      ),
    [items]
  )

  const item = items[index]
  const spoken = srText ?? items.map((entry) => entry.text).join(" · ")

  return (
    <span
      className={className}
      // Off on purpose: this loops forever, and announcing every turn
      // would be constant chatter with nothing new in it.
      aria-live="off"
    >
      <span className="sr-only">{spoken}</span>
      <span
        aria-hidden
        className={cn(
          "relative inline-block overflow-hidden align-bottom",
          boxClassName
        )}
      >
        <span className="invisible block whitespace-nowrap">{widest}</span>

        {/* No `mode`, so both lines are mounted at once and overlap. */}
        <AnimatePresence initial={false}>
          <motion.span
            key={item.text}
            lang={item.lang}
            className="absolute inset-0 flex items-center whitespace-nowrap"
            initial={reduceMotion ? { opacity: 0 } : { y: "100%" }}
            animate={reduceMotion ? { opacity: 1 } : { y: "0%" }}
            exit={reduceMotion ? { opacity: 0 } : { y: "-100%" }}
            transition={
              reduceMotion
                ? { duration: 0.2 }
                : // Slightly overdamped: it arrives without wobbling,
                  // which a spring this fast otherwise does at the stop.
                  { type: "spring", stiffness: 220, damping: 30, mass: 0.9 }
            }
          >
            {item.text}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  )
}

export default TextCycle
