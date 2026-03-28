import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/portfolioData";

const ProjectsSection = () => {
  const [featuredProject, ...projectCards] = projects;

  return (
    <section id="projects" className="projects-section section-shell" data-reveal>
      <div className="main-container">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-heading__eyebrow">Selected work</span>
            <h2 className="section-heading__title">
              Projects from the portfolio and original repo history, restored to a fuller set.
            </h2>
          </div>
          <p className="section-heading__body">
            I brought this section back closer to the original repository shape so it
            reflects the broader project history you had in the portfolio before the
            recent narrowing to only a few AI-oriented examples.
          </p>
        </div>

        <article className="project-feature glass-card">
          <div className="project-feature__media">
            <img src={featuredProject.image} alt={featuredProject.title} />
          </div>
          <div className="project-feature__content">
            <span className="project-kicker">
              {featuredProject.category} � {featuredProject.year}
            </span>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.description}</p>
            <div className="project-tags">
              {featuredProject.tags.map((tag) => (
                <span key={tag} className="pill-chip pill-chip--soft">
                  {tag}
                </span>
              ))}
            </div>
            <div style={{ padding: "6px" }}/>
            <a
              href={featuredProject.href}
              target="_blank"
              rel="noreferrer"
              className="button button--primary button--compact"
            >
              View project
              <FiArrowUpRight />
            </a>
          </div>
        </article>

        <div className="project-grid">
          {projectCards.map((project) => (
            <article key={project.title} className="project-card glass-card">
              <div className="project-card__image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="project-card__content">
                <div className="project-card__copy">
                  <span className="project-kicker">
                    {project.category} � {project.year}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill-chip pill-chip--soft">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link inline-link"
                >
                  Open project
                  <FiArrowUpRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

