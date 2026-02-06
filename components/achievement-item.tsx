interface AchievementCardProps {
  title: string
  date: string
  description: string
}

export function AchievementCard({
  title,
  date,
  description,
}: AchievementCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-black/80 to-black/50 dark:from-white/20 dark:to-white/10 p-[1px] transition-transform duration-300 hover:-translate-y-1">
      
      {/* outer glow */}
      <div className="absolute -top-8 -left-8 h-16 w-16 rounded-full bg-black/40 dark:bg-white/20 " />

      {/* card body */}
      <div className="relative rounded-xl bg-white dark:bg-black/60 dark:backdrop-blur-xl p-4 border border-black/30 dark:border-white/10">

        {/* left accent rail */}
        <div className="absolute left-0 top-0 h-0 w-[1px] bg-gradient-to-b from-black/80 dark:from-white/60 to-transparent" />

        {/* date badge */}
        <div className="mb-2 flex items-center justify-between">
          <span className="inline-flex rounded-full bg-black/15 dark:bg-white/10 px-2.5 py-0.5 text-[9px] font-medium text-black/80 dark:text-white/70 border border-black/40 dark:border-white/20">
            {date}
          </span>
        </div>

        {/* title */}
        <h4 className="text-[0.85rem] font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors">
          {title}
        </h4>

        {/* description */}
        <p className="mt-1.5 text-[0.72rem] leading-relaxed text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
  )
}

// Keep the old component for backward compatibility
import { cn } from "@/lib/utils"

type AchievementItemProps = {
  title: string
  date: string
  description: string
  href?: string
  className?: string
}

export function AchievementItem({
  title,
  date,
  description,
  href,
  className,
}: AchievementItemProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-neutral-200 bg-white px-4 py-2 md:px-5 md:py-2.5 dark:border-neutral-800 dark:bg-neutral-950",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 flex-1 min-w-0">
          {title}
        </h4>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs rounded-sm border border-neutral-200 px-1 py-0.25 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300 whitespace-nowrap">
            {date}
          </span>
          {href ? (
            <a
              href={href}
              className="text-xs rounded-full border border-neutral-200 px-2 py-0.5 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
            >
              Read more
            </a>
          ) : null}
        </div>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
        {description}
      </p>
    </article>
  )
}
