import React from "react";
import { FiArrowUpRight, FiCpu, FiLayers, FiTrendingUp } from "react-icons/fi";
import { profile, skills } from "../data/portfolioData";

const focusAreas = [
  {
    icon: FiCpu,
    title: "Applied AI Engineering",
    text: "I am strongest where AI meets software engineering: workflow automation, LLM-enabled product features, backend services, and production constraints.",
  },
  {
    icon: FiLayers,
    title: "Across the Stack",
    text: "I can move from React interfaces and internal tools to Python and Java services, SQL tuning, and cloud-backed delivery.",
  },
  {
    icon: FiTrendingUp,
    title: "Measured Outcomes",
    text: "The work I highlight most is the work that changed operating speed, reduced manual effort, improved stability, or made product teams faster.",
  },
];

const AboutSection = () => (
  <section id="about" className="about-section section-shell" data-reveal>
    <div className="main-container">
      <div className="section-heading">
        <span className="section-heading__eyebrow">About</span>
        <h2 className="section-heading__title">
          A full stack engineer with a strong fit for applied AI teams.
        </h2>
        <p className="section-heading__body">
          I am {profile.name}, based in New York City. My background combines
          backend engineering, product delivery, analytics workflows, observability,
          and AI-enabled feature work, which makes me a strong fit for teams building
          real products around modern AI capabilities.
        </p>
      </div>

      <div className="about-grid">
        <article className="glass-card about-story">
          <p className="about-story__lead">
            My recent work has involved turning noisy or data-heavy workflows into
            faster, clearer systems through automation, APIs, validation, and better
            user-facing product flows.
          </p>
          <p className="about-story__body">
            That translates well to AI organizations that need engineers who can
            do more than call a model API: prototype quickly, integrate across the
            stack, productionize safely, and keep systems reliable once they are live.
          </p>
          <a href="#experience" className="inline-link">
            Explore the experience timeline
            <FiArrowUpRight />
          </a>
        </article>

        <div className="about-focus">
          {focusAreas.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="glass-card focus-card">
                <div className="focus-card__icon">
                  <Icon />
                </div>
                <div className="focus-card__content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="skills-ribbon">
        {skills.map((skill) => (
          <span key={skill} className="skills-ribbon__item">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
