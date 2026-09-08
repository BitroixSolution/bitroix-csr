import { useState } from "react";
import { PiggyBank } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

const IN_HOUSE = 4500;
const BITROIX = 1800;

function repsFor(volume: number) {
  return Math.max(1, Math.ceil(volume / 1200));
}

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function SavingsCalculator() {
  const [volume, setVolume] = useState(3000);
  const reps = repsFor(volume);
  const inHouse = reps * IN_HOUSE;
  const bitroix = reps * BITROIX;
  const savings = inHouse - bitroix;
  const pct = Math.round((savings / inHouse) * 100);

  return (
    <section id="savings" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-mint/8 blur-[130px]" />
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Cost Comparison"
          title={
            <>
              See Your <span className="text-gradient">Savings in Real Time</span>
            </>
          }
          sub="Drag the slider to your monthly ticket & call volume and compare dedicated CSR economics."
        />
        <Reveal>
          <TiltCard max={4}>
            <div className="glass-bright rounded-3xl p-8 md:p-12">
              <label htmlFor="volume" className="mb-2 block text-sm font-semibold tracking-widest text-primary uppercase">
                Monthly Ticket / Call Volume
              </label>
              <div className="mb-3 text-4xl font-extrabold tabular-nums">
                {volume.toLocaleString()} <span className="text-lg font-semibold text-muted-foreground">interactions / mo</span>
              </div>
              <input
                id="volume"
                type="range"
                min={500}
                max={12000}
                step={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-full bg-accent accent-[oklch(0.88_0.13_201)]"
              />
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>500</span>
                <span>≈ {reps} dedicated {reps === 1 ? "rep" : "reps"} needed</span>
                <span>12,000</span>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="glass rounded-2xl border-destructive/30 p-6">
                  <p className="text-sm text-muted-foreground">In-House US/UK Team</p>
                  <p className="mt-2 text-3xl font-extrabold text-destructive tabular-nums">{fmt(inHouse)}</p>
                  <p className="mt-1 text-xs text-muted-foreground">~$4,500 / month per rep · salary, benefits, tooling</p>
                </div>
                <div className="glass rounded-2xl border-mint/40 p-6 shadow-[0_0_40px_-16px_oklch(0.84_0.15_160/50%)]">
                  <p className="text-sm text-muted-foreground">Bitroix Dedicated CSR</p>
                  <p className="mt-2 text-3xl font-extrabold text-mint tabular-nums">{fmt(bitroix)}</p>
                  <p className="mt-1 text-xs text-muted-foreground">~$1,800 / month per rep · fully managed</p>
                </div>
              </div>

              <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-primary/15 via-indigo-e/15 to-primary/15 p-6 sm:flex-row">
                <div className="flex items-center gap-3">
                  <PiggyBank className="h-8 w-8 text-primary" />
                  <div>
                    <p className="text-2xl font-extrabold tabular-nums">{fmt(savings)} <span className="text-sm font-semibold text-muted-foreground">saved / month</span></p>
                    <p className="text-sm text-muted-foreground">Save up to {pct}% on operational overhead</p>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="glow-cyan rounded-full bg-primary px-6 py-3 text-sm font-bold whitespace-nowrap text-primary-foreground transition-transform hover:scale-105"
                >
                  Lock In These Savings
                </a>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
