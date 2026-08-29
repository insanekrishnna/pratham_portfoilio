"use client"

import { useRef } from "react"
import Image from "next/image"
import { GitHubIcon } from "@/components/icons/brand"

import type { Project } from "@/lib/content/projects"

/**
 * Projects with a clip show it in place of the still on hover or focus.
 * The still is the poster, so nothing loads until the visitor asks.
 */
function Preview({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const shared =
    "border-border h-44 w-full rounded-md border object-cover object-top sm:h-48"

  if (!project.video) {
    return (
      <Image
        src={project.image}
        alt=""
        width={1200}
        height={630}
        className={shared}
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
      className={shared}
      onMouseEnter={() => void videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => videoRef.current?.pause()}
    />
  )
}

/**
 * Deliberately not a card: no border, no shadow, no rounded panel. The
 * rest of the site is flat sections split by hairlines, and a raised box
 * sitting inside that read as a widget bolted on from somewhere else.
 * The only framed thing here is the screenshot.
 *
 * Type and chips are the same scale the experience rows and skill
 * badges use, so a project entry reads as another row of the same page.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { website, github } = project.links
  const primaryHref = website ?? github

  return (
    <div className="group/card relative flex flex-1 flex-col gap-2">
      <a
        href={primaryHref}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-visible:ring-ring/50 flex flex-1 flex-col gap-2 rounded-md text-left outline-none focus-visible:ring-[3px]"
      >
        <div className="overflow-hidden rounded-md">
          <Preview project={project} />
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <h3 className="group-hover/card:text-primary min-w-0 truncate text-[15px] leading-snug font-semibold">
            {project.title}
          </h3>
          {project.subheading && (
            <span className="text-muted-foreground shrink-0 text-[11px]">
              {project.subheading}
            </span>
          )}
        </div>

        {/* One line only - the full copy lives on the project page. */}
        <p className="text-muted-foreground truncate text-[13px] leading-snug">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="border-border bg-background text-muted-foreground rounded-md border px-1.5 py-0.5 text-[11px] font-medium whitespace-nowrap select-none"
            >
              {tech}
            </li>
          ))}
        </ul>
      </a>

      <div className="border-border relative z-20 mt-auto flex items-center gap-4 border-t pt-2 text-xs">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 rounded-sm outline-none transition-colors focus-visible:ring-[3px]"
          >
            Live link
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground focus-visible:ring-ring/50 inline-flex items-center gap-1.5 rounded-sm outline-none transition-colors focus-visible:ring-[3px]"
          >
            GitHub
            <GitHubIcon className="size-3" aria-hidden />
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
