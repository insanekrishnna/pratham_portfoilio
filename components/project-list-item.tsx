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
  headerLayout?: "horizontal" | "vertical";
};

export function ProjectListItem({
  title,
  bullets,
  tags,
  links = [],
  image,
  video,
  className,
  headerLayout = "horizontal",
}: ProjectListItemProps) {
  const hasBullets = bullets.length > 0
  const hasTags = tags.length > 0
  const hasLinks = links.length > 0

  return (
    <article
      className={cn(
        "rounded-lg sm:rounded-xl border border-neutral-200 bg-white overflow-hidden dark:border-neutral-800 dark:bg-neutral-950",
        className
      )}
    >
      {video ? (
        <div className="relative h-32 sm:h-40 md:h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
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
        <div className="relative h-32 sm:h-40 md:h-48 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      ) : null}
      
      <div className="px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-4">
        <header className={headerLayout === "vertical" ? "space-y-2" : "flex items-start justify-between gap-2 mb-2 sm:mb-2.5"}>
          <h4 className="text-xs sm:text-sm md:text-base font-semibold text-neutral-900 dark:text-neutral-50">
            {title}
          </h4>
          {hasLinks ? (
            <div className={headerLayout === "vertical" ? "flex flex-wrap gap-1 sm:gap-1.5 items-center" : "flex flex-wrap gap-1 sm:gap-1.5 items-center justify-end flex-shrink-0"}>
              {links.map((l, idx) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[10px] sm:text-xs rounded-full border border-neutral-200 px-2 sm:px-2.5 py-0.5 sm:py-1 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </header>

        {hasBullets ? (
          <ul className="mt-3 sm:mt-3.5 grid gap-1.5 sm:gap-2 text-xs sm:text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="rounded-md border border-neutral-200/60 bg-neutral-50/40 px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs text-neutral-700 dark:border-neutral-800/60 dark:bg-neutral-900/40 dark:text-neutral-300"
              >
                {b}
              </li>
            ))}
          </ul>
        ) : null}

        {hasTags ? (
          <div className="mt-3 sm:mt-3.5 flex flex-wrap gap-1 sm:gap-1.5">
            {tags.map(t => (
              <Chip key={t} variant="soft" tech={t}>
                {t}
              </Chip>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
