export const defaultLanguage = "en";

export const supportedLanguages = ["en", "pl"];

export const portfolioContent = {
  en: {
    languageName: "English",
    languageToggleLabel: "Change language",
    profile: {
      brand: "Quality Engineering",
      heroRole: "Quality Engineering Specialist",
      currentFocus: "Quality engineering, automation and product delivery.",
    },
    navigation: {
      home: "Home",
      experience: "Experience",
      skills: "Skills",
      certifications: "Certifications",
      github: "GitHub",
      contact: "Contact",
      closeMenu: "Close navigation menu",
      openMenu: "Open navigation menu",
    },
    home: {
      typing: {
        staticText: "I'm",
        words: [
          "Test Automation Engineer",
          "AI-assisted Testing Practitioner",
          "Product-minded QA",
          "Quality Engineering Specialist",
        ],
      },
      heroCopy:
        "I help teams ship safer products with practical quality strategy, reliable automation and product-minded engineering.",
      careerSnapshot: [
        {
          label: "10+ years",
          value: "IT, QA and product quality",
        },
        {
          label: "Automation focus",
          value: "Web, mobile, API and contract testing",
        },
        {
          label: "Product builder",
          value: "E-commerce, logistics and IoT domains",
        },
      ],
      actions: {
        experience: "View Experience",
        contact: "Contact",
      },
      currentFocusLabel: "Current focus",
      visitorsLabel: "Visitors",
    },
    experience: {
      hero: {
        kicker: "Resume",
        title: "Experience",
        description:
          "A timeline of quality engineering, automation, product delivery and hands-on product building across logistics, banking, web, mobile and smart home domains.",
      },
      summary: [
        {
          label: "Current scope",
          title: "Quality engineering",
          description:
            "Automation, contracts, APIs, mobile and release feedback.",
        },
        {
          label: "Product ownership",
          title: "ZabawkowyBox.pl",
          description: "E-commerce subscriptions, payments, CMS and operations.",
        },
        {
          label: "Technical path",
          title: "Automation practice",
          description:
            "Playwright, WebdriverIO, API, CI/CD and AI-assisted workflows.",
        },
      ],
      sections: {
        experience: "Experience",
        education: "Education",
      },
      cta: {
        title: "Connect with Me",
        description:
          "If you want to know more about me, feel free to check out my LinkedIn profile.",
        button: "Open LinkedIn",
      },
    },
    skills: {
      hero: {
        kicker: "Capability map",
        title: "Skills built around reliable delivery",
        description:
          "A practical QA toolkit across automation, risk analysis and delivery collaboration. Less buzzwords, more signals that help teams ship with confidence.",
      },
      summary: [
        {
          label: "Strategy",
          title: "Risk-based QA",
          description: "Coverage decisions based on product and release risk.",
        },
        {
          label: "Automation",
          title: "Practical coverage",
          description: "UI, API and mobile checks designed for maintainability.",
        },
        {
          label: "Delivery",
          title: "Quality signals",
          description: "Clear feedback for teams, stakeholders and releases.",
        },
      ],
      bridge: {
        kicker: "How it shows up",
        title: "From release risk to practical execution",
        description:
          "The summary above is the operating model. The sections below translate it into day-to-day QA ownership: planning, automation, defects, environments, reporting and collaboration.",
      },
      capabilities: [
        {
          label: "Main responsibilities",
          title: "Quality delivery ownership",
          description:
            "Planning, execution and reporting that help teams understand release readiness.",
          points: [
            "Develop and maintain test plans and test cases for mobile and desktop applications",
            "Execute manual and automated tests to verify requirements",
            "Analyze test results, monitor quality metrics and report release signals",
          ],
        },
        {
          label: "Quality operations",
          title: "Defect, environment and data control",
          description:
            "Operational QA practices that keep testing reliable, repeatable and useful.",
          points: [
            "Identify, document and track bugs and customer issues",
            "Create and maintain test environments and test data",
            "Troubleshoot issues and support root-cause analysis",
          ],
        },
        {
          label: "Skills & competencies",
          title: "Collaboration and product quality",
          description:
            "Cross-functional quality work that supports delivery, feedback and continuous improvement.",
          points: [
            "Cross-functional collaboration with developers and stakeholders",
            "Code review feedback from a quality perspective",
            "Agile delivery support, documentation and problem solving",
          ],
        },
      ],
      stack: {
        kicker: "Tech stack",
        title: "Tools I can discuss with context",
        description:
          "Grouped by where they support quality work, not as a flat inventory.",
        groups: [
          {
            title: "Automation & testing",
            tools: [
              "Playwright",
              "WebdriverIO",
              "Appium",
              "Postman",
              "SoapUI",
              "Gatling",
              "Cucumber",
              "REST API testing",
              "SOAP API testing",
              "Contract testing",
              "WCAG",
              "Cypress",
              "Detox",
              "K6",
            ],
          },
          {
            title: "QA operations",
            tools: [
              "Jira",
              "Xray",
              "TestRail",
              "Confluence",
              "CI/CD quality gates",
              "GitHub Actions",
              "Quality reports",
            ],
          },
          {
            title: "Development",
            tools: [
              "TypeScript",
              "JavaScript",
              "Kotlin basics",
              "Remix",
              "HTML",
              "CSS",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "Prisma",
              "PostgreSQL",
              "Java",
            ],
          },
          {
            title: "Platforms, integrations & AI",
            tools: [
              "Android testing",
              "iOS testing",
              "Git",
              "Firebase",
              "Stripe",
              "InPost API",
              "Cloudinary",
              "Resend",
              "Google Sheets API",
              "GitHub Copilot",
              "AI agents",
              "MCP basics",
              "AI testing",
            ],
          },
        ],
      },
    },
    certifications: {
      hero: {
        kicker: "Continuous learning",
        title: "Certifications",
        description:
          "A curated training record across test automation, AI, accessibility, performance, web development and networking foundations.",
      },
    },
    github: {
      hero: {
        kicker: "Build log",
        title: "GitHub repositories",
        description:
          "Projects, experiments and learning repos that show how I approach automation, frontend foundations and practical engineering.",
      },
      emptyState: "Coming soon. Under construction.",
      errorPrefix: "Error",
      card: {
        openLabelPrefix: "Open",
        openLabelSuffix: "on GitHub",
        fallbackDescription: "No description provided yet.",
        viewRepository: "View repository",
      },
      externalWork: {
        kicker: "Supporting work",
        title: "Articles and side projects",
        description:
          "These are useful as secondary proof points, so they live here rather than competing with the primary portfolio navigation.",
        items: [
          {
            title: "QA Journey",
            description: "Writing and notes around quality assurance practice.",
            url: "https://qa-journey.blogspot.com/",
          },
          {
            title: "Quality Assurance Blog",
            description: "Additional QA articles and experiments.",
            url: "https://qa-blog.onrender.com/",
          },
          {
            title: "JS & React Fundamentals",
            description:
              "Learning lab for JavaScript, React and Next.js fundamentals.",
            url: "https://learn-js-react-basics.vercel.app/",
          },
          {
            title: "Mini Game Collection",
            description:
              "Small frontend projects focused on interaction and polish.",
            url: "https://mini-game-collection.vercel.app/",
          },
          {
            title: "My Smart Home",
            description: "Smart home related page and domain project.",
            url: "https://mysmarthome.cba.pl/",
          },
        ],
      },
    },
    contact: {
      kicker: "Contact",
      title: "Let's talk quality, automation or product delivery.",
      description:
        "Send a concise note and I will get back with context. For a faster signal, include the product area, stack and what kind of QA support you are looking for.",
      form: {
        fields: [
          { id: "first_name", label: "Name", type: "text" },
          { id: "title", label: "Subject", type: "text" },
          { id: "senderEmail", label: "Email", type: "email" },
          { id: "message", label: "Message", rows: 5, type: "textarea" },
        ],
        errors: {
          first_name: "Name is required",
          title: "Subject is required",
          senderEmailRequired: "Email is required",
          senderEmailInvalid: "Email address is invalid",
          message: "Message is required",
        },
        submit: "Send Message",
        submitting: "Sending...",
        success: "Your message has been sent successfully.",
        missingConfig: "Email service is not configured.",
        invalidPublicKey:
          "Email service has an invalid public key. Please update the EmailJS configuration.",
        genericError:
          "The message could not be sent. Please check the form configuration or try again later.",
      },
    },
    notFound: {
      kicker: "404 / route not found",
      title: "Signal lost, page not found.",
      prefix: "The route",
      suffix:
        "does not exist in this portfolio. Head back to the main page or continue from the experience overview.",
      actions: {
        home: "Home",
        experience: "Experience",
      },
    },
    social: {
      githubAria: "Open GitHub profile",
      githubTitle: "Open GitHub",
      linkedinAria: "Open LinkedIn profile",
      linkedinTitle: "Open LinkedIn",
    },
    common: {
      loading: "Loading...",
      close: "Close",
    },
  },
  pl: {
    languageName: "Polski",
    languageToggleLabel: "Zmień język",
    profile: {
      brand: "Inżynieria Jakości",
      heroRole: "Specjalista ds. inżynierii jakości",
      currentFocus: "Inżynieria jakości, automatyzacja i dostarczanie produktu.",
    },
    navigation: {
      home: "Start",
      experience: "Doświadczenie",
      skills: "Kompetencje",
      certifications: "Certyfikaty",
      github: "GitHub",
      contact: "Kontakt",
      closeMenu: "Zamknij menu nawigacji",
      openMenu: "Otwórz menu nawigacji",
    },
    home: {
      typing: {
        staticText: "Jestem",
        words: [
          "inżynierem automatyzacji testów",
          "specjalistą ds. inżynierii jakości",
          "QA z podejściem produktowym",
          "praktykiem testowania wspieranego AI",
        ],
      },
      heroCopy:
        "Pomagam zespołom dostarczać bezpieczniejsze produkty dzięki praktycznej strategii jakości, stabilnej automatyzacji i produktowemu podejściu do testowania.",
      careerSnapshot: [
        {
          label: "10+ lat",
          value: "IT, QA i jakość produktu",
        },
        {
          label: "Obszar automatyzacji",
          value: "Testy web, mobile, API i kontraktowe",
        },
        {
          label: "Twórca produktu",
          value: "E-commerce, logistyka i IoT",
        },
      ],
      actions: {
        experience: "Zobacz doświadczenie",
        contact: "Kontakt",
      },
      currentFocusLabel: "Aktualny obszar",
      visitorsLabel: "Odwiedziny",
    },
    experience: {
      hero: {
        kicker: "CV",
        title: "Doświadczenie",
        description:
          "Oś czasu pracy w obszarze inżynierii jakości, automatyzacji, dostarczania produktu i budowania rozwiązań w domenach logistyki, bankowości, web, mobile oraz smart home.",
      },
      summary: [
        {
          label: "Aktualny zakres",
          title: "Inżynieria jakości",
          description:
            "Automatyzacja, kontrakty, API, mobile i sygnały gotowości wydania.",
        },
        {
          label: "Produkt własny",
          title: "ZabawkowyBox.pl",
          description: "Subskrypcje e-commerce, płatności, CMS i operacje.",
        },
        {
          label: "Ścieżka techniczna",
          title: "Praktyka automatyzacji",
          description:
            "Playwright, WebdriverIO, API, CI/CD i przepływy pracy wspierane AI.",
        },
      ],
      sections: {
        experience: "Doświadczenie",
        education: "Edukacja",
      },
      cta: {
        title: "Porozmawiajmy",
        description:
          "Jeśli chcesz dowiedzieć się więcej, sprawdź mój profil LinkedIn.",
        button: "Otwórz LinkedIn",
      },
      timeline: {
        experiences: [
          {
            title: "Twórca i inżynier produktu",
            time: "Projekt produktowy – obecnie",
            description:
              "Stworzyłem i utrzymuję subskrypcyjną platformę e-commerce do wypożyczania zabawek opartą o Remix, React, TypeScript, Tailwind CSS, Prisma i PostgreSQL. Odpowiadam za konta użytkowników, cykliczne płatności Stripe, panele klienta i administratora, blog/CMS, media w Cloudinary, maile Resend/Nodemailer, integrację z punktami InPost i automatyzacje operacyjne w Google Sheets.",
          },
          {
            title: "Starszy inżynier QA",
            time: "wrz 2025 – obecnie",
            description:
              "Buduję i utrzymuję automatyczne pokrycie jakościowe dla warstw web, mobile, backend, kontraktów i wydajności. Pracuję z Playwrightem w TypeScript, WebdriverIO dla aplikacji natywnych, kotlinowymi frameworkami testów backendowych oraz testami wydajnościowymi Gatling. Dostarczam raporty jakości, dokumentację i czytelną analizę defektów wspierającą decyzje o wydaniu.",
          },
          {
            title: "Ekspert ds. testów",
            time: "maj 2025 – wrz 2025",
            description:
              "Odpowiadałem za pokrycie testami funkcjonalnymi, regresyjnymi, walidacyjnymi i WCAG dla aplikacji bankowych na mobile i desktop. Przekładałem user stories na scenariusze testowe, raportowałem defekty w Jira/Xray i wspierałem pewność wydań.",
          },
          {
            title: "Tester oprogramowania",
            time: "gru 2023 – mar 2025",
            description:
              "Realizowałem testy integracyjne, funkcjonalne, regresyjne i walidację danych dla przepływów iOS oraz Android. Budowałem automatyczne sprawdzenia i dokumentację użytkownika, żeby ograniczać tarcie we wsparciu i poprawiać niezawodność produktu.",
          },
          {
            title: "Programista full-stack — praktyka",
            time: "paź 2023 – maj 2025",
            description:
              "Budowałem i testowałem platformę e-learningową z użyciem React, Next.js, Node.js i NestJS. Ćwiczyłem przegląd kodu, poprawę niezawodności i produktowe myślenie end-to-end z perspektywy programisty oraz QA.",
          },
          {
            title: "Koordynator QA",
            time: "gru 2020 – gru 2023",
            description:
              "Koordynowałem prace mobile QA, odpowiadałem za cykl życia przypadków testowych w TestRail i śledziłem dostarczanie zadań w Jira. Wspierałem estymacje, planowanie i usprawnienia procesu, żeby jakość była widoczna w trakcie wydań.",
          },
          {
            title: "Inżynier QA",
            time: "maj 2018 – gru 2020",
            description:
              "Walidowałem aplikacje mobile i web przez testy eksploracyjne, regresyjne i automatyczne z użyciem Detox oraz Cypress. Utrzymywałem pokrycie w TestRail i pomagałem usprawniać powtarzalne sprawdzenia przed wydaniem.",
          },
          {
            title: "Inżynier wsparcia technicznego",
            time: "wrz 2015 – maj 2018",
            description:
              "Wspierałem użytkowników systemów inteligentnego domu i przekładałem powtarzalne problemy na czytelne zgłoszenia defektów. Utrzymywałem dokumentację w Confluence, obsługiwałem zgłoszenia w Desk.com i łączyłem informacje zwrotne od klientów z zespołami produktowymi.",
          },
          {
            title: "Młodszy inżynier systemów IT",
            time: "wrz 2013 – wrz 2015",
            description:
              "Zapewniałem wsparcie IT dla wewnętrznych zespołów inżynieryjnych, w tym konfigurację sprzętu i oprogramowania oraz obsługę zgłoszeń w narzędziach ITSM. Zbudowałem fundament w obszarze infrastruktury, operacji wsparcia i jakości usług.",
          },
        ],
        education: [
          {
            title: "Magister inżynier elektrotechniki",
            studies: "Politechnika Poznańska",
          },
          {
            title: "Inżynier elektrotechniki",
            studies: "Politechnika Poznańska",
          },
        ],
      },
    },
    skills: {
      hero: {
        kicker: "Mapa kompetencji",
        title: "Kompetencje wokół stabilnych wydań",
        description:
          "Praktyczny zestaw kompetencji QA obejmujący automatyzację, analizę ryzyka i współpracę z zespołami odpowiedzialnymi za dostarczanie produktu. Mniej buzzwordów, więcej sygnałów pomagających dowozić z pewnością.",
      },
      summary: [
        {
          label: "Strategia",
          title: "QA oparte na ryzyku",
          description: "Decyzje o pokryciu testami oparte o ryzyko produktu i wydania.",
        },
        {
          label: "Automatyzacja",
          title: "Praktyczne pokrycie testami",
          description: "Testy UI, API i mobile projektowane z myślą o utrzymaniu.",
        },
        {
          label: "Dostarczanie",
          title: "Sygnały jakości",
          description: "Czytelna informacja zwrotna dla zespołów, interesariuszy i wydań.",
        },
      ],
      bridge: {
        kicker: "Jak to działa",
        title: "Od ryzyka wydania do praktycznej realizacji",
        description:
          "Podsumowanie wyżej pokazuje sposób pracy. Sekcje niżej przekładają go na codzienną odpowiedzialność QA: planowanie, automatyzację, defekty, środowiska, raportowanie i współpracę.",
      },
      capabilities: [
        {
          label: "Główne odpowiedzialności",
          title: "Odpowiedzialność za jakość dostarczania",
          description:
            "Planowanie, wykonanie i raportowanie pomagające zespołom rozumieć gotowość wydania.",
          points: [
            "Tworzenie i utrzymanie planów testów oraz przypadków testowych dla aplikacji mobile i desktop",
            "Wykonywanie testów manualnych i automatycznych weryfikujących wymagania",
            "Analiza wyników testów, monitorowanie metryk jakości i raportowanie sygnałów gotowości wydania",
          ],
        },
        {
          label: "Operacje jakościowe",
          title: "Kontrola defektów, środowisk i danych",
          description:
            "Operacyjne praktyki QA, które utrzymują testy jako wiarygodne, powtarzalne i użyteczne.",
          points: [
            "Identyfikacja, dokumentowanie i śledzenie bugów oraz problemów klientów",
            "Tworzenie i utrzymanie środowisk oraz danych testowych",
            "Troubleshooting i wsparcie analizy przyczyn źródłowych",
          ],
        },
        {
          label: "Kompetencje",
          title: "Współpraca i jakość produktu",
          description:
            "Praca cross-funkcyjna wspierająca dostarczanie produktu, informację zwrotną i ciągłe usprawnianie.",
          points: [
            "Współpraca z developerami, interesariuszami i zespołami wsparcia",
            "Code review z perspektywy jakości",
            "Wsparcie zwinnej pracy zespołu, dokumentacji i rozwiązywania problemów",
          ],
        },
      ],
      stack: {
        kicker: "Stack technologiczny",
        title: "Narzędzia, o których mogę rozmawiać z kontekstem",
        description:
          "Pogrupowane według tego, jak wspierają pracę nad jakością, a nie jako płaska lista technologii.",
        groups: [
          {
            title: "Automation & testing",
            tools: [
              "Playwright",
              "WebdriverIO",
              "Appium",
              "Postman",
              "SoapUI",
              "Gatling",
              "Cucumber",
              "REST API testing",
              "SOAP API testing",
              "Contract testing",
              "WCAG",
              "Cypress",
              "Detox",
              "K6",
            ],
          },
          {
            title: "QA operations",
            tools: [
              "Jira",
              "Xray",
              "TestRail",
              "Confluence",
              "CI/CD quality gates",
              "GitHub Actions",
              "Quality reports",
            ],
          },
          {
            title: "Development",
            tools: [
              "TypeScript",
              "JavaScript",
              "Kotlin basics",
              "Remix",
              "HTML",
              "CSS",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "Prisma",
              "PostgreSQL",
              "Java",
            ],
          },
          {
            title: "Platforms, integrations & AI",
            tools: [
              "Android testing",
              "iOS testing",
              "Git",
              "Firebase",
              "Stripe",
              "InPost API",
              "Cloudinary",
              "Resend",
              "Google Sheets API",
              "GitHub Copilot",
              "AI agents",
              "MCP basics",
              "AI testing",
            ],
          },
        ],
      },
    },
    certifications: {
      hero: {
        kicker: "Ciągły rozwój",
        title: "Certyfikaty",
        description:
          "Wybrane szkolenia z obszaru automatyzacji testów, AI, dostępności, wydajności, web developmentu i podstaw sieci.",
      },
    },
    github: {
      hero: {
        kicker: "Dziennik pracy",
        title: "Repozytoria GitHub",
        description:
          "Projekty, eksperymenty i repozytoria edukacyjne pokazujące moje podejście do automatyzacji, podstaw frontendu i praktycznej inżynierii.",
      },
      emptyState: "Wkrótce. Sekcja w przygotowaniu.",
      errorPrefix: "Błąd",
      card: {
        openLabelPrefix: "Otwórz",
        openLabelSuffix: "na GitHubie",
        fallbackDescription: "Brak opisu repozytorium.",
        viewRepository: "Zobacz repozytorium",
      },
      externalWork: {
        kicker: "Dodatkowe materiały",
        title: "Artykuły i projekty poboczne",
        description:
          "To dodatkowe punkty potwierdzające praktykę, dlatego są tutaj, a nie w głównej nawigacji portfolio.",
        items: [
          {
            title: "QA Journey",
            description: "Notatki i teksty o praktyce zapewniania jakości.",
            url: "https://qa-journey.blogspot.com/",
          },
          {
            title: "Quality Assurance Blog",
            description: "Dodatkowe artykuły i eksperymenty QA.",
            url: "https://qa-blog.onrender.com/",
          },
          {
            title: "JS & React Fundamentals",
            description:
              "Laboratorium nauki podstaw JavaScript, React i Next.js.",
            url: "https://learn-js-react-basics.vercel.app/",
          },
          {
            title: "Mini Game Collection",
            description:
              "Małe projekty frontendowe skupione na interakcji i dopracowaniu UI.",
            url: "https://mini-game-collection.vercel.app/",
          },
          {
            title: "My Smart Home",
            description: "Strona i projekt domenowy związany ze smart home.",
            url: "https://mysmarthome.cba.pl/",
          },
        ],
      },
    },
    contact: {
      kicker: "Kontakt",
      title: "Porozmawiajmy o jakości, automatyzacji albo dostarczaniu produktu.",
      description:
        "Napisz krótko, a wrócę z konkretnym kontekstem. Najszybciej zadziała informacja o obszarze produktu, stacku i rodzaju wsparcia QA, którego szukasz.",
      form: {
        fields: [
          { id: "first_name", label: "Imię", type: "text" },
          { id: "title", label: "Temat", type: "text" },
          { id: "senderEmail", label: "Email", type: "email" },
          { id: "message", label: "Wiadomość", rows: 5, type: "textarea" },
        ],
        errors: {
          first_name: "Imię jest wymagane",
          title: "Temat jest wymagany",
          senderEmailRequired: "Email jest wymagany",
          senderEmailInvalid: "Adres email jest niepoprawny",
          message: "Wiadomość jest wymagana",
        },
        submit: "Wyślij wiadomość",
        submitting: "Wysyłanie...",
        success: "Wiadomość została wysłana.",
        missingConfig: "Serwis email nie jest skonfigurowany.",
        invalidPublicKey:
          "Serwis email ma niepoprawny public key. Zaktualizuj konfigurację EmailJS.",
        genericError:
          "Nie udało się wysłać wiadomości. Sprawdź konfigurację formularza albo spróbuj ponownie później.",
      },
    },
    notFound: {
      kicker: "404 / nie znaleziono strony",
      title: "Sygnał zgubiony, strony nie ma.",
      prefix: "Ścieżka",
      suffix:
        "nie istnieje w tym portfolio. Wróć na stronę główną albo przejdź do przeglądu doświadczenia.",
      actions: {
        home: "Start",
        experience: "Doświadczenie",
      },
    },
    social: {
      githubAria: "Otwórz profil GitHub",
      githubTitle: "Otwórz GitHub",
      linkedinAria: "Otwórz profil LinkedIn",
      linkedinTitle: "Otwórz LinkedIn",
    },
    common: {
      loading: "Ładowanie...",
      close: "Zamknij",
    },
  },
};
