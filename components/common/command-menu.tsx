"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import {
  ArrowUpRight,
  FileText,
  Home,
  Laptop,
  Mail,
  Moon,
  Search,
  Send,
  Sun,
  Volume2,
  VolumeX,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon } from "@/components/icons/brand"
import { useUiFeedback } from "@/hooks/use-ui-feedback"
import { profile } from "@/lib/content/profile"
import { projects } from "@/lib/content/projects"
import { cn } from "@/lib/utils"

const pages = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: Laptop },
  { name: "Contact", href: "/contact", icon: Send },
]

const external = [
  {
    name: "GitHub",
    href: "https://github.com/insanekrishnna",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/prathamyadavv/",
    icon: LinkedInIcon,
  },
  { name: "Resume", href: profile.resumeUrl, icon: FileText },
  { name: "Email", href: `mailto:${profile.email}`, icon: Mail },
]

/**
 * ⌘K / Ctrl+K palette. Rendered once in the shell; the trigger button
 * and the mobile floating button both drive the same dialog.
 */
export function CommandMenu({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const router = useRouter()
  const { setTheme, resolvedTheme } = useTheme()
  const { soundEnabled, toggleSound, tap } = useUiFeedback()

  const run = useCallback(
    (action: () => void) => {
      onOpenChange(false)
      action()
    },
    [onOpenChange]
  )

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Command menu"
      description="Jump to a page, open a link, or change a setting."
      // The panel needs its own elevation: at these token values a plain
      // border disappears against the dimmed page in dark mode.
      className="bg-popover border-border/80 gap-0 p-0 shadow-2xl ring-1 ring-black/5 sm:max-w-lg dark:ring-white/10"
    >
      <CommandInput placeholder="Jump to a page or link…" />
      <CommandList className="max-h-[min(65vh,26rem)]">
        <CommandEmpty>Nothing matches that.</CommandEmpty>

        <CommandGroup heading="Pages">
          {pages.map((page) => (
            <CommandItem
              key={page.href}
              value={`page ${page.name}`}
              onSelect={() => run(() => router.push(page.href))}
            >
              <page.icon className="text-muted-foreground" />
              {page.name}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Projects">
          {projects.map((project) => (
            <CommandItem
              key={project.slug}
              value={`project ${project.title} ${project.technologies.join(" ")}`}
              onSelect={() =>
                run(() => {
                  const href = project.links.website ?? project.links.github
                  if (href) window.open(href, "_blank", "noopener,noreferrer")
                })
              }
            >
              <ArrowUpRight className="text-muted-foreground" />
              {project.title}
              <span className="text-muted-foreground ml-auto text-xs">
                {project.subheading}
              </span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links">
          {external.map((link) => (
            <CommandItem
              key={link.name}
              value={`link ${link.name}`}
              onSelect={() =>
                run(() => window.open(link.href, "_blank", "noopener,noreferrer"))
              }
            >
              <link.icon className="text-muted-foreground" />
              {link.name}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Settings">
          <CommandItem
            value="setting theme appearance dark light"
            onSelect={() =>
              run(() => setTheme(resolvedTheme === "dark" ? "light" : "dark"))
            }
          >
            {resolvedTheme === "dark" ? (
              <Sun className="text-muted-foreground" />
            ) : (
              <Moon className="text-muted-foreground" />
            )}
            Switch to {resolvedTheme === "dark" ? "light" : "dark"} theme
            <span className="text-muted-foreground ml-auto text-xs tracking-widest">
              D
            </span>
          </CommandItem>
          <CommandItem
            value="setting sound audio feedback"
            onSelect={() => {
              toggleSound()
              onOpenChange(false)
            }}
          >
            {soundEnabled ? (
              <VolumeX className="text-muted-foreground" />
            ) : (
              <Volume2 className="text-muted-foreground" />
            )}
            {soundEnabled ? "Turn off interface sound" : "Turn on interface sound"}
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

/** Desktop trigger that mirrors the shortcut it responds to. */
export function CommandTrigger({
  onClick,
  className,
}: {
  onClick: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Open command menu"
      className={cn(
        "text-muted-foreground hover:text-foreground hover:border-foreground/20 focus-visible:ring-ring/50 border-border bg-background inline-flex h-7 items-center gap-2 rounded-full border px-2.5 text-xs transition-colors outline-none focus-visible:ring-[3px]",
        className
      )}
    >
      <Search className="size-3.5" aria-hidden />
      <span>Search</span>
      <kbd className="bg-muted text-muted-foreground rounded px-1 py-px font-mono text-[10px] leading-4">
        ⌘K
      </kbd>
    </button>
  )
}

/** Floating trigger for touch devices, where there is no keyboard shortcut. */
export function CommandFloatingButton({ onClick }: { onClick: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-6 z-50 mx-auto w-fit md:hidden">
      <Button
        onClick={onClick}
        variant="outline"
        className="bg-background/95 gap-2 rounded-full border px-5 shadow-lg backdrop-blur-md transition-transform active:scale-95"
      >
        <Search className="size-4" aria-hidden />
        <span>Search</span>
      </Button>
    </div>
  )
}

/** Owns the open state and the keyboard shortcut for the whole app. */
export function useCommandMenu() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        setOpen((value) => !value)
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [])

  return { open, setOpen }
}
