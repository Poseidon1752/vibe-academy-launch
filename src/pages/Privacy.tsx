import { LanguageProvider } from "@/i18n/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const privacyContent = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: February 2025",
    sections: [
      {
        heading: "1. Information We Collect",
        text: "When you apply for our program or contact us, we may collect the following information: your name, email address, phone number, Telegram username, and any information you voluntarily provide during the interview process. We do not collect payment information as our training program is completely free."
      },
      {
        heading: "2. How We Use Your Information",
        text: "We use your personal data exclusively for: processing your application for the training program, communicating with you about your application status, providing educational materials and program updates, and improving our services. We never sell, rent, or share your data with third parties for marketing purposes."
      },
      {
        heading: "3. Data Storage & Security",
        text: "Your data is stored securely using industry-standard encryption. We retain your information only for as long as necessary to fulfill the purposes outlined in this policy. You may request deletion of your data at any time by contacting us via Telegram."
      },
      {
        heading: "4. Cookies",
        text: "Our website uses minimal cookies necessary for basic functionality such as language preference. We do not use tracking cookies or third-party analytics that collect personal data."
      },
      {
        heading: "5. Your Rights",
        text: "You have the right to: access your personal data, request correction of inaccurate data, request deletion of your data, and withdraw consent at any time. To exercise any of these rights, contact us via Telegram @smc_tg911."
      },
      {
        heading: "6. Contact",
        text: "If you have questions about this Privacy Policy, please reach out via Telegram: @smc_tg911."
      }
    ]
  },
  uk: {
    title: "Політика конфіденційності",
    lastUpdated: "Останнє оновлення: лютий 2025",
    sections: [
      {
        heading: "1. Інформація, яку ми збираємо",
        text: "Коли ви подаєте заявку на нашу програму або зв'язуєтеся з нами, ми можемо збирати таку інформацію: ваше ім'я, електронну пошту, номер телефону, Telegram-нік та будь-яку інформацію, яку ви добровільно надаєте під час співбесіди. Ми не збираємо платіжну інформацію, оскільки наша програма навчання повністю безкоштовна."
      },
      {
        heading: "2. Як ми використовуємо вашу інформацію",
        text: "Ми використовуємо ваші персональні дані виключно для: обробки вашої заявки на програму навчання, комунікації щодо статусу заявки, надання навчальних матеріалів та оновлень програми, покращення наших послуг. Ми ніколи не продаємо, не здаємо в оренду та не передаємо ваші дані третім особам для маркетингових цілей."
      },
      {
        heading: "3. Зберігання та безпека даних",
        text: "Ваші дані зберігаються з використанням стандартного шифрування. Ми зберігаємо інформацію лише стільки, скільки необхідно для цілей, зазначених у цій політиці. Ви можете запросити видалення своїх даних у будь-який час, зв'язавшись з нами через Telegram."
      },
      {
        heading: "4. Файли cookie",
        text: "Наш сайт використовує мінімальну кількість cookie, необхідних для базової функціональності, наприклад збереження мовних налаштувань. Ми не використовуємо cookie для відстеження чи аналітику третіх сторін."
      },
      {
        heading: "5. Ваші права",
        text: "Ви маєте право на: доступ до своїх персональних даних, виправлення неточних даних, видалення ваших даних та відкликання згоди в будь-який час. Для реалізації будь-якого з цих прав зв'яжіться з нами через Telegram @smc_tg911."
      },
      {
        heading: "6. Контакти",
        text: "Якщо у вас є питання щодо цієї Політики конфіденційності, зв'яжіться з нами через Telegram: @smc_tg911."
      }
    ]
  },
  ru: {
    title: "Политика конфиденциальности",
    lastUpdated: "Последнее обновление: февраль 2025",
    sections: [
      {
        heading: "1. Информация, которую мы собираем",
        text: "Когда вы подаёте заявку на нашу программу или связываетесь с нами, мы можем собирать следующую информацию: ваше имя, электронную почту, номер телефона, Telegram-ник и любую информацию, которую вы добровольно предоставляете во время собеседования. Мы не собираем платёжную информацию, так как наша программа обучения полностью бесплатна."
      },
      {
        heading: "2. Как мы используем вашу информацию",
        text: "Мы используем ваши персональные данные исключительно для: обработки заявки на программу обучения, коммуникации о статусе заявки, предоставления учебных материалов и обновлений программы, улучшения наших услуг. Мы никогда не продаём, не сдаём в аренду и не передаём ваши данные третьим лицам в маркетинговых целях."
      },
      {
        heading: "3. Хранение и безопасность данных",
        text: "Ваши данные хранятся с использованием стандартного шифрования. Мы храним информацию только столько, сколько необходимо для целей, указанных в этой политике. Вы можете запросить удаление своих данных в любое время, связавшись с нами через Telegram."
      },
      {
        heading: "4. Файлы cookie",
        text: "Наш сайт использует минимальное количество cookie, необходимых для базовой функциональности, например сохранения языковых настроек. Мы не используем cookie для отслеживания или аналитику третьих сторон."
      },
      {
        heading: "5. Ваши права",
        text: "Вы имеете право на: доступ к своим персональным данным, исправление неточных данных, удаление ваших данных и отзыв согласия в любое время. Для реализации любого из этих прав свяжитесь с нами через Telegram @smc_tg911."
      },
      {
        heading: "6. Контакты",
        text: "Если у вас есть вопросы по этой Политике конфиденциальности, свяжитесь с нами через Telegram: @smc_tg911."
      }
    ]
  }
};

const PrivacyContent = () => {
  const { language } = useLanguage();
  const content = privacyContent[language];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container-tight section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-foreground mb-2">
            {content.title}
          </h1>
          <p className="text-sm text-muted-foreground mb-10">{content.lastUpdated}</p>

          <div className="space-y-8">
            {content.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h2 className="text-lg md:text-xl font-semibold text-foreground mb-2">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Privacy = () => (
  <LanguageProvider>
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  </LanguageProvider>
);

export default Privacy;
