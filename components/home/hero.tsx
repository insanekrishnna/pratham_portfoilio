import { MapPin } from "lucide-react"

import { AvatarSwitch } from "@/components/home/avatar-switch"
import { GreetingCycle } from "@/components/home/greeting-cycle"
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
        <AvatarSwitch />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-0">
        {/* The greeting takes the slot the handle used to hold, so the
            clock keeps its place and the whole stack rides one line up. */}
        <div className="text-muted-foreground flex items-center justify-between gap-2 text-xs">
          <GreetingCycle className="min-w-0 font-mono" />
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
