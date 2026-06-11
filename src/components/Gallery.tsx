"use client";

import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { Sparkles } from "lucide-react";

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-[#080611] overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-[30%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#8B5CF6]/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14102A] border border-[#38BDF8]/20 text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            Галерея работ
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#F1EEFC] tracking-tight mb-4">
            Результаты генерации ИИ
          </h2>
          <p className="text-sm md:text-base text-[#9D96B8] leading-relaxed">
            Примеры креативов, фотографий и аватаров, создаваемых нейросетями. Вы научитесь делать такие же проекты за считанные минуты.
          </p>
        </div>

        {/* Layout Grid Container */}
        <div className="h-[700px] w-full relative">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
}

const CardContent = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="text-left">
      <p className="font-heading font-black md:text-3xl text-xl text-[#F1EEFC]">{title}</p>
      <p className="font-sans font-normal text-sm my-2 text-[#9D96B8]">{description}</p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <CardContent title="AI Fashion Portrait" description="Сгенерированный фэшн-портрет для личного бренда, созданный на воркшопе." />,
    className: "md:col-span-2",
    thumbnail: "/ai_fashion_portrait.png",
  },
  {
    id: 2,
    content: <CardContent title="AI Product Design" description="Предметная съёмка продукта без дорогой студии и фотоаппарата." />,
    className: "col-span-1",
    thumbnail: "/ai_product_design.png",
  },
  {
    id: 3,
    content: <CardContent title="AI Marketing Dashboard" description="Иллюстрации и инфографика для презентаций и рекламных кампаний." />,
    className: "col-span-1",
    thumbnail: "/ai_marketing_dashboard.png",
  },
  {
    id: 4,
    content: <CardContent title="Futuristic AI Avatar" description="Интерактивный цифровой говорящий аватар для Reels и Stories." />,
    className: "md:col-span-2",
    thumbnail: "/ai_avatar.png",
  },
];
