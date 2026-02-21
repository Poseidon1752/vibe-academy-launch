import { LanguageProvider } from "@/i18n/LanguageContext";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";

const termsContent = {
  en: {
    title: "Terms of Use",
    lastUpdated: "Last updated: February 2025",
    sections: [
      {
        heading: "1. About the Program",
        text: "Vibe Coding Academy offers a free training program in web development. Upon successful completion, graduates may be invited to join our internal development team as paid employees. Participation in the program does not guarantee employment."
      },
      {
        heading: "2. Eligibility",
        text: "The program is open to individuals aged 18 and older. No prior programming experience is required. Applicants must have access to a computer with a stable internet connection and be willing to dedicate sufficient time to the learning process."
      },
      {
        heading: "3. Program Structure",
        text: "The training consists of practical assignments, mentorship sessions, and real-world project work. The duration is typically 3–6 months depending on individual progress. The academy reserves the right to modify the curriculum at any time to reflect current industry standards."
      },
      {
        heading: "4. Participant Obligations",
        text: "Participants agree to: attend scheduled sessions regularly, complete assignments on time, maintain respectful communication with mentors and peers, not share proprietary training materials with third parties, and act in good faith throughout the program."
      },
      {
        heading: "5. Intellectual Property",
        text: "All training materials, curriculum content, and proprietary tools provided during the program remain the intellectual property of Vibe Coding Academy. Projects completed during the training phase may be used in your personal portfolio with prior approval."
      },
      {
        heading: "6. Termination",
        text: "The academy reserves the right to remove a participant from the program for: prolonged inactivity without notice, violation of the code of conduct, dishonest behavior, or any actions that negatively impact other participants."
      },
      {
        heading: "7. Limitation of Liability",
        text: "Vibe Coding Academy provides educational services 'as is' and makes no guarantees regarding specific employment outcomes or salary levels. Salary figures mentioned on the website represent potential earnings and may vary based on individual performance and market conditions."
      },
      {
        heading: "8. Changes to Terms",
        text: "We may update these terms from time to time. Continued participation in the program after changes constitutes acceptance of the updated terms."
      }
    ]
  },
  uk: {
    title: "Умови використання",
    lastUpdated: "Останнє оновлення: лютий 2025",
    sections: [
      {
        heading: "1. Про програму",
        text: "Vibe Coding Academy пропонує безкоштовну програму навчання веб-розробці. Після успішного завершення випускники можуть бути запрошені до нашої внутрішньої команди розробників як оплачувані співробітники. Участь у програмі не гарантує працевлаштування."
      },
      {
        heading: "2. Вимоги до учасників",
        text: "Програма відкрита для осіб від 18 років. Попередній досвід програмування не потрібен. Учасники повинні мати доступ до комп'ютера зі стабільним інтернет-з'єднанням та бути готовими приділяти достатньо часу навчанню."
      },
      {
        heading: "3. Структура програми",
        text: "Навчання складається з практичних завдань, менторських сесій та роботи над реальними проектами. Тривалість — зазвичай 3–6 місяців залежно від індивідуального прогресу. Академія залишає за собою право змінювати навчальну програму відповідно до актуальних стандартів індустрії."
      },
      {
        heading: "4. Обов'язки учасників",
        text: "Учасники зобов'язуються: регулярно відвідувати заняття, вчасно виконувати завдання, підтримувати шанобливу комунікацію з менторами та колегами, не передавати навчальні матеріали третім особам та діяти добросовісно протягом усієї програми."
      },
      {
        heading: "5. Інтелектуальна власність",
        text: "Усі навчальні матеріали та інструменти залишаються інтелектуальною власністю Vibe Coding Academy. Проекти, виконані під час навчання, можуть бути використані у вашому портфоліо за попереднім погодженням."
      },
      {
        heading: "6. Припинення участі",
        text: "Академія залишає за собою право виключити учасника з програми за: тривалу відсутність без попередження, порушення правил поведінки, нечесну поведінку або дії, що негативно впливають на інших учасників."
      },
      {
        heading: "7. Обмеження відповідальності",
        text: "Vibe Coding Academy надає освітні послуги «як є» і не гарантує конкретних результатів працевлаштування чи рівня заробітної плати. Зарплатні показники на сайті відображають потенційний заробіток і можуть відрізнятися залежно від індивідуальних результатів."
      },
      {
        heading: "8. Зміни умов",
        text: "Ми можемо час від часу оновлювати ці умови. Продовження участі в програмі після змін означає прийняття оновлених умов."
      }
    ]
  },
  ru: {
    title: "Условия использования",
    lastUpdated: "Последнее обновление: февраль 2025",
    sections: [
      {
        heading: "1. О программе",
        text: "Vibe Coding Academy предлагает бесплатную программу обучения веб-разработке. После успешного завершения выпускники могут быть приглашены в нашу внутреннюю команду разработчиков как оплачиваемые сотрудники. Участие в программе не гарантирует трудоустройство."
      },
      {
        heading: "2. Требования к участникам",
        text: "Программа открыта для лиц от 18 лет. Предыдущий опыт программирования не требуется. Участники должны иметь доступ к компьютеру со стабильным интернет-соединением и быть готовыми уделять достаточно времени обучению."
      },
      {
        heading: "3. Структура программы",
        text: "Обучение состоит из практических заданий, менторских сессий и работы над реальными проектами. Продолжительность — обычно 3–6 месяцев в зависимости от индивидуального прогресса. Академия оставляет за собой право изменять учебную программу в соответствии с актуальными стандартами индустрии."
      },
      {
        heading: "4. Обязанности участников",
        text: "Участники обязуются: регулярно посещать занятия, вовремя выполнять задания, поддерживать уважительное общение с менторами и коллегами, не передавать учебные материалы третьим лицам и действовать добросовестно на протяжении всей программы."
      },
      {
        heading: "5. Интеллектуальная собственность",
        text: "Все учебные материалы и инструменты остаются интеллектуальной собственностью Vibe Coding Academy. Проекты, выполненные во время обучения, могут быть использованы в вашем портфолио с предварительного согласования."
      },
      {
        heading: "6. Прекращение участия",
        text: "Академия оставляет за собой право исключить участника из программы за: длительное отсутствие без предупреждения, нарушение правил поведения, нечестное поведение или действия, негативно влияющие на других участников."
      },
      {
        heading: "7. Ограничение ответственности",
        text: "Vibe Coding Academy предоставляет образовательные услуги «как есть» и не гарантирует конкретных результатов трудоустройства или уровня зарплаты. Зарплатные показатели на сайте отражают потенциальный заработок и могут отличаться в зависимости от индивидуальных результатов."
      },
      {
        heading: "8. Изменения условий",
        text: "Мы можем время от времени обновлять эти условия. Продолжение участия в программе после изменений означает принятие обновлённых условий."
      }
    ]
  }
};

const TermsContent = () => {
  const { language } = useLanguage();
  const content = termsContent[language];

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

const Terms = () => (
  <LanguageProvider>
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <TermsContent />
      </main>
      <Footer />
    </div>
  </LanguageProvider>
);

export default Terms;
