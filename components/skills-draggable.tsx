"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Skill = {
  label: string;
};

function SkillPill({ label }: Skill) {
  return (
    <motion.div
      className={cn(
        "relative select-none",
        "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium",
        "bg-white text-neutral-700 border-neutral-300",
        "dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-700"
      )}
      whileHover={{ y: -1 }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      aria-label={label}
    >
      <span className="leading-none">{label}</span>
    </motion.div>
  );
}

export function SkillsDraggable() {
  const skills: Skill[] = [
    { label: "Python" },
    { label: "JavaScript" },
    { label: "TypeScript" },
    { label: "React.js" },
    { label: "PostgreSQL" },
    { label: "Firebase" },
    { label: "Supabase" },
    { label: "Next.js" },
    { label: "Node.js" },
    { label: "Express.js" },
    { label: "Tailwind CSS" },
    { label: "MongoDB" },
    { label: "Vercel" },
    { label: "Git" },
    { label: "Docker" },
    { label: "Postman API" },
    { label: "Shadcn UI" },
    { label: "Shitposter" },
  ];

  return (
    <div className="group">
      {/* Header */}
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-bricolage text-[0.9rem] sm:text-[0.95rem] font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-slate-100">
          Skills
        </h3>

       
      </div>

      {/* Skills */}
      <div className="relative flex flex-wrap gap-2">
        {skills.map(s => (
          <SkillPill key={s.label} {...s} />
        ))}
      </div>

      {/* Minimalist drag affordance */}
      <div className="relative mt-1 h-2 overflow-hidden">
        <div
          className={cn(
            "absolute left-0 top-1/2 h-px w-24 -translate-y-1/2",
            "border-t border-dashed border-slate-300 dark:border-slate-600",
            "opacity-0 translate-x-0",
            "transition-all duration-300 ease-out",
            "group-hover:opacity-100 group-hover:translate-x-3"
          )}
        />
      </div>
    </div>
  );
}

export default SkillsDraggable;
