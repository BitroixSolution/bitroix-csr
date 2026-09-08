import { UserPlus, Route, HeartHandshake } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

const stages = [
  {
    n: "01",
    icon: UserPlus,
    title: "Before the Sale",
    items: ["Lead qualification", "Product inquiries", "Appointment booking"],
  },
  {
    n: "02",
    icon: Route,
    title: "During the Journey",
    items: ["Order placement", "Account support", "Troubleshooting", "Status updates"],
  },
  {
    n: "03",
    icon: HeartHandshake,
    title: "After the Sale",
    items: ["Delivery tracking", "Returns & refunds", "Complaint handling", "Follow-ups"],
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="End-to-End Customer Journey"
          title={
            <>
              Your CSR Covers <span className="text-gradient">the Whole Pipeline</span>
            </>
          }
          sub="From first touch to loyal repeat customer — a dedicated agent walks every stage with your buyer."
        />
        <div className="relative grid gap-6 md:grid-cols-3" style={{ perspective: "1200px" }}>
          <div className="pointer-events-none absolute top-1/2 right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-primary/60 via-indigo-e/60 to-primary/60 md:block" />
          {stages.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <TiltCard max={8} className="h-full">
                <div className="glass relative h-full rounded-3xl p-8 transition-shadow hover:shadow-[0_0_50px_-14px_oklch(0.88_0.13_201/55%)]">
                  <span className="text-gradient text-5xl font-extrabold opacity-90">{s.n}</span>
                  <div className="mt-5 mb-3 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-bold">{s.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <span className="h-1 w-1 rounded-full bg-indigo-e" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
