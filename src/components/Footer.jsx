import React from "react";
import { profile } from "../data/portfolioData";

const Footer = () => (
  <footer className="site-footer">
    <div className="main-container site-footer__inner">
      <div>
        <p className="site-footer__title">{profile.name}</p>
        <p className="site-footer__subtitle">
          Applied AI, full-stack, and data systems engineering.
        </p>
      </div>

      <div className="site-footer__links">
        {profile.socials.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
