import { profile } from "./profile"
import portfolioWebPreview from "@/public/portfolio-web-preview.png"

export const siteUrl = "https://prathm.me"

export const socialPreviewTitle = "Pratham Yadav | Design Engineer"
export const socialPreviewDescription =
  "Pratham Yadav is a Design Engineer with 2+ years of experience, known for pixel-perfect execution and an obsessive attention to detail."
export const socialPreviewImage = {
  // Next.js includes a content hash in the URL so image updates get a fresh cache key.
  url: `${siteUrl}${portfolioWebPreview.src}`,
  width: portfolioWebPreview.width,
  height: portfolioWebPreview.height,
  alt: "Pratham Yadav's portfolio profile and about section",
}

export const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

/** In-page anchors, kept in one place so the nav and the sections agree. */
export const sectionIds = {
  about: "about",
  connect: "connect",
  experience: "experience",
  projects: "projects",
  stack: "stack",
  activity: "activity",
  achievements: "achievements",
  contact: "contact",
} as const

export const skillsVenn = {
  image: "/pratham.png",
  skills: {
    top: "Backend Architecture",
    left: "Design Engineering",
    right: "Growth & GTM",
    bottom: "Product Design\n& Research",
  },
}

export const footer = {
  text: "Designed and developed by",
  developer: profile.name,
  note: "Built in the open.",
}
