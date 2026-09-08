import { X, Check, Flame, Rocket } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

const pains = [
  "Overloaded, stretched internal staff",
  "12–24 hour response delays",
  "Missed live chat sales opportunities",
  "High turnover & retraining costs",
  "Backlogged, aging ticket queues",
];

const wins = [
  "Core team focuses 100% on growth",
  "Sub-60s initial response time",
  "True 24/7 omnichannel coverage",
  "Strict QA & SLA compliance",
  "Zero-backlog ticket resolution",
];

export function Friction() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="The Support Friction"
          title={
            <>
              Transforming <span className="text-gradient">Operational Overload</span>
            </>
          }
          sub="See the difference a dedicated, always-on support engine makes against the typical in-house grind."
        />
        <div className="grid gap-6 md:grid-cols-2" style={{ perspective: "1200px" }}>
          <Reveal>
            <TiltCard max={6}>
              <div className="glass h-full rounded-3xl border-destructive/30 p-8 shadow-[0_0_60px_-20px_oklch(0.62_0.2_30/45%)] md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-destructive/15">
                    <Flame className="h-5 w-5 text-destructive" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-destructive uppercase">Before</p>
                    <h3 className="text-xl font-bold">In-House Strain</h3>
                  </div>
                </div>
                <ul className="space-y-4">
                  {pains.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-muted-foreground">
                      <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.12}>
            <TiltCard max={6}>
              <div className="glass h-full rounded-3xl border-mint/40 p-8 shadow-[0_0_60px_-20px_oklch(0.84_0.15_160/45%)] md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint/15">
                    <Rocket className="h-5 w-5 text-mint" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-widest text-mint uppercase">After</p>
                    <h3 className="text-xl font-bold">With Bitroix Solution</h3>
                  </div>
                </div>
                <ul className="space-y-4">
                  {wins.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
