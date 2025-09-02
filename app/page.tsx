import { PricingCard } from "@/components/pricing/pricing-card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <main className="relative min-h-dvh bg-[hsl(230,100%,99%)] dark:bg-background">
      <section className="relative isolate overflow-hidden">
        {/* Background pattern — hero only */}
        <img
          src="/images/bg-pattern.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 top-0 -z-10 w-full h-full bg-no-repeat bg-top bg-contain dark:opacity-60"
        />

        {/* Header content */}
        <header className="relative mx-auto max-w-2xl px-6 pt-20 pb-24 text-center z-10">
          {/* decorative circles behind headline */}
          <img
            src="/images/pattern-circles.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-10 -z-10 h-44 w-44 -translate-x-1/2 opacity-70 dark:opacity-30"
          />
          {/* Dark mode toggle pinned and above all hero layers */}
          <div className="absolute right-6 top-6 z-30">
            <ThemeToggle />
          </div>

          <h1 className="text-pretty text-2xl font-extrabold text-[hsl(227,35%,25%)]">
            Simple, traffic-based pricing
          </h1>
          <p className="mt-2 text-pretty text-[15px] leading-6 text-[hsl(225,20%,60%)] dark:text-muted-foreground dark:fill-amber-50">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </header>
      </section>

      {/* Pricing card section — visually overlaps hero without covering it */}
      <section className="relative z-0 -mt-14 md:-mt-16 px-4 pb-20">
        <div className="mx-auto max-w-xl">
          <PricingCard />
        </div>
      </section>
    </main>
  )
}
