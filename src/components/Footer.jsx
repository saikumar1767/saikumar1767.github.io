import React from "react";
import linkedInIcon from "../assets/png/linkedin-ico.png";
import githubIcon from "../assets/png/github-ico.png";
import instaIcon from "../assets/png/insta-ico.png";

const Footer = () => (
  <footer className="main-footer">
    <div className="main-container">
      <div className="main-footer__upper">
        <div className="main-footer__row main-footer__row-1">
          <h2 className="heading heading-sm main-footer__heading-sm">
            <span>Social</span>
          </h2>
          <div className="main-footer__social-cont">
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/saikumarkasarla">
              <img className="main-footer__icon" src={linkedInIcon} alt="icon" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/saikumar1767">
              <img className="main-footer__icon" src={githubIcon} alt="icon" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/skr_1767">
              <img className="main-footer__icon main-footer__icon--mr-none" src={instaIcon} alt="icon" />
            </a>
          </div>
        </div>
        <div className="main-footer__row main-footer__row-2">
          <h4 className="heading heading-sm text-lt">Sai Kumar K</h4>
          <p className="main-footer__short-desc">
            Engineer at work, debugger on the go, and a constant therapist for unruly code.
          </p>
        </div>
      </div>
      <div className="main-footer__lower">
        &copy; Copyright 2025. Made by
        <a rel="noreferrer" target="_blank" href="/">Sai Kumar K</a>
      </div>
    </div>
  </footer>
);

export default Footer;
