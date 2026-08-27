import { Fragment } from "react"

import { ProjectCard } from "@/components/projects/project-card"
import type { Project } from "@/lib/content/projects"

/**
 * Two-up on desktop, stacked on mobile, with the twin centre rules and
 * full-bleed row separators the rest of the site uses.
 */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <p className="text-muted-foreground px-4 py-12 text-center text-sm">
        No projects match that search.
      </p>
    )
  }

  return (
    <div className="relative">
      <div
        aria-hidden
        className="bg-border pointer-events-none absolute top-0 bottom-0 z-0 hidden w-px sm:block"
        style={{ left: "calc(50% - 6px)" }}
      />
      <div
        aria-hidden
        className="bg-border pointer-events-none absolute top-0 bottom-0 z-0 hidden w-px sm:block"
        style={{ left: "calc(50% + 5px)" }}
      />

      <div className="relative grid grid-cols-1 sm:grid-cols-2">
        {projects.map((project, index) => {
          const isLast = index === projects.length - 1
          return (
            <Fragment key={project.slug}>
              <div className="relative flex flex-col p-4">
                <ProjectCard project={project} />
              </div>

              {index % 2 === 1 && !isLast && (
                <div
                  aria-hidden
                  className="screen-line-top screen-line-bottom col-span-2 hidden h-3 sm:block"
                />
              )}
              {!isLast && (
                <div
                  aria-hidden
                  className="screen-line-top screen-line-bottom block h-3 sm:hidden"
                />
              )}
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectGrid
