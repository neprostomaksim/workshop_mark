"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { CONFIG } from "@/lib/config";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Навыки", href: "#skills" },
    { name: "Программа", href: "#program" },
    { name: "О нас", href: "#about" },
    { name: "Цена", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent py-2.5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group z-50">
          <img 
            src="/logo.png" 
            alt="M.AI.N COMMUNITY Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-102" 
          />
        </a>

        <nav className="hidden md:flex items-center gap-6 bg-transparent border border-white/[0.08] px-8 py-3 rounded-full transition-all duration-300 hover:border-white/[0.16]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-wider text-[#9D96B8] hover:text-[#F1EEFC] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block z-50">
          <a
            href={CONFIG.checkoutUrl}
            className="px-6 py-3 rounded-full bg-[#EC4899] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#d93b88] transition duration-200 cursor-pointer shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)]"
          >
            Записаться
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#F1EEFC] p-2 focus:outline-none cursor-pointer z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[73px] bg-[#080611]/95 backdrop-blur-md border-b border-white/[0.08] px-6 py-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top duration-200 z-40">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[#9D96B8] hover:text-[#F1EEFC] py-2 border-b border-white/[0.03]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <a
            href={CONFIG.checkoutUrl}
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 rounded-full bg-[#EC4899] text-white font-semibold shadow-[0_0_15px_rgba(236,72,153,0.3)]"
          >
            Записаться
          </a>
        </div>
      )}
    </header>
  );
}
