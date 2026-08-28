import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * The single measure the whole site is built on: a 715px column,
 * centred, edge-padded on small screens and flush from md up so the
 * side rails sit exactly against the content.
 *
 * The mobile padding is 24px against rails offset 16px, which leaves an
 * 8px gap between each rail and the screen edge. Matching the two (both
 * 16px) put the rails hard on the viewport edge, where `overflow-x:
 * clip` shaved the right one on devices whose pixel ratio is not whole.
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
    <Tag className={cn("mx-auto w-full px-6 md:max-w-[715px] md:px-0", className)}>
      {children}
    </Tag>
  )
}

export default Container
