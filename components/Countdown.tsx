"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setIsMounted(true);
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return newTimeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isMounted) return null; // Avoid hydration mismatch

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex gap-4 sm:gap-6 justify-center mt-10">
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
  );
}
