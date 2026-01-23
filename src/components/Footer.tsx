import { motion } from "framer-motion";

const Footer = () => {
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
              Building the next generation of developers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-8"
          >
            {["Privacy", "Terms", "Contact"].map((item) => (
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
            © 2025 Vibe Coding Academy
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
