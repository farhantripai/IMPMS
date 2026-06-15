import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen,
  Brain,
  Building2,
  Calendar,
  CalendarClock,
  CalendarDays,
  FlaskConical,
  GraduationCap,
  Handshake,
  Landmark,
  Mic,
  PartyPopper,
  Rocket,
  Telescope,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  eventsIntro,
  pastEvents,
  upcomingEvents,
  type UpcomingEventIcon,
} from "@/data/events";
import aiResilienceChallenge from "@/assets/events/ai-resilience-challenge.png";
import allamaIqbalVision from "@/assets/events/allama-iqbal-vision.png";
import conferenceMeeting from "@/assets/events/conference-meeting.png";
import eventBreakfastSetup from "@/assets/events/event-breakfast-setup.png";
import officeLibraryNight from "@/assets/events/office-library-night.png";

const eventSlideAspect = "aspect-[800/282]";

const eventSections = [
  { id: "upcoming-soon", label: "Coming Soon", icon: CalendarClock },
  { id: "key-events", label: "Key Events Through the Years", icon: Landmark },
] as const;

const upcomingEventIcons: Record<UpcomingEventIcon, LucideIcon> = {
  brain: Brain,
  "book-open": BookOpen,
};

function pastEventIcon(title: string): LucideIcon {
  const normalized = title.toLowerCase();

  if (normalized.includes("gala")) return PartyPopper;
  if (normalized.includes("grant") || normalized.includes("research") || normalized.includes("milestone")) {
    return FlaskConical;
  }
  if (normalized.includes("dedication") || normalized.includes("auditorium")) return Building2;
  if (normalized.includes("course") || normalized.includes("congress") || normalized.includes("medieval studies")) {
    return GraduationCap;
  }
  if (normalized.includes("stem") || normalized.includes("innovator")) return Rocket;
  if (
    normalized.includes("galaxy") ||
    normalized.includes("nasa") ||
    normalized.includes("light") ||
    normalized.includes("faintest")
  ) {
    return Telescope;
  }
  if (
    normalized.includes("rumi") ||
    normalized.includes("sufi") ||
    normalized.includes("philosophy") ||
    normalized.includes("ibn rushd") ||
    normalized.includes("heritage")
  ) {
    return BookOpen;
  }
  if (normalized.includes("peace") || normalized.includes("extremism")) return Handshake;
  if (normalized.includes("panel") || normalized.includes("lecture")) return Mic;

  return CalendarDays;
}

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

const eventSlides = [
  {
    src: aiResilienceChallenge,
    alt: "Healthcare AI Innovation Challenge — AI Resilience, Saturday October 3, 2026 at Hilton Richardson Dallas",
  },
  {
    src: allamaIqbalVision,
    alt: "Special IMPMS Event — Allama Iqbal's Vision for the 21st Century",
  },
  {
    src: officeLibraryNight,
    alt: "A modern office and library space prepared for a professional gathering",
  },
  {
    src: eventBreakfastSetup,
    alt: "Round tables set for a conference breakfast or seminar",
  },
  {
    src: conferenceMeeting,
    alt: "Professionals collaborating around a conference table",
  },
] as const;

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Conferences & Lectures | IMPMS" },
      {
        name: "description",
        content:
          "Explore upcoming and past IMPMS events: conferences, lectures, galas, and community programs celebrating scientific heritage and innovation.",
      },
      { property: "og:title", content: "Events — Conferences & Lectures" },
      { property: "og:description", content: "Upcoming and past IMPMS conferences and programs." },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Where scholarship meets community"
        description={eventsIntro}
      />

      <section className="container-page py-16">
        <div className="relative mx-auto mb-12 max-w-4xl overflow-hidden rounded-2xl border border-border shadow-xl">
          <Carousel opts={{ loop: true }}>
            <CarouselContent className="-ml-0">
              {eventSlides.map((slide) => (
                <CarouselItem key={slide.alt} className="pl-0">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    width={800}
                    height={282}
                    loading="lazy"
                    className={`${eventSlideAspect} w-full object-cover`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 border-border/50 bg-background/85 shadow-md hover:bg-background" />
            <CarouselNext className="right-3 top-1/2 -translate-y-1/2 border-border/50 bg-background/85 shadow-md hover:bg-background" />
          </Carousel>
        </div>

        <div className="mb-12 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav
            className="mx-auto flex w-max flex-nowrap justify-center gap-3"
            aria-label="Event categories"
          >
            {eventSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-gold/50 hover:bg-gold/10"
              >
                <section.icon className="h-4 w-4 text-gold" />
                {section.label}
              </a>
            ))}
          </nav>
        </div>

        <section id="upcoming-soon" className="scroll-mt-28">
          <SectionHeading icon={CalendarClock} title="Coming Soon" />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {upcomingEvents.map((e) => {
            const EventIcon = upcomingEventIcons[e.icon];

            return (
            <article key={e.title} className="rounded-2xl border border-border bg-card p-7">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <EventIcon className="h-6 w-6" />
              </span>
              <Badge className="mt-5 bg-accent text-accent-foreground hover:bg-accent">{e.status}</Badge>
              <h3 className="mt-4 text-xl font-semibold">{e.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              {e.details && (
                <ul className="mt-4 space-y-2">
                  {e.details.map((detail) => (
                    <li key={detail} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
          })}
          </div>
        </section>
      </section>

      <section id="key-events" className="scroll-mt-28 bg-secondary">
        <div className="container-page py-16">
          <SectionHeading icon={Landmark} title="Key Events Through the Years" />
          <ul className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
            {pastEvents.map((e) => {
              const PastIcon = pastEventIcon(e.title);

              return (
              <li key={`${e.year}-${e.title}`} className="flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <span className="flex items-start gap-3 sm:items-center">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/60 text-accent-foreground">
                    <PastIcon className="h-4 w-4" />
                  </span>
                  <span className="font-medium text-foreground">{e.title}</span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1.5 pl-12 text-sm text-muted-foreground sm:pl-0">
                  <Calendar className="h-4 w-4 text-gold" />
                  {e.year}
                </span>
              </li>
            );
            })}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
