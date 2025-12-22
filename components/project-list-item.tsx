import { cn } from "@/lib/utils";
import { Chip } from "@/components/chip";
import Image from "next/image";

type ProjectListItemProps = {
  title: string;
  bullets: string[];
  tags: string[];
  links?: { label: string; href: string }[];
  image?: string;
  video?: string;
  className?: string;
};

export function ProjectListItem({
  title,
  bullets,
  tags,
  links = [],
  image,
  video,
  className,
}: ProjectListItemProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-neutral-200 bg-white overflow-hidden dark:border-neutral-800 dark:bg-neutral-950",
        className
      )}
    >
      {video ? (
        <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      ) : image ? (
        <div className="relative h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      ) : null}
      
      <div className="px-4 py-3 md:px-5 md:py-3.5">
        <header className="flex flex-wrap items-center gap-2 justify-between">
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
            {title}
          </h4>
          <div className="flex gap-2">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs rounded-sm border border-neutral-200 px-2 py-0.5 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
              >
                {l.label}
              </a>
            ))}
          </div>
        </header>

        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map(t => (
            <Chip key={t} variant="soft" tech={t}>
              {t}
            </Chip>
          ))}
        </div>
      </div>
    </article>
  );
}
