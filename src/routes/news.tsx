import { createFileRoute } from "@tanstack/react-router";
import { Newspaper } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { newsStories } from "@/data/news";
import newsImg from "@/assets/news.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Media — IMPMS News | IMPMS" },
      {
        name: "description",
        content:
          "Stay informed with IMPMS news, annual events, research milestones, and stories from the Institute's programs and community.",
      },
      { property: "og:title", content: "News & Media — IMPMS News" },
      { property: "og:description", content: "Latest news and updates from the Institute." },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Media"
        title="IMPMS News"
        description="Updates on annual events, research milestones, and the Institute's ongoing work in education, scholarship, and community engagement."
      />

      <section className="container-page py-16">
        <figure className="mb-12 overflow-hidden rounded-2xl border border-border shadow-xl">
          <img
            src={newsImg}
            alt="Newspapers, a tablet, microphone and reading glasses representing news and media"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </figure>

        <div className="space-y-6">
          {newsStories.map((story) => (
            <article key={story.title} className="rounded-2xl border border-border bg-card p-7">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                <Newspaper className="h-4 w-4" /> IMPMS News
              </p>
              <h2 className="mt-3 text-xl font-semibold">{story.title}</h2>
              {story.date && (
                <p className="mt-1 text-sm text-muted-foreground">{story.date}</p>
              )}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{story.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-page grid gap-8 py-16 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">In the News</h2>
            <p className="mt-3 text-sm text-muted-foreground">No content available as of now.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">Press Releases</h2>
            <p className="mt-3 text-sm text-muted-foreground">No content available as of now.</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
