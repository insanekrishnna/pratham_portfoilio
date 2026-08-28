import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { HatchRule } from "@/components/layout/rules"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main>
      <HatchRule />
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-24 text-center">
        <p className="font-mono text-sm text-muted-foreground">404</p>
        <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          This page doesn&apos;t exist
        </h1>
        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
          The link may be out of date. Everything lives on the home page - start
          there, or search with ⌘K.
        </p>
        <Button asChild className="mt-2">
          <Link href="/">
            <ArrowLeft aria-hidden />
            Back home
          </Link>
        </Button>
      </div>
      <HatchRule />
    </main>
  )
}
