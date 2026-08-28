import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Eyebrow } from "@/components/layout/section-heading"
import { HatchRule } from "@/components/layout/rules"

/**
 * The masthead every sub-page opens with: a large muted eyebrow naming
 * the section, the page title, then a utility row carrying the way back
 * and whatever control the page needs.
 */
export function PageHeader({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string
  title: string
  action?: React.ReactNode
}) {
  return (
    <>
      <HatchRule />
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="screen-line-bottom relative px-4 py-1.5 text-xl font-semibold tracking-tight text-balance sm:text-2xl">
        {title}
      </h1>
      <div className="screen-line-bottom relative flex items-center justify-between gap-3 p-2">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex h-7 shrink-0 items-center gap-2 rounded-md px-1 text-sm font-medium outline-none transition-colors focus-visible:ring-[3px]"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Home
        </Link>
        {action}
      </div>
      <HatchRule />
    </>
  )
}

export default PageHeader
