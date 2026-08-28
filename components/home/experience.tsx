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
    <li className="flex items-center gap-3">
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

      {/* Two lines at every width: company and dates share the first,
          role and location take the second. The dates used to drop below
          the role on small screens, which is what pushed each entry to
          three lines on a phone. */}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-foreground min-w-0 truncate text-[15px] leading-snug font-semibold">
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

          <p className="text-muted-foreground shrink-0 text-xs tabular-nums">
            {experience.period.start} — {experience.period.end ?? "Present"}
          </p>
        </div>

        <p className="text-muted-foreground truncate text-[13px] leading-snug">
          {experience.role} <span aria-hidden>•</span> {experience.location}
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
