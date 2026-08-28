export type Project = {
  slug: string
  title: string
  subheading?: string
  description: string
  image: string
  /** Optional clip played on hover, with `image` as the poster frame. */
  video?: string
  links: { website?: string; github?: string }
  technologies: string[]
  status: "live" | "building"
}

export const projects: Project[] = [
  {
    slug: "kovaa",
    title: "Kovaa",
    subheading: "Zillow for India",
    description:
      "India's fragmented rental market lacks trust and transparency; Kovaa centralises verified listings and streamlines discovery, powered by a production-ready backend focused on security, scalability, correctness, strong validation and predictable failure handling.",
    image: "/kova.jpg",
    links: {
      website: "https://kova-7ijn.onrender.com/",
      github: "https://github.com/insanekrishnna/kova",
    },
    technologies: ["TypeScript", "TailwindCSS", "MongoDB", "ExpressJS", "NodeJS"],
    status: "live",
  },
  {
    slug: "finveda",
    title: "Finveda",
    subheading: "Personal finance, visualised",
    description:
      "Finveda helps users track income and spending through visual breakdowns, period comparisons and insights, with goal-based planning - built as an accessible React application with strict TypeScript patterns and a scalable UI architecture using Zod and React Query.",
    image: "/finveda.jpg",
    video: "/finveda.mp4",
    links: {
      website: "https://finveda-delta.vercel.app/",
      github: "https://github.com/insanekrishnna/finwise-conversation",
    },
    technologies: [
      "TypeScript",
      "React",
      "Vite",
      "TailwindCSS",
      "shadcn/ui",
      "Radix UI",
      "React Hook Form",
    ],
    status: "live",
  },
]

export const allProjectsUrl =
  "https://github.com/insanekrishnna?tab=repositories"
