import { LanguageProvider } from "@/i18n/LanguageContext";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TechMarquee from "@/components/TechMarquee";
import StatsSection from "@/components/StatsSection";
import PhilosophySection from "@/components/PhilosophySection";
import EarningsSection from "@/components/EarningsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <ScrollProgress />
        <Navigation />
        <main>
          <HeroSection />
          <TechMarquee />
          <StatsSection />
          <PhilosophySection />
          <EarningsSection />
          <ProcessSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
