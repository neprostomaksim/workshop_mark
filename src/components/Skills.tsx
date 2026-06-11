"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { BentoGrid } from "./ui/bento-grid";
import { Camera, Video, Paintbrush, MessageSquareCode, Workflow, Sparkles } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function Skills() {
  const skillsList = [
    {
      num: "01",
      icon: <Camera className="w-8 h-8 text-[#38BDF8]" />,
      title: "AI-фотосессии",
      description: <>Фотосессии для личного бренда и продуктов <span className="text-[#F1EEFC] font-semibold">без фотографа</span>. Фотореалистично — <span className="text-[#38BDF8] font-semibold">не отличить от реальных съемок</span> в студии.</>,
      colSpan: "md:col-span-2",
      badge: "Популярно",
    },
    {
      num: "02",
      icon: <Video className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Рекламные видео",
      description: <>Промо-ролики, Reels, Tik-Tok и product-видео. <span className="text-[#8B5CF6] font-semibold">Профессиональный видеоконтент</span> за считанные минуты.</>,
      colSpan: "md:col-span-1",
      badge: "Быстрый запуск",
    },
    {
      num: "03",
      icon: <Paintbrush className="w-8 h-8 text-[#60A5FA]" />,
      title: "Креативы для рекламы",
      description: <>Баннеры, карточки товаров, мокапы для таргета. Создавайте <span className="text-[#60A5FA] font-semibold">50 вариантов</span> за время работы одного дизайнера.</>,
      colSpan: "md:col-span-1",
      badge: "Экономия бюджета",
    },
    {
      num: "04",
      icon: <MessageSquareCode className="w-8 h-8 text-[#8B5CF6]" />,
      title: "Разговорные ИИ-аватары",
      description: <>Интерактивный говорящий аватар <span className="text-[#F1EEFC] font-semibold">с вашим лицом и голосом</span>. Идеально для Reels, Stories и онлайн-обучения.</>,
      colSpan: "md:col-span-1",
      badge: "Личный бренд",
    },
    {
      num: "05",
      icon: <Workflow className="w-8 h-8 text-[#38BDF8]" />,
      title: "Маркетинговые воронки",
      description: <>От креатива до конверсии. <span className="text-[#38BDF8] font-semibold">Полная автоматизация</span> каждого этапа взаимодействия с клиентом с помощью ИИ.</>,
      colSpan: "md:col-span-1",
      badge: "Автоматизация",
    },
  ];

  const cardStyles = [
    {
      hoverBorder: "hover:border-[#38BDF8]/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]",
      numColor: "text-[#38BDF8]/5 group-hover:text-[#38BDF8]/10",
      footerColor: "group-hover:text-[#38BDF8]",
      iconStyle: "border-[#38BDF8]/30 bg-[#38BDF8]/10 shadow-[0_0_15px_rgba(56,189,248,0.2)]",
      badgeStyle: "text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10",
      titleGradient: "from-white to-[#38BDF8]/90",
    },
    {
      hoverBorder: "hover:border-[#8B5CF6]/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
      numColor: "text-[#8B5CF6]/5 group-hover:text-[#8B5CF6]/10",
      footerColor: "group-hover:text-[#8B5CF6]",
      iconStyle: "border-[#8B5CF6]/30 bg-[#8B5CF6]/10 shadow-[0_0_15px_rgba(139,92,246,0.2)]",
      badgeStyle: "text-[#8B5CF6] border-[#8B5CF6]/30 bg-[#8B5CF6]/10",
      titleGradient: "from-white to-[#8B5CF6]/90",
    },
    {
      hoverBorder: "hover:border-[#60A5FA]/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(96,165,250,0.12)]",
      numColor: "text-[#60A5FA]/5 group-hover:text-[#60A5FA]/10",
      footerColor: "group-hover:text-[#60A5FA]",
      iconStyle: "border-[#60A5FA]/30 bg-[#60A5FA]/10 shadow-[0_0_15px_rgba(96,165,250,0.2)]",
      badgeStyle: "text-[#60A5FA] border-[#60A5FA]/30 bg-[#60A5FA]/10",
      titleGradient: "from-white to-[#60A5FA]/90",
    },
    {
      hoverBorder: "hover:border-[#8B5CF6]/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
      numColor: "text-[#8B5CF6]/5 group-hover:text-[#8B5CF6]/10",
      footerColor: "group-hover:text-[#8B5CF6]",
      iconStyle: "border-[#8B5CF6]/30 bg-[#8B5CF6]/10 shadow-[0_0_15px_rgba(139,92,246,0.2)]",
      badgeStyle: "text-[#8B5CF6] border-[#8B5CF6]/30 bg-[#8B5CF6]/10",
      titleGradient: "from-white to-[#8B5CF6]/90",
    },
    {
      hoverBorder: "hover:border-[#38BDF8]/40",
      hoverShadow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.12)]",
      numColor: "text-[#38BDF8]/5 group-hover:text-[#38BDF8]/10",
      footerColor: "group-hover:text-[#38BDF8]",
      iconStyle: "border-[#38BDF8]/30 bg-[#38BDF8]/10 shadow-[0_0_15px_rgba(56,189,248,0.2)]",
      badgeStyle: "text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10",
      titleGradient: "from-white to-[#38BDF8]/90",
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#080611] overflow-hidden">
      {/* Decorative Cyan Spotlight behind */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#38BDF8]/5 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start text-left mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14102A] border border-[#38BDF8]/20 text-[10px] md:text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            Что вы унесете с собой
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#F1EEFC] tracking-tight mb-4 leading-tight">
            Один день — пять практических навыков
          </h2>
          <p className="text-base md:text-lg text-[#9D96B8] leading-relaxed">
            Каждый блок воркшопа — это практика вашими руками. Никакой лишней воды, только разбор инструментов. Уходите с готовым контентом и работающей воронкой.
          </p>
        </div>

        {/* Bento Grid layout with 3D Cards */}
        <BentoGrid className="gap-6 md:auto-rows-[20rem]">
          {skillsList.map((skill, index) => {
            const styles = cardStyles[index] || cardStyles[0];
            return (
              <CardContainer
                key={index}
                containerClassName={`py-0 w-full h-full ${skill.colSpan}`}
                className="w-full h-full"
              >
                <CardBody className={cn(
                  "w-full h-full bg-[#14102A] hover:bg-[#1A1535] border border-white/[0.05] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.2)]",
                  styles.hoverBorder,
                  styles.hoverShadow
                )}>
                  
                  {/* Watermark Number */}
                  <div className={cn(
                    "absolute right-6 top-4 font-heading font-black text-8xl select-none pointer-events-none group-hover:scale-110 transition duration-300",
                    styles.numColor
                  )}>
                    {skill.num}
                  </div>

                  <div className="flex flex-col gap-4 relative z-10">
                    {/* Top Bar with Icon and Badge */}
                    <div className="flex items-center justify-between">
                      <CardItem translateZ={50} className={cn("w-12 h-12 rounded-2xl border flex items-center justify-center transition duration-300", styles.iconStyle)}>
                        {skill.icon}
                      </CardItem>
                      
                      <span className={cn("text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border transition duration-300", styles.badgeStyle)}>
                        {skill.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <CardItem translateZ={40} className="font-heading font-extrabold text-xl md:text-2xl mt-4">
                      <span className={cn("bg-gradient-to-r bg-clip-text text-transparent inline-block", styles.titleGradient)}>
                        {skill.title}
                      </span>
                    </CardItem>

                    {/* Description */}
                    <CardItem translateZ={30} className="text-sm text-[#9D96B8] leading-relaxed max-w-md">
                      {skill.description}
                    </CardItem>
                  </div>

                  {/* Card Footer action indicator */}
                  <CardItem translateZ={20} className={cn(
                    "w-full flex items-center justify-between border-t border-white/[0.04] pt-4 mt-4 text-xs font-semibold text-[#8B5CF6] transition duration-200",
                    styles.footerColor
                  )}>
                    <span>Практический блок</span>
                    <ArrowIcon />
                  </CardItem>

                </CardBody>
              </CardContainer>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}

// Arrow Icon helper
function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform"
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
}
