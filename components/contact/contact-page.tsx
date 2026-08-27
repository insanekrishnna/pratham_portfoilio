import { ArrowUpRight, Calendar } from "lucide-react"

import { PageHeader } from "@/components/layout/page-header"
import { SectionHeading } from "@/components/layout/section-heading"
import { HatchRule } from "@/components/layout/rules"
import { ContactForm } from "@/components/contact/contact-form"
import { XIcon } from "@/components/icons/brand"
import { profile } from "@/lib/content/profile"

const directRoutes = [
  {
    name: "Book a 30-minute call",
    detail: "Calendly — pick any open slot",
    href: profile.calendlyUrl,
    icon: Calendar,
  },
  {
    name: "DM me on X",
    detail: `@${"insanekrishnaa"}`,
    href: "https://x.com/insanekrishnaa",
    icon: XIcon,
  },
]

export function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about what you're building"
        action={
          <span className="border-border bg-muted/30 text-muted-foreground rounded-full border px-3 py-1 text-xs font-medium sm:text-sm">
            Open to work
          </span>
        }
      />

      <SectionHeading as="h2">Fastest routes</SectionHeading>
      <ul className="grid grid-cols-1 sm:grid-cols-2">
        {directRoutes.map((route, index) => (
          <li
            key={route.name}
            // The first cell carries the row rule for both columns; the
            // hatch band below closes the block.
            className={
              index === 0
                ? "screen-line-bottom relative sm:border-r"
                : "relative"
            }
          >
            <a
              href={route.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group focus-visible:ring-ring/50 flex h-full items-center gap-3 p-4 outline-none transition-colors hover:bg-neutral-50 focus-visible:ring-[3px] dark:hover:bg-neutral-900/40"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-transform duration-200 group-hover:scale-105 dark:bg-neutral-800 dark:text-neutral-300">
                <route.icon className="size-[18px]" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium">
                  {route.name}
                </span>
                <span className="text-muted-foreground block truncate text-xs">
                  {route.detail}
                </span>
              </span>
              <ArrowUpRight
                className="text-muted-foreground size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </a>
          </li>
        ))}
      </ul>

      <HatchRule />

      <SectionHeading as="h2">Send a message</SectionHeading>
      <div className="px-4 py-8 sm:px-6">
        <p className="text-muted-foreground mb-6 max-w-prose text-sm leading-relaxed">
          Write here and it lands in my inbox. Roles, freelance work, or a
          question about something I've built — all welcome.
        </p>
        <ContactForm />
      </div>
    </main>
  )
}

export default ContactPage
