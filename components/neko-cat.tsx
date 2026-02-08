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
        image-rendering: crisp-edges;
      `

      const img = document.createElement("img")
      img.src = "/facedemo.jpeg"
      img.alt = "Profile"
      img.style.cssText = `
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        display: block;
      `

      container.appendChild(img)
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
      mousePos.x = e.clientX - 24
      mousePos.y = e.clientY - 24
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
