export const profile = {
  name: "Pratham Yadav",
  handle: "insanekrishnna",
  wordmark: "PRATHAM",
  title: "Full Stack Developer",
  /** Rotated by the hero typewriter. */
  roles: ["Full Stack Developer", "Designer", "Freelancer"],
  meta: "20, he/him — Indore, IND",
  age: 20,
  location: "Indore, India",
  timezone: "Asia/Kolkata",
  avatar: "/facedemo.jpeg",
  email: "iiprathamyadav@gmail.com",
  resumeUrl:
    "https://drive.google.com/file/d/15l1MU4SVFpC7BaRMF0iH-J9qz_SxlEC_/view?usp=drive_link",
  calendlyUrl: "https://calendly.com/iiprathamyadav/30min",
  availability: "Open to internships & freelance work",
} as const

/**
 * The About list. `strong` fragments are rendered as emphasised,
 * underlined spans — the same treatment the headline keywords get.
 */
export const bio: { text: string; strong?: string[] }[] = [
  {
    text: "i break things, learn fast, and make shit happen. limits exist to be tested; polymath thinking and psychology books shaped me. Mastery is non-negotiable.",
  },
  {
    text: "I build products end to end with React, Next.js, TypeScript and Node.js — from schema and API design through to the interface.",
    strong: ["React, Next.js, TypeScript and Node.js"],
  },
  {
    text: "On the backend I work with Express, MongoDB, PostgreSQL and Supabase, with a bias toward strong validation, correctness and predictable failure handling.",
    strong: ["Express, MongoDB, PostgreSQL and Supabase"],
  },
  {
    text: "Currently a SWE Intern at Largence, building evaluation and QA frameworks for production-grade legal AI workflows.",
    strong: ["SWE Intern at Largence"],
  },
]

export type SocialLink = {
  name: string
  href: string
  /** External links open in a new tab and get rel=noopener. */
  isExternal: boolean
  icon: "resume" | "mail" | "github" | "linkedin" | "x" | "send"
}

export const socialLinks: SocialLink[] = [
  { name: "Resume", href: profile.resumeUrl, isExternal: true, icon: "resume" },
  { name: "Contact", href: "/contact", isExternal: false, icon: "send" },
  {
    name: "GitHub",
    href: "https://github.com/insanekrishnna",
    isExternal: true,
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/prathamyadavv/",
    isExternal: true,
    icon: "linkedin",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/insanekrishnaa",
    isExternal: true,
    icon: "x",
  },
  {
    name: "Email",
    href: `mailto:${profile.email}`,
    isExternal: true,
    icon: "mail",
  },
]
