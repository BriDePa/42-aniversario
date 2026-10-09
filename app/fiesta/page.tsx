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

      {/* Hero Section: Fondo de pantalla completa con ASCIIText como texto principal */}
      <section className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center overflow-hidden pt-28 pb-12">
        
        {/* ASCIIText como fondo de pantalla completa y texto principal */}
        <div className="absolute inset-0 z-0">
          <ASCIIText
            text="ALCOHORITMO"
            asciiFontSize={7}
            textScale={0.75}
            colors={['#ea580c', '#f97316', '#fed7aa']}
            waves={0.8}
            waveSpeed={0.5}
            interactive={true}
            idle={true}
            theme="dark"
          />
        </div>

        {/* Gradiente sutil abajo solo para fusionar suavemente con la siguiente sección */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-1 bg-gradient-to-t from-[#05030A] to-transparent pointer-events-none" />

        {/* PARTE SUPERIOR: FORUM LA PAZ más pequeño */}
        <div className="relative z-10 text-center px-4 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.15)]">
            <span className="text-xs sm:text-sm md:text-base font-black tracking-[0.35em] font-mono text-orange-400 uppercase drop-shadow-[0_0_12px_rgba(249,115,22,0.7)]">
              <DecryptedText
                text="FORUM LA PAZ"
                speed={120}
                maxIterations={25}
                sequential={true}
                revealDirection="center"
                animateOn="view"
                className="text-orange-400 font-bold tracking-[0.35em]"
                encryptedClassName="text-orange-600 font-mono"
              />
            </span>
          </div>
        </div>

        {/* CENTRO: Completamente despejado para que ALCOHORITMO sea el protagonista principal sin obstáculos */}
        <div className="my-auto py-12 pointer-events-none" />

        {/* PARTE INFERIOR: 16 DE OCTUBRE y botones abajo de ALCOHORITMO */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center max-w-3xl mx-auto w-full pointer-events-auto">
          
          {/* 16 DE OCTUBRE abajo con ScrambledText */}
          <div className="mb-2">
            <div className="inline-flex items-center justify-center px-6 sm:px-8 py-2 rounded-full bg-black/60 border border-orange-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(249,115,22,0.2)] hover:border-orange-400 transition-colors">
              <ScrambledText
                radius={120}
                duration={1.2}
                speed={0.4}
                scrambleChars=".:01<>_#*!?"
                className="text-base sm:text-xl md:text-2xl font-black tracking-[0.25em] uppercase text-orange-200 drop-shadow-[0_0_15px_rgba(251,146,60,0.6)] cursor-pointer"
              >
                16 DE OCTUBRE
              </ScrambledText>
            </div>
          </div>

          {/* HALLOWEEN EDITION • V.11 F.255 */}
          <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-orange-400/90 uppercase my-2 font-semibold drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">
            HALLOWEEN EDITION • V.11 F.255
          </p>
          
          {/* Gran Fiesta Oficial de Aniversario */}
          <div className="text-zinc-300 max-w-xl mx-auto text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mb-5">
            Gran Fiesta Oficial de Aniversario
          </div>

          {/* Botón discreto WhatsApp que conduce directamente al boleto "Tu Pase de Acceso" */}
          <div className="z-20">
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
                className="font-mono text-xs font-semibold tracking-wider uppercase px-5 py-2.5 shadow-[0_0_25px_rgba(255,107,0,0.3)] hover:shadow-[0_0_35px_rgba(255,107,0,0.5)] transition-shadow"
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
