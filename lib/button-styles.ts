/**
 * The contact button: the skill chip's geometry with the ground
 * inverted, so it reads as the page's one solid control.
 *
 * `bg-foreground` is near-black in the light theme and near-white in the
 * dark one, and `text-background` is always its opposite, so the pair
 * flips on its own with no `dark:` overrides.
 *
 * Shared by the hero's magnetic buttons and the static Connect ones -
 * the two must not drift, and only the movement differs between them.
 */
/**
 * The skill badge: the same geometry the other way up - the page's own
 * ground with a hairline border, so it reads as a label rather than a
 * control. Shared with the project cards' Live/Code links so the two
 * cannot drift apart.
 */
export const chipClass =
  "focus-visible:ring-ring/50 bg-background border-border text-foreground inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium whitespace-nowrap outline-none transition-colors select-none hover:border-neutral-400 focus-visible:ring-[3px] dark:hover:border-neutral-600"

export const contactButtonClass =
  "focus-visible:ring-ring/50 bg-foreground text-background inline-flex items-center justify-center gap-[5px] overflow-hidden rounded-md border border-transparent px-2 py-1 text-xs leading-4 font-medium whitespace-nowrap outline-none transition-opacity hover:opacity-90 focus-visible:ring-[3px]"
