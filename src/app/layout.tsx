import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ИИ в маркетинге | Воркшоп от M.AI.N",
  description: "Практический 10-часовой воркшоп по созданию контента и маркетингу с помощью ИИ. Фотосессии, рекламные видео, разговорные аватары и воронки продаж. 18 июня, команда M.AI.N.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${sora.variable} ${inter.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#080611] text-[#F1EEFC]">
        {children}
      </body>
    </html>
  );
}
