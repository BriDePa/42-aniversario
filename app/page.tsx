import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TimelineSchedule } from "@/components/TimelineSchedule";
import { PartySection } from "@/components/PartySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0813] selection:bg-fuchsia-500/30">
      <Navbar />
      <Hero />
      <TimelineSchedule />
      <PartySection />
      <Footer />
    </main>
  );
}
