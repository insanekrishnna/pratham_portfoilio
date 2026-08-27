import { Container } from "@/components/layout/container"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Quote } from "@/components/common/quote"

/**
 * The frame every page sits in: a full-bleed sticky nav, then the 715px
 * column marked by two full-height rails. The rails are what make the
 * column read as a physical sheet rather than a centred blob.
 */
export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <a
        href="#main"
        className="focus:bg-background focus:ring-ring/50 sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:border focus:px-3 focus:py-2 focus:text-sm focus:ring-[3px]"
      >
        Skip to content
      </a>

      <Navbar />

      <Container>
        <div className="relative">
          <div
            aria-hidden
            className="border-border pointer-events-none absolute top-0 -left-4 bottom-0 z-0 w-4 border-r md:-left-6 md:w-6 dark:opacity-60"
          />
          <div
            aria-hidden
            className="border-border pointer-events-none absolute top-0 -right-4 bottom-0 z-0 w-4 border-l md:-right-6 md:w-6 dark:opacity-60"
          />

          <div id="main" className="relative z-10">
            {children}
            <Quote />
            <Footer />
          </div>
        </div>
      </Container>

      {/* Softens the bottom edge so content fades out rather than clipping. */}
      <div
        aria-hidden
        className="from-background pointer-events-none fixed inset-x-0 bottom-0 z-40 h-10 bg-linear-to-t to-transparent backdrop-blur-[5px] select-none [mask-image:linear-gradient(to_top,black_10%,transparent)] dark:[mask-image:linear-gradient(to_top,black_20%,transparent)]"
      />
    </div>
  )
}

export default SiteShell
