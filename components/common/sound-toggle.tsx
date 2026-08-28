"use client"

import { useEffect, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useUiFeedback } from "@/hooks/use-ui-feedback"
import { cn } from "@/lib/utils"

/** Mutes the interface click without touching the haptic tap. */
export function SoundToggle({ className }: { className?: string }) {
  const { soundEnabled, toggleSound } = useUiFeedback()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // The stored preference is unknown on the server, so both the icon and
  // the label stay neutral until mount to keep hydration clean.
  const muted = mounted && !soundEnabled

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          role="switch"
          aria-checked={mounted ? soundEnabled : true}
          aria-label={muted ? "Unmute interface sound" : "Mute interface sound"}
          onClick={toggleSound}
          className={cn(
            "focus-visible:ring-ring/50 text-foreground/75 flex size-7 cursor-pointer items-center justify-center rounded-full outline-none transition-colors hover:bg-black/5 focus-visible:ring-[3px] dark:hover:bg-white/10",
            className
          )}
        >
          {muted ? (
            <VolumeX className="size-[14px]" aria-hidden />
          ) : (
            <Volume2 className="size-[14px]" aria-hidden />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent>{muted ? "Unmute" : "Mute"}</TooltipContent>
    </Tooltip>
  )
}

export default SoundToggle
