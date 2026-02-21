import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImage from "@/assets/hero-developer.jpg";
import FloatingOrbs from "./FloatingOrbs";
import MagneticButton from "./MagneticButton";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const scrollToApply = () => {
    window.open("https://t.me/smc_tg911", "_blank");
  };

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
        <img
          src={heroImage}
          alt="Developer working"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Floating Orbs */}
      <FloatingOrbs />

      {/* Grain overlay for premium feel */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 container-tight section-padding text-center py-12 md:py-0"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <motion.span 
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-medium tracking-wide uppercase bg-secondary/80 backdrop-blur-sm text-secondary-foreground rounded-full border border-border/50"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Sparkles className="w-3 h-3" />
              {t.hero.badge}
            </motion.span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-foreground mb-4 md:mb-6 text-balance px-2"
          >
            {t.hero.headline}{" "}
            <span className="relative inline-block">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 text-gradient"
              >
                {t.hero.salary}
              </motion.span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-accent rounded-full origin-left"
              />
            </span>
            {t.hero.headlineEnd}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 px-4"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
          >
            <MagneticButton
              onClick={scrollToApply}
              className="w-full sm:w-auto group px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium bg-gradient-primary text-primary-foreground rounded-full transition-all duration-300 hover:shadow-glow glow-primary flex items-center justify-center gap-2"
            >
              {t.hero.cta}
              <motion.span
                initial={{ x: 0 }}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </MagneticButton>

            <MagneticButton
              onClick={() => {
                const element = document.getElementById("philosophy");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-foreground bg-background/50 backdrop-blur-sm border border-border rounded-full transition-all duration-300 hover:bg-secondary"
            >
              {t.hero.learnMore}
            </MagneticButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {[
              { value: "500+", label: "Graduates" },
              { value: "98%", label: "Hired" },
              { value: "4.9★", label: "Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-xl md:text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2 backdrop-blur-sm"
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-foreground rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
