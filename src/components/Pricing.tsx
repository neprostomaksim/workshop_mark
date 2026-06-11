"use client";

import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { Check, Sparkles } from "lucide-react";
import { CONFIG } from "@/lib/config";

export default function Pricing() {
  const features = [
    <>
      <span className="text-[#38BDF8] font-bold">10 часов</span> очной интенсивной практики
    </>,
    <>
      <span className="text-[#8B5CF6] font-bold">Все учебные материалы</span>, инструкции и промпты
    </>,
    <>
      <span className="text-[#60A5FA] font-bold">Пожизненный доступ</span> к записям лекций
    </>,
    <>
      <span className="text-[#38BDF8] font-bold">Закрытый чат поддержки</span> участников воркшопа
    </>,
    <>
      <span className="text-[#EC4899] font-bold">Разбор</span> вашего личного бизнес-проекта
    </>,
  ];

  return (
    <section id="pricing" className="relative py-24 bg-[#080611] overflow-hidden flex items-center justify-center">
      {/* Huge Decorative Watermark "700" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <div className="font-heading font-black text-[#8B5CF6]/3 text-[24rem] md:text-[36rem] leading-none translate-y-[-10%] select-none">
          700
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14102A] border border-[#EC4899]/20 text-xs font-bold text-[#EC4899] uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            Стоимость участия
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#F1EEFC] tracking-tight mb-2">
            Инвестиция в ваши навыки
          </h2>
          <p className="text-sm text-[#9D96B8] leading-relaxed">
            Цена поднимется ближе к мероприятию. Зафиксируйте стоимость сегодня.
          </p>
        </div>

        {/* Pricing Card wrapped in BackgroundGradient */}
        <div className="w-full max-w-lg relative group">
          {/* Ambient Background Glow behind the card */}
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-[#8B5CF6]/20 via-[#38BDF8]/15 to-[#EC4899]/20 blur-3xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

          <BackgroundGradient className="rounded-[24px] p-8 bg-[#14102A] border border-white/[0.04]">
            
            {/* Header */}
            <div className="flex flex-col items-start gap-2">
              <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-widest font-mono">
                Интенсивный тариф
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-[#F1EEFC]">
                Участие в воркшопе
              </h3>
            </div>

            {/* Price */}
            <div className="my-8 flex items-baseline gap-2">
              <span className="text-gradient font-heading font-black text-6xl md:text-7xl tracking-tight">
                {CONFIG.price}
              </span>
              <span className="text-sm text-[#9D96B8] font-medium">/ весь воркшоп</span>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/[0.05] my-6"></div>

            {/* Features list */}
            <ul className="flex flex-col gap-4 my-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-left">
                  <div className="w-5 h-5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-[#38BDF8]" />
                  </div>
                  <span className="text-sm md:text-base text-[#F1EEFC]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <div className="mt-8 flex flex-col gap-4">
              <a
                href={CONFIG.checkoutUrl}
                className="w-full text-center py-4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white font-bold text-lg shadow-[0_0_25px_rgba(236,72,153,0.35)] hover:shadow-[0_0_35px_rgba(236,72,153,0.55)] hover:scale-[1.01] transition duration-200 cursor-pointer"
              >
                Записаться и оплатить
              </a>

              <a
                href={CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-xs md:text-sm font-semibold text-[#9D96B8] hover:text-[#38BDF8] transition duration-200"
              >
                Есть вопросы? Напишите нам в Instagram →
              </a>
            </div>

          </BackgroundGradient>
        </div>

        {/* Pricing Subtitle Footer */}
        <p className="text-xs text-[#9D96B8] mt-6 font-medium tracking-wide">
          Количество мест строго ограничено • 18 июня, старт в 10:00
        </p>

      </div>
    </section>
  );
}
