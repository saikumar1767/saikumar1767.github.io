
import React from "react";
import pic from "../assets/jpeg/pic.jpeg";
import hamMenu from "../assets/svg/ham-menu.svg";
import hamMenuClose from "../assets/svg/ham-menu-close.svg";

const Header = () => (
  <header className="header">
    <div className="header__content">
      <div className="header__logo-container">
        <div className="header__logo-img-cont">
          <img src={pic} alt="Sai Kumar Logo Image" className="header__logo-img" />
        </div>
        <span className="header__logo-sub">Sai Kumar K</span>
      </div>
      <div className="header__main">
        <ul className="header__links">
          <li className="header__link-wrapper"><a href="./index.html" className="header__link"> Home </a></li>
          <li className="header__link-wrapper"><a href="./index.html#about" className="header__link">About </a></li>
          <li className="header__link-wrapper"><a href="./index.html#projects" className="header__link">Projects</a></li>
          <li className="header__link-wrapper"><a href="./index.html#contact" className="header__link"> Contact </a></li>
        </ul>
        <div className="header__main-ham-menu-cont">
          <img src={hamMenu} alt="hamburger menu" className="header__main-ham-menu" />
          <img src={hamMenuClose} alt="hamburger menu close" className="header__main-ham-menu-close d-none" />
        </div>
      </div>
    </div>
    <div className="header__sm-menu">
      <div className="header__sm-menu-content">
        <ul className="header__sm-menu-links">
          <li className="header__sm-menu-link"><a href="./index.html"> Home </a></li>
          <li className="header__sm-menu-link"><a href="./index.html#about"> About </a></li>
          <li className="header__sm-menu-link"><a href="./index.html#projects"> Projects </a></li>
          <li className="header__sm-menu-link"><a href="./index.html#contact"> Contact </a></li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
