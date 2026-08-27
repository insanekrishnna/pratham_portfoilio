export type StackCategory = {
  id: string
  category: string
  skills: { title: string; href: string }[]
}

export const stack: StackCategory[] = [
  {
    id: "01",
    category: "Languages",
    skills: [
      { title: "TypeScript", href: "https://www.typescriptlang.org/" },
      {
        title: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { title: "Python", href: "https://www.python.org/" },
    ],
  },
  {
    id: "02",
    category: "Frontend",
    skills: [
      { title: "React.js", href: "https://react.dev/" },
      { title: "Next.js", href: "https://nextjs.org/" },
      { title: "Tailwind CSS", href: "https://tailwindcss.com/" },
      { title: "Shadcn UI", href: "https://ui.shadcn.com/" },
    ],
  },
  {
    id: "03",
    category: "Backend & Database",
    skills: [
      { title: "Node.js", href: "https://nodejs.org/" },
      { title: "Express.js", href: "https://expressjs.com/" },
      { title: "MongoDB", href: "https://www.mongodb.com/" },
      { title: "PostgreSQL", href: "https://www.postgresql.org/" },
      { title: "Firebase", href: "https://firebase.google.com/" },
      { title: "Supabase", href: "https://supabase.com/" },
    ],
  },
  {
    id: "04",
    category: "Workflow & Tools",
    skills: [
      { title: "Git", href: "https://git-scm.com/" },
      { title: "Docker", href: "https://www.docker.com/" },
      { title: "Vercel", href: "https://vercel.com/" },
      { title: "Postman API", href: "https://www.postman.com/" },
    ],
  },
  {
    id: "05",
    category: "Unofficially",
    skills: [{ title: "Shitposter", href: "https://x.com/insanekrishnaa" }],
  },
]
