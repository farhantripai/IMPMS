interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div className="pattern-bg absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-page relative py-16 md:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">{description}</p>
        )}
      </div>
    </section>
  );
}
