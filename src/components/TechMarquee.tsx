import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const techStack = [
  "React", "TypeScript", "Node.js", "PostgreSQL", "Git", "Tailwind CSS", 
  "Next.js", "GraphQL", "Docker", "AWS", "MongoDB", "Redis"
];

const TechMarquee = () => {
  const { language } = useLanguage();
  
  const labels = {
    en: "Technologies you'll master",
    uk: "Технології, які ти опануєш",
    ru: "Технологии, которые ты освоишь",
  };

  return (
    <section className="py-8 md:py-12 border-y border-border bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 overflow-hidden">
      <div className="container-wide section-padding mb-4">
        <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wide text-center">
          {labels[language]}
        </p>
      </div>
      
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Marquee container */}
        <div className="flex">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 md:gap-12 whitespace-nowrap"
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div
                key={index}
                className="flex items-center gap-2 md:gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                <span className="text-lg md:text-2xl font-semibold text-foreground/80 tracking-tight">
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
