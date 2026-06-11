"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function Atmosphere() {
  const images = [
    "/atmosphere_1.jpg",
    "/atmosphere_2.jpg",
    "/atmosphere_3.jpg",
    "/atmosphere_4.jpg",
    "/atmosphere_5.jpg",
    "/atmosphere_6.jpg",
  ];

  return (
    <section id="atmosphere" className="relative py-16 bg-[#080611] overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-[#8B5CF6]/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-[#38BDF8]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14102A] border border-[#8B5CF6]/20 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-3 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
            <Sparkles size={12} className="text-[#38BDF8]" />
            Атмосфера воркшопов
          </div>
          <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-[#F1EEFC] tracking-tight">
            Живые кадры с наших встреч
          </h2>
        </div>

        {/* Compact 3x2 Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#14102A]/20 aspect-video md:h-[220px] w-full hover:border-[#38BDF8]/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(56,189,248,0.1)]"
            >
              {/* Image background with scale effect */}
              <img
                src={src}
                alt={`Atmosphere ${index + 1}`}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Visual Overlays: subtle dark overlay that brightens on hover */}
              <div className="absolute inset-0 bg-[#080611]/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/5 via-transparent to-[#38BDF8]/5 pointer-events-none z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
