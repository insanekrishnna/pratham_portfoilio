import { HatchRule } from "@/components/layout/rules"
import { DotField } from "@/components/layout/dot-field"
import { footer } from "@/lib/content/site"

export function Footer() {
  return (
    <footer>
      <HatchRule />
      <div className="flex flex-col items-center justify-center py-8">
        <p className="text-foreground/70 text-center text-sm">
          {footer.text}{" "}
          <a
            href="https://x.com/insanekrishnaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/90 link-underline font-semibold"
          >
            {footer.developer}
          </a>
          <br />© {new Date().getFullYear()}. {footer.note}
        </p>
      </div>
      <HatchRule />
      <DotField className="h-40 min-h-28 sm:h-48" />
    </footer>
  )
}

export default Footer
