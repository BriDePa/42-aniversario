"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EventCard } from "./EventCard";
import { EventItem } from "@/lib/eventsData";
import { EventModal } from "./EventModal";

export function EventsCarousel({ events = [] }: { events?: EventItem[] }) {
  const [activeIndex, setActiveIndex] = useState(2); // Start with a middle card highlighted
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Show a subset of unique events for the featured carousel
  const uniqueEvents = Array.from(new Map((events || []).map(e => [e.evento_id || e.id, e])).values());
  const featuredEvents = uniqueEvents.slice(0, 8);

  const scrollLeft = () => {
    if (activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  const scrollRight = () => {
    if (activeIndex < featuredEvents.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
  };

  // Center the active card
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = window.innerWidth < 640 ? 280 : 320; // Approx card width
      const gap = 16;
      const scrollPosition = (activeIndex * (cardWidth + gap)) - (container.clientWidth / 2) + (cardWidth / 2);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <section className="py-20 bg-[#0B0813] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative">
          
          {/* Navigation Buttons */}
          <button 
            onClick={scrollLeft}
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-30 p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={scrollRight}
            disabled={activeIndex === featuredEvents.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-30 p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Track */}
          <div 
            ref={containerRef}
            className="flex items-center gap-4 py-10 overflow-x-hidden snap-x snap-mandatory px-[50vw] sm:px-[30vw] -mx-[50vw] sm:-mx-[30vw]"
            style={{ scrollbarWidth: 'none' }}
          >
            {featuredEvents.map((event, index) => (
              <div 
                key={event.id}
                onClick={() => {
                  if (activeIndex === index) {
                    setSelectedEvent(event);
                  } else {
                    setActiveIndex(index);
                  }
                }}
                className="snap-center"
              >
                <EventCard 
                  {...event} 
                  isCenter={index === activeIndex} 
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
      
      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
