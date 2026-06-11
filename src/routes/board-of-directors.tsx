import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { boardMembers, founders, pastPresidents, type BoardMember } from "@/data/board-of-directors";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/board-of-directors")({
  head: () => ({
    meta: [
      { title: "Board of Directors — IMPMS Leadership" },
      {
        name: "description",
        content:
          "Meet the IMPMS Board of Directors — leaders in medicine, science, diplomacy, engineering, law, faith, and the arts united in the mission of knowledge in the cause of understanding.",
      },
      { property: "og:title", content: "Board of Directors — IMPMS Leadership" },
      {
        property: "og:description",
        content:
          "The leaders who guide IMPMS in advancing mutual understanding through the scientific and cultural heritage of the Islamic world.",
      },
    ],
    links: [{ rel: "canonical", href: "/board-of-directors" }],
  }),
  component: BoardOfDirectorsPage,
});

function BioText({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("*") && part.endsWith("*") ? (
          <em key={i}>{part.slice(1, -1)}</em>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function MemberAvatar({ member, size = "md" }: { member: BoardMember; size?: "md" | "lg" }) {
  const sizeClass = size === "lg" ? "h-20 w-20 text-xl" : "h-16 w-16 text-base";

  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className={cn(sizeClass, "shrink-0 rounded-full border-2 border-border object-cover object-top")}
        loading="lazy"
      />
    );
  }

  return (
    <div
      className={cn(
        sizeClass,
        "flex shrink-0 items-center justify-center rounded-full border-2 border-primary/20 bg-primary font-serif font-bold text-primary-foreground",
      )}
      aria-hidden="true"
    >
      {member.initials}
    </div>
  );
}

function RoleTag({
  role,
  highlight,
  memorial,
}: {
  role: string;
  highlight?: boolean;
  memorial?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-block rounded-md border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em]",
        memorial
          ? "border-border bg-muted text-muted-foreground"
          : highlight
            ? "border-gold/30 bg-gold/10 text-gold-foreground"
            : "border-border bg-secondary text-muted-foreground",
      )}
    >
      {role}
    </span>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{label}</p>
      <h2 className="mt-2 text-3xl font-bold">{title}</h2>
    </div>
  );
}

function FounderCard({ member }: { member: (typeof founders)[number] }) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md",
        member.inMemoriam && "opacity-95",
      )}
    >
      <div className="grid md:grid-cols-[240px_1fr]">
        {member.photo && (
          <div className="bg-secondary">
            <img
              src={member.photo}
              alt={member.name}
              className="h-full min-h-56 w-full object-cover object-top md:min-h-full"
              loading="lazy"
            />
          </div>
        )}
        <div className="flex flex-col p-7 md:p-8">
          <RoleTag role={member.role} highlight={member.highlightRole} memorial={member.inMemoriam} />
          <h3 className="mt-3 text-2xl font-bold">{member.name}</h3>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {member.bio.map((paragraph, i) => (
              <p key={i}>
                <BioText text={paragraph} />
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function BoardCard({ member }: { member: BoardMember }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center gap-4 border-b border-border bg-secondary/60 p-5">
        <MemberAvatar member={member} />
        <div className="min-w-0">
          <h3 className="font-semibold leading-snug">{member.name}</h3>
          <p
            className={cn(
              "mt-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em]",
              member.highlightRole ? "text-gold" : "text-muted-foreground",
            )}
          >
            {member.role}
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        {member.forthcoming ? (
          <p className="text-sm italic text-muted-foreground">Biography forthcoming.</p>
        ) : (
          <div className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
            {member.bio.map((paragraph, i) => (
              <p key={i}>
                <BioText text={paragraph} />
              </p>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function PastPresidentCard({ member }: { member: BoardMember }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <MemberAvatar member={member} size="lg" />
        <div>
          <RoleTag role={member.role} highlight={member.highlightRole} />
          <h3 className="mt-2 text-xl font-bold">{member.name}</h3>
        </div>
      </div>
      <div className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
        {member.bio.map((paragraph, i) => (
          <p key={i}>
            <BioText text={paragraph} />
          </p>
        ))}
      </div>
    </article>
  );
}

function BoardOfDirectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Board of Directors"
        description="The leaders profiled here bring together medicine, science, diplomacy, engineering, the academy, law, faith, the arts, and global enterprise — offered in service of a single mission: knowledge in the cause of understanding."
      />

      <section className="container-page py-16">
        <SectionHeading label="Founders" title="President Emeriti" />
        <div className="mt-10 space-y-6">
          {founders.map((member) => (
            <FounderCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-page py-16">
          <SectionHeading label="Governance" title="Board of Directors" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {boardMembers.map((member) => (
              <BoardCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading label="Legacy" title="Past Presidents" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {pastPresidents.map((member) => (
            <PastPresidentCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
