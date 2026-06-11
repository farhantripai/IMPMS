import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { heritageIntro, scholarFields, scholarsNote } from "@/data/scholars";
import scholarsImg from "@/assets/scholars.jpg";

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
        description="This heritage reflects centuries of achievement in astronomy, medicine, mathematics, philosophy, engineering, and other fields that helped shape global intellectual history."
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

        <p className="mx-auto max-w-3xl text-center leading-relaxed text-muted-foreground">{heritageIntro}</p>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          {scholarsNote}
        </p>

        <div className="mt-16 space-y-16">
          {scholarFields.map((field) => (
            <div key={field.field}>
              <h2 className="text-2xl font-bold">{field.field}</h2>
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
