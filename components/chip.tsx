import type * as React from "react"
import { cn } from "@/lib/utils"

type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "soft" | "outline" | "solid"
  tech?: string
}

export function Chip({ className, variant = "soft", tech, ...props }: ChipProps) {
  const base = "inline-flex items-center rounded-md border px-2.5 py-1 text-[11px] font-medium transition-colors duration-150 ease-out"

  if (tech) {
    return (
      <span
        className={cn(
          base,
          "border-neutral-300 bg-white text-neutral-700",
          "dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300",
          "hover:text-neutral-900 dark:hover:text-neutral-100",
          className
        )}
        {...props}
      >
        <span className="leading-none whitespace-nowrap">{tech}</span>
      </span>
    )
  }

  const styles =
    variant === "outline"
      ? "border border-neutral-200 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
      : variant === "solid"
        ? "bg-neutral-900 text-white"
        : "bg-neutral-100 text-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300"
  return <span className={cn(base, styles, className)} {...props} />
}
