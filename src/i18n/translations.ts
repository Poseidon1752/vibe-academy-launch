export type Language = "en" | "uk" | "ru";

export const translations = {
  en: {
    // Navigation
    nav: {
      philosophy: "Philosophy",
      earnings: "Earnings",
      process: "Process",
      testimonials: "Testimonials",
      faq: "FAQ",
      applyNow: "Apply Now",
    },
    // Hero
    hero: {
      badge: "No Webinars. No Hidden Fees.",
      headline: "Start Earning",
      salary: "$1,500+/mo",
      headlineEnd: " in Tech. Free Training. Zero Experience Needed.",
      subheadline: "We train you for free, hire you into our team, and you start earning from day one.",
      cta: "Apply for Interview",
      learnMore: "Learn More",
    },
    // Philosophy
    philosophy: {
      label: "Our Philosophy",
      title: 'The "No Bullshit" Approach',
      description:
        "We've stripped away everything that makes traditional bootcamps frustrating. No endless sales calls. No confusing payment plans. No vague promises.",
      points: [
        {
          title: "100% Free Education",
          description:
            "We invest in you because we believe in your potential. No tuition, no income share agreements, no hidden catches.",
        },
        {
          title: "Direct Path to Employment",
          description:
            "Graduate directly into our internal dev team. We hire the developers we train.",
        },
        {
          title: "Real Projects, Real Skills",
          description:
            "Learn by building actual products for real clients. Your portfolio starts on day one.",
        },
      ],
    },
    // Earnings
    earnings: {
      label: "Your Growth Path",
      title: "The Earnings",
      description: "Transparent income progression from your first day on our team.",
      disclaimer: "*Salaries are based on full-time positions and may vary by location and performance.",
      data: [
        { month: "Month 1", salary: "$1,500+", role: "Junior Developer" },
        { month: "Month 3", salary: "$4,500+", role: "Developer" },
        { month: "Month 6", salary: "$6,500+", role: "Mid-Level Developer" },
        { month: "Year 1+", salary: "$10,000+", role: "Senior Developer" },
      ],
    },
    // Process
    process: {
      label: "How It Works",
      title: "Three Steps to Your New Career",
      steps: [
        {
          number: "01",
          title: "Learn",
          description:
            "Immerse yourself in our intensive curriculum. Master modern web technologies through hands-on projects and expert mentorship. No theory dumps—just practical skills.",
        },
        {
          number: "02",
          title: "Practice",
          description:
            "Work on real client projects alongside our team. Build your portfolio with production-grade applications while receiving continuous feedback.",
        },
        {
          number: "03",
          title: "Join the Team",
          description:
            "Graduate directly into a paid position on our dev team. Start earning from day one with a clear path to senior roles.",
        },
      ],
    },
    // Testimonials
    testimonials: {
      label: "Success Stories",
      title: "What Our Graduates Say",
      description: "Real stories from developers who transformed their careers with us.",
      items: [
        {
          name: "Andrii Kovalenko",
          role: "Senior Developer",
          quote: "I went from zero coding experience to earning $4,000/mo in just 8 months. The mentorship here is world-class.",
          image: "AK",
        },
        {
          name: "Olena Shevchenko",
          role: "Full-Stack Developer",
          quote: "No endless theory. From day one, I was building real projects. Now I work on products used by thousands.",
          image: "OS",
        },
        {
          name: "Dmytro Bondarenko",
          role: "Frontend Lead",
          quote: "The 'learn by doing' approach changed everything. I never thought I'd lead a team within 2 years.",
          image: "DB",
        },
        {
          name: "Marina Lysenko",
          role: "Backend Developer",
          quote: "Best decision I ever made. The curriculum is incredibly well-structured and the support is amazing.",
          image: "ML",
        },
        {
          name: "Vladyslav Moroz",
          role: "DevOps Engineer",
          quote: "From bartender to DevOps in 10 months. The practical approach makes all the difference.",
          image: "VM",
        },
        {
          name: "Kateryna Tkachenko",
          role: "React Developer",
          quote: "I was skeptical at first, but now I'm earning more than I ever imagined. Truly life-changing.",
          image: "KT",
        },
      ],
    },
    // FAQ
    faq: {
      label: "Questions & Answers",
      title: "Frequently Asked Questions",
      description: "Everything you need to know about our program.",
      items: [
        {
          question: "Is the program really 100% free?",
          answer: "Yes, completely free. No tuition, no income share agreements, no hidden fees. We invest in your education because we hire our best graduates.",
        },
        {
          question: "Do I need prior coding experience?",
          answer: "No prior experience required. We start from the fundamentals and build up. All you need is dedication, a computer, and internet access.",
        },
        {
          question: "How long is the program?",
          answer: "The learning phase typically takes 3-6 months depending on your pace. After that, you transition into paid practice on real projects.",
        },
        {
          question: "What technologies will I learn?",
          answer: "Modern web development stack: HTML, CSS, JavaScript, React, Node.js, databases, Git, and cloud deployment. We focus on in-demand skills.",
        },
        {
          question: "Is remote work possible?",
          answer: "Yes! Our team is fully remote. You can work from anywhere with a stable internet connection.",
        },
        {
          question: "What's the interview process like?",
          answer: "A simple 15-minute video call with our curator. No trick questions—just an honest conversation about your goals and motivation.",
        },
      ],
    },
    // CTA
    cta: {
      label: "Ready to Start?",
      title: "Talk to a Curator",
      description:
        "Apply for a short interview with our team. No pressure, no sales pitch—just an honest conversation about your goals.",
      button: "Apply for Interview",
      trust: ["Free to apply", "No commitment", "Response within 24h"],
    },
    // Footer
    footer: {
      tagline: "Building the next generation of developers.",
      links: ["Privacy", "Terms", "Contact"],
      copyright: "© 2025 Vibe Coding Academy",
    },
  },
  uk: {
    // Navigation
    nav: {
      philosophy: "Філософія",
      earnings: "Заробіток",
      process: "Процес",
      testimonials: "Відгуки",
      faq: "FAQ",
      applyNow: "Подати заявку",
    },
    // Hero
    hero: {
      badge: "Без вебінарів. Без прихованих платежів.",
      headline: "Почни заробляти",
      salary: "$1,500+/міс",
      headlineEnd: " в IT. Навчання безкоштовне. Досвід не потрібен.",
      subheadline: "Ми навчаємо тебе безкоштовно, беремо в команду, і ти починаєш заробляти з першого дня.",
      cta: "Подати заявку на співбесіду",
      learnMore: "Дізнатися більше",
    },
    // Philosophy
    philosophy: {
      label: "Наша філософія",
      title: "Підхід «Без дурниць»",
      description:
        "Ми прибрали все, що робить традиційні буткемпи нестерпними. Ніяких нескінченних дзвінків. Ніяких заплутаних платіжних планів. Ніяких порожніх обіцянок.",
      points: [
        {
          title: "100% безкоштовна освіта",
          description:
            "Ми інвестуємо в тебе, бо віримо в твій потенціал. Ніякої оплати, ніяких угод про розподіл доходу.",
        },
        {
          title: "Прямий шлях до працевлаштування",
          description:
            "Випускайся одразу в нашу команду розробників. Ми наймаємо розробників, яких навчаємо.",
        },
        {
          title: "Реальні проєкти, реальні навички",
          description:
            "Навчайся, створюючи справжні продукти для реальних клієнтів. Твоє портфоліо починається з першого дня.",
        },
      ],
    },
    // Earnings
    earnings: {
      label: "Твій шлях зростання",
      title: "Заробіток",
      description: "Прозора прогресія доходу з першого дня в нашій команді.",
      disclaimer: "*Зарплати базуються на повній зайнятості та можуть відрізнятися залежно від локації та результатів.",
      data: [
        { month: "Місяць 1", salary: "$1,500+", role: "Junior Developer" },
        { month: "Місяць 3", salary: "$4,500+", role: "Developer" },
        { month: "Місяць 6", salary: "$6,500+", role: "Mid-Level Developer" },
        { month: "Рік 1+", salary: "$10,000+", role: "Senior Developer" },
      ],
    },
    // Process
    process: {
      label: "Як це працює",
      title: "Три кроки до нової кар'єри",
      steps: [
        {
          number: "01",
          title: "Навчайся",
          description:
            "Занурся в нашу інтенсивну програму. Опануй сучасні веб-технології через практичні проєкти та експертний менторинг.",
        },
        {
          number: "02",
          title: "Практикуй",
          description:
            "Працюй над реальними клієнтськими проєктами разом з нашою командою. Будуй портфоліо продакшн-рівня.",
        },
        {
          number: "03",
          title: "Приєднуйся",
          description:
            "Випускайся одразу на оплачувану позицію в нашій команді. Почни заробляти з першого дня.",
        },
      ],
    },
    // Testimonials
    testimonials: {
      label: "Історії успіху",
      title: "Що кажуть наші випускники",
      description: "Реальні історії від розробників, які змінили свою кар'єру з нами.",
      items: [
        {
          name: "Андрій Коваленко",
          role: "Senior Developer",
          quote: "Я пройшов шлях від нуля до $4,000/міс за 8 місяців. Менторство тут світового рівня.",
          image: "АК",
        },
        {
          name: "Олена Шевченко",
          role: "Full-Stack Developer",
          quote: "Ніякої нескінченної теорії. З першого дня я створювала реальні проєкти. Тепер працюю над продуктами для тисяч користувачів.",
          image: "ОШ",
        },
        {
          name: "Дмитро Бондаренко",
          role: "Frontend Lead",
          quote: "Підхід «навчайся роблячи» змінив все. Я ніколи не думав, що очолю команду за 2 роки.",
          image: "ДБ",
        },
        {
          name: "Марина Лисенко",
          role: "Backend Developer",
          quote: "Найкраще рішення в моєму житті. Програма неймовірно структурована, а підтримка чудова.",
          image: "МЛ",
        },
        {
          name: "Владислав Мороз",
          role: "DevOps Engineer",
          quote: "Від бармена до DevOps за 10 місяців. Практичний підхід робить всю різницю.",
          image: "ВМ",
        },
        {
          name: "Катерина Ткаченко",
          role: "React Developer",
          quote: "Спочатку я сумнівалась, але тепер заробляю більше, ніж могла уявити. Це змінило моє життя.",
          image: "КТ",
        },
      ],
    },
    // FAQ
    faq: {
      label: "Питання та відповіді",
      title: "Часті запитання",
      description: "Все, що потрібно знати про нашу програму.",
      items: [
        {
          question: "Програма справді на 100% безкоштовна?",
          answer: "Так, повністю безкоштовна. Ніякої оплати, ніяких угод про розподіл доходу, ніяких прихованих платежів.",
        },
        {
          question: "Чи потрібен попередній досвід програмування?",
          answer: "Ні. Ми починаємо з основ і поступово розвиваємось. Все, що потрібно — це мотивація, комп'ютер та інтернет.",
        },
        {
          question: "Скільки триває програма?",
          answer: "Фаза навчання зазвичай займає 3-6 місяців залежно від твого темпу. Після цього — оплачувана практика на реальних проєктах.",
        },
        {
          question: "Які технології я вивчу?",
          answer: "Сучасний веб-стек: HTML, CSS, JavaScript, React, Node.js, бази даних, Git та хмарний деплой.",
        },
        {
          question: "Чи можлива віддалена робота?",
          answer: "Так! Наша команда повністю віддалена. Можеш працювати з будь-якого місця зі стабільним інтернетом.",
        },
        {
          question: "Як проходить співбесіда?",
          answer: "Простий 15-хвилинний відеодзвінок з нашим куратором. Без каверзних питань — просто чесна розмова про твої цілі.",
        },
      ],
    },
    // CTA
    cta: {
      label: "Готовий почати?",
      title: "Поговори з куратором",
      description:
        "Подай заявку на коротку співбесіду з нашою командою. Без тиску, без продажів — просто чесна розмова про твої цілі.",
      button: "Подати заявку",
      trust: ["Безкоштовна заявка", "Без зобов'язань", "Відповідь протягом 24 год"],
    },
    // Footer
    footer: {
      tagline: "Будуємо нове покоління розробників.",
      links: ["Конфіденційність", "Умови", "Контакти"],
      copyright: "© 2025 Vibe Coding Academy",
    },
  },
  ru: {
    // Navigation
    nav: {
      philosophy: "Философия",
      earnings: "Заработок",
      process: "Процесс",
      testimonials: "Отзывы",
      faq: "FAQ",
      applyNow: "Подать заявку",
    },
    // Hero
    hero: {
      badge: "Без вебинаров. Без скрытых платежей.",
      headline: "Начни зарабатывать",
      salary: "$1,500+/мес",
      headlineEnd: " в IT. Обучение бесплатное. Опыт не нужен.",
      subheadline: "Мы обучаем тебя бесплатно, берём в команду, и ты начинаешь зарабатывать с первого дня.",
      cta: "Подать заявку на собеседование",
      learnMore: "Узнать больше",
    },
    // Philosophy
    philosophy: {
      label: "Наша философия",
      title: "Подход «Без ерунды»",
      description:
        "Мы убрали всё, что делает традиционные буткемпы невыносимыми. Никаких бесконечных звонков. Никаких запутанных платёжных планов. Никаких пустых обещаний.",
      points: [
        {
          title: "100% бесплатное образование",
          description:
            "Мы инвестируем в тебя, потому что верим в твой потенциал. Никакой оплаты, никаких соглашений о разделе дохода.",
        },
        {
          title: "Прямой путь к трудоустройству",
          description:
            "Выпускайся сразу в нашу команду разработчиков. Мы нанимаем разработчиков, которых обучаем.",
        },
        {
          title: "Реальные проекты, реальные навыки",
          description:
            "Учись, создавая настоящие продукты для реальных клиентов. Твоё портфолио начинается с первого дня.",
        },
      ],
    },
    // Earnings
    earnings: {
      label: "Твой путь роста",
      title: "Заработок",
      description: "Прозрачная прогрессия дохода с первого дня в нашей команде.",
      disclaimer: "*Зарплаты основаны на полной занятости и могут отличаться в зависимости от локации и результатов.",
      data: [
        { month: "Месяц 1", salary: "$1,500+", role: "Junior Developer" },
        { month: "Месяц 3", salary: "$4,500+", role: "Developer" },
        { month: "Месяц 6", salary: "$6,500+", role: "Mid-Level Developer" },
        { month: "Год 1+", salary: "$10,000+", role: "Senior Developer" },
      ],
    },
    // Process
    process: {
      label: "Как это работает",
      title: "Три шага к новой карьере",
      steps: [
        {
          number: "01",
          title: "Учись",
          description:
            "Погрузись в нашу интенсивную программу. Освой современные веб-технологии через практические проекты и экспертный менторинг.",
        },
        {
          number: "02",
          title: "Практикуйся",
          description:
            "Работай над реальными клиентскими проектами вместе с нашей командой. Создавай портфолио продакшн-уровня.",
        },
        {
          number: "03",
          title: "Присоединяйся",
          description:
            "Выпускайся сразу на оплачиваемую позицию в нашей команде. Начни зарабатывать с первого дня.",
        },
      ],
    },
    // Testimonials
    testimonials: {
      label: "Истории успеха",
      title: "Что говорят наши выпускники",
      description: "Реальные истории от разработчиков, изменивших свою карьеру с нами.",
      items: [
        {
          name: "Андрей Коваленко",
          role: "Senior Developer",
          quote: "Я прошёл путь от нуля до $4,000/мес за 8 месяцев. Менторство здесь мирового уровня.",
          image: "АК",
        },
        {
          name: "Елена Шевченко",
          role: "Full-Stack Developer",
          quote: "Никакой бесконечной теории. С первого дня я создавала реальные проекты. Теперь работаю над продуктами для тысяч пользователей.",
          image: "ЕШ",
        },
        {
          name: "Дмитрий Бондаренко",
          role: "Frontend Lead",
          quote: "Подход «учись делая» изменил всё. Я никогда не думал, что возглавлю команду за 2 года.",
          image: "ДБ",
        },
        {
          name: "Марина Лысенко",
          role: "Backend Developer",
          quote: "Лучшее решение в моей жизни. Программа невероятно структурирована, а поддержка потрясающая.",
          image: "МЛ",
        },
        {
          name: "Владислав Мороз",
          role: "DevOps Engineer",
          quote: "От бармена до DevOps за 10 месяцев. Практический подход делает всю разницу.",
          image: "ВМ",
        },
        {
          name: "Екатерина Ткаченко",
          role: "React Developer",
          quote: "Сначала я сомневалась, но теперь зарабатываю больше, чем могла представить. Это изменило мою жизнь.",
          image: "ЕТ",
        },
      ],
    },
    // FAQ
    faq: {
      label: "Вопросы и ответы",
      title: "Часто задаваемые вопросы",
      description: "Всё, что нужно знать о нашей программе.",
      items: [
        {
          question: "Программа действительно на 100% бесплатная?",
          answer: "Да, полностью бесплатная. Никакой оплаты, никаких соглашений о разделе дохода, никаких скрытых платежей.",
        },
        {
          question: "Нужен ли предыдущий опыт программирования?",
          answer: "Нет. Мы начинаем с основ и постепенно развиваемся. Всё, что нужно — это мотивация, компьютер и интернет.",
        },
        {
          question: "Сколько длится программа?",
          answer: "Фаза обучения обычно занимает 3-6 месяцев в зависимости от твоего темпа. После этого — оплачиваемая практика на реальных проектах.",
        },
        {
          question: "Какие технологии я изучу?",
          answer: "Современный веб-стек: HTML, CSS, JavaScript, React, Node.js, базы данных, Git и облачный деплой.",
        },
        {
          question: "Возможна ли удалённая работа?",
          answer: "Да! Наша команда полностью удалённая. Можешь работать из любого места со стабильным интернетом.",
        },
        {
          question: "Как проходит собеседование?",
          answer: "Простой 15-минутный видеозвонок с нашим куратором. Без каверзных вопросов — просто честный разговор о твоих целях.",
        },
      ],
    },
    // CTA
    cta: {
      label: "Готов начать?",
      title: "Поговори с куратором",
      description:
        "Подай заявку на короткое собеседование с нашей командой. Без давления, без продаж — просто честный разговор о твоих целях.",
      button: "Подать заявку",
      trust: ["Бесплатная заявка", "Без обязательств", "Ответ в течение 24 ч"],
    },
    // Footer
    footer: {
      tagline: "Строим новое поколение разработчиков.",
      links: ["Конфиденциальность", "Условия", "Контакты"],
      copyright: "© 2025 Vibe Coding Academy",
    },
  },
} as const;

export type Translations = typeof translations.en;
