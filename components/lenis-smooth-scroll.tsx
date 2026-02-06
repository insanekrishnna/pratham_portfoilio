"use client"

import { useEffect, useRef } from "react"
import Lenis from "lenis"

const DESKTOP_QUERY = "(hover: hover) and (pointer: fine)"
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)"

export function LenisSmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)
  const savedScrollBehavior = useRef<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const desktopMedia = window.matchMedia(DESKTOP_QUERY)
    const reducedMedia = window.matchMedia(REDUCED_MOTION_QUERY)

    const stopLenis = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }

      lenisRef.current?.destroy()
      lenisRef.current = null

      if (savedScrollBehavior.current !== null) {
        document.documentElement.style.scrollBehavior =
          savedScrollBehavior.current
        savedScrollBehavior.current = null
      }
    }

    const startLenis = () => {
      if (lenisRef.current) return

      savedScrollBehavior.current = document.documentElement.style.scrollBehavior
      document.documentElement.style.scrollBehavior = "auto"

      const lenis = new Lenis({
        anchors: true,
        autoRaf: false,
      })
      lenisRef.current = lenis

      const raf = (time: number) => {
        lenis.raf(time)
        rafRef.current = requestAnimationFrame(raf)
      }
      rafRef.current = requestAnimationFrame(raf)
    }

    const sync = () => {
      if (desktopMedia.matches && !reducedMedia.matches) {
        startLenis()
      } else {
        stopLenis()
      }
    }

    sync()

    const onChange = () => sync()

    if (desktopMedia.addEventListener) {
      desktopMedia.addEventListener("change", onChange)
      reducedMedia.addEventListener("change", onChange)
    } else {
      desktopMedia.addListener(onChange)
      reducedMedia.addListener(onChange)
    }

    return () => {
      if (desktopMedia.removeEventListener) {
        desktopMedia.removeEventListener("change", onChange)
        reducedMedia.removeEventListener("change", onChange)
      } else {
        desktopMedia.removeListener(onChange)
        reducedMedia.removeListener(onChange)
      }
      stopLenis()
    }
  }, [])

  return null
}

export default LenisSmoothScroll
