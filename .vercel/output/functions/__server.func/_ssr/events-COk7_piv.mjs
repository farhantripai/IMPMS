import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./page-hero-BiVW9MnX.mjs";
import { C as CtaBand } from "./cta-band-DQRth8bz.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as cn } from "./router-Daon6Znc.mjs";
import "../_libs/sonner.mjs";
import { g as Calendar, b as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const eventsImg = "/assets/events-BWFHPUQP.jpg";
const upcoming = [{
  title: "Lecture by Dr. Tauseef",
  date: "Coming Soon",
  location: "Houston, Texas",
  text: "A distinguished lecture by Dr. Tauseef exploring the enduring legacy of medieval and post-medieval scientific thought."
}, {
  title: "Mushaira: Celebrating the Poetry of Allama Iqbal",
  date: "January 2026",
  location: "Houston, Texas",
  text: "An evening of poetry honoring the philosophy and verse of Allama Iqbal, bringing together poets, scholars, and the community."
}];
const past = [{
  title: "Annual Heritage of Science Conference",
  date: "2025"
}, {
  title: "Youth Innovation Showcase",
  date: "2025"
}, {
  title: "International Symposium on Medieval Science",
  date: "2023"
}, {
  title: "Community Lecture: Optics & Ibn al-Haytham",
  date: "2022"
}, {
  title: "STEM Mentorship Workshop Series",
  date: "2021"
}];
function EventsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Events", title: "Where history meets discovery", description: "IMPMS hosts and presents at conferences, lectures, and workshops throughout the year — connecting scholars, students, and the community." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "mb-12 overflow-hidden rounded-2xl border border-border shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: eventsImg, alt: "Audience attending a professional IMPMS conference in a modern auditorium", width: 1280, height: 960, loading: "lazy", className: "aspect-[16/9] w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Upcoming Events" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-6 md:grid-cols-2", children: upcoming.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-border bg-card p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent text-accent-foreground hover:bg-accent", children: "Upcoming" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-xl font-semibold", children: e.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-gold" }),
            e.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-gold" }),
            e.location
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: e.text })
      ] }, e.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Past Events" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 divide-y divide-border rounded-2xl border border-border bg-card", children: past.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between gap-4 px-6 py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: e.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: e.date })
      ] }, e.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBand, {})
  ] });
}
export {
  EventsPage as component
};
