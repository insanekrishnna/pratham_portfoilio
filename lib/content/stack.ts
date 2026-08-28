export type StackCategory = {
  id: string
  category: string
  /**
   * `icon` is a simple-icons slug, or one of the generic keys the Stack
   * component maps to a neutral mark for things that have no brand.
   */
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
      { title: "C/C++", href: "https://isocpp.org/", icon: "cplusplus" },
      {
        title: "SQL",
        href: "https://en.wikipedia.org/wiki/SQL",
        icon: "generic-sql",
      },
      {
        title: "HTML",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: "html5",
      },
      {
        title: "CSS",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        icon: "css",
      },
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
    category: "Backend & Databases",
    skills: [
      { title: "Node.js", href: "https://nodejs.org/", icon: "nodedotjs" },
      { title: "Express.js", href: "https://expressjs.com/", icon: "express" },
      {
        title: "REST APIs",
        href: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
        icon: "generic-api",
      },
      {
        title: "PostgreSQL",
        href: "https://www.postgresql.org/",
        icon: "postgresql",
      },
      { title: "MongoDB", href: "https://www.mongodb.com/", icon: "mongodb" },
      { title: "Redis", href: "https://redis.io/", icon: "redis" },
      { title: "Prisma", href: "https://www.prisma.io/", icon: "prisma" },
      { title: "Supabase", href: "https://supabase.com/", icon: "supabase" },
    ],
  },
  {
    id: "04",
    category: "Tools & Platforms",
    skills: [
      { title: "Git", href: "https://git-scm.com/", icon: "git" },
      { title: "GitHub", href: "https://github.com/", icon: "github" },
      { title: "Docker", href: "https://www.docker.com/", icon: "docker" },
      { title: "Postman", href: "https://www.postman.com/", icon: "postman" },
      {
        title: "VS Code",
        href: "https://code.visualstudio.com/",
        icon: "generic-editor",
      },
      { title: "Cursor", href: "https://cursor.com/", icon: "cursor" },
      { title: "Vercel", href: "https://vercel.com/", icon: "vercel" },
      { title: "Figma", href: "https://www.figma.com/", icon: "figma" },
    ],
  },
]
