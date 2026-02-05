"use client"

import { useEffect, useRef, useState } from "react"

const SPRITE_SRC = "/neko-sprite.png"
const GRID_COLS = 4
const GRID_ROWS = 4
const FPS = 12

export function CursorToy() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const coarse = window.matchMedia("(pointer: coarse)").matches
    if (reduced || coarse) return
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const el = ref.current
    if (!el) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let x = mouseX
    let y = mouseY
    const ease = 0.12

    let frameW = 0
    let frameH = 0
    let totalFrames = 0

    const img = new Image()
    img.src = SPRITE_SRC
    img.onload = () => {
      const sheetW = img.naturalWidth
      const sheetH = img.naturalHeight
      frameW = Math.floor(sheetW / GRID_COLS)
      frameH = Math.floor(sheetH / GRID_ROWS)
      totalFrames = GRID_COLS * GRID_ROWS
      el.style.width = `${frameW}px`
      el.style.height = `${frameH}px`
      el.style.backgroundImage = `url(${SPRITE_SRC})`
      el.style.backgroundSize = `${sheetW}px ${sheetH}px`
    }

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", onMove, { passive: true })

    let rafId = 0
    const frameMs = 1000 / FPS

    const animate = (time: number) => {
      x += (mouseX - x) * ease
      y += (mouseY - y) * ease
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`

      if (totalFrames > 0) {
        const frameIndex = Math.floor(time / frameMs) % totalFrames
        const col = frameIndex % GRID_COLS
        const row = Math.floor(frameIndex / GRID_COLS)
        const offsetX = -col * frameW
        const offsetY = -row * frameH
        el.style.backgroundPosition = `${offsetX}px ${offsetY}px`
      }

      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(rafId)
    }
  }, [enabled])

  if (!enabled) return null

  return <div ref={ref} id="cursor-toy" aria-hidden="true" />
}

export default CursorToy
