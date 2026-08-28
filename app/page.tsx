import { HatchRule } from "@/components/layout/rules"
import { InteractiveDots } from "@/components/home/interactive-dots"
import { Hero } from "@/components/home/hero"
import { About } from "@/components/home/about"
import { Connect } from "@/components/home/connect"
import { ExperienceSection } from "@/components/home/experience"
import { ProjectsSection } from "@/components/home/projects-section"
import { Stack } from "@/components/home/stack"
import { GitHubActivity } from "@/components/home/github-activity"
import { Achievements } from "@/components/home/milestones"
import { Writing } from "@/components/home/writing"
import { SkillsVenn } from "@/components/common/skills-venn"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <main>
      <InteractiveDots className="screen-line-bottom h-24 w-full sm:h-32" />
      <Hero />

      <HatchRule />
      <About />

      <HatchRule />
      <Connect />

      <HatchRule />
      <ExperienceSection />

      <HatchRule />
      <ProjectsSection />

      <HatchRule />
      <Stack />

      <HatchRule />
      <GitHubActivity />

      <HatchRule />
      <Achievements />

      <HatchRule />
      <Writing />

      {/* Brings its own rule; the CTA sits inside its frame, with no
          divider between the circles and the invitation. */}
      <SkillsVenn>
        <CTA />
      </SkillsVenn>
    </main>
  )
}
