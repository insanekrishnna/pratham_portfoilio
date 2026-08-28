"use client"

import { useEffect, useRef } from "react"

import { contactButtonClass } from "@/lib/button-styles"
import { cn } from "@/lib/utils"

/** Fraction of the cursor offset the label is allowed to chase. */
const PULL = 0.28
/** How far past the button's own size the pull still reaches, in px. */
const REACH = 42
/** Spring constant and exponential damping for the chase. */
const STIFFNESS = 105
const DAMPING = 13.5
/**
 * Keeps the label off the border. Small on purpose: at chip proportions
 * the padding is only 8px a side, and a larger inset would clamp the
 * travel to zero and kill the lean entirely.
 */
const INSET = 2

type MagneticButtonProps = {
  href: string
  label: string
  icon: React.ReactNode
  external?: boolean
  className?: string
}

/**
 * A chip whose contents lean toward the pointer and spring back when it
 * leaves. The button itself never moves — only the label inside it — so
 * the hit area stays exactly where it looks, and the travel is clamped
 * to the padding so the text never touches the border.
 *
 * Mouse only: on touch there is no hover to respond to, and the whole
 * effect is skipped under reduced-motion.
 */
export function MagneticButton({
  href,
  label,
  icon,
  external = true,
  className,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const contentRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    const content = contentRef.current
    if (!button || !content) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    let frame = 0
    let last = performance.now()
    let x = 0
    let y = 0
    let vx = 0
    let vy = 0
    let targetX = 0
    let targetY = 0

    const step = (now: number) => {
      // Clamped so a stalled tab does not resume with one huge jump.
      const dt = Math.min((now - last) / 1000, 0.032)
      last = now
      const damp = Math.exp(-DAMPING * dt)

      vx = (vx + (targetX - x) * STIFFNESS * dt) * damp
      vy = (vy + (targetY - y) * STIFFNESS * dt) * damp
      x += vx * dt
      y += vy * dt
      content.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`

      const settled =
        Math.abs(targetX - x) < 0.02 &&
        Math.abs(targetY - y) < 0.02 &&
        Math.abs(vx) < 0.02 &&
        Math.abs(vy) < 0.02
      frame = settled ? 0 : requestAnimationFrame(step)
    }

    const start = () => {
      if (frame) return
      last = performance.now()
      frame = requestAnimationFrame(step)
    }

    const home = () => {
      targetX = 0
      targetY = 0
      start()
    }

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reduced.matches) {
        cancelAnimationFrame(frame)
        frame = 0
        x = y = vx = vy = targetX = targetY = 0
        content.style.transform = "translate3d(0, 0, 0)"
        return
      }

      const box = button.getBoundingClientRect()
      const inner = content.getBoundingClientRect()
      const dx = event.clientX - (box.left + box.width / 2)
      const dy = event.clientY - (box.top + box.height / 2)
      const distance = Math.hypot(dx, dy)
      const range = Math.max(box.width, box.height) + REACH

      if (distance >= range) {
        home()
        return
      }

      const limitX = Math.max(0, (box.width - inner.width) / 2 - INSET)
      const limitY = Math.max(0, (box.height - inner.height) / 2 - INSET)
      // Pull falls off with distance, so the lean builds as you approach.
      const strength = PULL * (1 - distance / range)
      targetX = Math.max(-limitX, Math.min(limitX, dx * strength))
      targetY = Math.max(-limitY, Math.min(limitY, dy * strength))
      start()
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    window.addEventListener("blur", home)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("blur", home)
    }
  }, [])

  return (
    <a
      ref={buttonRef}
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(contactButtonClass, className)}
    >
      {/* pointer-events off so the chip, not the moving label, is the
          hit target — otherwise the lean chases its own hover. */}
      <span
        ref={contentRef}
        className="pointer-events-none inline-flex items-center gap-[5px]"
      >
        {icon}
        {label}
      </span>
    </a>
  )
}

export default MagneticButton
