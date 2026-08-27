"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Container } from "@/components/layout/container"
import { ThemeToggle } from "@/components/common/theme-toggle"
import {
  CommandFloatingButton,
  CommandMenu,
  CommandTrigger,
  useCommandMenu,
} from "@/components/common/command-menu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { navLinks } from "@/lib/content/site"
import { profile } from "@/lib/content/profile"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const { open, setOpen } = useCommandMenu()

  return (
    <>
      {/* Full-bleed so full-width rules scrolling underneath stay hidden. */}
      <div className="bg-background sticky top-0 isolate z-50 w-full pt-1">
        <Container>
          <div className="screen-line-top screen-line-bottom relative mt-1 flex w-full items-center justify-between gap-2 px-4 py-1.5">
            <Link
              href="/"
              className="focus-visible:ring-ring/50 rounded-sm outline-none focus-visible:ring-[3px]"
            >
              <span className="font-pixel text-2xl leading-none tracking-wide uppercase">
                {profile.wordmark}
              </span>
              <span className="sr-only">— home</span>
            </Link>

            <div className="flex items-center gap-2 md:gap-4">
              <nav
                aria-label="Main"
                className="hidden items-center gap-4 md:flex"
              >
                {navLinks.map((link) => {
                  const isActive =
                    link.href === pathname ||
                    (link.href.startsWith("/#") && pathname === "/")
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      aria-current={link.href === pathname ? "page" : undefined}
                      className={cn(
                        "focus-visible:ring-ring/50 rounded-sm text-sm font-light underline-offset-[5px] outline-none hover:underline focus-visible:ring-[3px]",
                        isActive && link.href === pathname && "underline"
                      )}
                    >
                      {link.name}
                    </Link>
                  )
                })}
                <CommandTrigger onClick={() => setOpen(true)} />
              </nav>

              <span
                className="bg-border hidden h-4 w-px md:block"
                aria-hidden
              />
              <ThemeToggle />

              <div className="border-border border-l pl-1 md:hidden">
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 rounded-full"
                      aria-label="Open menu"
                    >
                      <Menu className="size-[18px]" aria-hidden />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" sideOffset={8} className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/" className="w-full cursor-pointer">
                        Home
                      </Link>
                    </DropdownMenuItem>
                    {navLinks.map((link) => (
                      <DropdownMenuItem key={link.name} asChild>
                        <Link href={link.href} className="w-full cursor-pointer">
                          {link.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <CommandFloatingButton onClick={() => setOpen(true)} />
      <CommandMenu open={open} onOpenChange={setOpen} />
    </>
  )
}

export default Navbar
