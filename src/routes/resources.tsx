import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FileText, Mail, Download } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Publications & Newsletter | IMPMS" },
      {
        name: "description",
        content:
          "Access IMPMS publications, research, and newsletters exploring the scientific and cultural heritage of the Islamic world. Subscribe to stay updated.",
      },
      { property: "og:title", content: "Resources — Publications & Newsletter" },
      { property: "og:description", content: "Publications, research, and newsletter from IMPMS." },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

const publications = [
  { title: "Contributions of Muslim Scholars to Modern Science", type: "Research Paper" },
  { title: "IMPMS Annual Newsletter", type: "Newsletter" },
  { title: "Conference Proceedings: Medieval Science", type: "Proceedings" },
  { title: "Educator's Guide to STEM Heritage", type: "Guide" },
];

function ResourcesPage() {
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you for subscribing to the IMPMS newsletter!");
    setEmail("");
  };

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Publications, research, and our newsletter"
        description="Explore the work that documents and shares the heritage of medieval and post-medieval science."
      />

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h2 className="text-2xl font-bold">Publications</h2>
          <ul className="mt-8 space-y-4">
            {publications.map((p) => (
              <li key={p.title} className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{p.title}</p>
                    <p className="text-sm text-muted-foreground">{p.type}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" aria-label={`Download ${p.title}`}>
                  <Download className="h-5 w-5" />
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <aside>
          <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-gold-foreground">
              <Mail className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-xl font-semibold">Subscribe to our newsletter</h2>
            <p className="mt-2 text-sm text-primary-foreground/75">
              Get updates on events, publications, and the latest in scientific heritage.
            </p>
            <form onSubmit={subscribe} className="mt-6 space-y-3">
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button type="submit" className="w-full bg-gold text-gold-foreground hover:bg-gold/90">
                Subscribe
              </Button>
            </form>
          </div>
        </aside>
      </section>

      <CtaBand />
    </>
  );
}
