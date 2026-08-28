"use client"

import { TextCycle } from "@/components/common/text-cycle"

/**
 * Each role is shown in full and then rolls up out of the way — the same
 * motion the greeting uses, so the two lines of the hero read as one
 * idea rather than two competing effects.
 */
export function RoleCycle({ roles }: { roles: readonly string[] }) {
  return (
    <TextCycle
      items={roles.map((role) => ({ text: role }))}
      holdMs={2600}
      boxClassName="h-6 md:h-7"
      srText={roles.join(" · ")}
    />
  )
}

export default RoleCycle
