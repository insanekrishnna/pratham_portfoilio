"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

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

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  // The reveal expands from the button's own rect, so the shortcut clicks
  // the real button rather than calling setTheme and skipping the
  // animation. A synthetic click fires no pointerdown, though, so the
  // global click sound misses it — hence the explicit tap here.
  const toggleTheme = useCallback(() => {
    tap()
    wrapperRef.current?.querySelector("button")?.click()
  }, [tap])

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
        {/* AnimatedThemeToggler owns its button&apos;s ref and onClick, so
            the tooltip anchors to a wrapper instead. The click sound is
            handled globally by UiFeedbackProvider. */}
        <span ref={wrapperRef} className="inline-flex">
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
