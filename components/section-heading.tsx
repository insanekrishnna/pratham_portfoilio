import { cn } from "@/lib/utils"

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <header className={cn("mb-4", className)}>
      <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 text-balance">{title}</h2>
      {subtitle ? <p className="mt-1 text-xs text-neutral-500">{subtitle}</p> : null}
    </header>
  )
}
