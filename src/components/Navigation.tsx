import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { key: "philosophy", label: t.nav.philosophy },
    { key: "earnings", label: t.nav.earnings },
    { key: "process", label: t.nav.process },
    { key: "testimonials", label: t.nav.testimonials },
    { key: "faq", label: t.nav.faq },
  ];

  return (
    <>
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
              className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-foreground"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Vibe Coding Academy
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
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

            <div className="flex items-center gap-2 sm:gap-3">
              <LanguageSwitcher />

              {/* Desktop Apply Button */}
              <motion.button
                onClick={() => scrollToSection("apply")}
                className="hidden sm:block px-4 py-2 md:px-6 md:py-2.5 text-sm font-medium bg-gradient-primary text-primary-foreground rounded-full transition-all duration-300 hover:shadow-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {t.nav.applyNow}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground"
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-card border-l border-border z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <span className="font-semibold text-foreground">Menu</span>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Nav Items */}
                <nav className="flex-1 overflow-y-auto py-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.key}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(item.key)}
                      className="w-full text-left px-6 py-4 text-base text-foreground hover:bg-secondary transition-colors"
                    >
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                {/* Apply Button */}
                <div className="p-4 border-t border-border">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={() => scrollToSection("apply")}
                    className="w-full px-6 py-4 text-base font-medium bg-gradient-primary text-primary-foreground rounded-full"
                  >
                    {t.nav.applyNow}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
