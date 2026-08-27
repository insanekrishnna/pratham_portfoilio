import Link from "next/link"
import { MoveRight } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { RuledRow } from "@/components/layout/rules"
import { ProjectGrid } from "@/components/projects/project-grid"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/content/projects"
import { sectionIds } from "@/lib/content/site"

export function ProjectsSection() {
  return (
    <section aria-labelledby={sectionIds.projects}>
      <SectionHeading id={sectionIds.projects}>Projects</SectionHeading>
      <ProjectGrid projects={projects} />
      <RuledRow className="mt-1">
        <Button size="sm" asChild>
          <Link href="/projects">
            See all projects
            <MoveRight aria-hidden />
          </Link>
        </Button>
      </RuledRow>
    </section>
  )
}

export default ProjectsSection
