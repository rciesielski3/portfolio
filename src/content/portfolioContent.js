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
  },
  pl: {
    languageName: "Polski",
    languageToggleLabel: "Zmień język",
    profile: {
      brand: "Inżynieria Jakości",
      heroRole: "Specjalista Quality Engineering",
      currentFocus: "Inżynieria jakości, automatyzacja i dostarczanie produktu.",
    },
    navigation: {
      home: "Start",
      experience: "Doświadczenie",
      skills: "Kompetencje",
      certifications: "Certyfikaty",
      github: "GitHub",
      contact: "Kontakt",
    },
    home: {
      typing: {
        staticText: "Jestem",
        words: [
          "Test Automation Engineer",
          "Specjalista Quality Engineering",
          "Product-minded QA",
          "Praktyk AI-assisted testing",
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
          label: "Automation focus",
          value: "Web, mobile, API i contract testing",
        },
        {
          label: "Product builder",
          value: "E-commerce, logistyka i IoT",
        },
      ],
      actions: {
        experience: "Zobacz doświadczenie",
        contact: "Kontakt",
      },
      currentFocusLabel: "Aktualny focus",
      visitorsLabel: "Odwiedziny",
    },
    experience: {
      hero: {
        kicker: "Resume",
        title: "Doświadczenie",
        description:
          "Oś czasu pracy w obszarze quality engineering, automatyzacji, dostarczania produktu i budowania produktu w domenach logistyki, bankowości, web, mobile oraz smart home.",
      },
      summary: [
        {
          label: "Aktualny zakres",
          title: "Quality engineering",
          description:
            "Automatyzacja, kontrakty, API, mobile i sygnały gotowości release.",
        },
        {
          label: "Product ownership",
          title: "ZabawkowyBox.pl",
          description: "Subskrypcje e-commerce, płatności, CMS i operacje.",
        },
        {
          label: "Ścieżka techniczna",
          title: "Automation practice",
          description:
            "Playwright, WebdriverIO, API, CI/CD i workflowy wspierane AI.",
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
    },
    skills: {
      hero: {
        kicker: "Capability map",
        title: "Kompetencje wokół stabilnego delivery",
        description:
          "Praktyczny zestaw QA obejmujący automatyzację, analizę ryzyka i współpracę delivery. Mniej buzzwordów, więcej sygnałów pomagających dowozić z pewnością.",
      },
      summary: [
        {
          label: "Strategia",
          title: "Risk-based QA",
          description: "Decyzje o pokryciu testami oparte o ryzyko produktu i release.",
        },
        {
          label: "Automatyzacja",
          title: "Praktyczne pokrycie",
          description: "Testy UI, API i mobile projektowane z myślą o utrzymaniu.",
        },
        {
          label: "Delivery",
          title: "Sygnały jakości",
          description: "Czytelny feedback dla zespołów, stakeholderów i release.",
        },
      ],
      bridge: {
        kicker: "Jak to dziala",
        title: "Od ryzyka release do praktycznej realizacji",
        description:
          "Podsumowanie wyżej pokazuje sposób pracy. Sekcje niżej przekładają go na codzienną odpowiedzialność QA: planowanie, automatyzację, defekty, środowiska, raportowanie i współpracę.",
      },
      capabilities: [
        {
          label: "Główne odpowiedzialności",
          title: "Właścicielstwo quality delivery",
          description:
            "Planowanie, wykonanie i raportowanie pomagające zespołom rozumieć gotowość release.",
          points: [
            "Tworzenie i utrzymanie planów testów oraz przypadków testowych dla aplikacji mobile i desktop",
            "Wykonywanie testów manualnych i automatycznych weryfikujących wymagania",
            "Analiza wyników testów, monitorowanie metryk jakości i raportowanie sygnałów release",
          ],
        },
        {
          label: "Quality operations",
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
            "Praca cross-funkcyjna wspierająca delivery, feedback i ciągłe usprawnianie.",
          points: [
            "Współpraca z developerami, stakeholderami i zespołami wsparcia",
            "Code review z perspektywy jakości",
            "Wsparcie pracy agile, dokumentacji i rozwiązywania problemów",
          ],
        },
      ],
      stack: {
        kicker: "Tech stack",
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
    contact: {
      kicker: "Kontakt",
      title: "Porozmawiajmy o jakości, automatyzacji albo delivery produktu.",
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
  },
};
