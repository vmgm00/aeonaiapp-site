const plans = [
  {
    name: "Aeon Free",
    price: "$0.00",
    cadence: "",
    features: [
      "Ads + essential access",
      "Unlimited AI text & mic voice-to-text",
      "Voice Mode conversations",
      "2 contacts + unlimited DMs",
      "Persona customization",
      "Memory auto-clears after 24 hours",
    ],
  },
  {
    name: "Aeon Plus",
    price: "$2.00",
    cadence: "/ month (Monthly plan)",
    features: [
      "Unlimited AI text & voice",
      "Unlimited contacts & DMs",
      "Persona customization",
      "Extended memory (7 days)",
      "Ad-free experience",
    ],
  },
  {
    name: "Aeon Pro",
    price: "$5.00",
    cadence: "/ month (Monthly plan)",
    features: [
      "Everything in Plus",
      "Priority memory (30 days)",
      "Add 1 additional user via Apple Family Sharing (1 extra user)",
    ],
  },
  {
    name: "Aeon Pro Annual",
    price: "$45.00",
    cadence: "/ year (Annual plan • 25% off)",
    features: [
      "Everything in Pro Monthly",
      "Unlimited memory retention",
      "Add up to 3 additional users via Apple Family Sharing (3 extra users)",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-[var(--aeon-bg)] px-6 py-16 text-white">
      <div className="w-full max-w-5xl space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Plans & Pricing</h1>
          <p className="mt-3 text-white/70">
            Choose the Aeon experience that fits your family and friends.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-white/15 bg-[var(--aeon-card)] p-6 shadow-[0_25px_90px_rgba(138,180,255,0.15)]"
            >
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className="mt-2 text-3xl font-bold">
                {plan.price}{" "}
                <span className="text-base font-medium text-white/70">
                  {plan.cadence}
                </span>
              </p>
              <ul className="mt-4 space-y-2 text-white/80">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="grid gap-4 text-sm text-white/70 md:grid-cols-2">
          <div className="rounded-3xl border border-white/15 bg-[var(--aeon-card)]/90 p-4 text-center shadow-[0_35px_160px_rgba(138,180,255,0.35)] ring-1 ring-[rgba(138,180,255,0.25)]">
            Prices in USD; regional pricing may vary. Features subject to
            change. App use requires age 13+ and acceptance of the Privacy
            Policy and Terms.
          </div>
          <div className="rounded-3xl border border-white/15 bg-[var(--aeon-card)]/90 p-4 text-center shadow-[0_35px_160px_rgba(138,180,255,0.35)] ring-1 ring-[rgba(138,180,255,0.25)]">
            <div className="flex flex-wrap items-center justify-center gap-4 text-[var(--aeon-tint)]">
              <a
                href="https://www.engineailabs.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.engineailabs.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
