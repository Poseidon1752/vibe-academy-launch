import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const earningsData = [
  { month: "Month 1", salary: "$1,500", role: "Junior Developer" },
  { month: "Month 6", salary: "$2,500", role: "Developer" },
  { month: "Year 1", salary: "$4,000", role: "Mid-Level Developer" },
  { month: "Year 2+", salary: "$6,000+", role: "Senior Developer" },
];

const EarningsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Your Growth Path
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-4">
            The Earnings
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Transparent income progression from your first day on our team.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {earningsData.map((item, index) => (
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
                  transition={{ duration: 1, delay: 0.8 + index * 0.1, ease: "easeOut" }}
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
            *Salaries are based on full-time positions and may vary by location and performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EarningsSection;
