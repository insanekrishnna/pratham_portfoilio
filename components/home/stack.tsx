import { SectionHeading } from "@/components/layout/section-heading"
import { stack } from "@/lib/content/stack"
import { sectionIds } from "@/lib/content/site"
import { cn } from "@/lib/utils"

/**
 * The stack reads as a table rather than a tag cloud: the numbered
 * left column is a real index into five distinct layers of the stack,
 * so the numbering carries information rather than decorating it.
 */
export function Stack() {
  return (
    <section aria-labelledby={sectionIds.stack}>
      <SectionHeading id={sectionIds.stack}>Stack</SectionHeading>
      <div className="py-4">
        <div className="border-border mx-auto w-full border-y">
          {stack.map((category, index) => (
            <div
              key={category.id}
              className={cn(
                "flex flex-col sm:flex-row",
                index !== stack.length - 1 && "border-border border-b"
              )}
            >
              <div className="border-border flex w-full shrink-0 items-center gap-3.5 border-b px-5 py-3 sm:w-56 sm:border-b-0 sm:border-r sm:border-dashed sm:py-6">
                <span className="font-mono text-sm font-medium text-neutral-400 dark:text-neutral-500">
                  {category.id}
                </span>
                <span className="text-sm font-medium text-neutral-600 md:text-base dark:text-neutral-300">
                  {category.category}
                </span>
              </div>

              <ul className="flex grow flex-wrap items-center gap-2 px-5 py-4 sm:gap-2.5 sm:px-6 sm:py-5">
                {category.skills.map((skill) => (
                  <li key={skill.title}>
                    <a
                      href={skill.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-visible:ring-ring/50 inline-flex items-center rounded-full border border-neutral-200/90 bg-neutral-50/90 px-3 py-1.5 font-mono text-xs font-medium tracking-tight whitespace-nowrap text-neutral-700 shadow-2xs transition-colors outline-none select-none hover:border-neutral-300 hover:bg-neutral-100 focus-visible:ring-[3px] dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:bg-neutral-800/80"
                    >
                      {skill.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack
