import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container-wide section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Vibe Coding Academy
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              {t.footer.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-8"
          >
            {t.footer.links.map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                whileHover={{ y: -1 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            {t.footer.copyright}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
