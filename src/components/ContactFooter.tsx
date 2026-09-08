import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { CalendarCheck, Mail, Globe, Send } from "lucide-react";
import logoAsset from "@/assets/bitroix-logo-light.png.asset.json";
import { Reveal } from "./Reveal";

const volumes = ["Under 1,000 / month", "1,000 – 3,000 / month", "3,000 – 8,000 / month", "8,000+ / month"];
const channels = ["Voice", "Email & Ticketing", "Live Chat", "Social DMs"];

export function ContactFooter() {
  const [selected, setSelected] = useState<string[]>(["Voice"]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Request received — we'll reach out within one business day to schedule your free audit.");
    e.currentTarget.reset();
    setSelected(["Voice"]);
  };

  return (
    <footer id="contact" className="relative scroll-mt-20 pt-24 pb-10 md:pt-32">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="border-glow rounded-[2rem] p-8 backdrop-blur-xl md:p-12">
            <div className="mb-10 text-center">
              <span className="glass mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
                <CalendarCheck className="h-3.5 w-3.5" /> Free Support Audit
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-balance md:text-5xl">
                Ready to Scale Your <span className="text-gradient">Customer Support?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
                Let's build a dedicated support model tailored to your business.
              </p>
            </div>
            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">Name</label>
                <input
                  id="name"
                  required
                  placeholder="Jane Cooper"
                  className="glass w-full rounded-xl px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">Business Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className="glass w-full rounded-xl px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/60 focus:border-primary/60"
                />
              </div>
              <div>
                <label htmlFor="volume" className="mb-1.5 block text-sm font-semibold">Support Volume</label>
                <select
                  id="volume"
                  className="glass w-full appearance-none rounded-xl bg-transparent px-4 py-3 text-sm outline-none focus:border-primary/60 [&>option]:bg-card"
                >
                  {volumes.map((v) => (
                    <option key={v}>{v}</option>
                  ))}
                </select>
              </div>
              <div>
                <span className="mb-1.5 block text-sm font-semibold">Operating Channels</span>
                <div className="flex flex-wrap gap-2">
                  {channels.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() =>
                        setSelected((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]))
                      }
                      className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-all ${
                        selected.includes(c)
                          ? "bg-primary text-primary-foreground"
                          : "glass text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <button
                type="submit"
                className="glow-cyan mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-indigo-e px-6 py-4 font-bold text-primary-foreground transition-transform hover:scale-[1.02] sm:col-span-2"
              >
                <Send className="h-4 w-4" /> Schedule Free Audit
              </button>
            </form>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-border/50 pt-8 md:flex-row">
          <img src={logoAsset.url} alt="Bitroix Solution" className="h-7 w-auto" />
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="mailto:info@bitroixsolution.com" className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-4 w-4" /> info@bitroixsolution.com
            </a>
            <a href="https://www.bitroixsolution.com" className="flex items-center gap-2 hover:text-primary">
              <Globe className="h-4 w-4" /> www.bitroixsolution.com
            </a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Bitroix Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
