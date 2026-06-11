"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Sparkles } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      quote: "Воркшоп полностью перевернул мой подход к работе. Раньше я тратила часы в Canva и на стоках, теперь весь визуал для 4 клиентов делаю за полчаса с помощью Midjourney. Клиенты в восторге от качества!",
      name: "Анна Ковалева",
      title: "SMM-специалист, фрилансер",
    },
    {
      quote: "Скептически относился к ИИ, но за день на воркшопе собрал рабочий ролик для нашего нового продукта и запустил простую воронку в Telegram. Видео сгенерировано полностью нейросетями, сэкономил кучу денег на продакшене.",
      name: "Дмитрий Морозов",
      title: "Основатель стартапа TechFlow",
    },
    {
      quote: "Благодаря M.AI.N внедрила ИИ-ассистентов в работу отдела маркетинга. Теперь пишем гипотезы, генерируем креативы для тестов и озвучиваем Reels в 5 раз быстрее. Это лучший практикум, на котором я была.",
      name: "Екатерина Смирнова",
      title: "Директор по маркетингу, RetailGroup",
    },
    {
      quote: "Сделать говорящего аватара со своим лицом и голосом казалось фантастикой. На воркшопе создала его за час! Теперь пилю экспертные Reels без бесконечных перезаписей и дублей. Продуктивность выросла до космоса.",
      name: "Мария Соколова",
      title: "Блогер, контент-мейкер",
    },
  ];

  return (
    <section className="relative py-24 bg-[#080611] overflow-hidden">
      {/* Decorative gradient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-[#8B5CF6]/3 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14102A] border border-[#8B5CF6]/20 text-xs font-bold text-[#8B5CF6] uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            Отзывы участников
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#F1EEFC] tracking-tight mb-4">
            Что говорят выпускники
          </h2>
          <p className="text-sm md:text-base text-[#9D96B8] leading-relaxed">
            Отзывы участников прошлых потоков воркшопов и корпоративных программ от команды M.AI.N.
          </p>
        </div>

        {/* Infinite Moving Cards Container */}
        <div className="flex flex-col items-center justify-center relative w-full overflow-hidden">
          <InfiniteMovingCards
            items={reviews}
            direction="left"
            speed="normal"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
}
