import { cn } from "@/lib/utils"

/**
 * A masked dot grid used as breathing room at the very top and bottom of
 * the page. It holds the vertical rhythm without adding content.
 */
export function DotField({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className="screen-line-bottom relative w-full py-3">
      <div
        className={cn(
          "flex w-full items-center justify-center bg-center bg-[length:10px_10px] px-1.5",
          "bg-[radial-gradient(var(--dot)_1px,transparent_0)]",
          "[--dot:color-mix(in_oklab,var(--color-zinc-400)_60%,transparent)]",
          "dark:[--dot:color-mix(in_oklab,var(--color-zinc-600)_60%,transparent)]",
          "mask-x-from-95% mask-y-from-90%",
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default DotField
