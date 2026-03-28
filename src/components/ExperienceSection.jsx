import React, { useEffect, useRef, useState } from "react";
import { FiCheckCircle, FiClock } from "react-icons/fi";
import { experienceData } from "../data/portfolioData";

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const nextIndex = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(nextIndex);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-20% 0px -25% 0px",
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const activeExperience = experienceData[activeIndex];

  return (
    <section id="experience" className="experience-section section-shell" data-reveal>
      <div className="main-container">
        <div className="section-heading section-heading--split">
          <div>
            <span className="section-heading__eyebrow">Experience timeline</span>
            <h2 className="section-heading__title">
              Experience that maps well to applied AI and AI product teams.
            </h2>
          </div>
          <p className="section-heading__body">
            The common thread across these roles is production engineering under
            real constraints: noisy inputs, data-heavy workflows, release pressure,
            reliability requirements, and the need to turn complexity into usable
            systems.
          </p>
        </div>

        <div className="timeline-shell">
          <aside className="timeline-sidebar">
            <div className="timeline-sidebar__sticky glass-card">
              <span className="timeline-sidebar__eyebrow">
                {activeExperience.label}
              </span>
              <h3 className="timeline-sidebar__role">{activeExperience.role}</h3>
              <p className="timeline-sidebar__company">
                {activeExperience.company}
              </p>
              <div className="timeline-sidebar__meta">
                <FiClock />
                <span>{activeExperience.duration}</span>
              </div>
              <p className="timeline-sidebar__focus">{activeExperience.focus}</p>

              <div className="timeline-progress">
                {experienceData.map((item, index) => (
                  <button
                    key={item.company}
                    type="button"
                    className={`timeline-progress__step ${
                      index === activeIndex ? "timeline-progress__step--active" : ""
                    }`}
                    onClick={() =>
                      cardRefs.current[index]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      })
                    }
                    aria-label={`Scroll to ${item.company}`}
                  >
                    <span className="timeline-progress__dot" />
                    <span className="timeline-progress__text">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="timeline-cards">
            {experienceData.map((item, index) => (
              <article
                key={item.company}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                data-index={index}
                className={`timeline-card glass-card ${
                  index === activeIndex ? "timeline-card--active" : ""
                }`}
              >
                <div className="timeline-card__topline">
                  <span className="timeline-card__label">{item.label}</span>
                  <span className="timeline-card__date">{item.duration}</span>
                </div>

                <div className="timeline-card__header">
                  <div>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span className={`status-pill status-pill--${item.status}`}>
                    {item.status === "current" ? "Current role" : "Past role"}
                  </span>
                </div>

                <p className="timeline-card__description">{item.description}</p>

                <div className="timeline-card__highlights">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="timeline-card__highlight">
                      <FiCheckCircle />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="timeline-card__tags">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="pill-chip pill-chip--soft">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
