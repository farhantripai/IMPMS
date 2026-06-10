import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Support IMPMS" },
      {
        name: "description",
        content:
          "Your tax-deductible donation to IMPMS funds conferences, publications, and STEM mentorship that share scientific heritage with the world.",
      },
      { property: "og:title", content: "Donate — Support IMPMS" },
      { property: "og:description", content: "Make a tax-deductible gift to support our mission." },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: DonatePage,
});

const amounts = ["$25", "$50", "$100", "$250"];
const impact = [
  "Fund conference presentations worldwide",
  "Publish research and newsletters",
  "Mentor students through STEM programs",
];

function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Support Our Mission"
        title="Your gift changes the story"
        description="IMPMS is a registered 501(c)(3) nonprofit. Every contribution is tax-deductible and directly supports our programs."
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-gold-foreground">
            <Heart className="h-6 w-6" />
          </span>
          <h2 className="mt-5 text-2xl font-bold">Make a donation</h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {amounts.map((a) => (
              <button
                key={a}
                type="button"
                className="rounded-lg border border-border bg-background py-4 text-lg font-semibold transition-colors hover:border-gold hover:bg-accent"
              >
                {a}
              </button>
            ))}
          </div>
          <Button className="mt-6 w-full bg-gold text-gold-foreground hover:bg-gold/90" size="lg">
            Donate Now
          </Button>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Secure giving. IMPMS is a tax-exempt 501(c)(3) organization.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Where your gift goes</h2>
          <ul className="mt-6 space-y-3">
            {impact.map((i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {i}
              </li>
            ))}
          </ul>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Prefer to give your time instead? Explore membership and volunteering on our{" "}
            <Link to="/get-involved" className="font-medium text-foreground underline underline-offset-4">
              Get Involved
            </Link>{" "}
            page.
          </p>
        </div>
      </section>
    </>
  );
}
