import React from "react";

const AchievementBadge = ({ metric, icon }) => (
  <div className="exp-achievement-badge">
    <span className={`exp-achievement-icon exp-achievement-icon--${icon}`}></span>
    <span className="exp-achievement-metric">{metric}</span>
  </div>
);

export default AchievementBadge;
