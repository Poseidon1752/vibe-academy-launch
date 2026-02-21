import { LanguageProvider } from "@/i18n/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Clock } from "lucide-react";

const contactContent = {
  en: {
    title: "Contact Us",
    subtitle: "Have questions? We're here to help.",
    telegram: {
      title: "Telegram",
      description: "Our primary communication channel. Reach out to our curator directly.",
      link: "@smc_tg911",
    },
    email: {
      title: "Email",
      description: "For official inquiries and documentation.",
      link: "info@vibecodingacademy.com",
    },
    response: {
      title: "Response Time",
      description: "We typically respond within 24 hours on business days.",
    },
    cta: "Write to us on Telegram",
  },
  uk: {
    title: "Контакти",
    subtitle: "Маєте запитання? Ми тут, щоб допомогти.",
    telegram: {
      title: "Telegram",
      description: "Наш основний канал зв'язку. Зв'яжіться з куратором напряму.",
      link: "@smc_tg911",
    },
    email: {
      title: "Email",
      description: "Для офіційних запитів та документації.",
      link: "info@vibecodingacademy.com",
    },
    response: {
      title: "Час відповіді",
      description: "Зазвичай ми відповідаємо протягом 24 годин у робочі дні.",
    },
    cta: "Написати нам у Telegram",
  },
  ru: {
    title: "Контакты",
    subtitle: "Есть вопросы? Мы здесь, чтобы помочь.",
    telegram: {
      title: "Telegram",
      description: "Наш основной канал связи. Свяжитесь с куратором напрямую.",
      link: "@smc_tg911",
    },
    email: {
      title: "Email",
      description: "Для официальных запросов и документации.",
      link: "info@vibecodingacademy.com",
    },
    response: {
      title: "Время ответа",
      description: "Обычно мы отвечаем в течение 24 часов в рабочие дни.",
    },
    cta: "Написать нам в Telegram",
  },
};

const ContactContent = () => {
  const { language } = useLanguage();
  const content = contactContent[language];

  const cards = [
    { icon: MessageCircle, title: content.telegram.title, desc: content.telegram.description, detail: content.telegram.link },
    { icon: Mail, title: content.email.title, desc: content.email.description, detail: content.email.link },
    { icon: Clock, title: content.response.title, desc: content.response.description, detail: null },
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-tight section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-muted-foreground">{content.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 md:p-8 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-lg font-semibold text-foreground mb-2">{card.title}</h2>
              <p className="text-sm text-muted-foreground mb-3">{card.desc}</p>
              {card.detail && (
                <span className="text-sm font-medium text-primary">{card.detail}</span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="https://t.me/smc_tg911"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-base font-medium bg-gradient-primary text-primary-foreground rounded-full hover:shadow-glow transition-all duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            {content.cta}
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

const Contact = () => (
  <LanguageProvider>
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </div>
  </LanguageProvider>
);

export default Contact;
