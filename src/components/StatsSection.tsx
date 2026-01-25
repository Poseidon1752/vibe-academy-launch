import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Users, Briefcase, TrendingUp, Award } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const stats = {
  en: [
    { icon: Users, value: 500, suffix: "+", label: "Graduates Hired" },
    { icon: TrendingUp, value: 340, suffix: "%", label: "Average Salary Increase" },
    { icon: Briefcase, value: 98, suffix: "%", label: "Employment Rate" },
    { icon: Award, value: 4.9, suffix: "/5", label: "Student Rating", isDecimal: true },
  ],
  uk: [
    { icon: Users, value: 500, suffix: "+", label: "Випускників працевлаштовано" },
    { icon: TrendingUp, value: 340, suffix: "%", label: "Середнє зростання зарплати" },
    { icon: Briefcase, value: 98, suffix: "%", label: "Рівень працевлаштування" },
    { icon: Award, value: 4.9, suffix: "/5", label: "Оцінка студентів", isDecimal: true },
  ],
  ru: [
    { icon: Users, value: 500, suffix: "+", label: "Выпускников трудоустроено" },
    { icon: TrendingUp, value: 340, suffix: "%", label: "Средний рост зарплаты" },
    { icon: Briefcase, value: 98, suffix: "%", label: "Уровень трудоустройства" },
    { icon: Award, value: 4.9, suffix: "/5", label: "Оценка студентов", isDecimal: true },
  ],
};

const StatsSection = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();

  const currentStats = stats[language];

  return (
    <section ref={ref} className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      <div className="container-wide section-padding relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {currentStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 mb-4 group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </motion.div>
                
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-2">
                  {stat.isDecimal ? (
                    <span>{stat.value}{stat.suffix}</span>
                  ) : (
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                
                <p className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
