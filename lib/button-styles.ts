/**
 * The contact button: the skill chip's geometry with the ground
 * inverted, so it reads as the page's one solid control.
 *
 * `bg-foreground` is near-black in the light theme and near-white in the
 * dark one, and `text-background` is always its opposite, so the pair
 * flips on its own with no `dark:` overrides.
 *
 * Shared by the hero's magnetic buttons and the static Connect ones —
 * the two must not drift, and only the movement differs between them.
 */
export const contactButtonClass =
  "focus-visible:ring-ring/50 bg-foreground text-background inline-flex items-center justify-center gap-[5px] overflow-hidden rounded-md border border-transparent px-2 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 focus-visible:ring-[3px]"
