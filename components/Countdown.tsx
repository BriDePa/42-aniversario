"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string;
  targetTitle?: string;
  fallbackTargetDate?: string;
  fallbackTargetTitle?: string;
}

export function Countdown({ 
  targetDate, 
  targetTitle = "Inicio de la Semana",
  fallbackTargetDate,
  fallbackTargetTitle = "Gran Fiesta Alcohoritmo"
}: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [activeLabel, setActiveLabel] = useState<string>(targetTitle);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const calculateTimeLeft = () => {
      const now = +new Date();
      let diff = +new Date(targetDate) - now;
      let label = targetTitle;

      // Si la fecha objetivo ya pasó y hay una fecha de respaldo (ej. La Gran Fiesta)
      if (diff <= 0 && fallbackTargetDate) {
        const fallbackDiff = +new Date(fallbackTargetDate) - now;
        if (fallbackDiff > 0) {
          diff = fallbackDiff;
          label = fallbackTargetTitle;
        }
      }

      if (diff > 0) {
        setIsCompleted(false);
        setActiveLabel(label);
        return {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        };
      } else {
        setIsCompleted(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, targetTitle, fallbackTargetDate, fallbackTargetTitle]);

  if (!isMounted) return null; // Avoid hydration mismatch

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (isCompleted && !fallbackTargetDate) {
    return (
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-sm tracking-wider uppercase">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          ¡Semana Aniversario en Vivo!
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10">
      {activeLabel && (
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-fuchsia-300/80 mb-3 bg-fuchsia-500/10 px-3 py-1 rounded-full border border-fuchsia-500/20">
          Cuenta Regresiva • {activeLabel}
        </span>
      )}
      <div className="flex gap-4 sm:gap-6 justify-center">
        {[
          { label: 'Días', value: timeLeft.days },
          { label: 'Horas', value: timeLeft.hours },
          { label: 'Minutos', value: timeLeft.minutes },
          { label: 'Segundos', value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-fuchsia-500/20 blur-md rounded-xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"></div>
              <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-2xl">
                <span className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-wider">
                  {formatNumber(item.value)}
                </span>
              </div>
            </div>
            <span className="mt-2 text-xs sm:text-sm font-medium text-zinc-400 uppercase tracking-widest">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
