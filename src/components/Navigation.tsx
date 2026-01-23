import { motion } from "framer-motion";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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

          <div className="hidden md:flex items-center gap-8">
            {["Philosophy", "Earnings", "Process"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                whileHover={{ y: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            onClick={() => scrollToSection("apply")}
            className="px-4 py-2 md:px-6 md:py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full transition-all duration-300 hover:shadow-elevated"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Apply Now
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
