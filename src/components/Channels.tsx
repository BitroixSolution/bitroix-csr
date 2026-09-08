import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MessageSquare, TicketCheck } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { TiltCard } from "./TiltCard";

const channels = [
  {
    id: "voice",
    icon: Phone,
    title: "Voice Support",
    short: "Inbound & outbound calls",
    detail:
      "Full inbound/outbound call handling with accent-neutral C1/B2 English fluency — queue management, warm transfers, and scripted brand voice on every call.",
    points: ["Inbound & outbound handling", "Accent-neutral C1/B2 English", "Call QA & recording review"],
  },
  {
    id: "email",
    icon: Mail,
    title: "Email & Ticketing",
    short: "Zero-backlog inbox",
    detail:
      "Zero-inbox backlog guarantee with intelligent ticket tagging, prioritization, and full resolution tracking — every email answered inside SLA.",
    points: ["Zero-inbox backlog guarantee", "Ticket tagging & triage", "Resolution tracking"],
  },
  {
    id: "chat",
    icon: MessageSquare,
    title: "Live Chat & Messaging",
    short: "Real-time conversions",
    detail:
      "Real-time website chat, WhatsApp, and social media DMs that catch buyers in the moment and turn questions into conversions.",
    points: ["Real-time website chat", "WhatsApp & social DMs", "Conversion-focused replies"],
  },
  {
    id: "tickets",
    icon: TicketCheck,
    title: "Ticket Management",
    short: "Full CRM discipline",
    detail:
      "Complete CRM logging, prioritization, and resolution inside your stack — Zendesk, Salesforce, HubSpot, or Intercom.",
    points: ["Zendesk · Salesforce · HubSpot · Intercom", "Prioritization workflows", "Escalation & SLA rules"],
  },
];

export function Channels() {
  const [active, setActive] = useState(channels[0]!);

  return (
    <section id="channels" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="pointer-events-none absolute top-1/3 left-0 h-96 w-96 rounded-full bg-indigo-e/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Omnichannel Capabilities"
          title={
            <>
              Every Channel. <span className="text-gradient">One Dedicated Team.</span>
            </>
          }
          sub="Tap a channel to see how our CSRs run it — same team, same brand voice, everywhere your customers are."
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {channels.map((c) => (
              <button
                key={c.id}
                onMouseEnter={() => setActive(c)}
                onClick={() => setActive(c)}
                className={`glass group flex items-center gap-4 rounded-2xl p-5 text-left transition-all duration-300 ${
                  active.id === c.id
                    ? "border-primary/60 shadow-[0_0_40px_-12px_oklch(0.88_0.13_201/60%)]"
                    : "hover:border-primary/30"
                }`}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                    active.id === c.id ? "bg-primary/20 text-primary" : "bg-accent text-muted-foreground"
                  }`}
                >
                  <c.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-bold">{c.title}</span>
                  <span className="block text-sm text-muted-foreground">{c.short}</span>
                </span>
              </button>
            ))}
          </div>
          <Reveal>
            <TiltCard max={5} className="h-full">
              <div className="glass-bright h-full rounded-3xl p-8 md:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-indigo-e text-primary-foreground">
                      <active.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-extrabold md:text-3xl">{active.title}</h3>
                    <p className="mt-4 text-pretty text-muted-foreground md:text-lg">{active.detail}</p>
                    <ul className="mt-6 space-y-3">
                      {active.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
