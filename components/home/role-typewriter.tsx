"use client"

import { useReducedMotion } from "framer-motion"

import { Typewriter } from "@/components/ui/typewriter"

/**
 * Cycles the roles for sighted visitors. Screen readers and anyone on
 * reduced motion get the full list as plain text instead of a string
 * that rewrites itself mid-sentence.
 */
export function RoleTypewriter({ roles }: { roles: readonly string[] }) {
  const reduceMotion = useReducedMotion()
  const full = roles.join(" · ")

  if (reduceMotion) return <span>{full}</span>

  return (
    <>
      <span className="sr-only">{full}</span>
      <span aria-hidden>
        <Typewriter
          text={[...roles]}
          speed={90}
          waitTime={2200}
          deleteSpeed={80}
          cursorChar="|"
          showCursor
        />
      </span>
    </>
  )
}

export default RoleTypewriter
