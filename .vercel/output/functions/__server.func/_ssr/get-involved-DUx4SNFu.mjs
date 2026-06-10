import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero } from "./page-hero-BiVW9MnX.mjs";
import { B as Button } from "./router-Daon6Znc.mjs";
import { I as Input } from "./input-BMMYljhb.mjs";
import { L as Label } from "./label-92SSAkYb.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { U as Users, C as Check } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
import "../_libs/radix-ui__react-label.mjs";
const communityImg = "/assets/community-DEo1O6UK.jpg";
const benefits = ["Invitations to conferences and lectures", "Our newsletter and exclusive publications", "Opportunities to mentor and volunteer", "A community advancing shared discovery"];
function GetInvolvedPage() {
  const [form, setForm] = reactExports.useState({
    name: "",
    email: ""
  });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    toast.success("Thank you! We'll be in touch about your membership.");
    setForm({
      name: "",
      email: ""
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Get Involved", title: "Become part of the movement", description: "Members and volunteers power our mission. Join a community committed to knowledge, understanding, and the next generation of innovators." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("figure", { className: "mb-12 overflow-hidden rounded-2xl border border-border shadow-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: communityImg, alt: "A diverse community of IMPMS volunteers and students smiling together", width: 1280, height: 960, loading: "lazy", className: "aspect-[21/9] w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-2xl font-bold", children: "Why join IMPMS?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 leading-relaxed text-muted-foreground", children: "IMPMS knows that sometimes all it takes to change the world is a little support. As a member, you help fund conferences, publications, and STEM mentorship." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: benefits.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "mt-0.5 h-5 w-5 shrink-0 text-gold" }),
            " ",
            b
          ] }, b)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Membership form" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-6 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", required: true, value: form.name, onChange: (e) => setForm({
                ...form,
                name: e.target.value
              }), placeholder: "Your name" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", required: true, value: form.email, onChange: (e) => setForm({
                ...form,
                email: e.target.value
              }), placeholder: "you@example.com" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full bg-gold text-gold-foreground hover:bg-gold/90", children: "Join IMPMS" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  GetInvolvedPage as component
};
