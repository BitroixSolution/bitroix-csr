import { useState } from "react";
import { Languages, AudioLines, ShieldCheck, Play, Pause } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

const standards = [
  { icon: Languages, title: "CEFR C1/B2 English", desc: "Certified fluency with accent-neutral delivery." },
  { icon: AudioLines, title: "Brand Voice Matching", desc: "Trained on your tone, scripts, and style guide." },
  { icon: ShieldCheck, title: "De-escalation & Empathy", desc: "Active listening and calm conflict resolution." },
];

const BARS = 40;

export function Talent() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Talent Quality"
          title={
            <>
              Hear the <span className="text-gradient">Bitroix Standard</span>
            </>
          }
          sub="Every CSR passes a rigorous quality bar before they ever touch your customers."
        />
        <div className="grid gap-6 lg:grid-cols-2" style={{ perspective: "1200px" }}>
          <div className="space-y-4">
            {standards.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="glass flex items-start gap-4 rounded-2xl p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <TiltCard max={6} className="h-full">
              <div className="glass-bright flex h-full flex-col justify-between rounded-3xl p-8 md:p-10">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-primary uppercase">Audio Showcase</p>
                  <h3 className="mt-2 text-2xl font-extrabold">Listen to a Sample Voice CSR Interaction</h3>
                  <p className="mt-3 text-muted-foreground">
                    A mock customer call — notice the pacing, clarity, and brand-aligned tone our agents deliver.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-5">
                  <button
                    onClick={() => setPlaying((p) => !p)}
                    aria-label={playing ? "Pause sample" : "Play sample"}
                    className="glow-cyan flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-indigo-e text-primary-foreground transition-transform hover:scale-105"
                  >
                    {playing ? <Pause className="h-6 w-6" /> : <Play className="ml-1 h-6 w-6" />}
                  </button>
                  <div className="flex h-16 flex-1 items-center gap-1 overflow-hidden">
                    {Array.from({ length: BARS }).map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 rounded-full bg-gradient-to-t from-indigo-e to-primary ${
                          playing ? "animate-wave" : ""
                        }`}
                        style={{
                          height: `${22 + 34 * Math.abs(Math.sin(i * 0.9))}px`,
                          animationDelay: `${i * 0.06}s`,
                          transform: playing ? undefined : "scaleY(0.35)",
                          transformOrigin: "center",
                        }}
                      />
                    ))}
                  </div>
                  <span className="shrink-0 font-mono text-sm text-muted-foreground">
                    {playing ? "0:12" : "0:00"} / 0:48
                  </span>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
