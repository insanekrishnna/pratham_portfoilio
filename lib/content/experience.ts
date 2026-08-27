export type Experience = {
  id: string
  company: string
  role: string
  location: string
  /** Rendered as "start — end"; omit `end` for an ongoing role. */
  period: { start: string; end?: string }
  logo?: string
  website?: string
  isCurrent?: boolean
}

export const experiences: Experience[] = [
  {
    id: "largence",
    company: "Largence",
    role: "SWE Intern",
    location: "Remote - 10 mos",
    period: { start: "Sep 2025", end: "Jun 2026" },
    logo: "/stealth.jpeg",
    website: "https://largence.com",
  },
  {
    id: "genius-hrtech",
    company: "Genius HRTech LTD.",
    role: "Operation Fellow",
    location: "Remote - 1yr 4mos ",
    period: { start: "Jan 2024", end: "Jun 2025" },
    logo: "/GHRTT.jpeg",
    website: "https://www.geniushrtech.com/",
  },
]
