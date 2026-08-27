import Image from "next/image"
import { MapPin } from "lucide-react"

import { TimeCounter } from "@/components/common/time-counter"
import { RoleTypewriter } from "@/components/home/role-typewriter"
import { profile } from "@/lib/content/profile"

/**
 * The first viewport: portrait, name, what I do, and a live local clock
 * so the page always shows one thing that is true right now.
 */
export function Hero() {
  return (
    <header className="flex w-full items-center">
      <div className="p-4 sm:p-5">
        <div className="border-border w-fit rounded-[9px] border p-[3.8px] dark:border-neutral-700">
          <div className="border-border box-border size-20 overflow-hidden rounded-[8px] border bg-neutral-200 p-1 select-none sm:size-28 md:size-30 dark:bg-neutral-800">
            <Image
              src={profile.avatar}
              alt={`${profile.name} — ${profile.title}`}
              width={120}
              height={120}
              priority
              className="box-border size-full scale-110 rounded-[5px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-0.5">
        <div className="text-muted-foreground flex items-center justify-between gap-2 text-xs">
          <span className="truncate font-mono">@{profile.handle}</span>
          <TimeCounter
            className="shrink-0 font-mono tabular-nums"
            timeZone={profile.timezone}
          />
        </div>

        <h1 className="text-2xl font-medium text-neutral-700 md:pb-0.5 md:text-3xl dark:text-neutral-50">
          {profile.name}
        </h1>

        <p className="flex min-h-6 items-center text-sm font-medium text-neutral-500/80 md:text-base dark:text-neutral-400">
          <RoleTypewriter roles={profile.roles} />
        </p>

        <p className="flex items-center gap-1 text-xs font-medium text-neutral-500/80 dark:text-neutral-400">
          <MapPin className="size-3 shrink-0" aria-hidden />
          {profile.meta}
        </p>
      </div>
    </header>
  )
}

export default Hero
