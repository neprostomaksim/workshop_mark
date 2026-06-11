"use client";

import React from "react";
import { CONFIG } from "@/lib/config";
import { Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const links = [
    { name: "Навыки", href: "#skills" },
    { name: "Программа", href: "#program" },
    { name: "О нас", href: "#about" },
    { name: "Цена", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#05040a] border-t border-white/[0.04] py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        
        {/* Upper Row: Logo & Back to Top */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="M.AI.N COMMUNITY Logo" className="h-8 w-auto object-contain" />
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-[#9D96B8] hover:text-[#38BDF8] transition-colors cursor-pointer group"
          >
            <span>Наверх</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Middle Row: Navigation Links */}
        <div className="w-full flex flex-wrap justify-center gap-x-8 gap-y-4 py-4 border-y border-white/[0.03]">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[#9D96B8] hover:text-[#F1EEFC] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#9D96B8] hover:text-[#EC4899] transition-colors flex items-center gap-1.5"
          >
            <Instagram size={14} />
            Instagram
          </a>
        </div>

        {/* Lower Row: Copyright and Legal */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9D96B8]/50">
          <p>© {new Date().getFullYear()} {CONFIG.communityName} • AI Community. Все права защищены.</p>
          <div className="flex gap-4">
            <span className="cursor-default">Сделано с помощью ИИ</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
