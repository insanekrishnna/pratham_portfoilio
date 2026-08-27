import { SectionHeading } from "@/components/layout/section-heading"
import { stack } from "@/lib/content/stack"
import { sectionIds } from "@/lib/content/site"

/**
 * One wrapped run of tiles. The category grouping still lives in the
 * content file and orders this list, so the layers read left to right
 * even though the labels aren't drawn.
 */
export function Stack() {
  const skills = stack.flatMap((category) => category.skills)

  return (
    <section aria-labelledby={sectionIds.stack}>
      <SectionHeading id={sectionIds.stack}>Skills</SectionHeading>

      <ul className="flex flex-wrap gap-2.5 px-5 py-7 sm:px-6">
        {skills.map((skill) => (
          <li key={skill.title} className="flex">
            <a
              href={skill.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-visible:ring-ring/50 inset-shadow group relative inline-flex items-center rounded-[10px] border border-neutral-200 bg-white px-3.5 py-2 text-sm font-medium whitespace-nowrap text-neutral-700 outline-none transition-[transform,border-color,background-color,box-shadow] duration-200 select-none hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-md focus-visible:ring-[3px] dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
            >
              {skill.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Stack
