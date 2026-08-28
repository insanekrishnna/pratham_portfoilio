import { Trophy } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { achievements } from "@/lib/content/milestones"
import { sectionIds } from "@/lib/content/site"

function Row({
  icon,
  title,
  meta,
  description,
}: {
  icon: React.ReactNode
  title: string
  meta: string
  description: string
}) {
  return (
    <li className="screen-line-bottom relative last:after:hidden">
      <div className="flex gap-3 p-3 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
        <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 p-1 text-neutral-600 ring ring-neutral-300 ring-offset-1 ring-offset-white dark:border-neutral-700/60 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-neutral-700/60 dark:ring-offset-black">
          {icon}
        </span>

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
            icon={<Trophy className="size-full" aria-hidden />}
            title={item.title}
            meta={item.date}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  )
}
