import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageHero } from "./page-hero-BiVW9MnX.mjs";
import { B as Button } from "./router-Daon6Znc.mjs";
import "../_libs/sonner.mjs";
import { H as Heart, C as Check } from "../_libs/lucide-react.mjs";
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
const amounts = ["$25", "$50", "$100", "$250"];
const impact = ["Fund conference presentations worldwide", "Publish research and newsletters", "Mentor students through STEM programs"];
function DonatePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Support Our Mission", title: "Your gift changes the story", description: "IMPMS is a registered 501(c)(3) nonprofit. Every contribution is tax-deductible and directly supports our programs." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page grid gap-12 py-16 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-gold-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-2xl font-bold", children: "Make a donation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-3", children: amounts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-lg border border-border bg-background py-4 text-lg font-semibold transition-colors hover:border-gold hover:bg-accent", children: a }, a)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mt-6 w-full bg-gold text-gold-foreground hover:bg-gold/90", size: "lg", children: "Donate Now" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-xs text-muted-foreground", children: "Secure giving. IMPMS is a tax-exempt 501(c)(3) organization." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Where your gift goes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: impact.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold" }),
          " ",
          i
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 leading-relaxed text-muted-foreground", children: [
          "Prefer to give your time instead? Explore membership and volunteering on our",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/get-involved", className: "font-medium text-foreground underline underline-offset-4", children: "Get Involved" }),
          " ",
          "page."
        ] })
      ] })
    ] })
  ] });
}
export {
  DonatePage as component
};
