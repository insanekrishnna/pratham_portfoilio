import { SectionHeading } from "@/components/layout/section-heading"
import { achievements } from "@/lib/content/milestones"
import { sectionIds } from "@/lib/content/site"

function Row({
  title,
  meta,
  description,
}: {
  title: string
  meta: string
  description: string
}) {
  return (
    <li className="screen-line-bottom relative last:after:hidden">
      <div className="flex gap-3 p-3 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
        {/* A drawn dot rather than a real list marker: the row keeps its
            full-bleed hover and divider, which `list-disc` would inset.
            Nudged down to sit on the title's first line. */}
        <span
          aria-hidden
          className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-700 dark:bg-neutral-300"
        />

        <div className="min-w-0 flex-1 space-y-1">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="text-base leading-snug font-medium text-balance">
              {title}
            </h3>
            <span className="text-muted-foreground shrink-0 font-mono text-xs tabular-nums">
              {meta}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </li>
  )
}

export function Achievements() {
  return (
    <section aria-labelledby={sectionIds.achievements}>
      <SectionHeading id={sectionIds.achievements}>Achievements</SectionHeading>
      <ul className="pt-px">
        {achievements.map((item) => (
          <Row
            key={item.title}
            title={item.title}
            meta={item.date}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  )
}
