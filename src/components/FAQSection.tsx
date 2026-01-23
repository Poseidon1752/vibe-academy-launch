import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={ref} id="faq" className="py-24 md:py-32 lg:py-40 bg-card">
      <div className="container-tight section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4">
            {t.faq.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-4">
            {t.faq.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            {t.faq.description}
          </p>
        </motion.div>

        <div className="space-y-4">
          {t.faq.items.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 text-left p-0"
              >
                <h3 className="font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="pt-4 text-muted-foreground leading-relaxed border-t border-border mt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
