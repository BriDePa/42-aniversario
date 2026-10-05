"use client";

import React, { useState, useEffect } from "react";
import { ANIVERSARIO_METADATA } from "@/lib/eventsData";
import ProfileCard from "./ProfileCard";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Contact } from "lucide-react";

export function StaffCarousel() {
  const staffMembers = ANIVERSARIO_METADATA.staffsVentaEntradas as Array<{ nombre: string; telefono: string; enlace: string }>;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % staffMembers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [staffMembers.length]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % staffMembers.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + staffMembers.length) % staffMembers.length);

  return (
    <div className="w-full flex flex-col items-center justify-center py-4">
      <div className="relative w-full max-w-sm mx-auto aspect-[0.718] flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50, scale: 0.9, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, x: -50, scale: 0.9, rotateY: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full absolute"
          >
            <ProfileCard
              name={staffMembers[currentIndex].nombre}
              title="Staff Autorizado"
              handle={staffMembers[currentIndex].telefono.substring(3)}
              status="Online"
              contactText="Comprar Entrada"
              avatarUrl={`https://api.dicebear.com/9.x/avataaars/svg?seed=${staffMembers[currentIndex].nombre}&backgroundColor=transparent`}
              innerGradient="linear-gradient(145deg, rgba(16,0,30,0.9) 0%, rgba(236,72,153,0.2) 100%)"
              behindGlowColor="#ec4899"
              onContactClick={() => window.open(staffMembers[currentIndex].enlace, "_blank")}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex gap-4 mt-8 z-10">
        <button 
          onClick={handlePrev} 
          className="w-12 h-12 rounded-full bg-[#0a0a0a] hover:bg-white/10 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-colors"
          aria-label="Anterior Staff"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center gap-2">
          {staffMembers.map((_, idx: number) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-fuchsia-500 w-6' : 'bg-white/20'}`}
              aria-label={`Ir a staff ${idx + 1}`}
            />
          ))}
        </div>
        <button 
          onClick={handleNext} 
          className="w-12 h-12 rounded-full bg-[#0a0a0a] hover:bg-white/10 text-white flex items-center justify-center border border-white/20 backdrop-blur-md transition-colors"
          aria-label="Siguiente Staff"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
