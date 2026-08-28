import { Mail, Video } from "lucide-react"

import { AvatarSwitch } from "@/components/home/avatar-switch"
import { MagneticButton } from "@/components/common/magnetic-button"
import { RoleCycle } from "@/components/home/role-cycle"
import { profile } from "@/lib/content/profile"

/**
 * The first viewport: portrait, name, what I do, and the two ways to
 * get in touch.
 */
export function Hero() {
  return (
    <header className="flex w-full items-start">
      <div className="p-3 sm:p-4">
        <AvatarSwitch />
      </div>

      {/* Same top padding as the portrait's box, so the first line of
          text sits on the portrait's top edge instead of centring
          against it - the avatar column is taller now that it carries
          the switch beneath the image. */}
      <div className="flex min-w-0 flex-1 flex-col gap-0 pt-3 sm:pt-4">
        <h1 className="text-xl font-medium text-neutral-700 md:text-2xl dark:text-neutral-50">
          {profile.name}
        </h1>

        <p className="flex min-h-6 items-center text-sm font-medium text-neutral-500/80 md:text-base dark:text-neutral-400">
          <RoleCycle roles={profile.roles} />
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <MagneticButton
            href={profile.calendlyUrl}
            label="Book a call"
            icon={
              // The button ground inverts with the theme, so the yellow
              // has to as well - 400 on the black fill, 600 on the white.
              <Video
                className="size-3.5 shrink-0 text-yellow-400 dark:text-yellow-600"
                aria-hidden
              />
            }
          />
          <MagneticButton
            href={`mailto:${profile.email}`}
            label="Send an email"
            external={false}
            icon={<Mail className="size-3.5 shrink-0" aria-hidden />}
          />
        </div>
      </div>
    </header>
  )
}

export default Hero
