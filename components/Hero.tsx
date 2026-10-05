"use client";

import SplitText from "./SplitText";
import BlurText from "./BlurText";
import LetterGlitch from "./LetterGlitch";
import { Countdown } from "./Countdown";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Glitch */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchColors={['#ec4899', '#a855f7', '#d946ef']}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
          characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
        />
        {/* Overlay / Vignette */}
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-[#0B0813] via-transparent to-[#0B0813]/80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0B0813]/50 to-[#0B0813] opacity-80 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-10">
        {/* Heading */}
        <div className="mb-6 flex flex-col justify-center items-center gap-2">
          <SplitText
            text="42 Años"
            className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight"
            delay={50}
            from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            ease="power3.out"
            threshold={0.2}
            rootMargin="-50px"
          />
          <BlurText
            text="carrera de informática"
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-500 to-fuchsia-600 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] uppercase"
            delay={50}
            animateBy="words"
          />
        </div>

        {/* Subtitle with BlurText */}
        <div className="max-w-2xl mx-auto mb-10">
          <BlurText
            text="Explora los eventos del Aniversario: tecnología, innovación, torneos y cultura."
            delay={50}
            animateBy="words"
            direction="top"
            className="text-lg sm:text-xl text-zinc-300 font-medium leading-relaxed"
          />
        </div>

        {/* Countdown to Oct 12, 2026 00:00 */}
        <Countdown targetDate="2026-10-12T00:00:00-04:00" />
      </div>
    </section>
  );
}
