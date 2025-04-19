import React from "react";
import linkedinDark from "../assets/svg/linkedin-dark.svg";
import githubDark from "../assets/svg/github-dark.svg";
import instagramDark from "../assets/svg/instagram-dark.svg";

const HeroSection = () => (
  <section className="home-hero">
    <div className="home-hero__content">
      <h1 className="heading-primary">Hey, I am Sai Kumar</h1>
      <div className="home-hero__info">
        <p className="text-primary">
          I architect intelligent systems that scale, endure, and make a difference.
          Driven by purpose, I build end-to-end products that combine cutting-edge tech with real-world impact—transforming complexity into clarity across both social and technical landscapes.
        </p>
      </div>
      <div className="home-hero__cta">
        <a href="./index.html#projects" className="btn btn--bg">Projects</a>
      </div>
    </div>
    <div className="home-hero__socials">
      <div className="home-hero__social">
        <a href="https://www.linkedin.com/in/saikumarkasarla" className="home-hero__social-icon-link">
          <img src={linkedinDark} alt="icon" className="home-hero__social-icon" />
        </a>
      </div>
      <div className="home-hero__social">
        <a href="https://github.com/saikumar1767" className="home-hero__social-icon-link">
          <img src={githubDark} alt="icon" className="home-hero__social-icon" />
        </a>
      </div>
      <div className="home-hero__social">
        <a href="https://www.instagram.com/skr_1767" className="home-hero__social-icon-link home-hero__social-icon-link--bd-none">
          <img src={instagramDark} alt="icon" className="home-hero__social-icon" />
        </a>
      </div>
    </div>
    <div className="home-hero__mouse-scroll-cont">
      <div className="mouse"></div>
    </div>
  </section>
);

export default HeroSection;
