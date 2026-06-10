import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="IMPMS home">
      <img
        src="/impms-logo.ico"
        alt="Institute for Medieval and Post Medieval Studies (IMPMS) logo"
        className="h-10 w-auto"
      />
    </Link>
  );
}
