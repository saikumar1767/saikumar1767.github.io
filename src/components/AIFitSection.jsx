import React from "react";
import { FiArrowUpRight, FiCpu, FiLayers, FiShield, FiZap } from "react-icons/fi";
import { aiPositioning, profile } from "../data/portfolioData";

const icons = [FiZap, FiCpu, FiLayers, FiShield];

const AIFitSection = () => (
  <section id="ai-fit" className="ai-fit-section section-shell" data-reveal>
    <div className="main-container">
      <div className="section-heading section-heading--split">
        <div>
          <span className="section-heading__eyebrow">{aiPositioning.eyebrow}</span>
          <h2 className="section-heading__title">{aiPositioning.title}</h2>
        </div>
        <p className="section-heading__body">{aiPositioning.description}</p>
      </div>

      <div className="ai-fit-shell glass-card">
        <div className="ai-fit-shell__header">
          <div>
            <span className="ai-fit-shell__eyebrow">Best aligned roles</span>
            <h3 className="ai-fit-shell__title">
              A profile positioned for applied AI, product engineering, and AI-adjacent platform work.
            </h3>
          </div>

          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="button button--ghost button--compact"
          >
            View resume
            <FiArrowUpRight />
          </a>
        </div>

        <div className="ai-fit-targets">
          {aiPositioning.targetRoles.map((role) => (
            <span key={role} className="pill-chip">
              {role}
            </span>
          ))}
        </div>

        <div className="ai-fit-grid">
          {aiPositioning.pillars.map((pillar, index) => {
            const Icon = icons[index] || FiCpu;

            return (
              <article key={pillar.title} className="ai-fit-card">
                <div className="ai-fit-card__icon">
                  <Icon />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
                <div className="ai-fit-card__points">
                  {pillar.points.map((point) => (
                    <span key={point} className="pill-chip pill-chip--soft">
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default AIFitSection;
