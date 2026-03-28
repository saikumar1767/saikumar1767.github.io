import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import pic from "../assets/jpeg/pic.jpeg";
import { profile } from "../data/portfolioData";

const navItems = [
  { label: "Home", href: "#top", id: "top" },
  { label: "AI Fit", href: "#ai-fit", id: "ai-fit" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const onResize = () => {
      if (window.innerWidth > 960) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand-mark" href="#top" aria-label="Go to top of page">
          <div className="brand-mark__avatar">
            <img src={pic} alt={profile.name} />
          </div>
          <div className="brand-mark__copy">
            <span className="brand-mark__name">{profile.name}</span>
            <span className="brand-mark__role">{profile.title}</span>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`desktop-nav__link ${
                activeSection === item.id ? "desktop-nav__link--active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a
            href={profile.resumeHref}
            className="header-cta"
            target="_blank"
            rel="noreferrer"
            aria-label="Open resume"
          >
            Resume
            <FiArrowUpRight />
          </a>

          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav-panel ${
          menuOpen ? "mobile-nav-panel--open" : ""
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`mobile-nav-panel__link ${
              activeSection === item.id ? "mobile-nav-panel__link--active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
