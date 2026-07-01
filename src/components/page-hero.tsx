interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div className="pattern-bg absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-page relative flex min-h-[13rem] flex-col justify-center py-12 md:min-h-[15rem] md:py-14">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight md:text-4xl">{title}</h1>
        <div className="mt-4 min-h-[3.25rem]">
          {description && (
            <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/80">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
