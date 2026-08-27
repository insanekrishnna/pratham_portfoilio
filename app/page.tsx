import { HatchRule } from "@/components/layout/rules"
import { AvailabilityBanner } from "@/components/home/availability-banner"
import { Hero } from "@/components/home/hero"
import { About } from "@/components/home/about"
import { Connect } from "@/components/home/connect"
import { ExperienceSection } from "@/components/home/experience"
import { ProjectsSection } from "@/components/home/projects-section"
import { Stack } from "@/components/home/stack"
import { GitHubActivity } from "@/components/home/github-activity"
import { Achievements } from "@/components/home/milestones"
import { Writing } from "@/components/home/writing"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <main>
      <AvailabilityBanner />
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

      <HatchRule />
      <CTA />
    </main>
  )
}
