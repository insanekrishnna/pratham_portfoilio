import type { Metadata } from "next"

import { ProjectList } from "@/components/projects/project-list"
import { siteUrl } from "@/lib/content/site"

const description =
  "Full-stack products built by Pratham Yadav — React, Next.js, TypeScript and Node.js, from schema design through to the interface."

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: `${siteUrl}/projects` },
  openGraph: {
    title: "Projects | Pratham Yadav",
    description,
    url: `${siteUrl}/projects`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Pratham Yadav",
    description,
  },
}

export default function ProjectsPage() {
  return <ProjectList />
}
