import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Friction } from "@/components/Friction";
import { Channels } from "@/components/Channels";
import { Journey } from "@/components/Journey";
import { Talent } from "@/components/Talent";
import { Deployment } from "@/components/Deployment";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { Industries } from "@/components/Industries";
import { ContactFooter } from "@/components/ContactFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bitroix Solution — Next-Gen Customer Support Teams" },
      {
        name: "description",
        content:
          "Dedicated CSRs for US, UK & global businesses. Human support supercharged by intelligent workflows — sub-60s response, 98% CSAT, 24/7 omnichannel coverage.",
      },
      { property: "og:title", content: "Bitroix Solution — Next-Gen Customer Support Teams" },
      {
        property: "og:description",
        content:
          "Dedicated CSRs built around your business. Sub-60s response time, 98% CSAT, 24/7 omnichannel coverage — at up to 60% lower operational cost.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Friction />
        <Channels />
        <Journey />
        <Talent />
        <Deployment />
        <SavingsCalculator />
        <Industries />
      </main>
      <ContactFooter />
    </div>
  );
}
