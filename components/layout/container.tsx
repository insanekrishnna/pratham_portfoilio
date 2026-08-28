import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * The single measure the whole site is built on: a 715px column,
 * centred, edge-padded on small screens and flush from md up so the
 * side rails sit exactly against the content.
 *
 * The rails only exist from md up, so on mobile this padding is the
 * only inset and nothing sits against the viewport edge to be clipped.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children?: ReactNode
  className?: string
  as?: "div" | "section" | "header" | "footer" | "nav"
}) {
  return (
    <Tag className={cn("mx-auto w-full px-4 md:max-w-[715px] md:px-0", className)}>
      {children}
    </Tag>
  )
}

export default Container
