import React from "react";
import { FiArrowDownRight, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { profile } from "../data/portfolioData";

const HeroSection = () => (
  <section className="hero-section" id="top" data-reveal>
    <div className="hero-section__glow hero-section__glow--one" />
    <div className="hero-section__glow hero-section__glow--two" />

    <div className="main-container hero-section__layout">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="eyebrow__dot" />
          {profile.name}
        </div>
        <p className="hero-kicker">
          Applied AI products, low-latency APIs, data systems, and full-stack delivery.
        </p>
        <h1 className="hero-title">
          I turn AI-enabled ideas into production-ready software systems.
        </h1>
        <p className="hero-description">
          {profile.intro} {profile.summary}
        </p>

        <div className="hero-actions">
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="button button--primary"
          >
            View resume
            <FiArrowUpRight />
          </a>
          <a href="#ai-fit" className="button button--ghost">
            Why AI teams
            <FiArrowDownRight />
          </a>
        </div>

        <div className="hero-meta">
          <div className="hero-meta__location">
            <FiMapPin />
            <span>{profile.location}</span>
          </div>
          <p className="hero-meta__availability">{profile.availability}</p>
        </div>
      </div>

      <div className="hero-panel">
        <div className="hero-panel__header">
          <span className="hero-panel__label">At a glance</span>
          <span className="hero-panel__title">{profile.title}</span>
        </div>

        <div className="hero-stats-grid">
          {profile.stats.map((stat) => (
            <article key={stat.label} className="hero-stat-card">
              <span className="hero-stat-card__value">{stat.value}</span>
              <p className="hero-stat-card__label">{stat.label}</p>
            </article>
          ))}
        </div>

        <div className="hero-spotlight">
          {profile.spotlight.map((item) => (
            <span key={item} className="pill-chip">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
