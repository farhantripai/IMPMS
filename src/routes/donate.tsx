import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Check, QrCode, Copy, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import zelleQrImg from "@/assets/zelle-qr.png";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Support IMPMS" },
      {
        name: "description",
        content:
          "Your tax-deductible donation to IMPMS funds conferences, publications, and STEM mentorship that share scientific heritage with the world.",
      },
      { property: "og:title", content: "Donate — Support IMPMS" },
      { property: "og:description", content: "Make a tax-deductible gift to support our mission." },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: DonatePage,
});

const presetAmounts = ["$500", "$1000", "$2500", "$5000"];
const impact = [
  "Fund conference presentations worldwide",
  "Publish research and newsletters",
  "Mentor students through STEM programs",
];

function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<string>("$500");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustomActive, setIsCustomActive] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleSelectPreset = (amount: string) => {
    setSelectedAmount(amount);
    setIsCustomActive(false);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(val);
    setIsCustomActive(true);
    setSelectedAmount("");
  };

  const currentDisplayAmount = isCustomActive
    ? customAmount
      ? `$${Number(customAmount).toLocaleString()}`
      : ""
    : selectedAmount;

  const handleDonate = () => {
    const effectiveAmount = isCustomActive
      ? customAmount
        ? `$${Number(customAmount).toLocaleString()}`
        : "your chosen amount"
      : selectedAmount || "$500";

    toast.success(
      `Thank you for your generous support of ${effectiveAmount}! Please scan the Zelle QR code to complete your payment.`
    );

    document.getElementById("zelle-qr-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const copyZelleEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText("info@impmstx.org");
      setCopied(true);
      toast.success("Zelle email (info@impmstx.org) copied to clipboard!");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Support Our Mission"
        title="Your gift changes the story"
        description="IMPMS is a registered 501(c)(3) nonprofit. Every contribution is tax-deductible and directly supports our programs."
      />

      <section className="container-page grid gap-8 section-y lg:gap-12 lg:grid-cols-2">
        {/* Left Column: Donation Selection Card */}
        <div className="rounded-2xl border border-border bg-card p-7 lg:p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold text-gold-foreground">
            <Heart className="h-6 w-6" />
          </span>
          <h2 className="mt-5 text-2xl font-bold">Make a donation</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Select a contribution tier or specify an amount of your choice:
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {presetAmounts.map((a) => {
              const isSelected = !isCustomActive && selectedAmount === a;
              return (
                <button
                  key={a}
                  type="button"
                  onClick={() => handleSelectPreset(a)}
                  className={`min-h-12 rounded-xl border py-4 text-base font-semibold transition-all sm:text-lg ${
                    isSelected
                      ? "border-gold bg-gold/15 text-foreground ring-2 ring-gold/40 shadow-xs font-bold"
                      : "border-border bg-background text-foreground hover:border-gold/60 hover:bg-accent"
                  }`}
                >
                  {a}
                </button>
              );
            })}
          </div>

          {/* Option to add an amount of their choice */}
          <div className="mt-4">
            <label
              htmlFor="custom-amount"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Or enter an amount of your choice
            </label>
            <div className="relative rounded-xl">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-base font-semibold text-muted-foreground">
                $
              </span>
              <input
                id="custom-amount"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter custom amount"
                value={customAmount}
                onChange={handleCustomChange}
                onFocus={() => {
                  setIsCustomActive(true);
                  setSelectedAmount("");
                }}
                className={`w-full rounded-xl border bg-background py-3.5 pl-8 pr-4 text-base font-medium transition-all outline-hidden focus:border-gold focus:ring-2 focus:ring-gold/30 ${
                  isCustomActive ? "border-gold ring-2 ring-gold/30 bg-gold/5" : "border-border"
                }`}
              />
            </div>
          </div>

          <Button
            type="button"
            onClick={handleDonate}
            className="mt-6 w-full bg-gold text-gold-foreground hover:bg-gold/90 text-base font-semibold py-6 rounded-xl shadow-xs transition-all hover:scale-[1.01]"
            size="lg"
          >
            {currentDisplayAmount ? `Donate ${currentDisplayAmount} Now` : "Donate Now"}
          </Button>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Secure giving. IMPMS is a tax-exempt 501(c)(3) organization.
          </p>

          <div className="mt-6 border-t border-border pt-4 text-center">
            <a
              href="#zelle-qr-section"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-gold transition-colors"
            >
              <QrCode className="h-4 w-4 text-gold" />
              Prefer giving via Zelle®? Scan the QR code below
            </a>
          </div>
        </div>

        {/* Right Column: Zelle QR Code & Impact */}
        <div className="space-y-8">
          {/* Zelle QR Code Card */}
          <div
            id="zelle-qr-section"
            className="rounded-2xl border border-border bg-card p-7 lg:p-8 scroll-mt-28 shadow-xs"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600/10 text-purple-700 dark:text-purple-400">
                  <QrCode className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Donate with Zelle®</h3>
                  <p className="text-xs text-muted-foreground">
                    Instant, direct & 100% fee-free donation
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center rounded-full bg-purple-600/10 px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300">
                Zero Fees
              </span>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* QR Code Container */}
              <div className="flex flex-col items-center shrink-0 rounded-2xl border-2 border-border bg-white p-3.5 shadow-md">
                <img
                  src={zelleQrImg}
                  alt="IMPMS Zelle QR Code"
                  width={200}
                  height={200}
                  className="h-48 w-48 object-contain"
                />
                <span className="mt-2 text-[11px] font-semibold text-zinc-600 tracking-wide uppercase">
                  Scan with banking app
                </span>
              </div>

              {/* Instructions */}
              <div className="space-y-3.5 text-sm text-muted-foreground flex-1">
                <p className="font-semibold text-foreground">How to send via Zelle®:</p>
                <ol className="list-decimal pl-4 space-y-1.5 text-xs sm:text-sm leading-relaxed">
                  <li>Open your mobile banking app with Zelle® support.</li>
                  <li>Select <strong>Send Money with Zelle®</strong> and tap <strong>Scan QR Code</strong>.</li>
                  <li>Scan the code on the left, enter your desired donation amount, and confirm.</li>
                </ol>

                <div className="pt-2">
                  <p className="text-xs font-semibold text-foreground mb-1.5">
                    Or send directly to Zelle email:
                  </p>
                  <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs font-mono text-foreground">
                    <span className="select-all font-semibold">info@impmstx.org</span>
                    <button
                      type="button"
                      onClick={copyZelleEmail}
                      className="ml-1 inline-flex items-center gap-1 text-muted-foreground hover:text-gold transition-colors"
                      title="Copy email"
                      aria-label="Copy Zelle email"
                    >
                      {copied ? (
                        <>
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          <span className="text-[11px] text-emerald-500 font-sans">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span className="text-[11px] font-sans">Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground pt-1 leading-relaxed">
                  <strong>Tax receipt:</strong> Please mention your email in the payment memo, or email{" "}
                  <a
                    href="mailto:info@impmstx.org"
                    className="text-foreground underline underline-offset-2 hover:text-gold"
                  >
                    info@impmstx.org
                  </a>{" "}
                  so we can send your 501(c)(3) tax receipt.
                </p>
              </div>
            </div>
          </div>

          {/* Where your gift goes */}
          <div className="rounded-2xl border border-border bg-card p-7 lg:p-8">
            <h2 className="text-2xl font-bold">Where your gift goes</h2>
            <ul className="mt-6 space-y-3">
              {impact.map((i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {i}
                </li>
              ))}
            </ul>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Prefer to give your time instead? Explore membership and volunteering on our{" "}
              <Link
                to="/get-involved"
                className="font-medium text-foreground underline underline-offset-4 hover:text-gold"
              >
                Get Involved
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
