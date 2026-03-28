import React from "react";
import { FiAward } from "react-icons/fi";
import { educationData } from "../data/portfolioData";

const EducationSection = () => (
  <section id="education" className="education-section section-shell" data-reveal>
    <div className="main-container">
      <div className="section-heading">
        <span className="section-heading__eyebrow">Education</span>
        <h2 className="section-heading__title">
          Academic depth in systems, machine learning, and NLP.
        </h2>
        <p className="section-heading__body">
          My coursework in systems, databases, machine learning, and application
          development continues to shape how I approach production engineering work.
        </p>
      </div>

      <div className="education-grid">
        {educationData.map((item) => (
          <article key={item.institution} className="glass-card education-card">
            <div className="education-card__icon">
              <FiAward />
            </div>
            <div className="education-card__meta">
              <span className="education-card__year">{item.gradYear}</span>
              <h3>{item.degree}</h3>
              <p className="education-card__institution">{item.institution}</p>
              <p className="education-card__description">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
