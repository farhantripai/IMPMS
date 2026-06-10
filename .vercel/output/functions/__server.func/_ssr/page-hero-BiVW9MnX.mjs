import { j as jsxRuntimeExports } from "../_libs/react.mjs";
function PageHero({ eyebrow, title, description }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border bg-primary text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pattern-bg absolute inset-0 opacity-40", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative py-16 md:py-20", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "max-w-3xl text-balance text-4xl font-bold leading-tight md:text-5xl", children: title }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/80", children: description })
    ] })
  ] });
}
export {
  PageHero as P
};
