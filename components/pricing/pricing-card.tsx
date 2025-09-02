"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const TIERS = [
  { views: "10K", price: 8 },
  { views: "50K", price: 12 },
  { views: "100K", price: 16 },
  { views: "500K", price: 24 },
  { views: "1M", price: 36 },
] as const

export function PricingCard() {
  const [tierIndex, setTierIndex] = useState(2) // default 100K
  const [yearly, setYearly] = useState(false)

  const base = TIERS[tierIndex].price
  const monthlyPrice = yearly ? Math.round(base * 0.75 * 100) / 100 : base
  const discountLabel = "25% discount"

  const sliderPercent = useMemo(() => (tierIndex / (TIERS.length - 1)) * 100, [tierIndex])

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 dark:bg-card dark:shadow-white/20">
      {/* Top: pageviews + price */}
      <div className="grid items-center gap-4 p-6 sm:grid-cols-2 sm:gap-6 sm:p-8">
        <div className="text-center sm:text-left">
          <p className="uppercase tracking-widest text-[12px] font-bold text-[hsl(225,20%,60%)] dark:text-muted-foreground">
            {TIERS[tierIndex].views} Pageviews
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 sm:justify-end">
          <span className="text-4xl font-extrabold text-[hsl(227,35%,25%)] dark:text-foreground">
            ${monthlyPrice.toFixed(2)}
          </span>
          <span className="text-sm text-[hsl(225,20%,60%)] dark:text-muted-foreground">/ month</span>
        </div>

        {/* Slider */}
        <div className="sm:col-span-2">
          <label htmlFor="pricing-slider" className="sr-only">
            Select pageviews tier
          </label>
          <input
            id="pricing-slider"
            type="range"
            min={0}
            max={TIERS.length - 1}
            step={1}
            value={tierIndex}
            onChange={(e) => setTierIndex(Number.parseInt(e.target.value))}
            aria-valuemin={0}
            aria-valuemax={TIERS.length - 1}
            aria-valuenow={tierIndex}
            aria-valuetext={`${TIERS[tierIndex].views} pageviews`}
            className={cn(
              "h-3 w-full appearance-none rounded-full",
              "bg-[hsl(224,65%,95%)] dark:bg-muted",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(174,86%,45%)]",
            )}
            style={{
              background: `linear-gradient(to right, 
                ${yearly ? "hsl(174 77% 60%)" : "hsl(174 77% 80%)"} 0%, 
                ${yearly ? "hsl(174 77% 60%)" : "hsl(174 77% 80%)"} ${sliderPercent}%, 
                ${yearly ? "hsl(224 65% 15%)" : "hsl(224 65% 95%)"} ${sliderPercent}%, 
                ${yearly ? "hsl(224 65% 15%)" : "hsl(224 65% 95%)"} 100%)`
            }}
            className={cn(
              "h-3 w-full appearance-none rounded-full",
              "bg-[hsl(224,65%,95%)] dark:bg-muted",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(174,86%,45%)]",
              "dark:before:bg-primary dark:after:bg-primary",
              "[&[data-theme=dark]]:bg-gradient-to-r [&[data-theme=dark]]:from-primary [&[data-theme=dark]]:to-primary/20"
            )}
          />
          {/* Custom thumb styling */}
          <style jsx>{`
            #pricing-slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 36px;
              height: 36px;
              border-radius: 9999px;
              background: hsl(174, 86%, 45%) url('/images/icon-slider.svg') center
                no-repeat;
              box-shadow: 0 12px 24px rgba(16, 216, 196, 0.45);
              cursor: pointer;
              border: 0;
            }
            #pricing-slider::-moz-range-thumb {
              width: 36px;
              height: 36px;
              border-radius: 9999px;
              background: hsl(174, 86%, 45%) url('/images/icon-slider.svg') center
                no-repeat;
              box-shadow: 0 12px 24px rgba(16, 216, 196, 0.45);
              cursor: pointer;
              border: 0;
            }
            #pricing-slider:active::-webkit-slider-thumb,
            #pricing-slider:active::-moz-range-thumb {
              background-color: hsl(174, 86%, 45%);
              transform: scale(0.98);
            }
          `}</style>
        </div>

        {/* Billing toggle */}
        <div className="sm:col-span-2">
          <fieldset className="flex items-center justify-center gap-3 rounded-md bg-transparent px-2 py-1 text-sm sm:justify-end">
            <legend className="sr-only">Billing period</legend>
            <label className="text-[hsl(225,20%,60%)] dark:text-muted-foreground">Monthly Billing</label>
            <button
              type="button"
              role="switch"
              aria-checked={yearly}
              onClick={() => setYearly((v) => !v)}
              className={cn(
                "relative h-6 w-11 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                yearly ? "bg-[hsl(174,86%,45%)]" : "bg-[hsl(223,50%,87%)] dark:bg-muted",
              )}
            >
              <span
                className={cn(
                  "absolute top-1/2 inline-block h-4 w-4 -translate-y-1/2 rounded-full bg-white transition-transform",
                  yearly ? "translate-x-6" : "translate-x-1",
                )}
              />
              <span className="sr-only">{yearly ? "Yearly billing" : "Monthly billing"}</span>
            </button>
            <label className="flex items-center gap-2 text-[hsl(225,20%,60%)] dark:text-muted-foreground">
              Yearly Billing
              <span className="rounded-full bg-[hsl(14,92%,95%)] px-2 py-0.5 text-xs font-bold text-[hsl(15,100%,70%)] dark:bg-secondary">
                {discountLabel}
              </span>
            </label>
          </fieldset>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[hsl(224,65%,95%)] dark:bg-border" />

      {/* Features + CTA */}
      <div className="grid gap-6 p-6 sm:grid-cols-2 sm:items-center sm:p-8">
        <ul className="mx-auto space-y-3 text-sm text-[hsl(225,20%,60%)] dark:text-muted-foreground">
          {["Unlimited websites", "100% data ownership", "Email reports"].map((item) => (
            <li key={item} className="flex items-center gap-3">
              <img src="/images/icon-check.svg" alt="" aria-hidden="true" className="h-3 w-3" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center sm:justify-end">
          <Button
            className="rounded-full bg-[hsl(227,35%,25%)] px-8 text-[hsl(226,100%,87%)] hover:bg-[hsl(227,35%,20%)] dark:bg-primary dark:text-primary-foreground"
            size="lg"
          >
            Start my trial
          </Button>
        </div>
      </div>
    </div>
  )
}
