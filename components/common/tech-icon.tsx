import {
  Braces,
  Code2,
  Database,
  FileText,
  ScanText,
  type LucideIcon,
} from "lucide-react"
import * as simpleIcons from "simple-icons"
import type { SimpleIcon } from "simple-icons"

/** Below this relative luminance a brand colour disappears on black. */
const TOO_DARK = 0.22
/** What those brands use instead, on dark only. */
const DARK_FALLBACK = "#E1E3E5"

/**
 * Things with no brand mark of their own: specifications, a Microsoft
 * trademark simple-icons will not carry, and a couple of libraries that
 * never had a logo. These take a neutral glyph rather than a borrowed one.
 */
const GENERIC: Record<string, LucideIcon | undefined> = {
  "generic-sql": Database,
  "generic-api": Braces,
  "generic-editor": Code2,
  "generic-pdf": FileText,
  "generic-ocr": ScanText,
}

/**
 * Display name to slug, for the places that store a human label rather
 * than a slug - the project cards' technology lists.
 */
const SLUGS: Record<string, string> = {
  typescript: "typescript",
  javascript: "javascript",
  react: "react",
  reactjs: "react",
  nextjs: "nextdotjs",
  vite: "vite",
  tailwindcss: "tailwindcss",
  framermotion: "framer",
  nodejs: "nodedotjs",
  expressjs: "express",
  mongodb: "mongodb",
  postgresql: "postgresql",
  cheerio: "cheerio",
  pdflib: "generic-pdf",
  tesseractjs: "generic-ocr",
}

export function slugForTech(label: string) {
  const key = label.toLowerCase().replace(/[^a-z0-9]/g, "")
  return SLUGS[key] ?? key
}

function lookup(slug: string): SimpleIcon | undefined {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`
  return (simpleIcons as unknown as Record<string, SimpleIcon>)[key]
}

/**
 * Next.js, Vercel, shadcn, Express, GitHub and X are all near-black
 * marks, so their real colour is invisible against the dark theme. Only
 * those get swapped; every other logo keeps its own colour in both.
 */
function darkVariant(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luminance < TOO_DARK ? DARK_FALLBACK : `#${hex}`
}

/**
 * One brand mark, in its own colour. Shared by the skills section and
 * the project cards so a technology looks the same in both places.
 */
export function TechIcon({
  slug,
  className = "size-3.5",
}: {
  slug: string
  className?: string
}) {
  const Generic = GENERIC[slug]
  if (Generic) {
    return (
      <Generic aria-hidden className={`text-muted-foreground ${className}`} />
    )
  }

  const icon = lookup(slug)
  if (!icon) return null

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={`shrink-0 fill-[var(--brand)] dark:fill-[var(--brand-dark)] ${className}`}
      style={
        {
          "--brand": `#${icon.hex}`,
          "--brand-dark": darkVariant(icon.hex),
        } as React.CSSProperties
      }
    >
      <path d={icon.path} />
    </svg>
  )
}

export default TechIcon
