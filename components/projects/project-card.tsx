"use client"

import { useRef } from "react"
import Image from "next/image"
import { GitHubIcon } from "@/components/icons/brand"

import { TechIcon, slugForTech } from "@/components/common/tech-icon"
import { chipClass } from "@/lib/button-styles"
import type { Project } from "@/lib/content/projects"
import { cn } from "@/lib/utils"

/** The skill badge, trimmed a little to sit on the title's line. */
const projectButtonClass = cn(chipClass, "gap-1 px-1.5 py-0.5")

/**
 * Projects with a clip show it in place of the still on hover or focus.
 * The still is the poster, so nothing loads until the visitor asks.
 */
function Preview({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  // The frame lives on the wrapper, not here, so the border stays put
  // while the picture inside it drifts in. 3% over half a second is
  // enough to register as alive without reading as a zoom.
  const shared =
    "h-44 w-full object-cover object-top transition-transform duration-500 ease-out group-hover/media:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover/media:scale-100 sm:h-48"

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
 * The two links sit on the title's line rather than in a footer strip,
 * which is what the subheading used to occupy. They have to live outside
 * the media anchor - a link inside a link is invalid markup.
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
        // `group/media` and not the card's own group: the drift should
        // answer the pointer being on the picture, not anywhere on the
        // entry. `overflow-hidden` is what keeps the scale inside the frame.
        className="group/media border-border focus-visible:ring-ring/50 block overflow-hidden rounded-md border outline-none focus-visible:ring-[3px]"
      >
        <Preview project={project} />
      </a>

      <div className="flex items-center justify-between gap-3">
        <h3 className="min-w-0 truncate text-[15px] leading-snug font-semibold">
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary focus-visible:ring-ring/50 rounded-sm outline-none transition-colors focus-visible:ring-[3px]"
          >
            {project.title}
          </a>
        </h3>

        <div className="flex shrink-0 items-center gap-1.5">
          {website && (
            <a
              href={website}
              data-ui-feedback="tap"
              target="_blank"
              rel="noopener noreferrer"
              className={projectButtonClass}
            >
              Live
            </a>
          )}
          {github && (
            <a
              href={github}
              data-ui-feedback="tap"
              target="_blank"
              rel="noopener noreferrer"
              className={projectButtonClass}
            >
              <GitHubIcon className="size-3 shrink-0" aria-hidden />
              Code
            </a>
          )}
        </div>
      </div>

      {/* One line only - the full copy lives on the project page. */}
      <p className="text-muted-foreground truncate text-[13px] leading-snug">
        {project.description}
      </p>

      {/* The skill badge with its brand mark, held at the size these
          already were - only the styling is borrowed, not the scale. */}
      <ul className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <li key={tech} className="flex">
            <span className={cn(chipClass, "gap-1 px-1.5 py-0.5 text-[11px]")}>
              <TechIcon slug={slugForTech(tech)} className="size-3 shrink-0" />
              {tech}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectCard
