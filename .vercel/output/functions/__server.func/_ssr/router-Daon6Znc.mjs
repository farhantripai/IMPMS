import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root, T as Trigger, C as Close, P as Portal, a as Content, O as Overlay, b as Title, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { M as Mail, H as Heart, a as Menu, b as MapPin, Y as Youtube, F as Facebook, I as Instagram, L as Linkedin, X } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-compose-refs.mjs";
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
const appCss = "/assets/styles-BPyiopkz.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const url = "/__l5e/assets-v1/5d5c4c23-bd5d-4f43-af30-7eb7b91e88c9/impms-logo.webp";
const logoSrc = {
  url
};
function Logo({ light = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", "aria-label": "IMPMS home", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: logoSrc.url,
      alt: "Institute for Medieval and Post Medieval Studies (IMPMS) logo",
      className: "h-10 w-auto"
    }
  ) });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Sheet = Root;
const SheetTrigger = Trigger;
const SheetClose = Close;
const SheetPortal = Portal;
const SheetOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = reactExports.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = Content.displayName;
const SheetTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = Title.displayName;
const SheetDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = Description.displayName;
function TikTok({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16.5 3c.3 2.1 1.6 3.8 3.7 4.1v2.6c-1.3.1-2.6-.3-3.7-1v6.6a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v2.7a3 3 0 1 0 2.1 2.9V3h2.7z" }) });
}
function WhatsApp({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className, fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.5-5.9c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5.3-.5v-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.6 1.1 2.7a10 10 0 0 0 3.8 3.3c1.9.8 1.9.5 2.3.5a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1 0-.2-.1-.4-.2z" }) });
}
const socials = [
  { name: "YouTube", href: "https://youtube.com", Icon: Youtube },
  { name: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { name: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { name: "TikTok", href: "https://tiktok.com", Icon: TikTok },
  { name: "WhatsApp", href: "https://whatsapp.com", Icon: WhatsApp },
  { name: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin }
];
function SocialLinks({ className = "", variant = "footer" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: `flex items-center gap-2 ${className}`, children: socials.map(({ name, href, Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": name,
      className: variant === "footer" ? "flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/80 transition-colors hover:border-gold hover:text-gold" : "flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-[18px] w-[18px]" })
    }
  ) }, name)) });
}
const navLinks = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/scientists", label: "Scholars & Science" },
  { to: "/events", label: "Events" },
  { to: "/news", label: "News & Media" },
  { to: "/resources", label: "Resources" },
  { to: "/partnerships", label: "Partnerships" }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden border-b border-border/40 bg-primary text-primary-foreground sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex h-9 items-center justify-between text-xs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:info@impmstx.org", className: "flex items-center gap-1.5 transition-colors hover:text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5" }),
        " info@impmstx.org"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { variant: "header" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "border-b border-border/70 bg-background/85 backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex h-14 items-center justify-between py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 lg:flex", "aria-label": "Primary", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          className: "rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground",
          activeProps: { className: "text-foreground bg-accent" },
          children: l.label
        },
        l.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", className: "hidden md:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/get-involved", children: "Get Involved" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "hidden sm:inline-flex bg-gold text-gold-foreground hover:bg-gold/90", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/donate", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4" }),
          " Donate"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "icon", className: "lg:hidden", "aria-label": "Open menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SheetContent, { side: "right", className: "w-72", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col gap-1", children: [
            [...navLinks, { to: "/get-involved", label: "Get Involved" }, { to: "/contact", label: "Contact" }].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: l.to,
                className: "rounded-md px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-accent",
                activeProps: { className: "text-foreground bg-accent" },
                children: l.label
              }
            ) }, l.to)),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SheetClose, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-3 bg-gold text-gold-foreground hover:bg-gold/90", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/donate", children: "Donate" }) }) })
          ] }) })
        ] })
      ] })
    ] }) })
  ] });
}
function SiteFooter() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-24 bg-primary text-primary-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { light: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70", children: "A nonprofit institute advancing understanding of the scientific and cultural contributions of the Islamic world, and inspiring the innovators of tomorrow." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SocialLinks, { className: "mt-6" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold uppercase tracking-wider text-gold", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5 text-sm", children: navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-primary-foreground/75 transition-colors hover:text-gold", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold uppercase tracking-wider text-gold", children: "Get Involved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5 text-sm", children: [
          { to: "/get-involved", label: "Membership" },
          { to: "/donate", label: "Donate" },
          { to: "/programs", label: "STEM Programs" },
          { to: "/contact", label: "Contact Us" }
        ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "text-primary-foreground/75 transition-colors hover:text-gold", children: l.label }) }, l.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-semibold uppercase tracking-wider text-gold", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 text-sm text-primary-foreground/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }),
            " Texas, United States"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@impmstx.org", className: "hover:text-gold", children: "info@impmstx.org" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-xs text-primary-foreground/60", children: "IMPMS is a registered 501(c)(3) tax-exempt nonprofit organization." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-primary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-primary-foreground/60 sm:flex-row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        year,
        " Institute of Medieval and Post-Medieval Studies. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacy", className: "hover:text-gold", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-gold", children: "Contact" })
      ] })
    ] }) })
  ] });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$d = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IMPMS — Institute of Medieval and Post-Medieval Studies" },
      {
        name: "description",
        content: "A nonprofit institute advancing understanding of the Islamic world's contributions to science and the arts, and inspiring tomorrow's innovators through STEM education."
      },
      { name: "author", content: "Institute of Medieval and Post-Medieval Studies" },
      { property: "og:title", content: "IMPMS — Institute of Medieval and Post-Medieval Studies" },
      {
        property: "og:description",
        content: "Advancing understanding of the Islamic world's scientific heritage and inspiring the innovators of tomorrow."
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "IMPMS" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IMPMS — Institute of Medieval and Post-Medieval Studies" },
      { name: "description", content: "Elevate IMPMS modernizes and enhances the IMPMS website for improved user experience and engagement." },
      { property: "og:description", content: "Elevate IMPMS modernizes and enhances the IMPMS website for improved user experience and engagement." },
      { name: "twitter:description", content: "Elevate IMPMS modernizes and enhances the IMPMS website for improved user experience and engagement." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bac82d6b-27ac-423d-8fc9-ba08ac9f8a05/id-preview-259561d5--400f5499-c242-4ff5-900b-2039f70e3759.lovable.app-1780597538825.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bac82d6b-27ac-423d-8fc9-ba08ac9f8a05/id-preview-259561d5--400f5499-c242-4ff5-900b-2039f70e3759.lovable.app-1780597538825.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Institute of Medieval and Post-Medieval Studies",
          alternateName: "IMPMS",
          url: "https://www.impmstx.org",
          foundingDate: "2001",
          description: "A nonprofit institute advancing understanding of the Islamic world's contributions to science and the arts.",
          areaServed: "Worldwide"
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$d.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
const BASE_URL = "";
const Route$c = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.9" },
          { path: "/programs", changefreq: "monthly", priority: "0.9" },
          { path: "/scientists", changefreq: "monthly", priority: "0.8" },
          { path: "/events", changefreq: "weekly", priority: "0.8" },
          { path: "/news", changefreq: "weekly", priority: "0.8" },
          { path: "/resources", changefreq: "monthly", priority: "0.7" },
          { path: "/partnerships", changefreq: "monthly", priority: "0.6" },
          { path: "/get-involved", changefreq: "monthly", priority: "0.8" },
          { path: "/donate", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "yearly", priority: "0.6" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const $$splitComponentImporter$b = () => import("./scientists-BnRmXKOJ.mjs");
const Route$b = createFileRoute("/scientists")({
  head: () => ({
    meta: [{
      title: "Scholars & Science — Pioneers of the Islamic Golden Age | IMPMS"
    }, {
      name: "description",
      content: "Meet the medieval Muslim scholars and scientists who advanced medicine, astronomy, optics, algebra, and engineering — and shaped the modern world."
    }, {
      property: "og:title",
      content: "Scholars & Science — Pioneers of the Islamic Golden Age"
    }, {
      property: "og:description",
      content: "Discover the scientists who illuminated a golden age of discovery."
    }],
    links: [{
      rel: "canonical",
      href: "/scientists"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Scholars & Science — Pioneers of the Islamic Golden Age",
        about: "Medieval Muslim scholars and their scientific contributions"
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./resources-BNaZgd93.mjs");
const Route$a = createFileRoute("/resources")({
  head: () => ({
    meta: [{
      title: "Resources — Publications & Newsletter | IMPMS"
    }, {
      name: "description",
      content: "Access IMPMS publications, research, and newsletters exploring the scientific and cultural heritage of the Islamic world. Subscribe to stay updated."
    }, {
      property: "og:title",
      content: "Resources — Publications & Newsletter"
    }, {
      property: "og:description",
      content: "Publications, research, and newsletter from IMPMS."
    }],
    links: [{
      rel: "canonical",
      href: "/resources"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const stemImg = "/assets/stem-BhJve3uq.jpg";
const $$splitComponentImporter$9 = () => import("./programs-GyYe-ddc.mjs");
const Route$9 = createFileRoute("/programs")({
  head: () => ({
    meta: [{
      title: "Programs — STEM Education & DiscoverSTEM | IMPMS"
    }, {
      name: "description",
      content: "IMPMS programs mentor students through the DiscoverSTEM collaboration, building critical thinking, problem-solving, and patentable STEM innovation skills."
    }, {
      property: "og:title",
      content: "Programs — STEM Education & Youth Innovation"
    }, {
      property: "og:description",
      content: "How IMPMS prepares students to think like innovators."
    }, {
      property: "og:image",
      content: stemImg
    }],
    links: [{
      rel: "canonical",
      href: "/programs"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./privacy-CINXJUwB.mjs");
const Route$8 = createFileRoute("/privacy")({
  head: () => ({
    meta: [{
      title: "Privacy Policy — IMPMS"
    }, {
      name: "description",
      content: "How the Institute of Medieval and Post-Medieval Studies collects and uses information."
    }],
    links: [{
      rel: "canonical",
      href: "/privacy"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./partnerships-KjS97t6r.mjs");
const Route$7 = createFileRoute("/partnerships")({
  head: () => ({
    meta: [{
      title: "Partnerships — Collaborate with IMPMS"
    }, {
      name: "description",
      content: "IMPMS partners with educational and community organizations like DiscoverSTEM to advance science education and cultural understanding."
    }, {
      property: "og:title",
      content: "Partnerships — Collaborate with IMPMS"
    }, {
      property: "og:description",
      content: "Partner with IMPMS to advance education and understanding."
    }],
    links: [{
      rel: "canonical",
      href: "/partnerships"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./news-Dzf-xekt.mjs");
const Route$6 = createFileRoute("/news")({
  head: () => ({
    meta: [{
      title: "News & Media — Muslim Scientists in the News | IMPMS"
    }, {
      name: "description",
      content: "Stay informed with IMPMS news, media coverage, and stories of Muslim scientists making headlines in research and innovation today."
    }, {
      property: "og:title",
      content: "News & Media — Muslim Scientists in the News"
    }, {
      property: "og:description",
      content: "Coverage and stories of scientific achievement, past and present."
    }],
    links: [{
      rel: "canonical",
      href: "/news"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./get-involved-DUx4SNFu.mjs");
const Route$5 = createFileRoute("/get-involved")({
  head: () => ({
    meta: [{
      title: "Get Involved — Membership & Volunteering | IMPMS"
    }, {
      name: "description",
      content: "Join IMPMS as a member or volunteer. Support our mission to share scientific heritage and mentor the innovators of tomorrow."
    }, {
      property: "og:title",
      content: "Get Involved — Membership & Volunteering"
    }, {
      property: "og:description",
      content: "Become a member or volunteer with IMPMS."
    }],
    links: [{
      rel: "canonical",
      href: "/get-involved"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./events-COk7_piv.mjs");
const Route$4 = createFileRoute("/events")({
  head: () => ({
    meta: [{
      title: "Events — Conferences & Lectures | IMPMS"
    }, {
      name: "description",
      content: "Explore upcoming and past IMPMS events: national and international conferences, lectures, and community programs celebrating scientific heritage."
    }, {
      property: "og:title",
      content: "Events — Conferences & Lectures"
    }, {
      property: "og:description",
      content: "Upcoming and past IMPMS conferences and programs."
    }],
    links: [{
      rel: "canonical",
      href: "/events"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./donate-C58y3dTR.mjs");
const Route$3 = createFileRoute("/donate")({
  head: () => ({
    meta: [{
      title: "Donate — Support IMPMS"
    }, {
      name: "description",
      content: "Your tax-deductible donation to IMPMS funds conferences, publications, and STEM mentorship that share scientific heritage with the world."
    }, {
      property: "og:title",
      content: "Donate — Support IMPMS"
    }, {
      property: "og:description",
      content: "Make a tax-deductible gift to support our mission."
    }],
    links: [{
      rel: "canonical",
      href: "/donate"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-E9UfSmQ5.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact IMPMS"
    }, {
      name: "description",
      content: "Get in touch with the Institute of Medieval and Post-Medieval Studies for membership, partnerships, speaking, or general inquiries."
    }, {
      property: "og:title",
      content: "Contact IMPMS"
    }, {
      property: "og:description",
      content: "Reach the Institute of Medieval and Post-Medieval Studies."
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const manuscriptImg = "/assets/manuscript-Bre3ZpwD.jpg";
const $$splitComponentImporter$1 = () => import("./about-Bpue2JAb.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About IMPMS — Our Mission & History"
    }, {
      name: "description",
      content: "Founded in 2001, IMPMS is a 501(c)(3) nonprofit promoting mutual understanding through the scientific and cultural heritage of the Islamic world."
    }, {
      property: "og:title",
      content: "About IMPMS — Our Mission & History"
    }, {
      property: "og:description",
      content: "Our mission, vision, and the story behind the Institute."
    }, {
      property: "og:image",
      content: manuscriptImg
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const heroImg = "/assets/hero-BMcoFqQW.jpg";
const $$splitComponentImporter = () => import("./index-D6DzAUAt.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "IMPMS — Reviving the Scientific Heritage of the Islamic World"
    }, {
      name: "description",
      content: "The Institute of Medieval and Post-Medieval Studies is a nonprofit advancing understanding of Islamic contributions to science and the arts while inspiring tomorrow's innovators."
    }, {
      property: "og:title",
      content: "Institute of Medieval and Post-Medieval Studies"
    }, {
      property: "og:description",
      content: "Reviving the scientific heritage of the Islamic world and inspiring the innovators of tomorrow."
    }, {
      property: "og:image",
      content: heroImg
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$c.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$d
});
const ScientistsRoute = Route$b.update({
  id: "/scientists",
  path: "/scientists",
  getParentRoute: () => Route$d
});
const ResourcesRoute = Route$a.update({
  id: "/resources",
  path: "/resources",
  getParentRoute: () => Route$d
});
const ProgramsRoute = Route$9.update({
  id: "/programs",
  path: "/programs",
  getParentRoute: () => Route$d
});
const PrivacyRoute = Route$8.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$d
});
const PartnershipsRoute = Route$7.update({
  id: "/partnerships",
  path: "/partnerships",
  getParentRoute: () => Route$d
});
const NewsRoute = Route$6.update({
  id: "/news",
  path: "/news",
  getParentRoute: () => Route$d
});
const GetInvolvedRoute = Route$5.update({
  id: "/get-involved",
  path: "/get-involved",
  getParentRoute: () => Route$d
});
const EventsRoute = Route$4.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => Route$d
});
const DonateRoute = Route$3.update({
  id: "/donate",
  path: "/donate",
  getParentRoute: () => Route$d
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$d
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$d
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$d
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  DonateRoute,
  EventsRoute,
  GetInvolvedRoute,
  NewsRoute,
  PartnershipsRoute,
  PrivacyRoute,
  ProgramsRoute,
  ResourcesRoute,
  ScientistsRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$d._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  SocialLinks as S,
  cn as c,
  heroImg as h,
  manuscriptImg as m,
  router as r,
  stemImg as s
};
