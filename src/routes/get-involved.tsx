import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Users, Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import communityImg from "@/assets/community.jpg";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Membership & Volunteering | IMPMS" },
      {
        name: "description",
        content:
          "Join IMPMS as a member or volunteer. Support our mission to share scientific heritage and mentor the innovators of tomorrow.",
      },
      { property: "og:title", content: "Get Involved — Membership & Volunteering" },
      { property: "og:description", content: "Become a member or volunteer with IMPMS." },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolvedPage,
});

const benefits = [
  "Invitations to conferences and lectures",
  "Our newsletter and exclusive publications",
  "Opportunities to mentor and volunteer",
  "A community advancing shared discovery",
];

function GetInvolvedPage() {
  const [form, setForm] = useState({ name: "", email: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    toast.success("Thank you! We'll be in touch about your membership.");
    setForm({ name: "", email: "" });
  };

  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Become part of the movement"
        description="Members and volunteers power our mission. Join a community committed to knowledge, understanding, and the next generation of innovators."
      />

      <section className="container-page py-16">
        <figure className="mb-12 overflow-hidden rounded-2xl border border-border shadow-xl">
          <img
            src={communityImg}
            alt="A diverse community of IMPMS volunteers and students smiling together"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[21/9] w-full object-cover"
          />
        </figure>
        <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <Users className="h-6 w-6" />
          </span>
          <h2 className="mt-5 text-2xl font-bold">Why join IMPMS?</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            IMPMS knows that sometimes all it takes to change the world is a little support. As a
            member, you help fund conferences, publications, and STEM mentorship.
          </p>
          <ul className="mt-6 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-muted-foreground">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="text-xl font-semibold">Membership form</h2>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
            </div>
            <Button type="submit" className="w-full bg-gold text-gold-foreground hover:bg-gold/90">
              Join IMPMS
            </Button>
          </form>
        </div>
        </div>
      </section>
    </>
  );
}
