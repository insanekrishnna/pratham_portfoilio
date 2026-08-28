"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

import { cn } from "@/lib/utils"

export type CycleItem = { text: string; lang?: string }

/**
 * Rolls through a list of phrases one at a time: the current line slides
 * up and out while the next slides up into its place, clipped by the box
 * so the two never overlap outside it.
 *
 * Each phrase is shown whole — nothing is typed or deleted a character
 * at a time. The box needs a fixed height for the clip to work, so the
 * caller sizes it to match its own type scale.
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
          "relative inline-flex items-center overflow-hidden align-bottom",
          boxClassName
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={item.text}
            lang={item.lang}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: "110%" }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: "0%" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: "-110%" }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
            className="block whitespace-nowrap"
          >
            {item.text}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  )
}

export default TextCycle
