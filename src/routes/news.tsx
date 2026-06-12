import { createFileRoute } from "@tanstack/react-router";
import { FileText, MonitorPlay, Newspaper, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { newsStories } from "@/data/news";
import newsImg from "@/assets/news.jpg";

const newsSections = [
  { id: "press-releases-and-updates", label: "Press Releases and Updates", icon: FileText },
  { id: "in-the-news", label: "In the News", icon: Newspaper },
  { id: "digital-media", label: "Digital Media", icon: MonitorPlay },
] as const;

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

        <div className="mb-16 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav
            className="mx-auto flex w-max flex-nowrap justify-center gap-3"
            aria-label="News and media sections"
          >
            {newsSections.map((section) => (
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

        <div className="space-y-20">
          <section id="press-releases-and-updates" className="scroll-mt-28">
            <SectionHeading icon={FileText} title="Press Releases and Updates" />
            <div className="mt-8 space-y-6">
              {newsStories.map((story) => (
                <article key={story.title} className="rounded-2xl border border-border bg-card p-7">
                  <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    <Newspaper className="h-4 w-4" /> IMPMS News
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{story.title}</h3>
                  {story.date && (
                    <p className="mt-1 text-sm text-muted-foreground">{story.date}</p>
                  )}
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{story.summary}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="in-the-news" className="scroll-mt-28">
            <SectionHeading icon={Newspaper} title="In the News" />
            <div className="mt-8 rounded-2xl border border-border bg-card p-7">
              <p className="text-sm text-muted-foreground">No content available as of now.</p>
            </div>
          </section>

          <section id="digital-media" className="scroll-mt-28">
            <SectionHeading icon={MonitorPlay} title="Digital Media" />
            <div className="mt-8 rounded-2xl border border-border bg-card p-7">
              <p className="text-sm text-muted-foreground">No content available as of now.</p>
            </div>
          </section>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
