"use client"

import { useRef, useState } from "react"
import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion"

import { DotField } from "@/components/layout/dot-field"
import { profile } from "@/lib/content/profile"

/**
 * The availability line can be dragged around and springs back on
 * release — the one playful moment on the page, placed where it costs
 * nothing if a visitor never finds it.
 */
export function AvailabilityBanner() {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const springs = useRef<{ stop: () => void }[]>([])
  const [grabbing, setGrabbing] = useState(false)
  const reduceMotion = useReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const cancelSprings = () => {
    springs.current.forEach((spring) => spring.stop())
    springs.current = []
  }

  const springBack = () => {
    cancelSprings()
    springs.current = [
      animate(x, 0, { type: "spring", stiffness: 90, damping: 9, mass: 1 }),
      animate(y, 0, { type: "spring", stiffness: 90, damping: 9, mass: 1 }),
    ]
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    // Reading `buttons` directly avoids a stale drag state after a
    // pointer-up that landed outside the element.
    if (event.buttons !== 1 || reduceMotion) return

    cancelSprings()
    const bounds = wrapperRef.current?.getBoundingClientRect()
    if (!bounds) return

    const maxMove = 32
    x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * maxMove * 2)
    y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * maxMove * 2)
  }

  const release = () => {
    setGrabbing(false)
    springBack()
  }

  return (
    <DotField className="min-h-20 sm:min-h-28">
      <div
        ref={wrapperRef}
        onPointerMove={handlePointerMove}
        onPointerDown={() => {
          cancelSprings()
          setGrabbing(true)
        }}
        onPointerUp={release}
        onPointerLeave={release}
        className={`px-10 py-6 ${grabbing ? "cursor-grabbing" : "cursor-grab"}`}
      >
        <motion.p
          style={reduceMotion ? undefined : { x, y }}
          className="text-center text-lg leading-tight font-normal tracking-tight opacity-50 will-change-transform select-none sm:text-xl"
        >
          {profile.availability}
        </motion.p>
      </div>
    </DotField>
  )
}

export default AvailabilityBanner
