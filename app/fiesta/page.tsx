import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PartySection } from "@/components/PartySection";
import DecryptedText from "@/components/DecryptedText";
import TextLoop from "@/components/TextLoop";
import SpecularButton from "@/components/SpecularButton";
import ASCIIText from "@/components/ASCIIText";
import ScrambledText from "@/components/ScrambledText";
import PatternWaves from "@/components/PatternWaves";
import { MessageCircle } from "lucide-react";

export default function FiestaPage() {
  return (
    <main className="min-h-screen bg-[#05030A] selection:bg-orange-500/30 overflow-x-hidden relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[75vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-14">
        
        {/* PatternWaves ambient backdrop */}
        <div className="absolute inset-0 z-0">
          <PatternWaves
            preset="terminal"
            color="#f97316"
            backgroundColor="#05030A"
            opacity={0.45}
            fade="edges"
            fadeSize={1.5}
            interactive={true}
            speed={0.3}
            scale={1.2}
            className="w-full h-full"
          />
        </div>

        {/* Ambient overlay gradient to blend with background */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#05030A] via-transparent to-[#05030A]/70 pointer-events-none" />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#05030A]/90 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 text-center px-4 flex flex-col items-center mt-2 max-w-5xl mx-auto w-full">
          
          {/* FORUM LA PAZ arriba, grande con DecryptedText y efecto lento */}
          <div className="mb-2 sm:mb-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-[0.25em] font-mono text-orange-400 drop-shadow-[0_0_25px_rgba(249,115,22,0.6)] uppercase">
              <DecryptedText
                text="FORUM LA PAZ"
                speed={120}
                maxIterations={25}
                sequential={true}
                revealDirection="center"
                animateOn="view"
                className="text-orange-400 font-black tracking-[0.25em]"
                encryptedClassName="text-orange-600 font-mono"
              />
            </h2>
          </div>

          {/* ASCIIText: Título y fondo nuevos interactivos para ALCOHORITMO */}
          <div className="relative w-full max-w-4xl h-[260px] sm:h-[360px] md:h-[440px] mx-auto rounded-3xl overflow-hidden border border-orange-500/30 bg-black/60 shadow-[0_0_60px_rgba(249,115,22,0.2)] my-3">
            <ASCIIText
              text="ALCOHORITMO"
              asciiFontSize={8}
              textScale={1.1}
              colors={['#ea580c', '#f97316', '#fed7aa']}
              waves={0.8}
              waveSpeed={0.6}
              interactive={true}
              idle={true}
              theme="dark"
            />
          </div>

          {/* 16 de octubre abajo con ScrambledText */}
          <div className="mt-3 mb-6 flex flex-col items-center justify-center">
            <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 shadow-[0_0_25px_rgba(249,115,22,0.15)]">
              <ScrambledText
                radius={120}
                duration={1.2}
                speed={0.4}
                scrambleChars=".:01<>_#*"
                className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-[0.25em] uppercase text-orange-300 drop-shadow-[0_0_15px_rgba(251,146,60,0.5)] cursor-pointer"
              >
                16 DE OCTUBRE
              </ScrambledText>
            </div>
            <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-zinc-400 uppercase mt-3 font-semibold">
              HALLOWEEN EDITION • V.11 F.255
            </p>
          </div>
          
          <div className="text-zinc-300 max-w-2xl mx-auto text-base sm:text-xl font-medium tracking-wide uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-relaxed mb-6">
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
