import React from "react";
import AchievementBadge from "./AchievementBadge";


const TimelineIndicator = ({ status, idx, total }) => (
  <div className="timeline-indicator">
    {idx !== 0 && <div className="timeline-connector timeline-connector--top" />}
    <div className={`exp-timeline-dot exp-timeline-dot--${status}`}></div>
    {idx !== total - 1 && <div className="timeline-connector timeline-connector--bottom" />}
  </div>
);


const ExperienceCard = ({ exp, idx, total }) => (
  <div className={`exp-card exp-card--${exp.status}`} style={{position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'flex-start'}}>
    <div className="timeline-indicator-col">
      <TimelineIndicator status={exp.status} idx={idx} total={total} />
    </div>
    <div className="exp-card-content">
      <div className="exp-card-header-content">
        <span className={`exp-status-badge exp-status-badge--${exp.status}`}>{exp.status === "current" ? "Current" : "Past"}</span>
        <h3 className="exp-role">{exp.role}</h3>
        <span className="exp-company">{exp.company}</span>
        <span className="exp-duration">{exp.duration}</span>
      </div>
      <div className="exp-desc">{exp.description}</div>
      <div className="exp-achievement-list">
        {exp.achievements && exp.achievements.map((ach, i) => (
          <AchievementBadge key={i} metric={ach.metric} icon={ach.icon} />
        ))}
      </div>
      <div className="exp-techs">
        {exp.technologies.map((tech, i) => (
          <span className="exp-tech" key={i}>{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

export default ExperienceCard;
