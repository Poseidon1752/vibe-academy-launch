import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import homeOfficeImage from "@/assets/home-office.jpg";
import { BookOpen, Code2, Rocket } from "lucide-react";

const stepIcons = [BookOpen, Code2, Rocket];

const ProcessSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} id="process" className="py-16 md:py-24 lg:py-32 xl:py-40 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent/5 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-primary/5 to-transparent" />
      
      <div className="container-wide section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Image with floating effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -40 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-elevated"
            >
              <img
                src={homeOfficeImage}
                alt="Developer in home office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-gradient-accent text-accent-foreground rounded-2xl p-4 shadow-glow"
            >
              <div className="text-2xl md:text-3xl font-bold">3-6</div>
              <div className="text-xs md:text-sm opacity-90">Months to Hired</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-xs sm:text-sm font-medium tracking-wide uppercase text-muted-foreground mb-3 md:mb-4"
            >
              {t.process.label}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-8 md:mb-12"
            >
              {t.process.title}
            </motion.h2>

            <div className="space-y-6 md:space-y-8">
              {t.process.steps.map((step, index) => {
                const Icon = stepIcons[index];
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                    className="relative pl-16 md:pl-20 group"
                  >
                    {/* Step indicator */}
                    <motion.div 
                      className="absolute left-0 top-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </motion.div>
                    
                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-1 md:mb-2">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Connecting line */}
                    {index < t.process.steps.length - 1 && (
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={isInView ? { height: "2rem" } : {}}
                        transition={{ delay: 0.6 + index * 0.15, duration: 0.4 }}
                        className="absolute left-5 md:left-6 top-14 md:top-16 w-0.5 bg-gradient-to-b from-primary/30 to-transparent"
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
