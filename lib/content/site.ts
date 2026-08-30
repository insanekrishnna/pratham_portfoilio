import { profile } from "./profile"

export const siteUrl = "https://pratham.dev"

export const socialPreviewTitle = "Pratham, a designer, from India."
export const socialPreviewImage = {
  url: `${siteUrl}/portfolio-web-preview.png`,
  width: 815,
  height: 467,
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
