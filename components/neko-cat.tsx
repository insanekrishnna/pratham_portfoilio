"use client"

import { useEffect } from "react"

export function NekoCat() {
  useEffect(() => {
    const DESKTOP_QUERY = "(min-width: 768px)"
    const desktopMedia = window.matchMedia(DESKTOP_QUERY)

    let container: HTMLDivElement | null = null
    let rafId: number | null = null

    const pos = { x: 0, y: 0 }
    const mousePos = { x: 0, y: 0 }
    const easing = 0.08

    const createNeko = () => {
      const id = "neko-cat"
      if (document.getElementById(id)) return

      container = document.createElement("div")
      container.id = id
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9998;
        will-change: transform;
        transform: translate3d(0, 0, 0);
        image-rendering: auto;
      `

      container.innerHTML = `
        <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <!-- Head -->
          <circle cx="20" cy="22" r="14" fill="#FFD700" stroke="#000" stroke-width="0.5"/>
          <!-- Ears -->
          <polygon points="12,12 10,4 16,10" fill="#FFD700" stroke="#000" stroke-width="0.5"/>
          <polygon points="28,12 30,4 24,10" fill="#FFD700" stroke="#000" stroke-width="0.5"/>
          <!-- Inner ears -->
          <polygon points="13,11 12,7 15,10" fill="pink"/>
          <polygon points="27,11 28,7 25,10" fill="pink"/>
          <!-- Eyes -->
          <circle cx="16" cy="18" r="2" fill="#000"/>
          <circle cx="24" cy="18" r="2" fill="#000"/>
          <!-- Eye highlights -->
          <circle cx="16.5" cy="17.5" r="0.8" fill="#fff"/>
          <circle cx="24.5" cy="17.5" r="0.8" fill="#fff"/>
          <!-- Nose -->
          <ellipse cx="20" cy="23" rx="1.5" ry="1" fill="pink" stroke="#000" stroke-width="0.3"/>
          <!-- Mouth -->
          <path d="M 20 23 Q 18 25 16 24" stroke="#000" stroke-width="0.5" fill="none" stroke-linecap="round"/>
          <path d="M 20 23 Q 22 25 24 24" stroke="#000" stroke-width="0.5" fill="none" stroke-linecap="round"/>
          <!-- Body -->
          <ellipse cx="20" cy="32" rx="12" ry="8" fill="#FFD700" stroke="#000" stroke-width="0.5"/>
          <!-- Paws -->
          <circle cx="14" cy="38" r="2.5" fill="#FFD700" stroke="#000" stroke-width="0.4"/>
          <circle cx="26" cy="38" r="2.5" fill="#FFD700" stroke="#000" stroke-width="0.4"/>
          <!-- Tail base -->
          <path d="M 10 32 Q 5 28 4 18" stroke="#FFD700" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `

      document.body.appendChild(container)
    }

    const destroyNeko = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
      if (container) {
        container.remove()
        container = null
      }
    }

    const animate = () => {
      if (!container) return

      pos.x += (mousePos.x - pos.x) * easing
      pos.y += (mousePos.y - pos.y) * easing

      container.style.transform = `translate3d(${Math.round(pos.x)}px, ${Math.round(pos.y)}px, 0)`

      rafId = requestAnimationFrame(animate)
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX - 20
      mousePos.y = e.clientY - 20
    }

    const startNeko = () => {
      createNeko()
      window.addEventListener("mousemove", onMouseMove, { passive: true })
      animate()
    }

    const stopNeko = () => {
      destroyNeko()
      window.removeEventListener("mousemove", onMouseMove)
    }

    const sync = () => {
      if (desktopMedia.matches) {
        startNeko()
      } else {
        stopNeko()
      }
    }

    sync()

    const onChange = () => sync()

    if (desktopMedia.addEventListener) {
      desktopMedia.addEventListener("change", onChange)
    } else {
      desktopMedia.addListener(onChange)
    }

    return () => {
      if (desktopMedia.removeEventListener) {
        desktopMedia.removeEventListener("change", onChange)
      } else {
        desktopMedia.removeListener(onChange)
      }
      stopNeko()
    }
  }, [])

  return null
}
