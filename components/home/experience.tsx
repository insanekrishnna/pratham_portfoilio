import Image from "next/image"

import { SectionHeading } from "@/components/layout/section-heading"
import { experiences, type Experience } from "@/lib/content/experience"
import { sectionIds } from "@/lib/content/site"

/**
 * One line per role: logo, company, "role • location", and the dates
 * pushed to the trailing edge. Deliberately free of detail — the resume
 * carries the long form.
 */
function ExperienceRow({ experience }: { experience: Experience }) {
  return (
    <li className="flex items-center gap-4">
      <span className="flex size-10 shrink-0 items-center justify-center select-none">
        {experience.logo ? (
          <Image
            src={experience.logo}
            alt=""
            width={40}
            height={40}
            className="size-10 rounded-[10px] object-cover"
          />
        ) : (
          <span className="size-10 rounded-[10px] bg-neutral-200 dark:bg-neutral-800" />
        )}
      </span>

      <div className="flex min-w-0 flex-1 flex-col gap-x-4 gap-y-0.5 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-foreground text-base leading-snug font-semibold">
            {experience.website ? (
              <a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </h3>

          <p className="text-muted-foreground text-sm leading-snug">
            {experience.role} <span aria-hidden>•</span> {experience.location}
          </p>
        </div>

        <p className="text-muted-foreground shrink-0 text-sm tabular-nums sm:text-right">
          {experience.period.start} — {experience.period.end ?? "Present"}
        </p>
      </div>
    </li>
  )
}

export function ExperienceSection() {
  return (
    <section aria-labelledby={sectionIds.experience}>
      <SectionHeading id={sectionIds.experience} className="pb-2">
        Experience
      </SectionHeading>
      <ul className="space-y-5 px-4 py-5 sm:px-6">
        {experiences.map((experience) => (
          <ExperienceRow key={experience.id} experience={experience} />
        ))}
      </ul>
    </section>
  )
}

export default ExperienceSection
