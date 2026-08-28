import { HatchRule } from "@/components/layout/rules"
import { DotField } from "@/components/layout/dot-field"
import { footer } from "@/lib/content/site"

export function Footer() {
  return (
    <footer>
      <HatchRule />
      <div className="flex flex-col items-center justify-center py-6">
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
      <DotField className="h-28 min-h-20 sm:h-32" />
    </footer>
  )
}

export default Footer
