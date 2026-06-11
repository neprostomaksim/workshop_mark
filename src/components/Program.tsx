"use client";

import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import { Clock, Award, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Program() {
  const programItems = [
    {
      time: "10:00 — 10:30",
      title: "Знакомство и введение",
      duration: "30 мин",
      description: <>Знакомство с командой M.AI.N, <span className="text-[#38BDF8] font-bold">демонстрация готовых кейсов</span>, которые вы создадите к концу дня. Первичная настройка нейросетей и инструментов на ваших ноутбуках.</>,
      tags: ["Старт", "Настройка ПО"],
      type: "intro",
    },
    {
      time: "10:30 — 11:30",
      title: "ИИ-агенты для копирайтинга",
      duration: "1 ч",
      description: <>Проектирование и <span className="text-white font-semibold">создание вашего личного AI-ассистента</span>, генерирующего сценарии, рекламные тексты и продающие описания по вашему индивидуальному брифу.</>,
      tags: ["ChatGPT", "Промптинг", "Практика"],
      type: "regular",
    },
    {
      time: "11:30 — 13:00",
      title: "ИИ-фотосессии",
      duration: "1.5 ч",
      description: <>Пошаговая <span className="text-[#38BDF8] font-bold">генерация фотореалистичных кадров</span> для бренда и продуктов. Создание портретов без фотографов, арендных студий и дорогостоящей техники.</>,
      tags: ["Midjourney", "Stable Diffusion", "Фотореализм"],
      type: "regular",
    },
    {
      time: "13:00 — 14:00",
      title: "Рекламные креативы",
      duration: "1 ч",
      description: <><span className="text-white font-semibold">Создание баннеров и макетов</span> для таргетированной рекламы. Научимся генерировать 50 уникальных вариаций за минуты.</>,
      tags: ["Реклама", "Дизайн", "Креативы"],
      type: "regular",
    },
    {
      time: "14:00 — 15:00",
      title: "Разговорные ИИ-аватары",
      duration: "1 ч",
      description: <><span className="text-[#8B5CF6] font-bold">Создание говорящего аватара</span> с вашей внешностью и голосом. Автоматический липсинк (синхронизация губ), клонирование голоса и генерация сценариев.</>,
      tags: ["HeyGen", "ElevenLabs", "Аватары"],
      type: "regular",
    },
    {
      time: "15:00 — 15:30",
      title: "☕ Кофебрейк & Нетворкинг",
      duration: "30 мин",
      description: "Перерыв, чай, кофе, легкие угощения. Живое неформальное общение с экспертами M.AI.N и другими участниками воркшопа.",
      tags: ["Отдых", "Кофе", "Нетворкинг"],
      type: "break",
    },
    {
      time: "15:30 — 16:30",
      title: "Построение ИИ-воронок",
      duration: "1 ч",
      description: <><span className="text-white font-semibold">Сборка материалов в автоворонку</span>: от первого клика по рекламе до покупки.</>,
      tags: ["Маркетинг", "Конверсии", "Воронки"],
      type: "regular",
    },
    {
      time: "16:30 — 20:30",
      timeDetail: "Главный блок воркшопа",
      title: "Рекламные видео с ИИ",
      duration: "4 ч",
      description: <>Полный практический цикл создания видеоконтента. На выходе — <span className="text-[#38BDF8] font-bold">полностью готовое рекламное видео</span> для Reels/YouTube Shorts/рекламы.</>,
      tags: ["Runway Gen-3", "Luma Dream Machine", "Видеомонтаж", "Практика"],
      type: "highlight",
    },
  ];

  return (
    <section id="program" className="relative py-24 bg-[#080611] overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute top-[40%] right-[-10%] w-[35%] h-[35%] rounded-full bg-[#8B5CF6]/5 blur-[100px]"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14102A] border border-[#8B5CF6]/20 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-4">
            <Clock size={12} />
            Расписание занятий
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#F1EEFC] tracking-tight mb-4 leading-tight">
            Программа дня: 10:00 → 20:30
          </h2>
          <p className="text-base md:text-lg text-[#38BDF8] font-semibold">
            10 часов интенсивной практики + кофебрейк и разборы ваших проектов
          </p>
        </div>

        {/* Tracing Beam Wrapper */}
        <TracingBeam className="px-6 md:px-0">
          <div className="flex flex-col gap-10">
            {programItems.map((item, index) => {
              const isEven = index % 2 === 1;
              const isBreak = item.type === "break";
              const isHighlight = item.type === "highlight";

              // 1. Coffee Break centered badge
              if (isBreak) {
                return (
                  <div key={index} className="w-full flex justify-center my-6 relative z-20">
                    <div className="px-6 py-3 rounded-full bg-[#1A1535]/90 border border-[#EC4899]/30 text-center flex items-center gap-2 shadow-[0_0_15px_rgba(236,72,153,0.15)] backdrop-blur-sm">
                      <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse"></span>
                      <span className="text-xs md:text-sm font-semibold text-[#F1EEFC]">
                        {item.time} • {item.title} ({item.duration})
                      </span>
                    </div>
                  </div>
                );
              }

              // 2. Highlight block centered and wider with cyan-violet gradient border
              if (isHighlight) {
                return (
                  <div
                    key={index}
                    className="w-full md:w-[85%] md:mx-auto rounded-3xl bg-gradient-to-r from-[#38BDF8] to-[#8B5CF6] p-[1px] shadow-[0_0_35px_rgba(56,189,248,0.15)] z-20 relative"
                  >
                    <div className="p-6 md:p-8 rounded-[23px] bg-[#14102A] w-full h-full relative flex flex-col gap-3">
                      {/* Highlight Badge */}
                      <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#38BDF8] text-[10px] font-bold uppercase tracking-wider text-white shadow-md flex items-center gap-1">
                        <Sparkles size={10} />
                        Главный блок
                      </div>

                      {/* Meta: Time and Duration */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#8B5CF6]/20 text-[#A78BFA] border border-[#8B5CF6]/30">
                          {item.time}
                        </span>
                        <span className="text-xs text-[#9D96B8] flex items-center gap-1">
                          <Clock size={12} />
                          {item.duration}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-heading font-extrabold text-[#F1EEFC] mt-1">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-[#9D96B8] leading-relaxed">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3 pt-4 border-t border-white/[0.04]">
                        {item.tags.map((tag, tIndex) => (
                          <span
                            key={tIndex}
                            className="text-[10px] md:text-xs font-medium px-2.5 py-1 rounded-full bg-[#080611] text-[#9D96B8] border border-white/[0.04]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // 3. Regular block in zigzag layout
              return (
                <div
                  key={index}
                  className={cn(
                    "w-full md:w-[calc(50%-15px)] p-6 md:p-8 rounded-3xl border transition duration-300 relative bg-[#14102A]/70 border-white/[0.05] hover:border-white/[0.12] z-20",
                    isEven ? "md:ml-auto md:border-l-2 md:border-l-[#8B5CF6]/40" : "md:mr-auto md:border-r-2 md:border-r-[#38BDF8]/40"
                  )}
                >
                  <div className="flex flex-col gap-3">
                    {/* Meta: Time and Duration */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/[0.03] text-[#60A5FA] border border-white/[0.05]">
                        {item.time}
                      </span>
                      <span className="text-xs text-[#9D96B8] flex items-center gap-1">
                        <Clock size={12} />
                        {item.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-heading font-extrabold text-[#F1EEFC] mt-1">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-[#9D96B8] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3 pt-4 border-t border-white/[0.04]">
                      {item.tags.map((tag, tIndex) => (
                        <span
                          key={tIndex}
                          className="text-[10px] md:text-xs font-medium px-2.5 py-1 rounded-full bg-[#080611] text-[#9D96B8] border border-white/[0.04]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TracingBeam>

        {/* Timeline Summary Bottom Footer */}
        <div className="mt-16 flex flex-col items-center justify-center text-center p-6 border border-white/[0.05] bg-[#14102A]/40 rounded-2xl max-w-xl mx-auto shadow-inner">
          <Award size={24} className="text-[#38BDF8] mb-2" />
          <p className="text-sm font-semibold text-[#F1EEFC]">
            Финиш в 20:30 • Уходите с портфолио готового контента и работающей воронкой
          </p>
        </div>

      </div>
    </section>
  );
}
