import { profile } from "./profile"

export const siteUrl = "https://prathm.me"

export const socialPreviewTitle = "Pratham Yadav | Design Engineer"
export const socialPreviewDescription =
  "Pratham Yadav is a Design Engineer with 2+ years of experience, known for pixel-perfect execution and an obsessive attention to detail."
export const socialPreviewImage = {
  url: `${siteUrl}/social-preview-v2`,
  width: 1200,
  height: 630,
  alt: "Pratham Yadav | Design Engineer",
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
    top: "Frontend Architecture",
    left: "Design Systems",
    right: "Growth & GTM",
    bottom: "Product Thinking\n& User Research",
  },
}

export const footer = {
  text: "Designed and developed by",
  developer: profile.name,
  note: "Built in the open.",
}
