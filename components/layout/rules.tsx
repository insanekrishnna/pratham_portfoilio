import { cn } from "@/lib/utils"

/**
 * The site's primary section break: one hairline the width of the
 * content column. It was a 24px hatched band bled across the viewport;
 * now it is a single line that stops at the column's edges, so the
 * empty side columns stay empty.
 */
export function HatchRule({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("bg-border h-px w-full shrink-0", className)}
    />
  )
}

/**
 * The same hairline, for use between rows inside a section.
 */
export function ScreenRule({ className }: { className?: string }) {
  return <div aria-hidden className={cn("bg-border h-px w-full", className)} />
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
