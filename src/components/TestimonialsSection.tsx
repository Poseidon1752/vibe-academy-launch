import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import TiltCard from "./TiltCard";

const TestimonialsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);

  const totalItems = t.testimonials.items.length;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalItems);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section ref={ref} id="testimonials" className="py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden relative bg-card">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
      <div className="absolute top-40 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-40 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container-wide section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wide uppercase text-muted-foreground mb-3 md:mb-4"
          >
            <Quote className="w-4 h-4" />
            {t.testimonials.label}
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-3 md:mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4">
            {t.testimonials.description}
          </p>
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="glass-card flex flex-col mx-2"
          >
            <div className="flex-1 mb-6">
              <Quote className="w-6 h-6 text-accent mb-3" />
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                "{t.testimonials.items[currentPage].quote}"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <motion.div 
                className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-xs font-semibold text-foreground">
                  {t.testimonials.items[currentPage].image}
                </span>
              </motion.div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  {t.testimonials.items[currentPage].name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t.testimonials.items[currentPage].role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevPage}
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex gap-2">
              {t.testimonials.items.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentPage === index ? "bg-foreground w-6" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextPage}
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Desktop Grid with 3D Tilt */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8"
          style={{ perspective: "1000px" }}
        >
          {t.testimonials.items.map((testimonial, index) => (
            <motion.div key={testimonial.name} variants={cardVariants}>
              <TiltCard className="h-full">
                <div className="glass-card flex flex-col h-full group hover:border-primary/30 transition-colors duration-300">
                  <div className="flex-1 mb-6">
                    <Quote className="w-6 h-6 lg:w-8 lg:h-8 text-accent mb-3 lg:mb-4 group-hover:text-primary transition-colors" />
                    <p className="text-foreground text-sm lg:text-base leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-3 lg:gap-4 pt-4 lg:pt-6 border-t border-border">
                    <motion.div 
                      className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <span className="text-xs lg:text-sm font-semibold text-foreground">
                        {testimonial.image}
                      </span>
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground text-sm lg:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs lg:text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
