import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Badge } from "@/components/ui/badge";
import eventsImg from "@/assets/events.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Conferences & Lectures | IMPMS" },
      {
        name: "description",
        content:
          "Explore upcoming and past IMPMS events: national and international conferences, lectures, and community programs celebrating scientific heritage.",
      },
      { property: "og:title", content: "Events — Conferences & Lectures" },
      { property: "og:description", content: "Upcoming and past IMPMS conferences and programs." },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

const upcoming = [
  { title: "Lecture by Dr. Tauseef", date: "Coming Soon", location: "Houston, Texas", text: "A distinguished lecture by Dr. Tauseef exploring the enduring legacy of medieval and post-medieval scientific thought." },
  { title: "Mushaira: Celebrating the Poetry of Allama Iqbal", date: "January 2026", location: "Houston, Texas", text: "An evening of poetry honoring the philosophy and verse of Allama Iqbal, bringing together poets, scholars, and the community." },
];

const past = [
  { title: "Annual Heritage of Science Conference", date: "2025" },
  { title: "Youth Innovation Showcase", date: "2025" },
  { title: "International Symposium on Medieval Science", date: "2023" },
  { title: "Community Lecture: Optics & Ibn al-Haytham", date: "2022" },
  { title: "STEM Mentorship Workshop Series", date: "2021" },
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Where history meets discovery"
        description="IMPMS hosts and presents at conferences, lectures, and workshops throughout the year — connecting scholars, students, and the community."
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
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {upcoming.map((e) => (
            <article key={e.title} className="rounded-2xl border border-border bg-card p-7">
              <Badge className="bg-accent text-accent-foreground hover:bg-accent">Upcoming</Badge>
              <h3 className="mt-4 text-xl font-semibold">{e.title}</h3>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-gold" />{e.date}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-gold" />{e.location}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-page py-16">
          <h2 className="text-2xl font-bold">Past Events</h2>
          <ul className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
            {past.map((e) => (
              <li key={e.title} className="flex items-center justify-between gap-4 px-6 py-5">
                <span className="font-medium text-foreground">{e.title}</span>
                <span className="shrink-0 text-sm text-muted-foreground">{e.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
