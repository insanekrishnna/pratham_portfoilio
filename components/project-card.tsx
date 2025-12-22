import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Chip } from "@/components/chip"
import { Github, ExternalLink } from "lucide-react"

type ProjectCardProps = {
  title: string
  year?: string | number
  description: string
  tech: string[]
  imageAlt: string
  imageSrc: string
  links?: { label: string; href: string; icon?: "github" | "external" }[]
}

export function ProjectCard({ title, year, description, tech, imageAlt, imageSrc, links = [] }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-neutral-200 shadow-sm dark:border-neutral-800">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between text-base">
          <span className="text-pretty">{title}</span>
          {year ? <span className="text-xs font-normal text-neutral-500">{year}</span> : null}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-[13px] leading-5 text-neutral-600 dark:text-neutral-300">{description}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <Chip key={t} className="px-2 py-0.5">
              {t}
            </Chip>
          ))}
        </div>
      </CardContent>
      {links.length ? (
        <CardFooter className="flex gap-2 pt-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-2.5 py-1 text-xs text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              {l.icon === "github" ? (
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              <span>{l.label}</span>
            </a>
          ))}
        </CardFooter>
      ) : null}
    </Card>
  )
}
