import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  // For mobile carousel
  const totalItems = t.testimonials.items.length;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalItems);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <section ref={ref} id="testimonials" className="py-16 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
      <div className="container-wide section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm font-medium tracking-wide uppercase text-muted-foreground mb-3 md:mb-4">
            {t.testimonials.label}
          </span>
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
              <svg
                className="w-6 h-6 text-accent mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-foreground text-sm sm:text-base leading-relaxed">
                "{t.testimonials.items[currentPage].quote}"
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-xs font-semibold text-secondary-foreground">
                  {t.testimonials.items[currentPage].image}
                </span>
              </div>
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
            <button
              onClick={prevPage}
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {t.testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentPage === index ? "bg-foreground" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextPage}
              className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tablet & Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 xl:gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card flex flex-col"
            >
              <div className="flex-1 mb-6">
                <svg
                  className="w-6 h-6 lg:w-8 lg:h-8 text-accent mb-3 lg:mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground text-sm lg:text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 lg:gap-4 pt-4 lg:pt-6 border-t border-border">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs lg:text-sm font-semibold text-secondary-foreground">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm lg:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs lg:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
