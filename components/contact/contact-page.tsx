import { ArrowUpRight, Calendar } from "lucide-react"

import { PageHeader } from "@/components/layout/page-header"
import { SectionHeading } from "@/components/layout/section-heading"
import { HatchRule } from "@/components/layout/rules"
import { ContactForm } from "@/components/contact/contact-form"
import { XIcon } from "@/components/icons/brand"
import { profile } from "@/lib/content/profile"
import { cn } from "@/lib/utils"

const directRoutes = [
  {
    name: "Book a 15-minute call",
    detail: "Calendly - pick any open slot",
    href: profile.calendlyUrl,
    icon: Calendar,
    primary: true,
  },
  {
    name: "DM me on X",
    detail: "@insanekrishnaa",
    href: "https://x.com/insanekrishnaa",
    icon: XIcon,
    primary: false,
  },
]

/**
 * The routes were flat list rows with a faint hover tint: nothing read
 * as pressable, and the call - the thing actually worth booking - was
 * weighted the same as a DM.
 *
 * They are now full-width bars in the site's two existing treatments.
 * The solid one is the only filled surface on the page, so it takes the
 * eye without any new visual language being invented for it, and the
 * bordered one reads as the alternative rather than the equal.
 */
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

      {/* Side by side from sm; stacked below it, where half a phone
          width cannot hold the label without truncating it away. */}
      <div className="grid grid-cols-1 gap-2 px-4 py-5 sm:grid-cols-2 sm:px-6">
        {directRoutes.map((route) => (
          <a
            key={route.name}
            href={route.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group focus-visible:ring-ring/50 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left outline-none transition-all focus-visible:ring-[3px]",
              route.primary
                ? "bg-foreground text-background hover:opacity-90"
                : "border-border bg-background border hover:border-neutral-400 dark:hover:border-neutral-600"
            )}
          >
            <span
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-md",
                route.primary
                  ? "bg-background/15"
                  : "bg-muted text-muted-foreground"
              )}
            >
              <route.icon className="size-4" aria-hidden />
            </span>

            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold">
                {route.name}
              </span>
              <span
                className={cn(
                  "block truncate text-xs",
                  route.primary ? "text-background/70" : "text-muted-foreground"
                )}
              >
                {route.detail}
              </span>
            </span>

            <ArrowUpRight
              className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
        ))}
      </div>

      <HatchRule />

      <SectionHeading as="h2">Send a message</SectionHeading>
      <div className="px-4 py-5 sm:px-6">
        <p className="text-muted-foreground mb-5 max-w-prose text-sm leading-relaxed">
          Write here and it lands in my inbox. Roles, freelance work, or a
          question about something I've built - all welcome.
        </p>
        <ContactForm />
      </div>
    </main>
  )
}

export default ContactPage
