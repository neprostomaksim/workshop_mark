"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function TargetAudience() {
  const cards = [
    {
      role: "SMM-специалист",
      description: "Уникальный визуал и вовлекающие видео для клиентов за считанные минуты вместо многочасовых стоков и Canva.",
      badge: "Для фрилансеров",
      staggerClass: "md:translate-y-0",
      gradient: "from-[#38BDF8] to-[#8B5CF6]",
      shadow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]",
      border: "hover:border-[#38BDF8]/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4">
          <defs>
            <linearGradient id="smm-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
          {/* Abstract SMM Grid with mobile container */}
          <rect x="25" y="15" width="50" height="70" rx="8" fill="none" stroke="url(#smm-grad)" strokeWidth="2" />
          <circle cx="50" cy="76" r="3" fill="url(#smm-grad)" />
          {/* Floating post box */}
          <rect x="33" y="25" width="34" height="24" rx="4" fill="url(#smm-grad)" fillOpacity="0.2" stroke="url(#smm-grad)" strokeWidth="1.5" />
          {/* Sparkles around */}
          <path d="M15 30l3 3-3 3-3-3zM80 40l2 2-2 2-2-2zM75 20l4 4-4 4-4-4z" fill="#38BDF8" />
        </svg>
      ),
    },
    {
      role: "Предприниматель",
      description: "AI-маркетинг без найма дорогого дизайнера, видеографа и таргетолога. Запускайте воронки продаж самостоятельно.",
      badge: "Для бизнеса",
      staggerClass: "md:translate-y-6",
      gradient: "from-[#8B5CF6] to-[#EC4899]",
      shadow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.12)]",
      border: "hover:border-[#EC4899]/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4">
          <defs>
            <linearGradient id="biz-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          {/* Rocket and speed rings */}
          <circle cx="50" cy="50" r="30" fill="none" stroke="url(#biz-grad)" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M50 20l12 25h-24z" fill="url(#biz-grad)" fillOpacity="0.3" stroke="url(#biz-grad)" strokeWidth="2" />
          <path d="M50 45v25M44 55h12" stroke="url(#biz-grad)" strokeWidth="2" strokeLinecap="round" />
          {/* Spark paths */}
          <circle cx="70" cy="30" r="4" fill="#EC4899" />
          <circle cx="30" cy="70" r="3" fill="#8B5CF6" />
        </svg>
      ),
    },
    {
      role: "Маркетолог",
      description: "50 креативов за час, видео за 30 минут, воронка за день. Тестируйте десятки гипотез в реальном времени.",
      badge: "Для профи",
      staggerClass: "md:translate-y-2",
      gradient: "from-[#60A5FA] to-[#38BDF8]",
      shadow: "hover:shadow-[0_0_30px_rgba(96,165,250,0.12)]",
      border: "hover:border-[#60A5FA]/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4">
          <defs>
            <linearGradient id="mkt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
          {/* Megaphone and data waves */}
          <path d="M25 40h15l15-15v50L40 60H25z" fill="url(#mkt-grad)" fillOpacity="0.2" stroke="url(#mkt-grad)" strokeWidth="2" />
          <path d="M62 38c4 4 4 10 0 14M69 31c7 7 7 21 0 28" stroke="url(#mkt-grad)" strokeWidth="2" strokeLinecap="round" />
          {/* Floating chart bar */}
          <rect x="78" y="45" width="4" height="20" rx="1" fill="#38BDF8" />
          <rect x="85" y="35" width="4" height="30" rx="1" fill="#60A5FA" />
        </svg>
      ),
    },
    {
      role: "Контент-мейкер",
      description: "Добавьте мощные AI-инструменты в свой рабочий арсенал. Увеличьте продуктивность в 5-10 раз без потери качества.",
      badge: "Для блогеров",
      staggerClass: "md:translate-y-8",
      gradient: "from-[#EC4899] to-[#8B5CF6]",
      shadow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.12)]",
      border: "hover:border-[#EC4899]/40",
      svg: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mb-4">
          <defs>
            <linearGradient id="con-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
          {/* Target canvas with camera lens symbol */}
          <circle cx="50" cy="50" r="25" fill="none" stroke="url(#con-grad)" strokeWidth="2" />
          <circle cx="50" cy="50" r="12" fill="url(#con-grad)" fillOpacity="0.3" stroke="url(#con-grad)" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="4" fill="#F1EEFC" />
          <path d="M20 50h10M70 50h10M50 20v10M50 70v10" stroke="url(#con-grad)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 bg-[#080611] overflow-hidden">
      {/* Decorative spotlights */}
      <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[35%] rounded-full bg-[#38BDF8]/5 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14102A] border border-[#EC4899]/20 text-xs font-bold text-[#EC4899] uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            Целевая аудитория
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#F1EEFC] tracking-tight mb-4">
            Для кого этот воркшоп
          </h2>
          <p className="text-sm md:text-base text-[#9D96B8] leading-relaxed">
            Если вы работаете в цифровой среде или управляете бизнесом, ИИ — это ваш главный рычаг кратного роста в 2026 году.
          </p>
        </div>

        {/* Staggered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 bg-[#14102A] border border-white/[0.05] rounded-3xl flex flex-col justify-between items-start gap-6 transition-all duration-300 group ${card.border} ${card.shadow} ${card.staggerClass}`}
            >
              <div className="w-full flex flex-col items-start">
                <span className="text-[10px] font-bold text-[#9D96B8] uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/[0.04] mb-4">
                  {card.badge}
                </span>
                
                {/* SVG Graphics */}
                <div className="group-hover:scale-110 transition duration-300 origin-left">
                  {card.svg}
                </div>

                <h3 className={`text-xl font-heading font-extrabold mb-2 mt-2 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                  {card.role}
                </h3>
                
                <p className="text-sm text-[#9D96B8] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Glowing highlight indicator */}
              <div className="w-full h-1 bg-[#1A1535] rounded-full overflow-hidden mt-4">
                <div className={`w-0 group-hover:w-full h-full bg-gradient-to-r ${card.gradient} transition-all duration-500 rounded-full`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
