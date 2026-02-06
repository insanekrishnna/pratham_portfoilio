"use client"

import { useEffect } from "react"

export function ExperienceHoverBehavior() {
  useEffect(() => {
    const section = document.getElementById("experience")
    if (!section) return

    const onEnter = () => {
      section.classList.add("exp-expanded")
    }

    section.addEventListener("mouseenter", onEnter, { passive: true })

    return () => {
      section.removeEventListener("mouseenter", onEnter)
    }
  }, [])

  return null
}

export default ExperienceHoverBehavior
