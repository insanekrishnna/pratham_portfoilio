import { MapPin } from "lucide-react"

import { AvatarSwitch } from "@/components/home/avatar-switch"
import { TimeCounter } from "@/components/common/time-counter"
import { RoleCycle } from "@/components/home/role-cycle"
import { profile } from "@/lib/content/profile"

/**
 * The first viewport: portrait, name, what I do, and a live local clock
 * so the page always shows one thing that is true right now.
 */
export function Hero() {
  return (
    <header className="flex w-full items-start">
      <div className="p-3 sm:p-4">
        <AvatarSwitch />
      </div>

      {/* Same top padding as the portrait's box, so the first line of
          text sits on the portrait's top edge instead of centring
          against it — the avatar column is taller now that it carries
          the switch beneath the image. */}
      <div className="flex min-w-0 flex-1 flex-col gap-0 pt-3 sm:pt-4">
        <div className="text-muted-foreground flex items-center justify-end text-xs">
          <TimeCounter
            className="shrink-0 font-mono tabular-nums"
            timeZone={profile.timezone}
          />
        </div>

        <h1 className="text-xl font-medium text-neutral-700 md:pb-0.5 md:text-2xl dark:text-neutral-50">
          {profile.name}
        </h1>

        <p className="flex min-h-6 items-center text-sm font-medium text-neutral-500/80 md:text-base dark:text-neutral-400">
          <RoleCycle roles={profile.roles} />
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
