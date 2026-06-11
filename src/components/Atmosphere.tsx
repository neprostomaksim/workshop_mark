"use client";

import React from "react";
import { Users, Laptop, Mic, Sparkles, MessageSquare } from "lucide-react";

export default function Atmosphere() {
  const items = [
    {
      id: 1,
      image: "/atmosphere_1.jpg",
      title: "Наше комьюнити",
      description: "Более 30 активных участников воркшопа объединились для изучения ИИ.",
      icon: <Users size={16} className="text-[#38BDF8]" />,
      badge: "Комьюнити",
      gridClass: "md:col-span-2 md:row-span-1 h-[320px] md:h-[350px]",
    },
    {
      id: 2,
      image: "/atmosphere_2.jpg",
      title: "Лекционный разбор",
      description: "Живая работа над реальными бизнес-кейсами участников воркшопа.",
      icon: <Laptop size={16} className="text-[#8B5CF6]" />,
      badge: "Практика",
      gridClass: "md:col-span-1 md:row-span-2 h-[400px] md:h-[720px]",
    },
    {
      id: 3,
      image: "/atmosphere_3.jpg",
      title: "Спикер Макс",
      description: "Пошаговый разбор ИИ-инструментов, промтов и рабочих связок.",
      icon: <Mic size={16} className="text-[#EC4899]" />,
      badge: "Лектор",
      gridClass: "md:col-span-1 md:row-span-1 h-[320px] md:h-[350px]",
    },
    {
      id: 4,
      image: "/atmosphere_4.jpg",
      title: "Интерактивный воркшоп",
      description: "Совместная генерация воронок и контента в режиме реального времени.",
      icon: <MessageSquare size={16} className="text-[#38BDF8]" />,
      badge: "Интерактив",
      gridClass: "md:col-span-1 md:row-span-1 h-[320px] md:h-[350px]",
    },
  ];

  return (
    <section id="atmosphere" className="relative py-24 bg-[#080611] overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-[#8B5CF6]/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[35%] h-[35%] rounded-full bg-[#38BDF8]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14102A] border border-[#8B5CF6]/20 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(139,92,246,0.1)]">
            <Sparkles size={12} className="animate-pulse" />
            Как проходят встречи
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#F1EEFC] tracking-tight mb-4 leading-tight">
            Атмосфера наших воркшопов
          </h2>
          <p className="text-sm md:text-base text-[#9D96B8] leading-relaxed max-w-2xl">
            Посмотрите, как проходят наши офлайн-встречи. Это не скучные лекции, а живой нетворкинг, разбор реальных кейсов участников и практическая работа с нейросетями за ноутбуками.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-min">
          {items.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden border border-white/[0.06] bg-[#14102A]/20 backdrop-blur-sm flex flex-col justify-end p-6 md:p-8 hover:border-[#38BDF8]/30 transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)] ${item.gridClass}`}
            >
              {/* Image background with scale effect */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                {/* Visual Overlays: Dark gradient + subtle color tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080611] via-[#080611]/40 to-transparent z-10 transition-opacity duration-300 opacity-90 group-hover:opacity-95"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/5 via-transparent to-[#38BDF8]/5 z-10"></div>
              </div>

              {/* Card Contents */}
              <div className="relative z-20 flex flex-col gap-3">
                {/* Badge and Icon */}
                <div className="flex items-center gap-2 self-start">
                  <div className="flex items-center justify-center p-2 rounded-lg bg-[#080611]/80 border border-white/[0.08] backdrop-blur-md">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9D96B8] bg-[#080611]/60 px-2.5 py-1 rounded-full border border-white/[0.04] backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>

                {/* Text Metadata */}
                <div>
                  <h3 className="text-xl font-heading font-extrabold text-[#F1EEFC] mb-2 group-hover:text-[#38BDF8] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#9D96B8] leading-relaxed group-hover:text-[#F1EEFC]/90 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
