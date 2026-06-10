import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import manuscriptImg from "@/assets/manuscript.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About IMPMS — Our Mission & History" },
      {
        name: "description",
        content:
          "Founded in 2001, IMPMS is a 501(c)(3) nonprofit promoting mutual understanding through the scientific and cultural heritage of the Islamic world.",
      },
      { property: "og:title", content: "About IMPMS — Our Mission & History" },
      { property: "og:description", content: "Our mission, vision, and the story behind the Institute." },
      { property: "og:image", content: manuscriptImg },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2001", text: "IMPMS is established to share the scientific heritage of the Islamic world." },
  { year: "2009", text: "The Institute is formally incorporated as a nonprofit organization." },
  { year: "2012", text: "IMPMS obtains 501(c)(3) federal tax-exempt status." },
  { year: "2018", text: "Collaboration with DiscoverSTEM launches youth innovation programs." },
];

const values = [
  { title: "Mutual Understanding", text: "We build bridges of respect between people of all faiths and cultures." },
  { title: "Scholarly Integrity", text: "We ground our work in rigorous history and verifiable contributions." },
  { title: "Inspiring Youth", text: "We mentor students to become the problem-solvers and innovators of tomorrow." },
  { title: "Bold Action", text: "We believe actions speak louder than words in serving our community." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Institute"
        title="A nonprofit dedicated to shared human progress"
        description="The Institute of Medieval and Post-Medieval Studies (IMPMS) is driven by progressive ideas, bold actions, and a strong foundation of community support."
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6 leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            <p className="mt-3">
              IMPMS exists to generate a climate of mutual understanding and respect between
              Muslims and people of other faiths and cultures. We work to correct the concept of
              the "Dark Ages" — a period in which Muslim scholars and scientists enlightened the
              world with original scientific contributions — and to replace narratives of conflict
              with stories of shared discovery.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">How We Work</h2>
            <p className="mt-3">
              We reach people of all faiths with information about the significant contributions
              and contributors of the Islamic world across many fields of science and the arts.
              This is accomplished by presenting at national and international conferences,
              circulating newsletters, publishing research, and maintaining accessible online
              resources.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Why It Matters</h2>
            <p className="mt-3">
              Meeting the challenges of today requires problem-solvers who bring unique, creative,
              and analytical perspectives — and who are willing to take risks. IMPMS emerged from a
              desire to inspire and support the community, knowing that sometimes all it takes to
              change the world is a little support.
            </p>
          </div>
        </div>

        <aside>
          <div className="rounded-2xl border border-border bg-card p-7">
            <h2 className="text-lg font-semibold">Our Journey</h2>
            <ol className="mt-5 space-y-5">
              {timeline.map((t) => (
                <li key={t.year} className="relative border-l-2 border-gold/40 pl-5">
                  <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-gold" />
                  <p className="font-serif text-xl font-bold text-foreground">{t.year}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </section>

      <section className="bg-secondary">
        <div className="container-page py-16">
          <h2 className="text-center text-3xl font-bold">What We Value</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
