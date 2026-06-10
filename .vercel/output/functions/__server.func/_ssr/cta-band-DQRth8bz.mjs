import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./router-Daon6Znc.mjs";
import { h as ArrowRight } from "../_libs/lucide-react.mjs";
function CtaBand() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-primary px-8 py-14 text-center text-primary-foreground md:px-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pattern-bg absolute inset-0 opacity-30", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-balance text-3xl font-bold md:text-4xl", children: "Help us bridge cultures through knowledge" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-xl text-primary-foreground/80", children: "Your support funds conferences, publications, and STEM mentorship that bring history's discoveries to a new generation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-gold text-gold-foreground hover:bg-gold/90", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/donate", children: "Make a Donation" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/get-involved", children: [
          "Become a Member ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] }) })
      ] })
    ] })
  ] }) });
}
export {
  CtaBand as C
};
