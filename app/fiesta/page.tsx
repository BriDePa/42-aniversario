import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PartySection } from "@/components/PartySection";
import RippleDistortion from "@/components/RippleDistortion";
import FuzzyText from "@/components/FuzzyText";

export default function FiestaPage() {
  return (
    <main className="min-h-screen bg-[#05030A] selection:bg-fuchsia-500/30 overflow-x-hidden relative">
      <Navbar />
      
      {/* Hero Section with RippleDistortion Background */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 border-b border-fuchsia-500/10">
        <div className="absolute inset-0 z-0 opacity-40">
          <RippleDistortion 
            src="/alcohoritmo1.png"
            brushSize={120}
            strength={0.3}
            swirl={1.5}
            rings={3}
            spread={10}
            fade={5}
            spacing={0.5}
            tint="#ec4899"
            tintAmount={0.2}
          />
        </div>
        
        {/* Overlay gradient to blend edges */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#05030A] via-transparent to-[#05030A]/50 pointer-events-none" />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#05030A]/80 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 text-center px-4 flex flex-col items-center mt-8 md:mt-16">
          
          <div className="text-xl sm:text-3xl text-fuchsia-400 font-bold mb-4 tracking-[0.25em] uppercase drop-shadow-md">
            16/10 — FORUM
          </div>

          <div className="mb-4 sm:mb-8 select-none pointer-events-auto cursor-crosshair">
            <FuzzyText 
              baseIntensity={0.1} 
              hoverIntensity={0.8} 
              enableHover={true}
              fontFamily="system-ui, sans-serif"
              color="#fff"
              fontSize="clamp(3rem, 10vw, 7rem)"
              className="tracking-tighter drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
            >
              ALCOHORITMO
            </FuzzyText>
          </div>
          
          <div className="text-zinc-300 max-w-2xl mx-auto text-lg sm:text-xl font-light tracking-widest uppercase drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] leading-relaxed">
            Gran Fiesta de Aniversario
          </div>
        </div>
      </section>

      <div className="relative z-20 bg-[#05030A]">
        <PartySection />
      </div>
      
      <Footer />
    </main>
  );
}
