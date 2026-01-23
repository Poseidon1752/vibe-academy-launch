import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import teamImage from "@/assets/team-collab.jpg";

const PhilosophySection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      className="py-16 md:py-24 lg:py-32 xl:py-40 bg-card"
    >
      <div className="container-wide section-padding">
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

            <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
              {t.philosophy.points.map((item, index) => (
                <div key={index} className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-xs md:text-sm font-semibold text-secondary-foreground">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm md:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={itemVariants}
            className="relative aspect-square lg:aspect-auto lg:h-full min-h-[300px] md:min-h-[400px] rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <img
              src={teamImage}
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
