import Image from "next/image";

type HeroHeadingProps = {
  name: string;
  subtitle?: string;
  avatarSrc?: string;
};

export function HeroHeading({
  name,
  subtitle = "Full Stack Developer from India",
  avatarSrc = "/developer-avatar.png",
}: HeroHeadingProps) {
  return (
    <header className="w-full">
      <p className="text-xs text-muted-foreground mb-2">
        {"Hello"}
        <span aria-hidden></span>
        {", I'm"}
      </p>
      <div className="flex items-center gap-3">
        <Image
          src={avatarSrc || "/placeholder.svg"}
          alt="Profile avatar"
          width={48}
          height={48}
          className="rounded-full ring-1 ring-black/10 dark:ring-white/10"
        />
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
          {name}
        </h1>
      </div>
      {subtitle ? (
        <p className="mt-3 text-sm leading-6 text-muted-foreground max-w-prose">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
