import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const EarningsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section ref={ref} id="earnings" className="py-24 md:py-32 lg:py-40">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
            {t.earnings.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-4">
            {t.earnings.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.earnings.description}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.earnings.data.map((item, index) => (
            <motion.div
              key={item.month}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card group cursor-default"
            >
              <div className="mb-4">
                <span className="text-sm text-muted-foreground">
                  {item.month}
                </span>
              </div>
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                  {item.salary}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{item.role}</p>

              {/* Progress indicator */}
              <motion.div
                className="mt-6 h-1 bg-secondary rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.div
                  className="h-full bg-foreground rounded-full"
                  initial={{ width: 0 }}
                  animate={
                    isInView
                      ? { width: `${25 + index * 25}%` }
                      : { width: 0 }
                  }
                  transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            {t.earnings.disclaimer}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EarningsSection;
