"use client"

import { useState } from "react"
import Image from "next/image"

import { useUiFeedback } from "@/hooks/use-ui-feedback"
import { profile } from "@/lib/content/profile"
import { cn } from "@/lib/utils"

/**
 * The portrait plus a switch that flips between the drawn avatar and the
 * real photo. Both images stay mounted and cross-fade, so the swap costs
 * no network round trip and never flashes an empty frame.
 */
export function AvatarSwitch() {
  const [showPhoto, setShowPhoto] = useState(false)
  const { tap } = useUiFeedback()

  return (
    <div className="flex w-fit flex-col items-center gap-2">
      <div className="border-border w-fit rounded-[8px] border p-[2.7px] dark:border-neutral-700">
        <div className="border-border relative box-border size-14 overflow-hidden rounded-[7px] border bg-neutral-200 p-0.5 select-none sm:size-20 md:size-21 dark:bg-neutral-800">
          <Image
            src={profile.avatar}
            alt={`${profile.name} — ${profile.title}`}
            width={120}
            height={120}
            priority
            className={cn(
              "box-border size-full scale-110 rounded-[5px] object-cover transition-opacity duration-300",
              showPhoto && "opacity-0"
            )}
          />
          <Image
            src={profile.avatarPhoto}
            alt={`${profile.name} — photo`}
            width={120}
            height={120}
            aria-hidden={!showPhoto}
            className={cn(
              "absolute inset-1 box-border size-[calc(100%-0.5rem)] rounded-[5px] object-cover transition-opacity duration-300",
              showPhoto ? "opacity-100" : "opacity-0"
            )}
          />
        </div>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={showPhoto}
        aria-label="Show real photo"
        onClick={() => setShowPhoto((value) => !value)}
        className={cn(
          "focus-visible:ring-ring/50 relative h-[18px] w-8 shrink-0 cursor-pointer rounded-full border transition-colors outline-none focus-visible:ring-[3px]",
          showPhoto
            ? "border-transparent bg-neutral-800 dark:bg-neutral-200"
            : "border-border bg-neutral-200 dark:bg-neutral-800"
        )}
      >
        <span
          aria-hidden
          className={cn(
            "absolute top-1/2 size-3 -translate-y-1/2 rounded-full bg-white shadow-sm transition-[left] duration-200 dark:bg-neutral-900",
            showPhoto ? "left-[15px]" : "left-[2px]"
          )}
        />
      </button>
    </div>
  )
}

export default AvatarSwitch
