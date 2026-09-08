import { motion } from "motion/react";
import { Zap, Star, Globe, ArrowRight, ChevronDown } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { TiltCard } from "./TiltCard";

const badges = [
  { icon: Zap, text: "Sub-60s Response Time", pos: "left-2 top-4 md:left-10 md:top-10", anim: "animate-float" },
  { icon: Star, text: "98% CSAT Score", pos: "right-2 top-20 md:right-12 md:top-24", anim: "animate-float-slow" },
  { icon: Globe, text: "24/7 Omnichannel Coverage", pos: "left-1/2 -bottom-2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-24 md:bottom-0", anim: "animate-float" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <ParticleField />
      {/* ambient glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/5 bottom-0 h-80 w-80 rounded-full bg-indigo-e/15 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Dedicated CSR · US · UK · Global
            </span>
            <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight text-balance md:text-6xl xl:text-7xl">
              Bitroix Solution —{" "}
              <span className="text-gradient">Next-Gen Customer Support Teams</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-pretty text-muted-foreground">
              Human Support. Supercharged by Intelligent Workflows. Dedicated CSRs built around
              your business across US, UK &amp; Global markets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group glow-cyan inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-indigo-e px-7 py-3.5 font-bold text-primary-foreground transition-transform hover:scale-105"
            >
              Book Free 30-Min Support Assessment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#channels"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Explore Live Channels
              <ChevronDown className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* floating metric badges panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="absolute inset-6 rounded-full border border-primary/20" />
          <div className="absolute inset-16 rounded-full border border-indigo-e/25" />
          <div className="absolute inset-24 rounded-full bg-gradient-to-tr from-primary/15 to-indigo-e/20 blur-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-bright glow-cyan flex h-28 w-28 flex-col items-center justify-center rounded-3xl text-center">
              <span className="text-gradient text-3xl font-extrabold">24/7</span>
              <span className="mt-1 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                Always On
              </span>
            </div>
          </div>
          {badges.map((b) => (
            <TiltCard key={b.text} max={14} className={`absolute ${b.pos}`}>
              <div className={`glass-bright flex items-center gap-2.5 rounded-2xl px-4 py-3 ${b.anim}`}>
                <b.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-semibold whitespace-nowrap">{b.text}</span>
              </div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
