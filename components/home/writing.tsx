import Image from "next/image"
import { ArrowUpRight, CalendarSearch, MoveRight } from "lucide-react"

import { SectionHeading } from "@/components/layout/section-heading"
import { RuledRow } from "@/components/layout/rules"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { posts, mediumProfileUrl } from "@/lib/content/writing"
import { sectionIds } from "@/lib/content/site"
import { cn, formatDate } from "@/lib/utils"

export function Writing() {
  // A lone post gets a full-width, side-by-side card rather than sitting
  // in half a two-up row with nothing beside it.
  const isSingle = posts.length === 1

  return (
    <section aria-labelledby={sectionIds.writing}>
      <SectionHeading id={sectionIds.writing}>Writing</SectionHeading>

      <div className="relative py-4">
        {!isSingle && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-2 max-sm:hidden"
          >
            <div className="border-border border-r" />
            <div className="border-border border-l" />
          </div>
        )}

        <ul
          className={cn(
            "rule-grid grid grid-cols-1",
            !isSingle && "sm:grid-cols-2"
          )}
        >
          {posts.map((post) => (
            <li key={post.slug}>
              <article
                className={cn(
                  "group relative flex h-full gap-2 p-2 py-4 transition-colors hover:bg-neutral-100/60 md:py-2 dark:hover:bg-neutral-900/40",
                  isSingle ? "flex-col sm:flex-row sm:items-center" : "flex-col"
                )}
              >
                <div
                  className={cn(
                    "relative shrink-0 select-none",
                    isSingle && "sm:w-2/5"
                  )}
                >
                  <Image
                    src={post.image}
                    alt=""
                    width={1200}
                    height={630}
                    className="aspect-[1200/630] w-full rounded-xl object-cover"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-xl inset-ring-1 inset-ring-black/10 dark:inset-ring-white/10"
                  />
                </div>

                <div className="flex h-full flex-1 flex-col justify-between gap-3 p-2">
                  <h3 className="text-lg leading-snug font-medium text-balance">
                    <a
                      href={post.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
                    >
                      <span className="absolute inset-0" aria-hidden />
                      {post.title}
                    </a>
                  </h3>

                  {post.description && (
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
                      {post.description}
                    </p>
                  )}

                  <div className="relative z-10 mt-1 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="px-2.5 py-0.5 text-[11px]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="border-border flex items-center justify-between gap-2 border-t pt-2.5">
                      <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                        <CalendarSearch className="size-3.5" aria-hidden />
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                      </span>
                      <span className="text-muted-foreground group-hover:text-primary flex items-center gap-1 text-xs font-medium transition-colors">
                        Read on Medium
                        <ArrowUpRight className="size-3.5" aria-hidden />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <RuledRow className="mt-1">
        <Button size="sm" asChild>
          <a href={mediumProfileUrl} target="_blank" rel="noopener noreferrer">
            See all writing
            <MoveRight aria-hidden />
          </a>
        </Button>
      </RuledRow>
    </section>
  )
}

export default Writing
