import { Quote as QuoteIcon } from "lucide-react"

import { HatchRule } from "@/components/layout/rules"
import { quote } from "@/lib/content/site"

export function Quote() {
  return (
    <div>
      <HatchRule />
      <figure className="border-border screen-line-top screen-line-bottom relative flex flex-col items-center justify-center border-x px-6 py-12 text-center">
        <QuoteIcon
          className="mb-6 size-9 fill-current text-neutral-300 dark:text-neutral-700"
          aria-hidden
        />
        <blockquote className="mb-6 max-w-xl text-lg font-medium text-balance text-neutral-700 italic sm:text-xl dark:text-neutral-300">
          “{quote.text}”
        </blockquote>
        <figcaption className="flex items-center gap-3">
          <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" aria-hidden />
          <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            {quote.author}
          </span>
          <span className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" aria-hidden />
        </figcaption>
      </figure>
    </div>
  )
}

export default Quote
