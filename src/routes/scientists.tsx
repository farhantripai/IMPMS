import { createFileRoute } from "@tanstack/react-router";
import {
  Cog,
  Globe,
  HeartPulse,
  Lightbulb,
  Sigma,
  Telescope,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  featuredScholarFieldOrder,
  heritageIntro,
  scholarFieldSlug,
  scholarFields,
  scholarsNote,
} from "@/data/scholars";
import arabicCalligraphyMagnifier from "@/assets/scholars/arabic-calligraphy-magnifier.png";
import openQuranRehal from "@/assets/scholars/open-quran-rehal.png";
import quranOnStand from "@/assets/scholars/quran-on-stand.png";
import quranSunlight from "@/assets/scholars/quran-sunlight.png";

const scholarSlides = [
  {
    src: quranOnStand,
    alt: "An open book with Arabic calligraphy resting on a red velvet stand",
  },
  {
    src: openQuranRehal,
    alt: "An open Quran on a wooden rehal with illuminated borders",
  },
  {
    src: arabicCalligraphyMagnifier,
    alt: "Arabic calligraphy viewed through a magnifying glass",
  },
  {
    src: quranSunlight,
    alt: "An open book with Arabic script lit by warm sunlight",
  },
] as const;

const scholarFieldIcons: Record<(typeof featuredScholarFieldOrder)[number], LucideIcon> = {
  "Astronomy and Observational Science": Telescope,
  "Mathematics and Measurement": Sigma,
  "Medicine, Surgery, and Pharmacology": HeartPulse,
  "Philosophy, Logic, and Intellectual Tradition": Lightbulb,
  "Engineering, Mechanics, and Invention": Cog,
  "Geography, Cartography, and Earth Sciences": Globe,
};

function SectionHeading({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}

export const Route = createFileRoute("/scientists")({
  head: () => ({
    meta: [
      { title: "Scholars & Science — Pioneers of the Islamic Golden Age | IMPMS" },
      {
        name: "description",
        content:
          "Explore the medieval Muslim scholars who advanced astronomy, medicine, mathematics, philosophy, engineering, and geography — and shaped global intellectual history.",
      },
      { property: "og:title", content: "Scholars & Science — Pioneers of the Islamic Golden Age" },
      { property: "og:description", content: "Discover the scientists who illuminated a golden age of discovery." },
    ],
    links: [{ rel: "canonical", href: "/scientists" }],
  }),
  component: ScientistsPage,
});

function ScientistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Heritage"
        title="Centuries of achievement in science and thought"
        description="This heritage reflects centuries of achievement in astronomy, mathematics, medicine, philosophy, engineering, geography, and other fields that helped shape global intellectual history."
      />

      <section className="container-page py-16">
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-border shadow-xl">
          <Carousel opts={{ loop: true }}>
            <CarouselContent className="-ml-0">
              {scholarSlides.map((slide) => (
                <CarouselItem key={slide.alt} className="pl-0">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    width={1280}
                    height={360}
                    loading="lazy"
                    className="aspect-[32/9] w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 border-border/50 bg-background/85 shadow-md hover:bg-background" />
            <CarouselNext className="right-3 top-1/2 -translate-y-1/2 border-border/50 bg-background/85 shadow-md hover:bg-background" />
          </Carousel>
        </div>

        <p className="mx-auto max-w-3xl text-center leading-relaxed text-muted-foreground">{heritageIntro}</p>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          {scholarsNote}
        </p>

        <nav
          className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6"
          aria-label="Scholar categories"
        >
          {featuredScholarFieldOrder.map((field) => {
            const FieldIcon = scholarFieldIcons[field];

            return (
              <a
                key={field}
                href={`#${scholarFieldSlug(field)}`}
                className="flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-2 py-2.5 text-center text-xs font-medium leading-snug text-foreground transition-colors hover:border-gold/50 hover:bg-gold/10 sm:px-3"
              >
                <FieldIcon className="h-4 w-4 shrink-0 text-gold" />
                <span>{field}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-16 space-y-16">
          {scholarFields.map((field) => (
            <div key={field.field} id={scholarFieldSlug(field.field)} className="scroll-mt-28">
              <SectionHeading
                icon={scholarFieldIcons[field.field as (typeof featuredScholarFieldOrder)[number]] ?? Telescope}
                title={field.field}
              />
              <ul className="mt-6 space-y-4">
                {field.scholars.map((scholar) => (
                  <li
                    key={scholar.name}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <p className="font-semibold text-foreground">
                      {scholar.name}
                      {scholar.period && (
                        <span className="ml-2 font-normal text-muted-foreground">({scholar.period})</span>
                      )}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{scholar.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          This list is intended as a broad, reader-friendly guide rather than a strict or exhaustive scholarly catalog.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
