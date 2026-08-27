import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats an ISO `YYYY-MM-DD` string as e.g. "Dec 19, 2024".
 * Parsed as a local date so the day never shifts across timezones.
 */
export function formatDate(dateString: string): string {
  if (!dateString) return ""

  const [year, month, day] = dateString.split("-").map(Number)
  const date =
    Number.isFinite(year) && Number.isFinite(month) && Number.isFinite(day)
      ? new Date(year, month - 1, day)
      : new Date(dateString)

  if (Number.isNaN(date.getTime())) return dateString

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}
