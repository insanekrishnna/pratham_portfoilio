import type { Metadata } from "next"

import { ProjectList } from "@/components/projects/project-list"
import {
  siteUrl,
  socialPreviewDescription,
  socialPreviewImage,
  socialPreviewTitle,
} from "@/lib/content/site"

const description =
  "Full-stack products built by Pratham Yadav - React, Next.js, TypeScript and Node.js, from schema design through to the interface."

export const metadata: Metadata = {
  title: "Projects",
  description,
  alternates: { canonical: `${siteUrl}/projects` },
  openGraph: {
    title: socialPreviewTitle,
    description: socialPreviewDescription,
    url: `${siteUrl}/projects`,
    type: "website",
    images: [{ ...socialPreviewImage, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: socialPreviewTitle,
    description: socialPreviewDescription,
    images: [socialPreviewImage],
  },
}

export default function ProjectsPage() {
  return <ProjectList />
}
