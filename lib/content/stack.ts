export type StackCategory = {
  id: string
  category: string
  /** `icon` is a simple-icons slug, resolved to a path at render. */
  skills: { title: string; href: string; icon: string }[]
}

export const stack: StackCategory[] = [
  {
    id: "01",
    category: "Languages",
    skills: [
      {
        title: "TypeScript",
        href: "https://www.typescriptlang.org/",
        icon: "typescript",
      },
      {
        title: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: "javascript",
      },
      { title: "Python", href: "https://www.python.org/", icon: "python" },
    ],
  },
  {
    id: "02",
    category: "Frontend",
    skills: [
      { title: "React.js", href: "https://react.dev/", icon: "react" },
      { title: "Next.js", href: "https://nextjs.org/", icon: "nextdotjs" },
      {
        title: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: "tailwindcss",
      },
      { title: "Shadcn UI", href: "https://ui.shadcn.com/", icon: "shadcnui" },
    ],
  },
  {
    id: "03",
    category: "Backend & Database",
    skills: [
      { title: "Node.js", href: "https://nodejs.org/", icon: "nodedotjs" },
      { title: "Express.js", href: "https://expressjs.com/", icon: "express" },
      { title: "MongoDB", href: "https://www.mongodb.com/", icon: "mongodb" },
      {
        title: "PostgreSQL",
        href: "https://www.postgresql.org/",
        icon: "postgresql",
      },
      {
        title: "Firebase",
        href: "https://firebase.google.com/",
        icon: "firebase",
      },
      { title: "Supabase", href: "https://supabase.com/", icon: "supabase" },
    ],
  },
  {
    id: "04",
    category: "Workflow & Tools",
    skills: [
      { title: "Git", href: "https://git-scm.com/", icon: "git" },
      { title: "Docker", href: "https://www.docker.com/", icon: "docker" },
      { title: "Vercel", href: "https://vercel.com/", icon: "vercel" },
      {
        title: "Postman API",
        href: "https://www.postman.com/",
        icon: "postman",
      },
    ],
  },
  {
    id: "05",
    category: "Unofficially",
    skills: [
      { title: "Shitposter", href: "https://x.com/insanekrishnaa", icon: "x" },
    ],
  },
]
