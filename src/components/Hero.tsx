"use client";

import React from "react";
import { Spotlight } from "./ui/spotlight";
import { BackgroundBeams } from "./ui/background-beams";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { CONFIG } from "@/lib/config";
import { ArrowRight, Instagram, Sparkles, Play, Image as ImageIcon, Video } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#080611] pt-4 pb-20">
      {/* Spotlight Ambient Lighting */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#8B5CF6" />
      <Spotlight className="top-0 right-0 md:right-20" fill="#38BDF8" />

      {/* Interactive Dot Grid Background */}
      <HeroHighlight containerClassName="py-0 min-h-0 h-auto bg-transparent border-0">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center relative z-10 w-full">
          
          {/* Left Side: Copy and CTAs (~55% width) */}
          <div className="w-full lg:w-[55%] flex flex-col items-start text-left gap-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14102A]/80 border border-[#8B5CF6]/30 shadow-[0_0_15px_rgba(139,92,246,0.15)] animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping"></span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-[#F1EEFC] uppercase">
                {CONFIG.date} • {CONFIG.duration}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-[#F1EEFC] leading-[1.15]">
              ИИ в маркетинге: <br />
              <Highlight className="mt-2 text-[#080611] inline-block">
                от контента до воронки
              </Highlight>{" "}
              <br />
              <span className="inline-block mt-2">за один день</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-[#9D96B8] max-w-2xl leading-relaxed font-sans">
              <span className="text-[#F1EEFC] font-semibold">AI-фотосессии, рекламные видео, креативы, говорящие аватары</span> и маркетинговые воронки. <br />
              Уйдёте с <span className="text-[#38BDF8] font-bold">готовым контентом</span> и <span className="text-[#8B5CF6] font-bold">работающей воронкой</span> для вашего бизнеса.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-4">
              <a
                href={CONFIG.checkoutUrl}
                className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white font-semibold shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] hover:scale-[1.02] active:scale-[0.98] transition duration-200 cursor-pointer"
              >
                <span>Записаться на воркшоп</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[#8B5CF6]/40 bg-[#14102A]/50 text-[#F1EEFC] font-semibold hover:bg-[#1A1535] hover:border-[#8B5CF6]/80 transition duration-200 cursor-pointer"
              >
                <Instagram size={18} className="text-[#EC4899]" />
                <span>Задать вопрос в Instagram</span>
              </a>
            </div>

            {/* Small Disclaimer */}
            <p className="text-xs text-[#9D96B8]/70 flex items-center gap-1.5 ml-2">
              <Sparkles size={12} className="text-[#38BDF8]" />
              Количество мест ограничено
            </p>
          </div>

          {/* Right Side: Futuristic AI Collage Mockup (~45% width, aligned to the right on desktop) */}
          <div className="w-full lg:w-[45%] relative flex justify-center lg:justify-end items-center min-h-[400px]">
            {/* Ambient Backlight Glow */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-[#38BDF8]/10 blur-[80px]"></div>
            
            {/* Main Mockup Card (Glassmorphism, horizontally stretched and shifted) */}
            <div className="w-full max-w-[500px] rounded-3xl border border-[#38BDF8]/20 bg-[#14102A]/30 backdrop-blur-xl p-5 shadow-[0_0_25px_rgba(56,189,248,0.15)] relative overflow-hidden flex flex-col gap-4 group hover:border-[#38BDF8]/40 hover:shadow-[0_0_35px_rgba(56,189,248,0.3)] transition duration-300">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/[0.05] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EC4899]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#38BDF8]"></div>
                </div>
                <span className="text-xs text-[#9D96B8] uppercase font-mono tracking-wider">M.AI.N Studio v1.0</span>
              </div>

              {/* Central Graphics: Neon abstract AI canvas with cropped horizontal photo inside */}
              <div className="w-full rounded-2xl bg-[#080611]/80 border border-white/[0.05] relative overflow-hidden flex flex-col justify-center p-4 min-h-[300px]">
                
                {/* Glowing workspace background lights */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/15 via-transparent to-[#38BDF8]/15"></div>
                
                {/* Cropped Photo Project Canvas: aspect-[1.35] crops the sides slightly */}
                <div className="w-full aspect-[1.35] rounded-xl border border-white/[0.08] overflow-hidden relative shadow-2xl z-10 transition-transform duration-500 group-hover:scale-[1.01]">
                  <img 
                    src="/workshop_hero.jpg" 
                    alt="M.AI.N Community Workshop" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080611]/60 via-transparent to-transparent"></div>
                  
                  {/* Subtle Neon Editor Badge */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[8px] font-mono text-[#38BDF8] tracking-widest uppercase z-20">
                    Live View
                  </div>
                </div>

                {/* Floating Card 1: AI Photo (Top-left overlaying canvas) */}
                <div className="absolute top-4 left-4 p-3 bg-[#1A1535]/95 border border-white/[0.1] rounded-xl flex items-center gap-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-20 -rotate-3 hover:rotate-0 transition duration-300 hover:scale-105">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#60A5FA] flex items-center justify-center text-white">
                    <ImageIcon size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#9D96B8] uppercase">Generation</span>
                    <span className="text-xs font-bold text-[#F1EEFC]">AI-Фотосессия</span>
                  </div>
                </div>

                {/* Floating Card 2: AI Video (Bottom-right overlaying canvas) */}
                <div className="absolute bottom-4 right-4 p-3 bg-[#1A1535]/95 border border-white/[0.1] rounded-xl flex items-center gap-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] z-20 rotate-3 hover:rotate-0 transition duration-300 hover:scale-105">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#EC4899] to-[#8B5CF6] flex items-center justify-center text-white">
                    <Video size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-[#9D96B8] uppercase">Rendering</span>
                    <span className="text-xs font-bold text-[#F1EEFC]">Промо-Видео</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="flex items-center justify-between bg-[#1A1535]/40 border border-white/[0.04] p-3 rounded-xl">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#9D96B8]">Воркшоп</span>
                  <span className="text-xs font-semibold text-[#F1EEFC]">18 июня • Практика</span>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[10px] font-bold text-[#38BDF8] uppercase tracking-wide">
                  Живая практика
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeroHighlight>

      {/* Decorative Beams Background layer */}
      <BackgroundBeams className="opacity-30" />
    </section>
  );
}
