import { TechIcon } from "@/components/common/tech-icon"
import { SectionHeading } from "@/components/layout/section-heading"
import { chipClass } from "@/lib/button-styles"
import { stack } from "@/lib/content/stack"
import { sectionIds } from "@/lib/content/site"
import { cn } from "@/lib/utils"

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
        {skills.map((skill) => (
          <li key={skill.title} className="flex">
            {/* A button, not a link: these are labels, and clicking one
                should feel live - hover, focus ring, the interface click
                - without navigating away from the page. */}
            <button type="button" className={cn(chipClass, "cursor-pointer")}>
              <TechIcon slug={skill.icon} className="size-3.5 shrink-0" />
              {skill.title}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Stack
