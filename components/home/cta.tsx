import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"

import { profile } from "@/lib/content/profile"
import { sectionIds } from "@/lib/content/site"

/**
 * Closing call to action. The avatar makes room for a second face on
 * hover - the whole point of the button in one small gesture.
 */
export function CTA() {
  return (
    // No heading and no section of its own: this closes out the Ikigai
    // block above rather than opening a new one, so the circles and the
    // invitation read as a single panel with no rule between them.
    <div
      id={sectionIds.contact}
      // No bottom padding of its own: the venn section's py-8 closes the
      // panel, so the gap under the button matches the one above the
      // circles. Adding any here would double up against it.
      className="flex w-full flex-col items-center px-5 pt-2 pb-0 sm:px-10"
    >
        <p className="mb-5 text-center text-sm text-balance opacity-70 md:text-lg">
          Still reading? That means something clicked. Let’s talk.
        </p>

        <Link
          href="/contact"
          className="focus-visible:ring-ring/50 inset-shadow group inline-flex cursor-pointer items-center self-center rounded-md border border-black/10 bg-black/[0.03] px-2 py-1 text-sm text-black shadow-md outline-none focus-visible:ring-[3px] dark:border-white/15 dark:bg-white/15 dark:text-white dark:shadow-[0_0_5px_rgba(255,255,255,0.1)]"
        >
          <span className="relative z-20 flex items-center gap-2 transition-[gap] duration-300 group-hover:gap-8">
            <span className="size-5 shrink-0 overflow-hidden rounded-full">
              <Image
                alt=""
                width={20}
                height={20}
                className="size-full object-cover"
                src={profile.avatar}
              />
            </span>
            <span
              aria-hidden
              className="absolute left-6 flex -translate-x-full items-center opacity-0 transition-[transform,opacity] duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <Plus className="size-3" />
              <span className="mr-2 ml-1 flex size-5 items-center justify-center rounded-full bg-black/10 text-[8px] dark:bg-white/10">
                You
              </span>
            </span>
            <span className="relative ml-0 block text-sm font-bold whitespace-nowrap transition-[margin-left] duration-300 group-hover:ml-4">
              Book a free call
            </span>
          </span>
      </Link>
    </div>
  )
}

export default CTA
