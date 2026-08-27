"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"
import useSound from "use-sound"

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { buttonVariants } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useUiFeedback } from "@/hooks/use-ui-feedback"
import { cn } from "@/lib/utils"

/** Also bound to the `D` key, matching the shortcut shown in the tooltip. */
export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { tap } = useUiFeedback()
  const wrapperRef = useRef<HTMLSpanElement>(null)

  // `interrupt` restarts the clip instead of layering a second voice, so
  // hammering the toggle stays one clean click rather than a smear.
  const [playThemeSound] = useSound("/sounds/theme-toggle.mp3", {
    volume: 0.1,
    interrupt: true,
  })

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  // The reveal expands from the button's own rect, so the shortcut clicks
  // the real button rather than calling setTheme and skipping the animation.
  const toggleTheme = useCallback(() => {
    wrapperRef.current?.querySelector("button")?.click()
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.repeat || event.metaKey || event.ctrlKey || event.altKey) return
      const target = event.target as HTMLElement | null
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return
      }
      if (event.key.toLowerCase() === "d") toggleTheme()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [toggleTheme])

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {/* AnimatedThemeToggler owns its button's ref and onClick, so the
            tooltip anchors to a wrapper and the tap fires on the bubble. */}
        {/* Capture phase so the click is audible before the theme flips.
            `silent` keeps tap() to haptics — the clip below is the sound. */}
        <span
          ref={wrapperRef}
          onClickCapture={() => {
            playThemeSound()
            tap({ silent: true })
          }}
          className="inline-flex"
        >
          <AnimatedThemeToggler
            variant="circle"
            // Controlled: next-themes stays the source of truth and handles
            // persistence. Before mount resolvedTheme is undefined, so this
            // reports light — matching the moon icon the server rendered.
            theme={isDark ? "dark" : "light"}
            onThemeChange={setTheme}
            aria-label={
              mounted
                ? isDark
                  ? "Switch to light theme"
                  : "Switch to dark theme"
                : "Toggle theme"
            }
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-8 rounded-full active:scale-95 [&_svg]:size-4",
              className
            )}
          />
        </span>
      </TooltipTrigger>
      <TooltipContent>Toggle theme (D)</TooltipContent>
    </Tooltip>
  )
}

export default ThemeToggle
