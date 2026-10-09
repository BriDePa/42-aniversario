import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PartySection } from "@/components/PartySection";
import SpecularButton from "@/components/SpecularButton";
import { MessageCircle } from "lucide-react";

export default function FiestaPage() {
  return (
    <main className="min-h-screen bg-[#05030A] selection:bg-fuchsia-500/30 overflow-x-hidden relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[72vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16 border-b border-orange-500/20">
        
        {/* Ambient fire & party glow backdrop */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-orange-600/20 via-pink-600/15 to-purple-600/20 rounded-full blur-[140px] pointer-events-none -z-0" />
        
        {/* Overlay gradient to blend edges */}
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#05030A] via-transparent to-[#05030A]/60 pointer-events-none" />
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#05030A]/80 via-transparent to-transparent pointer-events-none" />

        {/* Floating party embers (pure CSS, lightweight) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-2">
          <div className="absolute top-[65%] left-[20%] w-2 h-2 rounded-full bg-orange-400 blur-[1px] animate-ember" style={{ animationDelay: '0s', animationDuration: '3.5s' }} />
          <div className="absolute top-[60%] left-[35%] w-1.5 h-1.5 rounded-full bg-amber-300 blur-[1px] animate-ember" style={{ animationDelay: '1.2s', animationDuration: '4.2s' }} />
          <div className="absolute top-[70%] left-[55%] w-2 h-2 rounded-full bg-pink-400 blur-[1px] animate-ember" style={{ animationDelay: '2.1s', animationDuration: '3.8s' }} />
          <div className="absolute top-[62%] left-[75%] w-2.5 h-2.5 rounded-full bg-orange-500 blur-[1px] animate-ember" style={{ animationDelay: '0.7s', animationDuration: '4.5s' }} />
          <div className="absolute top-[68%] left-[85%] w-1.5 h-1.5 rounded-full bg-yellow-400 blur-[1px] animate-ember" style={{ animationDelay: '1.8s', animationDuration: '3.9s' }} />
        </div>

        <div className="relative z-10 text-center px-4 flex flex-col items-center mt-4 md:mt-8 max-w-5xl mx-auto">
          
          {/* Top festive badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 text-orange-300 border border-orange-500/40 mb-6 font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase shadow-[0_0_25px_rgba(255,107,0,0.25)]">
            <span>🔥 16 DE OCTUBRE</span>
            <span className="text-pink-400">•</span>
            <span>FORUM LA PAZ 🎃</span>
          </div>

          {/* Fiery Halloween Title */}
          <div className="mb-4 sm:mb-6 select-none">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight uppercase drop-shadow-[0_0_35px_rgba(255,107,0,0.7)] drop-shadow-[0_0_70px_rgba(236,72,153,0.35)] flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
                ALC
              </span>
              <span className="inline-block hover:rotate-12 transition-transform duration-300 mx-0.5 sm:mx-1 drop-shadow-[0_0_25px_rgba(255,107,0,0.9)]">
                🎃
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-pink-500">
                HORITMO
              </span>
            </h1>
            <p className="font-mono text-xs sm:text-sm tracking-[0.35em] text-orange-300/90 uppercase mt-3">
              Halloween Edition • V.11 F.255
            </p>
          </div>
          
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-pink-100 to-amber-200 max-w-2xl mx-auto text-lg sm:text-2xl font-bold tracking-widest uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] leading-relaxed mb-6">
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

      <div className="relative z-20 bg-[#05030A]">
        <PartySection />
      </div>
      
      <Footer />
    </main>
  );
}
