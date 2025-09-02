import { PricingCard } from "@/components/pricing/pricing-card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <main className="min-h-dvh bg-[hsl(230,100%,99%)] dark:bg-background">
      {/* Header */}
      <header className="relative z-20 mx-auto max-w-xl px-6 pt-12 pb-8 text-center">
        {/* decorative circles */}
        <img
          src="/images/pattern-circles.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-6 -z-10 h-24 w-24 -translate-x-1/2 opacity-80 dark:opacity-30"
        />
        <div className="absolute right-4 top-4 z-30">
          <ThemeToggle />
        </div>
        <h1 className="text-pretty text-2xl font-extrabold text-[hsl(227,35%,25%)] dark:text-foreground">
          Simple, traffic-based pricing
        </h1>
        <p className="mt-2 text-pretty text-[15px] leading-6 text-[hsl(225,20%,60%)] dark:text-muted-foreground">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </header>

      {/* Background pattern top bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative -z-10 h-40 w-full bg-[url('/images/bg-pattern.svg')] bg-cover bg-center bg-no-repeat"
      />

      {/* Pricing card */}
      <section className="relative z-10 -mt-24 px-4 pb-16">
        <div className="mx-auto max-w-xl">
          <PricingCard />
        </div>
      </section>
    </main>
  )
}
