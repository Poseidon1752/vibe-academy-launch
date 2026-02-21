import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import MagneticButton from "./MagneticButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section
      ref={ref}
      id="apply"
      className="py-20 md:py-28 lg:py-36 xl:py-44 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container-tight section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block text-xs sm:text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4 md:mb-6"
          >
            {t.cta.label}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-foreground mb-4 md:mb-6"
          >
            {t.cta.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 md:mb-12 px-4"
          >
            {t.cta.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <MagneticButton
              onClick={() => window.open("https://t.me/smc_tg911", "_blank")}
              className="w-full sm:w-auto group px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium bg-gradient-primary text-primary-foreground rounded-full transition-all duration-300 hover:shadow-glow glow-primary flex items-center justify-center gap-3"
            >
              {t.cta.button}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </MagneticButton>
          </motion.div>

          {/* Trust indicators with icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-4 md:gap-8"
          >
            {t.cta.trust.map((item, index) => (
              <motion.span 
                key={index} 
                className="flex items-center gap-2 text-sm md:text-base text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <CheckCircle2 className="w-4 h-4 text-accent" />
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
