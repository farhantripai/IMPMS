import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./page-hero-BiVW9MnX.mjs";
import { C as CtaBand } from "./cta-band-DQRth8bz.mjs";
import "../_libs/sonner.mjs";
import { N as Newspaper, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
import "./router-Daon6Znc.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
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
const newsImg = "/assets/news-x7VuYCOp.jpg";
const stories = [{
  tag: "In the Spotlight",
  title: "Muslim Scientists Making Headlines Today",
  text: "Contemporary researchers continue a long tradition of discovery across medicine, physics, and engineering."
}, {
  tag: "Institute News",
  title: "IMPMS Expands Youth Mentorship Reach",
  text: "New cohorts join our DiscoverSTEM programs, growing our community of young innovators."
}, {
  tag: "Heritage",
  title: "Rediscovering Lost Manuscripts of Science",
  text: "How historians are recovering and translating works that shaped global knowledge."
}, {
  tag: "Community",
  title: "Building Bridges Through Shared Discovery",
  text: "Outreach efforts that bring people of all faiths together around a common scientific heritage."
}];
function NewsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "News & Media", title: "Stories of discovery, past and present", description: "From historic breakthroughs to today's Muslim scientists in the news, explore the people and ideas advancing knowledge." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "mb-12 overflow-hidden rounded-2xl border border-border shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: newsImg, alt: "Newspapers, a tablet, microphone and reading glasses representing news and media", width: 1280, height: 960, loading: "lazy", className: "aspect-[16/9] w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2", children: stories.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group rounded-2xl border border-border bg-card p-7 transition-all hover:border-gold/50 hover:shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Newspaper, { className: "h-4 w-4" }),
          " ",
          s.tag
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-xl font-semibold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: s.text }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-foreground", children: [
          "Read more ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
        ] })
      ] }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 text-center text-sm text-muted-foreground", children: [
        "Want the latest delivered to your inbox? Subscribe to our newsletter on the",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Resources" }),
        " page."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBand, {})
  ] });
}
export {
  NewsPage as component
};
