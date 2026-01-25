import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import teamImage from "@/assets/team-collab.jpg";
import { CheckCircle2 } from "lucide-react";

const PhilosophySection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      ref={ref}
      id="philosophy"
      className="py-16 md:py-24 lg:py-32 xl:py-40 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
      
      <div className="container-wide section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center"
        >
          {/* Content */}
          <div>
            <motion.span
              variants={itemVariants}
              className="inline-block text-xs sm:text-sm font-medium tracking-wide uppercase text-muted-foreground mb-3 md:mb-4"
            >
              {t.philosophy.label}
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-4 md:mb-6"
            >
              {t.philosophy.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed"
            >
              {t.philosophy.description}
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 md:space-y-5">
              {t.philosophy.points.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-3 md:gap-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image with floating effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square lg:aspect-auto lg:h-full min-h-[300px] md:min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden shadow-elevated"
            >
              <img
                src={teamImage}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </motion.div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gradient-primary text-primary-foreground rounded-2xl p-4 shadow-glow"
            >
              <div className="text-2xl md:text-3xl font-bold">100%</div>
              <div className="text-xs md:text-sm opacity-90">Free Education</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
