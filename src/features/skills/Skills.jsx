import "./Skills.css";
import { skillsContent } from "../../content/portfolioContent";

const Skills = () => {
  return (
    <div className="skills-page">
      <header className="section-hero">
        <p className="section-kicker">{skillsContent.hero.kicker}</p>
        <h1>{skillsContent.hero.title}</h1>
        <p>{skillsContent.hero.description}</p>
      </header>
      <section className="skills-summary" aria-label="Skills summary">
        {skillsContent.summary.map((item) => (
          <article key={item.label}>
            <span>{item.label}</span>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
      <section className="skills-bridge" aria-label="Capability context">
        <p className="section-kicker">{skillsContent.bridge.kicker}</p>
        <h2>{skillsContent.bridge.title}</h2>
        <p>{skillsContent.bridge.description}</p>
      </section>
      <section className="capability-showcase" aria-label="Core capabilities">
        {skillsContent.capabilities.map((capability, index) => (
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
          <p className="section-kicker">{skillsContent.stack.kicker}</p>
          <h2>{skillsContent.stack.title}</h2>
          <p>{skillsContent.stack.description}</p>
        </div>
        <div className="radar-cloud">
          {skillsContent.stack.groups.map((group) => (
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
