import { useEffect, useState } from "react";
import logoAsset from "@/assets/bitroix-logo-light.png.asset.json";

const links = [
  { label: "Channels", href: "#channels" },
  { label: "Journey", href: "#journey" },
  { label: "Deployment", href: "#deployment" },
  { label: "Savings", href: "#savings" },
  { label: "Industries", href: "#industries" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60" : ""
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logoAsset.url} alt="Bitroix Solution logo" className="h-8 w-auto" />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="animate-pulse-glow rounded-full bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          Book Free Assessment
        </a>
      </div>
    </header>
  );
}
