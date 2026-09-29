import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  GraduationCap,
  Heart,
  LayoutGrid,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import communityImg from "@/assets/community.jpg";
import { pageBannerDimensions, pageBannerImageClass } from "@/lib/page-banner";

const involvementSections = [
  { id: "join-impms", label: "Join IMPMS", icon: LayoutGrid },
  { id: "volunteer-student-ambassador", label: "Become a Volunteer / Student Ambassador", icon: Users },
  { id: "support-impms", label: "Support IMPMS", icon: Heart },
  { id: "fund-our-programs", label: "Fund our Programs", icon: GraduationCap },
] as const;

const volunteerBenefits = [
  "Invitations to conferences, lectures, and public programs",
  "Access to publications and educational resources",
  "Opportunities to support youth innovation and STEM partnerships",
  "A community advancing shared discovery and understanding",
];

const programFundingAreas = [
  "Research Grants for high school students",
  "Student mentorship and academic enrichment",
  "Conferences, lectures, and public programs",
  "Publications and educational resources",
  "Community outreach and cultural understanding initiatives",
];

function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className={`flex gap-3.5 ${subtitle ? "items-start" : "items-center"}`}>
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground ${
          subtitle ? "mt-0.5" : ""
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {subtitle && (
          <p className="mt-1 text-base text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Membership & Volunteering | IMPMS" },
      {
        name: "description",
        content:
          "Join IMPMS as a board member, volunteer, student ambassador, or supporter. Explore shared heritage through programs, events, and publications.",
      },
      { property: "og:title", content: "Get Involved — Membership & Volunteering" },
      { property: "og:description", content: "Become a member and support IMPMS." },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolvedPage,
});

function GetInvolvedPage() {
  const [volunteerForm, setVolunteerForm] = useState({ name: "", email: "", message: "" });

  const submitVolunteer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerForm.name || !volunteerForm.email) return;
    toast.success("Thank you! We'll be in touch about volunteering with IMPMS.");
    setVolunteerForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Help carry this legacy forward"
        description="Whether you are an educator, student, researcher, or community member, IMPMS invites you to explore this shared heritage through its programs, events, and publications."
      />

      <section className="container-page section-y">
        <figure className="mb-12 overflow-hidden rounded-2xl border border-border shadow-xl">
          <img
            src={communityImg}
            alt="A diverse community of IMPMS volunteers and students smiling together"
            width={pageBannerDimensions.width}
            height={pageBannerDimensions.height}
            loading="lazy"
            className={pageBannerImageClass}
          />
        </figure>

        <div className="scroll-nav-pills mb-12 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav
            className="mx-auto flex w-max flex-nowrap justify-center gap-3"
            aria-label="Ways to get involved"
          >
            {involvementSections.map((section) => (
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
          <section id="join-impms" className="scroll-mt-28">
            <div id="board-members" className="scroll-mt-28" />
            <SectionHeading
              icon={LayoutGrid}
              title="Join IMPMS"
              subtitle="Explore the past. Enrich the present."
            />
            <div className="mt-8 rounded-2xl border border-border bg-card p-7 lg:p-8">
              <p className="leading-relaxed text-muted-foreground">
                IMPMS brings people together to explore the ideas, discoveries, and cultural
                exchange that have shaped our world. Through scholarship, education, mentorship, and
                public programs, we make the study of history accessible and relevant to new
                generations, advancing the institute&apos;s mission, vision, and goals.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90">
                  <Link to="/board-of-directors">Meet the Board</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/contact">Express Your Interest</Link>
                </Button>
              </div>
            </div>
          </section>

          <section id="volunteer-student-ambassador" className="scroll-mt-28">
            <SectionHeading icon={Users} title="Become a Volunteer / Student Ambassador" />
            <div className="mt-8 grid gap-12 lg:grid-cols-2">
              <div>
                <p className="leading-relaxed text-muted-foreground">
                  Volunteers and student ambassadors help IMPMS carry its mission into schools,
                  communities, and public programs. Whether you support events, outreach, or
                  mentorship, your time strengthens the institute&apos;s reach and impact.
                </p>
                <ul className="mt-6 space-y-3">
                  {volunteerBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="text-xl font-semibold">Volunteer interest form</h3>
                <form onSubmit={submitVolunteer} className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="volunteer-name">Full name</Label>
                    <Input
                      id="volunteer-name"
                      required
                      value={volunteerForm.name}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volunteer-email">Email</Label>
                    <Input
                      id="volunteer-email"
                      type="email"
                      required
                      value={volunteerForm.email}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volunteer-message">How would you like to help?</Label>
                    <Textarea
                      id="volunteer-message"
                      value={volunteerForm.message}
                      onChange={(e) => setVolunteerForm({ ...volunteerForm, message: e.target.value })}
                      placeholder="Tell us about your interests as a volunteer or student ambassador"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gold text-gold-foreground hover:bg-gold/90">
                    Submit Interest
                  </Button>
                </form>
              </div>
            </div>
          </section>

          <section id="support-impms" className="scroll-mt-28">
            <SectionHeading icon={Heart} title="Support IMPMS" />
            <div className="mt-8 rounded-2xl border border-border bg-card p-7 lg:p-8">
              <p className="leading-relaxed text-muted-foreground">
                IMPMS is a registered 501(c)(3) nonprofit. Philanthropic support helps the
                institute preserve heritage, present public programs, and inspire the next generation
                of innovators and scholars.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Every contribution is tax-deductible and advances education, scholarship, and
                community engagement across North Texas and beyond.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90">
                  <Link to="/donate">Make a Donation</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/partnerships">Explore Partnerships</Link>
                </Button>
              </div>
            </div>
          </section>

          <section id="fund-our-programs" className="scroll-mt-28">
            <SectionHeading icon={GraduationCap} title="Fund our Programs" />
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-7 lg:p-8">
                <p className="leading-relaxed text-muted-foreground">
                  Program funding helps IMPMS advance scholarship, education, mentorship, and public
                  engagement. Support from sponsors and donors strengthens programs that serve
                  students, scholars, educators, and the wider community through research
                  opportunities, conferences, lectures, publications, and cultural understanding
                  initiatives.
                </p>
                <ul className="mt-6 space-y-3">
                  {programFundingAreas.map((area) => (
                    <li key={area} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-center rounded-2xl border border-border bg-card p-7 lg:p-8">
                <p className="leading-relaxed text-muted-foreground">
                  Interested in sponsoring a specific program or event? We welcome conversations
                  with individuals, foundations, and organizations that share our mission.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90">
                    <Link to="/programs">View Programs</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/contact">Discuss Sponsorship</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
