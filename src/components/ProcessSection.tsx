import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import homeOfficeImage from "@/assets/home-office.jpg";

const steps = [
  {
    number: "01",
    title: "Learn",
    description:
      "Immerse yourself in our intensive curriculum. Master modern web technologies through hands-on projects and expert mentorship. No theory dumps—just practical skills.",
  },
  {
    number: "02",
    title: "Practice",
    description:
      "Work on real client projects alongside our team. Build your portfolio with production-grade applications while receiving continuous feedback.",
  },
  {
    number: "03",
    title: "Join the Team",
    description:
      "Graduate directly into a paid position on our dev team. Start earning from day one with a clear path to senior roles.",
  },
];

const ProcessSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="process" className="py-24 md:py-32 lg:py-40 bg-card">
      <div className="container-wide section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-square rounded-3xl overflow-hidden order-2 lg:order-1"
          >
            <img
              src={homeOfficeImage}
              alt="Developer in home office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
          </motion.div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-medium tracking-wide uppercase text-muted-foreground mb-4"
            >
              How It Works
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-12"
            >
              Three Steps to Your New Career
            </motion.h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-0">
                    <span className="text-5xl font-bold tracking-tighter text-accent">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-border h-8" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
