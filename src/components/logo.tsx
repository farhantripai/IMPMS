import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/impms-logo.webp.asset.json";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="IMPMS home">
      <img
        src={logoSrc.url}
        alt="Institute for Medieval and Post Medieval Studies (IMPMS) logo"
        className="h-10 w-auto"
      />
    </Link>
  );
}
