import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container-wide section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#"
            className="text-lg md:text-xl font-semibold tracking-tight text-foreground"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Vibe Coding Academy
          </motion.a>

          <div className="hidden lg:flex items-center gap-8">
            {[
              { key: "philosophy", label: t.nav.philosophy },
              { key: "earnings", label: t.nav.earnings },
              { key: "process", label: t.nav.process },
              { key: "testimonials", label: t.nav.testimonials },
              { key: "faq", label: t.nav.faq },
            ].map((item) => (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <motion.button
              onClick={() => scrollToSection("apply")}
              className="px-4 py-2 md:px-6 md:py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full transition-all duration-300 hover:shadow-elevated"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {t.nav.applyNow}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
