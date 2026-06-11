"use client";

import React from "react";
import { Users } from "lucide-react";

export default function Team() {
  const stats = [
    { label: "выпускников", value: "500+" },
    { label: "воркшопов", value: "30+" },
    { label: "корпоративных программ", value: "10+" },
    { label: "года практики", value: "2 года" },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Никита",
      designation: "AI Producer",
      image: "/ai_avatar.png",
    },
    {
      id: 2,
      name: "Даниил",
      designation: "Tech Lead",
      image: "/ai_fashion_portrait.png",
    },
    {
      id: 3,
      name: "Александра",
      designation: "Creative Director",
      image: "/ai_product_design.png",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#080611] overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-[#8B5CF6]/5 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Stats and Info (45% width approx) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left gap-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14102A] border border-[#8B5CF6]/20 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider">
            <Users size={12} />
            Организаторы воркшопа
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#F1EEFC] tracking-tight leading-tight">
            Команда M.AI.N
          </h2>
          <p className="text-base text-[#9D96B8] leading-relaxed font-sans">
            M.AI.N — AI-сообщество для предпринимателей и специалистов. Мы обучаем, внедряем ИИ-инструменты и сопровождаем на всех этапах. 
            Проводим воркшопы, корпоративные тренинги и мастер-классы. Даём не теорию, а реальные прикладные решения, которые вы начнёте использовать уже завтра.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 w-full mt-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-[#14102A]/40 border border-white/[0.04] rounded-2xl flex flex-col items-start gap-1"
              >
                <span className="text-3xl md:text-4xl font-heading font-black text-gradient">
                  {stat.value}
                </span>
                <span className="text-xs text-[#9D96B8] font-medium leading-tight uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Team Photo */}
        <div className="lg:col-span-7 flex justify-center w-full relative group">
          {/* Subtle background glow behind the photo */}
          <div className="absolute -inset-4 rounded-[32px] bg-[#8B5CF6]/15 blur-3xl opacity-50 group-hover:opacity-75 transition duration-500 pointer-events-none"></div>
          
          <img
            src="/team_photo.png"
            alt="Команда M.AI.N COMMUNITY"
            className="rounded-3xl border border-white/[0.08] shadow-2xl w-full max-w-[640px] relative z-10 transition duration-300 hover:border-white/[0.15] hover:scale-[1.01]"
          />
        </div>

      </div>
    </section>
  );
}
