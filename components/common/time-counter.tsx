"use client"

import { useEffect, useState } from "react"

/**
 * Local wall-clock for a fixed timezone. Renders nothing until mounted
 * so the server and client markup never disagree.
 */
export function TimeCounter({
  className,
  timeZone,
}: {
  className?: string
  timeZone?: string
}) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString("en-GB", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone,
      })

    setTime(format())
    const timer = window.setInterval(() => setTime(format()), 1000)
    return () => window.clearInterval(timer)
  }, [timeZone])

  return (
    <span className={className} aria-label="My local time">
      {/* Reserve the width so the line never reflows on mount. */}
      {time ?? "--:--:--"}
    </span>
  )
}

export default TimeCounter
