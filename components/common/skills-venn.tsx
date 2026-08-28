import Image from "next/image"

import { HatchRule } from "@/components/layout/rules"
import { skillsVenn } from "@/lib/content/site"
import { cn } from "@/lib/utils"

type SkillsVennProps = {
  profileImage?: string
  skills?: { top: string; left: string; right: string; bottom: string }
  className?: string
}

/**
 * Four overlapping circles in a diamond, with the portrait sitting in the
 * shared centre — the disciplines are what meet there. Everything is
 * percentage-positioned inside a square box so it scales as one unit.
 */
export function SkillsVenn({
  profileImage = skillsVenn.image,
  skills = skillsVenn.skills,
  className,
}: SkillsVennProps) {
  return (
    <div>
      <HatchRule />
      <section
        aria-label="Areas of focus"
        className="border-border screen-line-top screen-line-bottom relative border-x px-5 py-8"
      >
        <div
          className={cn(
            "relative mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg",
            className
          )}
        >
          <div className="relative aspect-square w-full">
            <div
              aria-hidden
              className="border-foreground/10 absolute top-0 left-1/2 h-[55%] w-[55%] -translate-x-1/2 rounded-full border"
            />
            <div
              aria-hidden
              className="border-foreground/10 absolute top-[22%] left-[2%] h-[55%] w-[55%] rounded-full border"
            />
            <div
              aria-hidden
              className="border-foreground/10 absolute top-[22%] right-[2%] h-[55%] w-[55%] rounded-full border"
            />
            <div
              aria-hidden
              className="border-foreground/10 absolute bottom-0 left-1/2 h-[55%] w-[55%] -translate-x-1/2 rounded-full border"
            />

            {/* Each label sits in its own circle's non-overlapping arc. */}
            <span className="text-foreground/50 absolute top-[14%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[10px] whitespace-nowrap sm:text-xs md:text-sm">
              {skills.top}
            </span>
            <span className="text-foreground/50 absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 text-[10px] sm:text-xs md:text-sm">
              {skills.left}
            </span>
            <span className="text-foreground/50 absolute top-1/2 right-[15%] translate-x-1/2 -translate-y-1/2 text-[10px] sm:text-xs md:text-sm">
              {skills.right}
            </span>
            <span className="text-foreground/50 absolute bottom-[14%] left-1/2 translate-y-1/2 -translate-x-1/2 text-center text-[10px] leading-tight whitespace-pre-wrap sm:text-xs md:text-sm">
              {skills.bottom}
            </span>

            <div className="border-background absolute top-1/2 left-1/2 size-14 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 shadow-md sm:size-16 sm:border-4 md:size-20">
              <Image
                src={profileImage}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SkillsVenn
