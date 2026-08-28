import { cn } from "@/lib/utils"

/**
 * A 24px band of diagonal hatching bounded by hairlines, running the
 * full viewport width. It is the site's primary section break - the
 * visual equivalent of a paragraph gap.
 */
export function HatchRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "border-border relative left-1/2 flex h-6 w-screen shrink-0 -translate-x-1/2 border-y",
        "before:absolute before:inset-0 before:-z-10 before:bg-[length:10px_10px]",
        "before:bg-[repeating-linear-gradient(315deg,transparent_0,var(--hatch-line)_0,var(--hatch-line)_1px,transparent_1px,transparent_50%)]",
        "dark:opacity-70",
        className
      )}
    />
  )
}

/**
 * A single full-bleed hairline. Used where a hatch band would be too
 * heavy - between rows inside a section.
 */
export function ScreenRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "bg-border relative left-1/2 h-px w-screen -translate-x-1/2",
        className
      )}
    />
  )
}

/**
 * A horizontal band bounded top and bottom by full-bleed hairlines.
 * Wraps section footers ("Show all …") and page utility rows.
 */
export function RuledRow({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "screen-line-top screen-line-bottom relative flex w-full items-center justify-center gap-2 px-4 py-2",
        className
      )}
    >
      {children}
    </div>
  )
}
