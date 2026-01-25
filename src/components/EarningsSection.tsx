import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import TiltCard from "./TiltCard";

const EarningsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} id="earnings" className="py-16 md:py-24 lg:py-32 xl:py-40 relative">
      {/* Background gradient with more color */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container-wide section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm font-medium tracking-wide uppercase text-muted-foreground mb-3 md:mb-4">
            {t.earnings.label}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-3 md:mb-4">
            {t.earnings.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4">
            {t.earnings.description}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          style={{ perspective: "1000px" }}
        >
          {t.earnings.data.map((item, index) => (
            <motion.div key={item.month} variants={cardVariants}>
              <TiltCard className="h-full">
                <div className="glass-card group cursor-default p-4 md:p-6 h-full hover:border-primary/30 transition-all duration-300">
                  <div className="mb-2 md:mb-4">
                    <span className="text-xs md:text-sm text-muted-foreground">
                      {item.month}
                    </span>
                  </div>
                  <motion.div 
                    className="mb-1 md:mb-2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground">
                      {item.salary}
                    </span>
                  </motion.div>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.role}</p>

                  {/* Animated progress indicator */}
                  <div className="mt-4 md:mt-6 h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${25 + index * 25}%` } : { width: 0 }}
                      transition={{ duration: 1.2, delay: 0.5 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>

                  {/* Growth indicator */}
                  {index > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="mt-3 text-xs text-muted-foreground"
                    >
                      <span className="text-accent font-medium">
                        +{Math.round((parseInt(item.salary.replace(/\D/g, '')) / 1500 - 1) * 100)}%
                      </span>
                      {" "}growth
                    </motion.div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 md:mt-12 text-center"
        >
          <p className="text-xs md:text-sm text-muted-foreground px-4">
            {t.earnings.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EarningsSection;
