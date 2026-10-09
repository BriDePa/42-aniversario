import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PartySection } from "@/components/PartySection";
import DecryptedText from "@/components/DecryptedText";
import TextLoop from "@/components/TextLoop";
import SpecularButton from "@/components/SpecularButton";
import { MessageCircle } from "lucide-react";

export default function FiestaPage() {
  return (
    <main className="min-h-screen bg-[#05030A] selection:bg-orange-500/30 overflow-x-hidden relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[72vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-16">
        
        {/* Subtle dark ambient atmosphere */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none -z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-0" />

        <div className="relative z-10 text-center px-4 flex flex-col items-center mt-2 max-w-5xl mx-auto">
          
          {/* Top badge without emojis */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30 mb-8 font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
            <span>16 DE OCTUBRE</span>
            <span className="text-zinc-600">•</span>
            <span>FORUM LA PAZ</span>
          </div>

          {/* DecryptedText ALCOHORITMO */}
          <div className="mb-6 select-none flex flex-col items-center justify-center">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase font-mono">
              <DecryptedText
                text="ALCOHORITMO"
                speed={40}
                maxIterations={18}
                sequential={true}
                revealDirection="center"
                animateOn="view"
                className="text-white drop-shadow-[0_0_35px_rgba(249,115,22,0.5)]"
                encryptedClassName="text-orange-500 font-mono"
              />
            </h1>
            <p className="font-mono text-xs sm:text-sm tracking-[0.35em] text-orange-400 uppercase mt-4 font-semibold">
              HALLOWEEN EDITION • V.11 F.255
            </p>
          </div>
          
          <div className="text-zinc-300 max-w-2xl mx-auto text-base sm:text-xl font-medium tracking-wide uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-relaxed mb-8">
            Gran Fiesta Oficial de Aniversario
          </div>

          {/* Botón discreto WhatsApp que conduce directamente al boleto "Tu Pase de Acceso" */}
          <div className="z-20">
            <a href="#tu-pase-acceso" className="inline-block group">
              <SpecularButton
                size="sm"
                radius={24}
                tint="#ff6b00"
                tintOpacity={0.16}
                blur={8}
                textColor="#fed7aa"
                lineColor="#fb923c"
                baseColor="#2c0c16"
                intensity={1.3}
                autoAnimate={true}
                speed={0.4}
                className="font-mono text-xs font-semibold tracking-wider uppercase px-5 py-2.5 shadow-[0_0_25px_rgba(255,107,0,0.25)] hover:shadow-[0_0_35px_rgba(255,107,0,0.45)] transition-shadow"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={15} className="text-emerald-400" />
                  <span>WhatsApp Oficial</span>
                  <span className="text-[10px] text-orange-300 font-normal">↓</span>
                </span>
              </SpecularButton>
            </a>
          </div>
        </div>
      </section>

      {/* Sección divisoria con TextLoop en color naranja */}
      <div className="w-full relative z-20">
        <TextLoop
          text="ALCOHORITMO 2026 // HALLOWEEN EDITION // 16 DE OCTUBRE // FORUM LA PAZ // PREVENTA TIER 1 DISPONIBLE"
          shape="line"
          ribbon={true}
          ribbonColor="#f97316"
          ribbonWidth={50}
          color="#05030a"
          fontSize={18}
          fontWeight={900}
          letterSpacing={3}
          speed={75}
          pauseOnHover={false}
          className="w-full shadow-[0_0_30px_rgba(249,115,22,0.35)]"
        />
      </div>

      <div className="relative z-20 bg-[#05030A]">
        <PartySection />
      </div>
      
      <Footer />
    </main>
  );
}
