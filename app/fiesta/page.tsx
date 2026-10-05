import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PartySection } from "@/components/PartySection";
import BorderGlow from "@/components/BorderGlow";
import TextLoop from "@/components/TextLoop";

export default function FiestaPage() {
  return (
    <main className="min-h-screen bg-[#05030A] selection:bg-fuchsia-500/30 overflow-x-hidden">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4 max-w-7xl mx-auto text-center">
        <TextLoop text="ALCOHORITMO ✦ V.11 ✦ F.255" separator="✦" shape="line" fontSize={24} className="text-fuchsia-400 mb-8" />
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
          La fiesta oficial de cierre de aniversario de la Carrera de Informática.
          Todo el ritmo, toda la energía, en un solo lugar.
        </p>
      </div>

      <PartySection />
      
      <Footer />
    </main>
  );
}
