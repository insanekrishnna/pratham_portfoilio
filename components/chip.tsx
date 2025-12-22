import type * as React from "react"
import { cn } from "@/lib/utils"
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiReact,
  SiPython,
  SiStreamlit,
  SiSqlite,
  SiGoogle,
  SiFirebase,
  SiSupabase,
  SiVite,
  SiZod,
  SiNextdotjs,
} from "react-icons/si"

type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "soft" | "outline" | "solid"
  tech?: string
}

// Technology icon and color mapping
const techStack: Record<string, { icon: React.ReactNode; color: string; hoverColor: string }> = {
  TypeScript: {
    icon: <SiTypescript className="w-3.5 h-3.5" />,
    color: "#3178C6",
    hoverColor: "from-blue-500 to-blue-600",
  },
  TailwindCSS: {
    icon: <SiTailwindcss className="w-3.5 h-3.5" />,
    color: "#06B6D4",
    hoverColor: "from-cyan-500 to-cyan-600",
  },
  mongoDB: {
    icon: <SiMongodb className="w-3.5 h-3.5" />,
    color: "#13AA52",
    hoverColor: "from-green-500 to-green-600",
  },
  ExpressJS: {
    icon: <SiExpress className="w-3.5 h-3.5" />,
    color: "#000000",
    hoverColor: "from-gray-700 to-gray-900",
  },
  NodeJS: {
    icon: <SiNodedotjs className="w-3.5 h-3.5" />,
    color: "#68A063",
    hoverColor: "from-green-600 to-green-700",
  },
  React: {
    icon: <SiReact className="w-3.5 h-3.5" />,
    color: "#61DAFB",
    hoverColor: "from-blue-400 to-cyan-500",
  },
  Python: {
    icon: <SiPython className="w-3.5 h-3.5" />,
    color: "#3776AB",
    hoverColor: "from-blue-600 to-yellow-500",
  },
  Streamlit: {
    icon: <SiStreamlit className="w-3.5 h-3.5" />,
    color: "#FF2B2B",
    hoverColor: "from-red-500 to-red-600",
  },
  SQLite: {
    icon: <SiSqlite className="w-3.5 h-3.5" />,
    color: "#003B57",
    hoverColor: "from-blue-700 to-blue-900",
  },
  "Google Gemini Pro": {
    icon: <SiGoogle className="w-3.5 h-3.5" />,
    color: "#4285F4",
    hoverColor: "from-blue-500 to-blue-600",
  },
  Firebase: {
    icon: <SiFirebase className="w-3.5 h-3.5" />,
    color: "#FFCA28",
    hoverColor: "from-yellow-400 to-yellow-500",
  },
  Supabase: {
    icon: <SiSupabase className="w-3.5 h-3.5" />,
    color: "#3ECF8E",
    hoverColor: "from-green-500 to-emerald-600",
  },
  Vite: {
    icon: <SiVite className="w-3.5 h-3.5" />,
    color: "#646CFF",
    hoverColor: "from-purple-500 to-purple-600",
  },
  "Radix UI": {
    icon: <SiReact className="w-3.5 h-3.5" />,
    color: "#E8245D",
    hoverColor: "from-pink-500 to-pink-600",
  },
  "shadcn-ui": {
    icon: <SiNextdotjs className="w-3.5 h-3.5" />,
    color: "#000000",
    hoverColor: "from-gray-700 to-gray-900",
  },
  Zod: {
    icon: <SiZod className="w-3.5 h-3.5" />,
    color: "#3E67B1",
    hoverColor: "from-blue-600 to-blue-700",
  },
  "React Hook Form": {
    icon: <SiReact className="w-3.5 h-3.5" />,
    color: "#61DAFB",
    hoverColor: "from-blue-400 to-cyan-500",
  },
  "TanStack Query": {
    icon: <SiReact className="w-3.5 h-3.5" />,
    color: "#FF4154",
    hoverColor: "from-red-500 to-red-600",
  },
}

export function Chip({ className, variant = "soft", tech, ...props }: ChipProps) {
  const base = "inline-flex items-center gap-2 rounded-sm px-1 py-1 text-[10px] font-medium transition-all duration-100 ease-in-out "
  
  if (tech && techStack[tech]) {
    const { icon, color } = techStack[tech]
    return (
      <span
        className={cn(
          base,
          "border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-300",
          "hover:scale-105 hover:opacity-90",
          "group cursor-pointer relative",
          className
        )}
        style={
          {
            "--tech-color": color,
          } as React.CSSProperties
        }
        {...props}
      >
        {/* Icon Container */}
        <span 
          className="flex items-center justify-center w-3.5 h-3.5 rounded transition-transform duration-300 ease-in-out flex-shrink-0"
          style={{
            backgroundColor: color,
            color: "white",
          } as React.CSSProperties}
        >
          <span className="text-white text-[10px]">
            {icon}
          </span>
        </span>
        
        {/* Text */}
        <span className="text-neutral-800 dark:text-neutral-300 transition-colors duration-300 ease-in-out group-hover:text-neutral-900 dark:group-hover:text-neutral-100 whitespace-nowrap">
          {tech}
        </span>
      </span>
    )
  }

  const styles =
    variant === "outline"
      ? "border border-neutral-200 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
      : variant === "solid"
        ? "bg-neutral-900 text-white"
        : "bg-neutral-100 text-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300"
  return <span className={cn(base, styles, className)} {...props} />
}
