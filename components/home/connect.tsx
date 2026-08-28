import Link from "next/link"
import { ArrowUpRight, FileText, Mail, Send } from "lucide-react"

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons/brand"
import { SectionHeading } from "@/components/layout/section-heading"
import { socialLinks, type SocialLink } from "@/lib/content/profile"
import { sectionIds } from "@/lib/content/site"

const icons: Record<SocialLink["icon"], React.ComponentType<{ className?: string }>> = {
  resume: FileText,
  send: Send,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  mail: Mail,
}

/**
 * Every way to reach me, in one grid. Rules are drawn per row by the
 * `.connect-grid` rules in globals.css so they run edge to edge.
 */
export function Connect() {
  return (
    <section aria-labelledby={sectionIds.connect}>
      <SectionHeading id={sectionIds.connect}>Connect</SectionHeading>

      <div className="relative mt-2 w-full">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2] grid grid-cols-2 md:grid-cols-3"
        >
          <div className="border-border border-r dark:opacity-60" />
          <div className="border-border border-l md:border-x dark:opacity-60" />
          <div className="border-border border-l max-md:hidden dark:opacity-60" />
        </div>

        <ul className="connect-grid grid grid-cols-2 md:grid-cols-3">
          {socialLinks.map((item) => {
            const Icon = icons[item.icon]
            return (
              <li key={item.name}>
                <div className="group relative flex items-center gap-3 p-3 pr-2 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900/40">
                  <div className="relative size-8 shrink-0">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-[transform,color] duration-200 group-hover:scale-105 group-hover:text-neutral-900 dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-100">
                      <Icon className="size-[18px]" />
                    </div>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-lg inset-ring-1 inset-ring-black/10 dark:inset-ring-white/15"
                    />
                  </div>

                  <h3 className="flex-1 truncate text-sm font-medium text-neutral-700 group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-neutral-100">
                    {item.isExternal ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
                      >
                        <span className="absolute inset-0" aria-hidden />
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
                      >
                        <span className="absolute inset-0" aria-hidden />
                        {item.name}
                      </Link>
                    )}
                  </h3>

                  <ArrowUpRight
                    className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Connect
