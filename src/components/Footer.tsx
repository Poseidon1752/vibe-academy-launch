import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 md:py-12 border-t border-border">
      <div className="container-wide section-padding">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-base md:text-lg font-semibold tracking-tight text-foreground">
              Vibe Coding Academy
            </span>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              {t.footer.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-6 md:gap-8"
          >
            {t.footer.links.map((item, index) => {
              const paths = ["/privacy", "/terms", "/contact"];
              return (
                <motion.div key={item} whileHover={{ y: -1 }}>
                  <Link
                    to={paths[index]}
                    className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm text-muted-foreground"
          >
            {t.footer.copyright}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
