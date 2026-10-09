import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PartySection } from "@/components/PartySection";
import DecryptedText from "@/components/DecryptedText";
import TextLoop from "@/components/TextLoop";
import SpecularButton from "@/components/SpecularButton";
import ASCIIText from "@/components/ASCIIText";
import ScrambledText from "@/components/ScrambledText";
import { MessageCircle } from "lucide-react";

export default function FiestaPage() {
  return (
    <main className="min-h-screen bg-[#05030A] selection:bg-orange-500/30 overflow-x-hidden relative">
      <Navbar />

      {/* Hero Section: Fondo de pantalla completa con ASCIIText */}
      <section className="relative w-full min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
        
        {/* ASCIIText como fondo de pantalla completa */}
        <div className="absolute inset-0 z-0">
          <ASCIIText
            text="ALCOHORITMO"
            asciiFontSize={7}
            textScale={0.7}
            colors={['#ea580c', '#f97316', '#fed7aa']}
            waves={0.9}
            waveSpeed={0.5}
            interactive={true}
            idle={true}
            theme="dark"
          />
        </div>

        {/* Gradientes sutiles de viñeta para legibilidad sin ocultar el efecto */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#05030A] via-transparent to-[#05030A]/60 pointer-events-none" />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#05030A]/80 via-transparent to-[#05030A]/80 pointer-events-none" />

        {/* Textos dentro del fondo */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center max-w-4xl mx-auto w-full pointer-events-none">
          
          {/* FORUM LA PAZ arriba, grande con DecryptedText y efecto lento */}
          <div className="mb-3 sm:mb-5 pointer-events-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.25em] font-mono text-orange-400 drop-shadow-[0_0_35px_rgba(249,115,22,0.85)] uppercase">
              <DecryptedText
                text="FORUM LA PAZ"
                speed={120}
                maxIterations={28}
                sequential={true}
                revealDirection="center"
                animateOn="view"
                className="text-orange-400 font-black tracking-[0.25em]"
                encryptedClassName="text-orange-600 font-mono"
              />
            </h1>
          </div>

          {/* 16 DE OCTUBRE abajo con ScrambledText */}
          <div className="my-2 sm:my-3 flex flex-col items-center justify-center pointer-events-auto">
            <div className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-2.5 rounded-full bg-black/70 border border-orange-500/40 backdrop-blur-md shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:border-orange-400 transition-colors">
              <ScrambledText
                radius={140}
                duration={1.2}
                speed={0.4}
                scrambleChars=".:01<>_#*!?"
                className="text-xl sm:text-3xl md:text-4xl font-black tracking-[0.3em] uppercase text-orange-200 drop-shadow-[0_0_20px_rgba(251,146,60,0.6)] cursor-pointer"
              >
                16 DE OCTUBRE
              </ScrambledText>
            </div>
          </div>

          {/* HALLOWEEN EDITION • V.11 F.255 */}
          <p className="font-mono text-xs sm:text-sm tracking-[0.35em] text-orange-400/90 uppercase mt-2 mb-3 font-semibold drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">
            HALLOWEEN EDITION • V.11 F.255
          </p>
          
          {/* Gran Fiesta Oficial de Aniversario */}
          <div className="text-zinc-200 max-w-2xl mx-auto text-base sm:text-xl font-bold tracking-widest uppercase drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)] leading-relaxed mb-8">
            Gran Fiesta Oficial de Aniversario
          </div>

          {/* Botón discreto WhatsApp que conduce directamente al boleto "Tu Pase de Acceso" */}
          <div className="z-20 pointer-events-auto">
            <a href="#tu-pase-acceso" className="inline-block group">
              <SpecularButton
                size="sm"
                radius={24}
                tint="#ff6b00"
                tintOpacity={0.2}
                blur={10}
                textColor="#fed7aa"
                lineColor="#fb923c"
                baseColor="#2c0c16"
                intensity={1.4}
                autoAnimate={true}
                speed={0.4}
                className="font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-3 shadow-[0_0_30px_rgba(255,107,0,0.35)] hover:shadow-[0_0_45px_rgba(255,107,0,0.6)] transition-shadow"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-emerald-400" />
                  <span>WhatsApp Oficial</span>
                  <span className="text-[11px] text-orange-300 font-normal">↓</span>
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
