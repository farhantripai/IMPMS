import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./page-hero-BiVW9MnX.mjs";
import { C as CtaBand } from "./cta-band-DQRth8bz.mjs";
import "../_libs/sonner.mjs";
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
import "../_libs/lucide-react.mjs";
const scholarsImg = "/assets/scholars-BIKOOz5a.jpg";
const fields = [{
  field: "Medicine",
  scholar: "Ibn Sina (Avicenna)",
  text: "His Canon of Medicine remained a standard medical text in Europe for centuries."
}, {
  field: "Optics",
  scholar: "Ibn al-Haytham (Alhazen)",
  text: "Pioneered the scientific method and the modern understanding of how vision works."
}, {
  field: "Mathematics",
  scholar: "Al-Khwarizmi",
  text: "The father of algebra, whose name gives us the word 'algorithm'."
}, {
  field: "Astronomy",
  scholar: "Al-Battani",
  text: "Refined measurements of the solar year that influenced later European astronomers."
}, {
  field: "Surgery",
  scholar: "Al-Zahrawi",
  text: "Authored a foundational surgical encyclopedia and designed enduring instruments."
}, {
  field: "Engineering",
  scholar: "Al-Jazari",
  text: "Documented ingenious mechanical devices and early automata."
}];
function ScientistsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Scholars & Science", title: "The minds that illuminated a golden age", description: "From medicine to mathematics, scholars of the Islamic world made original discoveries whose influence reaches into every modern laboratory and classroom." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "mb-12 overflow-hidden rounded-2xl border border-border shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: scholarsImg, alt: "An illuminated medieval Islamic science manuscript with a brass astrolabe and quill", width: 1280, height: 960, loading: "lazy", className: "aspect-[16/9] w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: fields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-border bg-card p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-gold", children: f.field }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-xl font-semibold", children: f.scholar }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: f.text })
      ] }, f.scholar)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 rounded-2xl border border-border bg-secondary p-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto max-w-2xl text-muted-foreground", children: "These pioneers are only the beginning. IMPMS shares their stories at conferences, in newsletters, and through publications so that their legacy continues to inspire." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBand, {})
  ] });
}
export {
  ScientistsPage as component
};
