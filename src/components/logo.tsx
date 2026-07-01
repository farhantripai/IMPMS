import { Link } from "@tanstack/react-router";
import impmsFooterLogo from "@/assets/impms-footer-logo.png";
import impmsHomeLogo from "@/assets/impms-home-logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center" aria-label="IMPMS home">
      <img
        src={light ? impmsFooterLogo : impmsHomeLogo}
        alt="Institute for Medieval and Post Medieval Studies (IMPMS) logo"
        width={592}
        height={421}
        className={
          light
            ? "h-14 w-auto rounded-lg bg-white p-1"
            : "h-11 w-auto md:h-12"
        }
      />
    </Link>
  );
}
