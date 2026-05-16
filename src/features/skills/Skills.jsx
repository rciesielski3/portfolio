import "./Skills.css";

const capabilities = [
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
];

const stackGroups = [
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
];

const Skills = () => {
  return (
    <div className="skills-page">
      <header className="section-hero">
        <p className="section-kicker">Capability map</p>
        <h1>Skills built around reliable delivery</h1>
        <p>
          A practical QA toolkit across automation, risk analysis and delivery
          collaboration. Less buzzwords, more signals that help teams ship with
          confidence.
        </p>
      </header>
      <section className="skills-summary" aria-label="Skills summary">
        <article>
          <span>Strategy</span>
          <strong>Risk-based QA</strong>
          <p>Coverage decisions based on product and release risk.</p>
        </article>
        <article>
          <span>Automation</span>
          <strong>Practical coverage</strong>
          <p>UI, API and mobile checks designed for maintainability.</p>
        </article>
        <article>
          <span>Delivery</span>
          <strong>Quality signals</strong>
          <p>Clear feedback for teams, stakeholders and releases.</p>
        </article>
      </section>
      <section className="skills-bridge" aria-label="Capability context">
        <p className="section-kicker">How it shows up</p>
        <h2>From release risk to practical execution</h2>
        <p>
          The summary above is the operating model. The sections below translate
          it into day-to-day QA ownership: planning, automation, defects,
          environments, reporting and collaboration.
        </p>
      </section>
      <section className="capability-showcase" aria-label="Core capabilities">
        {capabilities.map((capability, index) => (
          <article className="capability-card" key={capability.title}>
            <div className="capability-index">0{index + 1}</div>
            <div>
              <span>{capability.label}</span>
              <h2>{capability.title}</h2>
              <p>{capability.description}</p>
            </div>
            <ul>
              {capability.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <section className="stack-radar">
        <div className="stack-heading">
          <p className="section-kicker">Tech stack</p>
          <h2>Tools I can discuss with context</h2>
          <p>
            Grouped by where they support quality work, not as a flat inventory.
          </p>
        </div>
        <div className="radar-cloud">
          {stackGroups.map((group) => (
            <article className="radar-group" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
