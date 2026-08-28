"use client"

import { TextCycle } from "@/components/common/text-cycle"
import { greetings } from "@/lib/content/profile"

/**
 * Cycles a short greeting in several languages above the name.
 */
export function GreetingCycle({ className }: { className?: string }) {
  return (
    <TextCycle
      items={greetings}
      holdMs={2200}
      className={className}
      boxClassName="h-4"
      srText={greetings[0].text}
    />
  )
}

export default GreetingCycle
