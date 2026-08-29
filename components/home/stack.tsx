import { Braces, Code2, Database, type LucideIcon } from "lucide-react"
import * as simpleIcons from "simple-icons"
import type { SimpleIcon } from "simple-icons"

import { chipClass } from "@/lib/button-styles"
import { SectionHeading } from "@/components/layout/section-heading"
import { stack } from "@/lib/content/stack"
import { sectionIds } from "@/lib/content/site"
import { cn } from "@/lib/utils"

/**
 * SQL and REST are specifications, not products, and VS Code's mark is
 * a Microsoft trademark that simple-icons does not carry. All three get
 * a neutral mark in the text colour rather than a borrowed brand.
 */
const GENERIC: Record<string, LucideIcon | undefined> = {
  "generic-sql": Database,
  "generic-api": Braces,
  "generic-editor": Code2,
}

/** Below this relative luminance a brand colour disappears on black. */
const TOO_DARK = 0.22
/** What those brands use instead, on dark only. */
const DARK_FALLBACK = "#E1E3E5"

function lookup(slug: string): SimpleIcon | undefined {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`
  return (simpleIcons as unknown as Record<string, SimpleIcon>)[key]
}

/**
 * Next.js, Vercel, shadcn, Express and X are all near-black brand marks,
 * so their real colour is invisible against the dark theme. Only those
 * get swapped out; every other logo keeps its own colour in both themes.
 */
function darkVariant(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luminance < TOO_DARK ? DARK_FALLBACK : `#${hex}`
}

/**
 * One wrapped run of chips, each carrying its brand mark. The category
 * grouping still lives in the content file and orders this list, so the
 * layers read left to right even though the labels are not drawn.
 */
export function Stack() {
  const skills = stack.flatMap((category) => category.skills)

  return (
    <section aria-labelledby={sectionIds.stack}>
      <SectionHeading id={sectionIds.stack}>Skills</SectionHeading>

      <ul className="flex flex-wrap gap-2 px-4 py-5 sm:px-5">
        {skills.map((skill) => {
          const Generic = GENERIC[skill.icon]
          const icon = Generic ? undefined : lookup(skill.icon)

          return (
            <li key={skill.title} className="flex">
              {/* A button, not a link: these are labels, and clicking one
                  should feel live - hover, focus ring, the interface click
                  - without navigating away from the page. */}
              <button
                type="button"
                className={cn(chipClass, "cursor-pointer")}
              >
                {Generic && (
                  <Generic
                    aria-hidden
                    className="text-muted-foreground size-3.5 shrink-0"
                  />
                )}
                {icon && (
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="size-3.5 shrink-0 fill-[var(--brand)] dark:fill-[var(--brand-dark)]"
                    style={
                      {
                        "--brand": `#${icon.hex}`,
                        "--brand-dark": darkVariant(icon.hex),
                      } as React.CSSProperties
                    }
                  >
                    <path d={icon.path} />
                  </svg>
                )}
                <span className="text-foreground">{skill.title}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Stack
