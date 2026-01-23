import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="apply"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container-tight section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4"
          >
            Ready to Start?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground mb-6"
          >
            Talk to a Curator
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
          >
            Schedule a 15-minute call with our team. No pressure, no sales pitch—just 
            an honest conversation about your goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              className="px-10 py-5 text-lg font-medium bg-primary text-primary-foreground rounded-full transition-all duration-300 hover:shadow-elevated"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Apply for Interview
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
              Free to apply
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
              No commitment
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
              Response within 24h
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
