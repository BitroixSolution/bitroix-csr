import { ShoppingBag, Cpu, HeartPulse, Truck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

const industries = [
  {
    icon: ShoppingBag,
    title: "E-Commerce & Retail",
    desc: "Order status, returns, cart recovery, and peak-season surge coverage.",
  },
  {
    icon: Cpu,
    title: "SaaS & Tech",
    desc: "Tier-1 troubleshooting, onboarding help, and churn-saving support.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    desc: "Empathetic scheduling, member support, and compliance-aware handling.",
  },
  {
    icon: Truck,
    title: "Logistics & Real Estate",
    desc: "Tracking updates, tenant requests, and time-critical coordination.",
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Industry Specializations"
          title={
            <>
              Fluent in <span className="text-gradient">Your Industry</span>
            </>
          }
          sub="CSRs trained on the vocabulary, tools, and customer expectations of your vertical."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: "1200px" }}>
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 0.08}>
              <TiltCard max={10} className="h-full">
                <div className="glass group h-full rounded-3xl p-7 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_44px_-14px_oklch(0.88_0.13_201/60%)]">
                  <span className="mb-5 flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/25 to-indigo-e/25 text-primary transition-transform group-hover:scale-110">
                    <ind.icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold">{ind.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{ind.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
