import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  compact?: boolean;
}

export function PageHero({ eyebrow, title, description, compact = true }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div className="pattern-bg absolute inset-0 opacity-40" aria-hidden="true" />
      <div className={cn("container-page relative", compact ? "py-10 md:py-12" : "py-16 md:py-20")}>
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
        )}
        <h1
          className={cn(
            "max-w-3xl text-balance font-bold leading-tight",
            compact ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl",
          )}
        >
          {title}
        </h1>
        {description && (
          <p
            className={cn(
              "max-w-2xl leading-relaxed text-primary-foreground/80",
              compact ? "mt-3 text-base" : "mt-5 text-lg",
            )}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
