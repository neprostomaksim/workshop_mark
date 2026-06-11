"use client";

import React from "react";
import { CONFIG } from "@/lib/config";
import { Sparkles, ArrowRight, Instagram } from "lucide-react";
import { Button as MovingBorderButton } from "./ui/moving-border";

export default function FinalCTA() {
  return (
    <section className="relative py-24 bg-[#080611] overflow-hidden flex items-center justify-center">
      {/* Cyan-Violet Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-[#8B5CF6]/10 to-[#38BDF8]/10 blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center flex flex-col items-center gap-8">
        
        {/* Sparkle badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14102A] border border-[#38BDF8]/20 text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
          <Sparkles size={12} />
          Сделайте шаг в будущее
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#F1EEFC] tracking-tight max-w-2xl leading-[1.15]">
          Готовы создавать контент будущего?
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#38BDF8] font-mono font-bold tracking-wider uppercase">
          {CONFIG.date} • {CONFIG.duration} • Команда {CONFIG.communityName}
        </p>

        {/* Action Buttons with glowing border magic effect */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto mt-4">
          
          {/* Glowing Border Moving Border Button */}
          <MovingBorderButton
            as="a"
            href={CONFIG.checkoutUrl}
            borderRadius="9999px"
            containerClassName="w-full sm:w-auto h-auto min-h-[58px]"
            borderClassName="bg-[radial-gradient(#8B5CF6_40%,transparent_60%)]"
            className="px-8 py-4 bg-[#EC4899] hover:bg-[#d93b88] text-white font-bold text-lg transition duration-200 cursor-pointer shadow-[0_0_15px_rgba(236,72,153,0.3)] z-10 border-0 flex items-center justify-center gap-2"
          >
            <span>Записаться сейчас</span>
            <ArrowRight size={18} />
          </MovingBorderButton>

          <a
            href={CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#8B5CF6]/40 bg-[#14102A]/50 text-[#F1EEFC] font-semibold hover:bg-[#1A1535] hover:border-[#8B5CF6]/80 transition duration-200 cursor-pointer"
          >
            <Instagram size={18} className="text-[#EC4899]" />
            <span>Наш Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
}
