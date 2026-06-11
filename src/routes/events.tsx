import { createFileRoute } from "@tanstack/react-router";
import { Calendar } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Badge } from "@/components/ui/badge";
import { eventsIntro, pastEvents, upcomingEvents } from "@/data/events";
import eventsImg from "@/assets/events.jpg";

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
        <figure className="mb-12 overflow-hidden rounded-2xl border border-border shadow-xl">
          <img
            src={eventsImg}
            alt="Audience attending a professional IMPMS conference in a modern auditorium"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </figure>

        <h2 className="text-2xl font-bold">Upcoming Soon</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {upcomingEvents.map((e) => (
            <article key={e.title} className="rounded-2xl border border-border bg-card p-7">
              <Badge className="bg-accent text-accent-foreground hover:bg-accent">{e.status}</Badge>
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
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-page py-16">
          <h2 className="text-2xl font-bold">Key Events Through the Years</h2>
          <ul className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
            {pastEvents.map((e) => (
              <li key={`${e.year}-${e.title}`} className="flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <span className="font-medium text-foreground">{e.title}</span>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-gold" />
                  {e.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
