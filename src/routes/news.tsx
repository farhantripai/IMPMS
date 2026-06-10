import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import newsImg from "@/assets/news.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Media — Muslim Scientists in the News | IMPMS" },
      {
        name: "description",
        content:
          "Stay informed with IMPMS news, media coverage, and stories of Muslim scientists making headlines in research and innovation today.",
      },
      { property: "og:title", content: "News & Media — Muslim Scientists in the News" },
      { property: "og:description", content: "Coverage and stories of scientific achievement, past and present." },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

const stories = [
  { tag: "In the Spotlight", title: "Muslim Scientists Making Headlines Today", text: "Contemporary researchers continue a long tradition of discovery across medicine, physics, and engineering." },
  { tag: "Institute News", title: "IMPMS Expands Youth Mentorship Reach", text: "New cohorts join our DiscoverSTEM programs, growing our community of young innovators." },
  { tag: "Heritage", title: "Rediscovering Lost Manuscripts of Science", text: "How historians are recovering and translating works that shaped global knowledge." },
  { tag: "Community", title: "Building Bridges Through Shared Discovery", text: "Outreach efforts that bring people of all faiths together around a common scientific heritage." },
];

function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Media"
        title="Stories of discovery, past and present"
        description="From historic breakthroughs to today's Muslim scientists in the news, explore the people and ideas advancing knowledge."
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
        <div className="grid gap-6 md:grid-cols-2">
          {stories.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-gold/50 hover:shadow-lg">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                <Newspaper className="h-4 w-4" /> {s.tag}
              </p>
              <h2 className="mt-3 text-xl font-semibold">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                Read more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Want the latest delivered to your inbox? Subscribe to our newsletter on the{" "}
          <span className="font-medium text-foreground">Resources</span> page.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
