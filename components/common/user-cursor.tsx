"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

type UserCursorProps = {
  name?: string
  color?: string
  textColor?: string
  size?: number
  labelTiltStrength?: number
  showLabel?: boolean
  pressScale?: number
}

/** Above this the tilt is maxed out; px/sec. */
const MAX_TILT_SPEED = 1500

/**
 * Replaces the native pointer with an arrow and a trailing name pill.
 *
 * The smoothness is the whole point, and it comes from two springs of
 * different stiffness reading the same pointer position: the arrow is
 * stiff enough to feel attached, the label is softer so it swings in
 * behind. The label also tilts with horizontal velocity, which is what
 * makes fast flicks read as weight rather than as lag.
 *
 * Coarse pointers get nothing - a touch device has no cursor to replace.
 */
export function UserCursor({
  name = "hi",
  color = "var(--foreground)",
  textColor = "var(--background)",
  size = 31,
  labelTiltStrength = 25,
  showLabel = true,
  pressScale = 0.92,
}: UserCursorProps) {
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return
    const query = window.matchMedia("(pointer: coarse)")
    const sync = () => setIsCoarsePointer(!!query.matches)
    sync()
    query.addEventListener?.("change", sync)
    return () => query.removeEventListener?.("change", sync)
  }, [])

  const arrowSpring = useMemo(
    () => ({ stiffness: 380, damping: 32, mass: 0.6 }),
    []
  )
  const labelSpring = useMemo(
    () => ({ stiffness: 220, damping: 26, mass: 0.7 }),
    []
  )

  // Parked off-screen so nothing flashes at 0,0 before the first move.
  const pointerX = useMotionValue(-9999)
  const pointerY = useMotionValue(-9999)

  const arrowX = useSpring(pointerX, arrowSpring)
  const arrowY = useSpring(pointerY, arrowSpring)
  const labelX = useSpring(pointerX, labelSpring)
  const labelY = useSpring(pointerY, labelSpring)

  const scale = useMotionValue(1)
  const scaleSpring = useSpring(scale, {
    stiffness: 500,
    damping: 28,
    mass: 0.5,
  })

  const tilt = useMotionValue(0)
  const tiltSpring = useSpring(tilt, {
    stiffness: 200,
    damping: 24,
    mass: 0.6,
  })

  const lastSample = useRef<{ x: number; y: number; t: number } | null>(null)

  useEffect(() => {
    scale.set(isPressed ? pressScale : 1)
  }, [isPressed, pressScale, scale])

  useEffect(() => {
    if (isCoarsePointer) return

    document.documentElement.classList.add("custom-cursor")

    const onMouseMove = (event: MouseEvent) => {
      const { clientX: x, clientY: y } = event
      const now = performance.now()

      let velocityX = 0
      let velocityY = 0
      const previous = lastSample.current
      if (previous) {
        const elapsed = Math.max(1, now - previous.t)
        velocityX = ((x - previous.x) / elapsed) * 1000
        velocityY = ((y - previous.y) / elapsed) * 1000
      }
      lastSample.current = { x, y, t: now }

      pointerX.set(x)
      pointerY.set(y)

      const speed = Math.hypot(velocityX, velocityY)
      const intensity = Math.min(1, speed / MAX_TILT_SPEED)
      const direction = velocityX === 0 ? 0 : velocityX > 0 ? 1 : -1
      tilt.set(direction * intensity * labelTiltStrength)

      setIsVisible(true)
    }

    const onMouseDown = () => setIsPressed(true)
    const onMouseUp = () => setIsPressed(false)
    const onEnter = () => setIsVisible(true)
    const onLeave = () => {
      setIsVisible(false)
      lastSample.current = null
      tilt.set(0)
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mousedown", onMouseDown)
    window.addEventListener("mouseup", onMouseUp)
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mouseleave", onLeave)

    return () => {
      document.documentElement.classList.remove("custom-cursor")
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mousedown", onMouseDown)
      window.removeEventListener("mouseup", onMouseUp)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mouseleave", onLeave)
      setIsPressed(false)
    }
  }, [isCoarsePointer, labelTiltStrength, pointerX, pointerY, tilt])

  // Sits off the arrow's tip rather than under it.
  const labelOffset = useMemo(
    () => ({ x: size * 0.9, y: size * 0.2 + 6 }),
    [size]
  )
  const labelOffsetX = useTransform(labelX, (value) => value + labelOffset.x)
  const labelOffsetY = useTransform(labelY, (value) => value + labelOffset.y)

  if (isCoarsePointer) return null

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 10000,
      }}
    >
      {showLabel && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            x: labelOffsetX,
            y: labelOffsetY,
            rotate: tiltSpring,
            scale: scaleSpring,
            background: color,
            borderRadius: 999,
            padding: `${size * 0.18}px ${size * 0.36}px`,
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)",
            opacity: isVisible ? 1 : 0,
            transformOrigin: "0% 50%",
            transition: "opacity 140ms ease",
            willChange: "transform, opacity",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              color: textColor,
              fontSize: Math.max(7, size * 0.43),
              lineHeight: 1.1,
              fontWeight: 600,
              whiteSpace: "nowrap",
              letterSpacing: 0.1,
            }}
          >
            {name}
          </div>
        </motion.div>
      )}

      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          x: arrowX,
          y: arrowY,
          scale: scaleSpring,
          width: size,
          height: size,
          opacity: isVisible ? 1 : 0,
          transformOrigin: "0% 0%",
          transition: "opacity 140ms ease",
          willChange: "transform, opacity",
          pointerEvents: "none",
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", overflow: "visible" }}
        >
          <path
            d="M5 3 L23 14 L14 16 L11 24 Z"
            fill={color}
            stroke="rgba(0,0,0,0.18)"
            strokeWidth={0.6}
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default UserCursor
