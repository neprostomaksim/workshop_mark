"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: "Нужен ли опыт в дизайне или маркетинге?",
      a: "Нет. Воркшоп разработан специально для людей без сложного технического бэкграунда. Всё объясняется пошагово — от регистрации в сервисах до сборки вашей первой готовой маркетинговой воронки.",
    },
    {
      q: "Что нужно взять с собой на воркшоп?",
      a: "Вам понадобится только ваш рабочий ноутбук с возможностью подключения к интернету и зарядное устройство. Всё программное обеспечение, которое мы будем использовать, либо бесплатное, либо имеет пробный период. Настройку мы проведем вместе на месте.",
    },
    {
      q: "Будут ли доступны записи и материалы?",
      a: "Да, все зарегистрированные участники получают неограниченный по времени доступ к полным видеозаписям блоков воркшопа, а также ко всем шаблонам, чек-листам и промптам.",
    },
    {
      q: "Можно ли вернуть деньги, если планы изменятся?",
      a: "Да, мы гарантируем 100% возврат стоимости билета при обращении не позднее, чем за 3 дня до начала воркшопа (до 15 июня включительно).",
    },
    {
      q: "Что я смогу самостоятельно делать после воркшопа?",
      a: "Вы научитесь на профессиональном уровне генерировать фотосессии продуктов и лица, монтировать вирусные промо-ролики, пачками создавать рекламные баннеры, настраивать говорящих ИИ-аватаров и увязывать это в автоворонку.",
    },
    {
      q: "Где именно будет проходить воркшоп?",
      a: "Точное место проведения воркшопа мы сообщим в письме-подтверждении сразу после успешной регистрации и оплаты билета. Это будет современная комфортная локация в центре города. Также следите за обновлениями в нашем Instagram.",
    },
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="relative py-24 bg-[#080611] overflow-hidden">
      {/* Spotlight blur */}
      <div className="absolute top-[30%] left-[-15%] w-[40%] h-[40%] rounded-full bg-[#8B5CF6]/5 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Title and Subtext (40% width approx) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left lg:sticky lg:top-28 h-fit gap-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14102A] border border-[#38BDF8]/20 text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
            <HelpCircle size={12} />
            Часто задаваемые вопросы
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#F1EEFC] tracking-tight leading-tight">
            Остались вопросы? <br />
            Мы подготовили ответы
          </h2>
          <p className="text-base text-[#9D96B8] leading-relaxed font-sans max-w-sm">
            Если вашего вопроса нет в списке, напишите нам напрямую в Instagram — мы поможем со всем разобраться.
          </p>
        </div>

        {/* Right Side: Interactive Accordion (60% width approx) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#14102A] border-[#8B5CF6]/40"
                    : "bg-[#14102A]/40 border-white/[0.04] hover:border-white/[0.08]"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
                >
                  <span className="font-heading font-bold text-base md:text-lg text-[#F1EEFC] pr-4">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "bg-[#8B5CF6] text-white rotate-180" : "bg-white/[0.03] text-[#9D96B8] hover:bg-white/[0.05]"
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Accordion Expandable Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-white/[0.04] p-6 md:p-8 pt-0 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-sm md:text-base text-[#9D96B8] leading-relaxed pt-4">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
