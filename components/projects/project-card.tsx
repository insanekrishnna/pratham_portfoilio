"use client"

import { useRef } from "react"
import Image from "next/image"
import { GitHubIcon } from "@/components/icons/brand"

import type { Project } from "@/lib/content/projects"
import { cn } from "@/lib/utils"

/**
 * Projects with a clip show it in place of the still on hover or focus.
 * The still is the poster, so nothing loads until the visitor asks.
 */
function Preview({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  if (!project.video) {
    return (
      <Image
        src={project.image}
        alt=""
        width={1200}
        height={630}
        className="h-48 w-full rounded-lg object-cover object-top sm:h-52"
      />
    )
  }

  return (
    <video
      ref={videoRef}
      src={project.video}
      poster={project.image}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden
      className="h-48 w-full rounded-lg object-cover object-top sm:h-52"
      onMouseEnter={() => void videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => videoRef.current?.pause()}
    />
  )
}

export function ProjectCard({ project }: { project: Project }) {
  const { website, github } = project.links
  const primaryHref = website ?? github

  return (
    <div className="group/card border-border bg-background/50 relative flex flex-1 flex-col gap-1 overflow-hidden rounded-xl border p-2 shadow-sm transition-colors hover:bg-neutral-100/60 dark:border-neutral-800 dark:bg-neutral-950/70 dark:hover:bg-neutral-900/40">
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-visible:ring-ring/50 flex flex-1 flex-col gap-1 rounded-lg text-left outline-none focus-visible:ring-[3px]"
      >
        <Preview project={project} />

        <div className="mt-2.5 px-1 pt-0.5">
          <h3 className="group-hover/card:text-primary text-lg leading-snug font-bold">
            {project.title}
          </h3>
        </div>

        {project.subheading && (
          <p className="-mt-1 mb-1.5 px-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
            {project.subheading}
          </p>
        )}

        <p className="text-muted-foreground line-clamp-3 min-h-[3.5rem] px-1 text-sm leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-1 flex flex-wrap gap-1.5 px-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="bg-background text-muted-foreground rounded-sm border px-1.5 py-0.5 text-xs shadow-xs select-none"
            >
              {tech}
            </li>
          ))}
        </ul>
      </a>

      <div className="border-border relative z-20 mt-2 flex items-center border-t pt-2">
        {website && github ? (
          <>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 w-full rounded-sm border-r text-center text-sm text-nowrap outline-none transition-colors focus-visible:ring-[3px]"
            >
              Live link
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 flex w-full items-center justify-center gap-2 rounded-sm text-sm outline-none transition-colors focus-visible:ring-[3px]"
            >
              GitHub
              <GitHubIcon className="size-3.5" aria-hidden />
            </a>
          </>
        ) : (
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground flex w-full items-center justify-center gap-2 text-sm transition-colors"
          >
            {github ? "GitHub" : "Live link"}
            {github && <GitHubIcon className="size-3.5" aria-hidden />}
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
