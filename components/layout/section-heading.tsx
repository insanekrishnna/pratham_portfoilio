import { cn } from "@/lib/utils"

/**
 * Section titles are set large and light, sitting on a full-bleed
 * hairline. The heading level is caller-controlled so page hierarchy
 * stays correct.
 */
export function SectionHeading({
  children,
  id,
  as: Tag = "h2",
  className,
  action,
}: {
  children: React.ReactNode
  id?: string
  as?: "h1" | "h2" | "h3"
  className?: string
  action?: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "screen-line-bottom relative flex w-full items-center justify-between gap-4 px-4 py-1.5",
        className
      )}
    >
      <Tag
        id={id}
        className="scroll-mt-20 text-2xl font-normal tracking-tight sm:text-3xl"
      >
        {children}
      </Tag>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}

/** Small uppercase-adjacent label used above page titles. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="screen-line-bottom relative w-full px-4 py-1.5">
      <p className="text-2xl font-medium text-neutral-400 sm:text-3xl dark:text-neutral-500">
        {children}
      </p>
    </div>
  )
}

export default SectionHeading
