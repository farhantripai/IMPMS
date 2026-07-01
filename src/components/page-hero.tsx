interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div className="pattern-bg absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="container-page relative flex h-[16rem] flex-col justify-center md:h-[18rem]">
        <p className="mb-3 min-h-[1.25rem] text-sm font-semibold uppercase tracking-[0.18em] text-gold">
          {eyebrow ?? ""}
        </p>
        <h1 className="max-w-3xl text-balance text-3xl font-bold leading-tight line-clamp-2 md:text-4xl">
          {title}
        </h1>
        <p className="mt-4 min-h-[4.5rem] max-w-2xl line-clamp-3 text-base leading-relaxed text-primary-foreground/80">
          {description ?? ""}
        </p>
      </div>
    </section>
  );
}
