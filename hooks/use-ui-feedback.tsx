"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

const STORAGE_KEY = "ui-sound"

/**
 * A ~7ms soft click by Kenney (kenney.nl), released CC0. Lifted from
 * chanhdai.com, which embeds it as a data URI; decoded to a file here.
 * Shared by every interaction so the whole interface clicks alike.
 */
export const CLICK_SOUND = "/sounds/click.mp3"
export const CLICK_VOLUME = 0.375

type Feedback = {
  soundEnabled: boolean
  setSoundEnabled: (value: boolean) => void
  toggleSound: () => void
  /**
   * Plays the click and fires a short haptic tap, where supported. Pass
   * `silent` when the caller plays its own sound, so the two don't stack.
   */
  tap: (options?: { silent?: boolean }) => void
}

const FeedbackContext = createContext<Feedback | null>(null)

/**
 * Interaction feedback for deliberate, state-changing actions only -
 * theme switches, command-menu selections, form submits. Never hover.
 *
 * Sound is on by default and mutable from the command menu. Every path
 * to it is a click, so nothing can play before a user gesture either
 * way. Haptics degrade to a no-op wherever `vibrate` is absent and are
 * skipped entirely under reduced-motion.
 */
export function UiFeedbackProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabledState] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    try {
      // Anything but an explicit "off" means on, so the default holds
      // for a first-time visitor with nothing stored yet.
      setSoundEnabledState(window.localStorage.getItem(STORAGE_KEY) !== "off")
    } catch {
      // Storage can throw in private modes; the default (on) is fine.
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    reducedMotionRef.current = media.matches
    const onChange = () => {
      reducedMotionRef.current = media.matches
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  const setSoundEnabled = useCallback((value: boolean) => {
    setSoundEnabledState(value)
    try {
      window.localStorage.setItem(STORAGE_KEY, value ? "on" : "off")
    } catch {
      // Preference simply won't persist.
    }
  }, [])

  const tap = useCallback((options?: { silent?: boolean }) => {
    if (soundEnabled && !options?.silent) {
      let audio = audioRef.current
      if (!audio) {
        audio = new Audio(CLICK_SOUND)
        audio.volume = CLICK_VOLUME
        audioRef.current = audio
      }
      audio.currentTime = 0
      // Rejects only when the browser blocks playback; nothing to recover.
      void audio.play().catch(() => {})
    }

    if (!reducedMotionRef.current && typeof navigator !== "undefined") {
      navigator.vibrate?.(8)
    }
  }, [soundEnabled])

  // One delegated listener instead of a handler per control. Native
  // buttons and button-like controls opt in automatically; links only
  // click when they are deliberately styled as buttons and carry the
  // data-ui-feedback marker. This keeps ordinary navigation and large
  // linked page regions silent.
  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Element | null
      if (!target?.closest) return
      const hit = target.closest(
        'button, [data-ui-feedback="tap"], [role="button"], [role="menuitem"], [role="option"], [role="switch"], [role="tab"], input[type="submit"]'
      )
      if (!hit) return
      // A disabled control gives no feedback, because nothing happened.
      if (hit.hasAttribute("disabled") || hit.getAttribute("aria-disabled") === "true") {
        return
      }
      tap()
    }

    // pointerdown, not click: the sound lands with the press rather than
    // after the release, which is what makes it feel attached.
    document.addEventListener("pointerdown", onPointerDown, true)
    return () => document.removeEventListener("pointerdown", onPointerDown, true)
  }, [tap])

  const value = useMemo<Feedback>(
    () => ({
      soundEnabled,
      setSoundEnabled,
      toggleSound: () => {
        const next = !soundEnabled
        setSoundEnabled(next)
        if (next) {
          // Confirm the choice audibly - this is the enabling gesture.
          const audio = audioRef.current ?? new Audio(CLICK_SOUND)
          audio.volume = CLICK_VOLUME
          audioRef.current = audio
          void audio.play().catch(() => {})
        }
      },
      tap,
    }),
    [soundEnabled, setSoundEnabled, tap]
  )

  return (
    <FeedbackContext.Provider value={value}>{children}</FeedbackContext.Provider>
  )
}

export function useUiFeedback(): Feedback {
  const ctx = useContext(FeedbackContext)
  if (ctx) return ctx
  // Safe fallback so components can be rendered outside the provider.
  return {
    soundEnabled: false,
    setSoundEnabled: () => {},
    toggleSound: () => {},
    tap: () => {},
  }
}
