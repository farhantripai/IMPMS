import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function CtaBand() {
  return (
    <section className="container-page py-20">
      <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16">
        <div className="pattern-bg absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">
            Help us bridge cultures through knowledge
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Your support funds conferences, publications, and STEM mentorship that bring
            history's discoveries to a new generation.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90">
              <Link to="/donate">Make a Donation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/get-involved">
                Become a Member <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
