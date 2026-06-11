import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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

function TeamPhoto({ member }: { member: BoardMember }) {
  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={member.name}
        className="h-full w-full object-cover object-top"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary to-primary/80"
      aria-hidden={!member.initials}
    >
      <span className="font-serif text-4xl font-bold text-primary-foreground/90">
        {member.initials}
      </span>
    </div>
  );
}

function FeaturedLeaderPhoto({
  member,
  inMemoriam,
}: {
  member: BoardMember;
  inMemoriam?: boolean;
}) {
  return (
    <div className="featured-leader-photo relative shrink-0 overflow-hidden rounded-2xl bg-secondary mx-auto sm:mx-0">
      <div className="featured-leader-photo-inner overflow-hidden">
        <TeamPhoto member={member} />
      </div>
      {inMemoriam && (
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-0.5 text-[0.65rem] font-medium text-muted-foreground backdrop-blur-sm">
          In Memoriam
        </span>
      )}
    </div>
  );
}

function FeaturedLeaderCard({
  member,
  inMemoriam,
}: {
  member: BoardMember;
  inMemoriam?: boolean;
}) {
  const hasBio = member.bio.length > 0;
  const previewBio = member.bio[0];
  const restBio = member.bio.slice(1);
  const hasMoreBio = restBio.length > 0;

  const headerBlock = (
    <>
      <h3 className="text-lg font-bold leading-snug text-foreground md:text-xl">{member.name}</h3>
      <p
        className={cn(
          "mt-1 text-sm",
          member.highlightRole ? "font-medium text-gold" : "text-muted-foreground",
        )}
      >
        {member.role}
      </p>
    </>
  );

  const staticCard = (
    <article
      className={cn(
        "rounded-[1.75rem] bg-muted p-5 sm:p-6",
        inMemoriam && "opacity-95",
      )}
    >
      <div className="featured-leader-layout flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <FeaturedLeaderPhoto member={member} inMemoriam={inMemoriam} />
        <div className="featured-leader-content">
          {headerBlock}
          {hasBio && (
            <div className="mt-4 border-t border-border/60 pt-4">
              <p className="text-sm font-semibold leading-relaxed text-foreground">
                <BioText text={previewBio} />
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );

  if (!hasMoreBio) {
    return <div className="mx-auto w-full max-w-4xl">{staticCard}</div>;
  }

  return (
    <Collapsible className="featured-leader-card group/leader mx-auto w-full max-w-4xl self-start">
      <article
        className={cn(
          "rounded-[1.75rem] bg-muted p-5 transition-[box-shadow,padding] duration-500 ease-in-out sm:p-6",
          "group-data-[state=open]/leader:shadow-lg",
          inMemoriam && "opacity-95",
        )}
      >
        <div className="featured-leader-layout flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
          <FeaturedLeaderPhoto member={member} inMemoriam={inMemoriam} />

          <div className="featured-leader-content">
            {headerBlock}

            <div className="mt-4 border-t border-border/60 pt-4">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-semibold leading-relaxed text-foreground">
                  <BioText text={previewBio} />
                </p>
                <CollapsibleTrigger asChild>
                  <button
                    type="button"
                    className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border/70 bg-background/80 outline-none transition-colors hover:bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    aria-label={`${member.name} — expand biography`}
                  >
                    <ChevronDown
                      className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-500 ease-in-out group-data-[state=open]/leader:rotate-180"
                      aria-hidden="true"
                    />
                  </button>
                </CollapsibleTrigger>
              </div>

              <CollapsibleContent className="board-collapsible-content">
                <div className="space-y-3 pt-3 text-sm leading-relaxed text-muted-foreground">
                  {restBio.map((paragraph, i) => (
                    <p key={i}>
                      <BioText text={paragraph} />
                    </p>
                  ))}
                </div>
              </CollapsibleContent>
            </div>
          </div>
        </div>
      </article>
    </Collapsible>
  );
}

function TeamProfileCard({
  member,
  inMemoriam,
  size = "default",
}: {
  member: BoardMember;
  inMemoriam?: boolean;
  size?: "default" | "large";
}) {
  const hasBio = !member.forthcoming && member.bio.length > 0;

  const cardClass = cn(
    "group/card mx-auto w-full self-start rounded-[1.75rem] border border-border bg-muted p-4 transition-[box-shadow,max-width] duration-300 hover:shadow-md",
    size === "large" ? "max-w-[300px]" : "max-w-[250px]",
    inMemoriam && "opacity-95",
  );

  const photoBlock = (
    <div className="relative overflow-hidden rounded-2xl bg-secondary">
      <div className={cn("overflow-hidden", size === "large" ? "aspect-[3/4]" : "aspect-[4/5]")}>
        <TeamPhoto member={member} />
      </div>
      {inMemoriam && (
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-0.5 text-[0.65rem] font-medium text-muted-foreground backdrop-blur-sm">
          In Memoriam
        </span>
      )}
    </div>
  );

  const memberInfo = (
    <div className="min-w-0">
      <h3 className="text-sm font-bold leading-snug text-foreground">{member.name}</h3>
      <p
        className={cn(
          "mt-0.5 text-xs leading-snug",
          member.highlightRole ? "font-medium text-gold" : "text-muted-foreground",
        )}
      >
        {member.role}
      </p>
    </div>
  );

  const expandButton = (
    <CollapsibleTrigger asChild>
      <button
        type="button"
        className="mt-0.5 flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border/70 bg-background/80 outline-none transition-colors hover:bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={`${member.name} — expand biography`}
      >
        <ChevronDown
          className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-500 ease-in-out group-data-[state=open]/card:rotate-180"
          aria-hidden="true"
        />
      </button>
    </CollapsibleTrigger>
  );

  if (!hasBio) {
    return (
      <article className={cardClass}>
        {photoBlock}
        <div className="mt-4">{memberInfo}</div>
        {member.forthcoming && (
          <p className="mt-3 text-xs italic text-muted-foreground">Biography forthcoming.</p>
        )}
      </article>
    );
  }

  return (
    <Collapsible className={cardClass}>
      <article>
        {photoBlock}
        <div className="mt-4 flex w-full items-start justify-between gap-2">
          {memberInfo}
          {expandButton}
        </div>

        <CollapsibleContent className="board-collapsible-content">
          <div className="mt-3 space-y-2.5 border-t border-border/60 pt-3 text-xs leading-relaxed text-muted-foreground">
            {member.bio.map((paragraph, i) => (
              <p key={i}>
                <BioText text={paragraph} />
              </p>
            ))}
          </div>
        </CollapsibleContent>
      </article>
    </Collapsible>
  );
}

function TeamSection({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <div className="container-page">
        <h2 className="text-center text-3xl font-bold md:text-4xl">{title}</h2>
        <div className="mt-12 md:mt-14">{children}</div>
      </div>
    </section>
  );
}

function TeamGrid({ children, large }: { children: React.ReactNode; large?: boolean }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-start justify-center gap-5 md:gap-6",
        large && "md:gap-8",
      )}
    >
      {children}
    </div>
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

      <TeamSection title="President Emeriti">
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          {founders.map((member) => (
            <FeaturedLeaderCard
              key={member.name}
              member={member}
              inMemoriam={member.inMemoriam}
            />
          ))}
        </div>
      </TeamSection>

      <TeamSection title="Board of Directors" className="bg-secondary">
        <TeamGrid>
          {boardMembers.map((member) => (
            <TeamProfileCard key={member.name} member={member} />
          ))}
        </TeamGrid>
      </TeamSection>

      <TeamSection title="Past Presidents">
        <TeamGrid large>
          {pastPresidents.map((member) => (
            <TeamProfileCard key={member.name} member={member} size="large" />
          ))}
        </TeamGrid>
      </TeamSection>

      <CtaBand />
    </>
  );
}
