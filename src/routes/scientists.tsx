import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import scholarsImg from "@/assets/scholars.jpg";

export const Route = createFileRoute("/scientists")({
  head: () => ({
    meta: [
      { title: "Scholars & Science — Pioneers of the Islamic Golden Age | IMPMS" },
      {
        name: "description",
        content:
          "Meet the medieval Muslim scholars and scientists who advanced medicine, astronomy, optics, algebra, and engineering — and shaped the modern world.",
      },
      { property: "og:title", content: "Scholars & Science — Pioneers of the Islamic Golden Age" },
      { property: "og:description", content: "Discover the scientists who illuminated a golden age of discovery." },
    ],
    links: [{ rel: "canonical", href: "/scientists" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Scholars & Science — Pioneers of the Islamic Golden Age",
          about: "Medieval Muslim scholars and their scientific contributions",
        }),
      },
    ],
  }),
  component: ScientistsPage,
});

const fields = [
  { field: "Medicine", scholar: "Ibn Sina (Avicenna)", text: "His Canon of Medicine remained a standard medical text in Europe for centuries." },
  { field: "Optics", scholar: "Ibn al-Haytham (Alhazen)", text: "Pioneered the scientific method and the modern understanding of how vision works." },
  { field: "Mathematics", scholar: "Al-Khwarizmi", text: "The father of algebra, whose name gives us the word 'algorithm'." },
  { field: "Astronomy", scholar: "Al-Battani", text: "Refined measurements of the solar year that influenced later European astronomers." },
  { field: "Surgery", scholar: "Al-Zahrawi", text: "Authored a foundational surgical encyclopedia and designed enduring instruments." },
  { field: "Engineering", scholar: "Al-Jazari", text: "Documented ingenious mechanical devices and early automata." },
];

function ScientistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Scholars & Science"
        title="The minds that illuminated a golden age"
        description="From medicine to mathematics, scholars of the Islamic world made original discoveries whose influence reaches into every modern laboratory and classroom."
      />

      <section className="container-page py-16">
        <figure className="mb-12 overflow-hidden rounded-2xl border border-border shadow-xl">
          <img
            src={scholarsImg}
            alt="An illuminated medieval Islamic science manuscript with a brass astrolabe and quill"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[16/9] w-full object-cover"
          />
        </figure>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {fields.map((f) => (
            <article key={f.scholar} className="rounded-2xl border border-border bg-card p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{f.field}</p>
              <h2 className="mt-2 text-xl font-semibold">{f.scholar}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-secondary p-8 text-center">
          <p className="mx-auto max-w-2xl text-muted-foreground">
            These pioneers are only the beginning. IMPMS shares their stories at conferences, in
            newsletters, and through publications so that their legacy continues to inspire.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
