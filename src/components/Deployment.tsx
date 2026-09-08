import { useState } from "react";
import { motion } from "motion/react";
import { Search, PenTool, GraduationCap, Rocket, Activity, TrendingUp } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  { n: "01", icon: Search, title: "Discover", desc: "Deep-dive into your support volumes, channels, tools, and customer expectations." },
  { n: "02", icon: PenTool, title: "Design", desc: "Custom workflows, SLAs, escalation paths, and coverage model built for your business." },
  { n: "03", icon: GraduationCap, title: "Train", desc: "5-day intensive SOP, brand voice & CRM onboarding for your dedicated agents." },
  { n: "04", icon: Rocket, title: "Launch", desc: "Soft launch with shadowing, live QA scoring, and rapid calibration in week one." },
  { n: "05", icon: Activity, title: "Monitor", desc: "Real-time dashboards, CSAT tracking, and call/ticket QA reviews every week." },
  { n: "06", icon: TrendingUp, title: "Optimize", desc: "Continuous coaching, script refinement, and monthly performance improvement cycles." },
];

export function Deployment() {
  const [active, setActive] = useState(2);

  return (
    <section id="deployment" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Deployment Engine"
          title={
            <>
              Live in Weeks, <span className="text-gradient">Not Months</span>
            </>
          }
          sub="The Bitroix 6-step deployment engine. Select any step to see what's inside."
        />
        <Reveal>
          <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <button
                key={s.n}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`glass group flex flex-col items-center gap-2 rounded-2xl p-4 transition-all duration-300 ${
                  active === i
                    ? "scale-[1.03] border-primary/60 shadow-[0_0_36px_-10px_oklch(0.88_0.13_201/65%)]"
                    : "hover:border-primary/30"
                }`}
              >
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                    active === i ? "bg-primary text-primary-foreground" : "bg-accent text-muted-foreground"
                  }`}
                >
                  <s.icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-[10px] font-bold tracking-widest text-muted-foreground">{s.n}</span>
                <span className={`text-sm font-bold ${active === i ? "text-primary" : ""}`}>{s.title}</span>
              </button>
            ))}
          </div>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="glass-bright mx-auto max-w-3xl rounded-3xl p-8 text-center md:p-10"
          >
            <p className="text-gradient text-sm font-bold tracking-widest uppercase">
              Step {steps[active]!.n} — {steps[active]!.title}
            </p>
            <p className="mt-3 text-lg text-pretty text-muted-foreground">{steps[active]!.desc}</p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
