import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Heart, Mail } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui/sheet";
import { SocialLinks } from "./social-links";

export const navLinks = [
  { to: "/about", label: "About" },
  { to: "/board-of-directors", label: "Board of Directors" },
  { to: "/programs", label: "Programs" },
  { to: "/scientists", label: "Scholars & Science" },
  { to: "/events", label: "Events" },
  { to: "/news", label: "News & Media" },
  { to: "/resources", label: "Resources" },
  { to: "/partnerships", label: "Partnerships" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden border-b border-border/40 bg-primary text-primary-foreground sm:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <a href="mailto:info@impmstx.org" className="flex items-center gap-1.5 transition-colors hover:text-gold">
              <Mail className="h-3.5 w-3.5" /> info@impmstx.org
            </a>
          </div>
          <SocialLinks variant="header" />
        </div>
      </div>

      {/* Main nav */}
      <header className="border-b border-border/70 bg-background/85 backdrop-blur-md">
        <div className="container-page flex h-14 items-center justify-between py-2">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                activeProps={{ className: "text-foreground bg-accent" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden md:inline-flex">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
            <Button asChild className="hidden sm:inline-flex bg-gold text-gold-foreground hover:bg-gold/90">
              <Link to="/donate">
                <Heart className="h-4 w-4" /> Donate
              </Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <div className="mt-8 flex flex-col gap-1">
                  {[...navLinks, { to: "/get-involved", label: "Get Involved" }, { to: "/contact", label: "Contact" }].map((l) => (
                    <SheetClose asChild key={l.to}>
                      <Link
                        to={l.to}
                        className="rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-accent"
                        activeProps={{ className: "text-foreground bg-accent" }}
                      >
                        {l.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button asChild className="mt-3 bg-gold text-gold-foreground hover:bg-gold/90">
                      <Link to="/donate">Donate</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
