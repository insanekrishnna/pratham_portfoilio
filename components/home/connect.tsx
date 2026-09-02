import Link from "next/link"
import { FileText, Mail, Send } from "lucide-react"

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons/brand"
import { SectionHeading } from "@/components/layout/section-heading"
import { contactButtonClass } from "@/lib/button-styles"
import { cn } from "@/lib/utils"
import { socialLinks, type SocialLink } from "@/lib/content/profile"
import { sectionIds } from "@/lib/content/site"

const icons: Record<
  SocialLink["icon"],
  React.ComponentType<{ className?: string }>
> = {
  resume: FileText,
  send: Send,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  mail: Mail,
}

/**
 * Every way to reach me, as the same solid button the hero uses. These
 * are deliberately static - the magnetic lean belongs to the two calls
 * to action up top, and six of them moving at once would be noise.
 */
export function Connect() {
  return (
    <section aria-labelledby={sectionIds.connect}>
      <SectionHeading id={sectionIds.connect}>Connect</SectionHeading>

      {/* Three up as two rows on small screens; all six on one row from
          md, where the column reaches its full 715px and the cells are
          wide enough for the longest label. Labels truncate rather than
          widen their cell, so the columns stay matched either way. */}
      <ul className="grid grid-cols-3 gap-2 px-4 py-5 sm:px-5 md:grid-cols-6">
        {socialLinks.map((item) => {
          const Icon = icons[item.icon]

          return (
            <li key={item.name} className="flex min-w-0">
              {item.isExternal ? (
                <a
                  href={item.href}
                  data-ui-feedback="tap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(contactButtonClass, "w-full")}
                >
                  <Icon className="size-3.5 shrink-0" />
                  <span className="truncate">{item.name}</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  data-ui-feedback="tap"
                  className={cn(contactButtonClass, "w-full")}
                >
                  <Icon className="size-3.5 shrink-0" />
                  <span className="truncate">{item.name}</span>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Connect
