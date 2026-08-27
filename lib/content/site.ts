import { profile } from "./profile"

export const siteUrl = "https://pratham.dev"

export const navLinks = [
  { name: "Projects", href: "/projects" },
  { name: "Writing", href: "/#writing" },
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
  writing: "writing",
  contact: "contact",
} as const

export const quote = {
  text: "The people who are crazy enough to think they can change the world are the ones who do.",
  author: "Apple, Think Different",
}

export const footer = {
  text: "Designed and developed by",
  developer: profile.name,
  note: "Built in the open.",
}
