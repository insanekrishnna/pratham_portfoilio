import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * The single measure the whole site is built on: a 715px column,
 * centred, edge-padded on small screens and flush from md up so the
 * side rails sit exactly against the content.
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
