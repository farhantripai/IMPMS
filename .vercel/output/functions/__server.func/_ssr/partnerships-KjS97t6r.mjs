import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./page-hero-BiVW9MnX.mjs";
import { C as CtaBand } from "./cta-band-DQRth8bz.mjs";
import "../_libs/sonner.mjs";
import { f as Handshake } from "../_libs/lucide-react.mjs";
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
const partnershipsImg = "/assets/partnerships-Sya5JjxE.jpg";
const partners = [{
  name: "DiscoverSTEM",
  text: "Our flagship education partner, preparing students to become innovators since 2018."
}, {
  name: "Academic Institutions",
  text: "We collaborate with universities and colleges to present research and mentor students."
}, {
  name: "Community Organizations",
  text: "Local and international groups help us reach people of all faiths and cultures."
}];
function PartnershipsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Partnerships", title: "Stronger together", description: "Collaboration multiplies our impact. IMPMS works with partners who share our commitment to education, discovery, and understanding." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "mb-12 overflow-hidden rounded-2xl border border-border shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: partnershipsImg, alt: "A diverse group of professionals collaborating and shaking hands at a meeting", width: 1280, height: 960, loading: "lazy", className: "aspect-[16/9] w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: partners.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-lg font-semibold", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.text })
      ] }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 rounded-2xl border border-border bg-secondary p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Interested in partnering?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "We welcome organizations that want to advance science education and cross-cultural understanding. Reach out through our contact page to start a conversation." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBand, {})
  ] });
}
export {
  PartnershipsPage as component
};
