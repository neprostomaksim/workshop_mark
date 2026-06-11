import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Program from "@/components/Program";
import Gallery from "@/components/Gallery";
import TargetAudience from "@/components/TargetAudience";
import Team from "@/components/Team";
import Atmosphere from "@/components/Atmosphere";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080611] text-[#F1EEFC] selection:bg-[#8B5CF6]/30 relative">
      {/* Dynamic Background Glowing Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Blob 1: Hero left (violet) */}
        <div className="absolute top-[-100px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#8B5CF6]/15 blur-[130px] opacity-70"></div>
        {/* Blob 2: Hero right (cyan) */}
        <div className="absolute top-[200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-[#38BDF8]/15 blur-[150px] opacity-70"></div>
        {/* Blob 3: Skills center (magenta) */}
        <div className="absolute top-[1000px] left-[-100px] w-[600px] h-[600px] rounded-full bg-[#EC4899]/8 blur-[140px] opacity-60"></div>
        {/* Blob 4: Program center (violet/blue) */}
        <div className="absolute top-[1800px] right-[-100px] w-[700px] h-[700px] rounded-full bg-[#8B5CF6]/8 blur-[160px] opacity-60"></div>
        {/* Blob 5: Gallery (cyan/blue) */}
        <div className="absolute top-[2600px] left-[5%] w-[600px] h-[600px] rounded-full bg-[#38BDF8]/8 blur-[140px] opacity-60"></div>
        {/* Blob 6: Team/Pricing (magenta/violet) */}
        <div className="absolute top-[3400px] right-[-200px] w-[800px] h-[800px] rounded-full bg-[#EC4899]/8 blur-[180px] opacity-60"></div>
        {/* Blob 7: Pricing background accent (blue/cyan) */}
        <div className="absolute top-[4000px] left-[-200px] w-[700px] h-[700px] rounded-full bg-[#60A5FA]/10 blur-[150px] opacity-70"></div>
        {/* Blob 8: FAQ/CTA (violet) */}
        <div className="absolute top-[4800px] right-[-100px] w-[600px] h-[600px] rounded-full bg-[#8B5CF6]/10 blur-[130px] opacity-70"></div>
      </div>

      {/* Sticky Translucent Header */}
      <Header />
      
      {/* Main Sections */}
      <main className="flex-1 relative z-10">
        {/* Hero Section (Spotlight + Beams) */}
        <Hero />
        
        {/* Bento Grid Skills Section (Bento + 3D Card tilt) */}
        <Skills />
        
        {/* Timeline Program Section (Tracing Beam) */}
        <Program />
        
        {/* Gallery Section (Layout Grid) */}
        <Gallery />
        
        {/* Staggered Target Audience Section */}
        <TargetAudience />
        
        {/* Team Section (Wobble Card) */}
        <Team />
        
        {/* Atmosphere of our workshops Section */}
        <Atmosphere />
        
        {/* Social Proof (Infinite Moving Cards marquee) */}
        <Reviews />
        
        {/* Pricing Section (BackgroundGradient checkout card + watermark) */}
        <Pricing />
        
        {/* FAQ Section (Accordion) */}
        <FAQ />
        
        {/* Final CTA conversion block */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
