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
 * Interaction feedback for deliberate, state-changing actions only —
 * theme switches, command-menu selections, form submits. Never hover.
 *
 * Sound is off until the visitor turns it on, so nothing plays before a
 * user gesture. Haptics degrade to a no-op wherever `vibrate` is absent
 * and are skipped entirely under reduced-motion.
 */
export function UiFeedbackProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabledState] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    try {
      setSoundEnabledState(window.localStorage.getItem(STORAGE_KEY) === "on")
    } catch {
      // Storage can throw in private modes; the default (off) is fine.
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
        audio = new Audio("/click.wav")
        audio.volume = 0.35
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

  const value = useMemo<Feedback>(
    () => ({
      soundEnabled,
      setSoundEnabled,
      toggleSound: () => {
        const next = !soundEnabled
        setSoundEnabled(next)
        if (next) {
          // Confirm the choice audibly — this is the enabling gesture.
          const audio = audioRef.current ?? new Audio("/click.wav")
          audio.volume = 0.35
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
