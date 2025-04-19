import React from "react";
import renewableEnergyApp from "../assets/jpeg/Renewable_energy_app.png";
import FakeNewsPrediction from "../assets/jpeg/Fake_news_prediction.png";
import nHLLeaderboardStats from "../assets/jpeg/NHL_Leaderboard_Stats.png";
import eventSearchApp from "../assets/jpeg/Event_Search_App.jpg";
import slotBooking from "../assets/jpeg/Slot-booking.png";

const ProjectsSection = () => (
  <section id="projects" className="projects sec-pad">
    <div className="main-container">
      <h2 className="heading heading-sec heading-sec__mb-bg">
        <span className="heading-sec__main">Projects</span>
        <span className="heading-sec__sub">
          From dynamic web applications to ML-based classification systems, each project reflects hands-on problem solving, creativity, and a passion for purposeful building.
        </span>
      </h2>
      <div className="projects__content">
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src={renewableEnergyApp} alt="renewableEnergyApp Screenshot" className="projects__row-img" loading="lazy" />
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">Renewable Energy Analytics</h3>
            <p className="projects__row-content-desc">
              This project aims to develop a web application that visualizes energy consumption and generation data, providing users with insights into renewable energy usage and trends.
            </p>
            <a href="https://github.com/saikumar1767/RenewableEnergyAnalytics" className="btn btn--med btn--theme dynamicBgClr" target="_blank">View more</a>
          </div>
        </div>
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src={FakeNewsPrediction} alt="FakeNewsPrediction Screenshot" className="projects__row-img" loading="lazy" />
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">Fake News Detection System</h3>
            <p className="projects__row-content-desc">
              Developed multiple models viz., logistic regression, SVM, Naive Bayes, and Perceptron models to predict fake news.
              Evaluated four models and, with early stopping based on validation metrics implementation, substantially elevated and
              achieved a fake news prediction model with 90% accuracy with logistic regression.
            </p>
            <a href="#" className="btn btn--med btn--theme dynamicBgClr" target="_blank">View more</a>
          </div>
        </div>
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src={nHLLeaderboardStats} alt="nHLLeaderboardStats Screenshot" className="projects__row-img" loading="lazy" />
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">NHL Leaderboard Stats</h3>
            <p className="projects__row-content-desc">
              This project presents NHL team statistics using interactive visualizations powered by Highcharts.
              It features a sortable, filterable, and paginated summary table listing each team’s position, wins, losses, ties, and points.
            </p>
            <a href="https://github.com/saikumar1767/NHL-Leaderboard-Stats" className="btn btn--med btn--theme dynamicBgClr" target="_blank">View more</a>
          </div>
        </div>
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src={eventSearchApp} alt="eventSearchApp Screenshot" className="projects__row-img" loading="lazy" />
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">Event Search Application</h3>
            <p className="projects__row-content-desc">
              Engineered a responsive web and mobile application enabling users to perform Restful API-based searches for ticketing
              information, displaying fetched JSON results in card and tabular formats with UI manipulation, and deployed the
              application on Google Cloud Platform (GCP).
            </p>
            <a href="https://github.com/saikumar1767" className="btn btn--med btn--theme dynamicBgClr" target="_blank">View more</a>
          </div>
        </div>
        <div className="projects__row">
          <div className="projects__row-img-cont">
            <img src={slotBooking} alt="Slot-booking Screenshot" className="projects__row-img" loading="lazy" />
          </div>
          <div className="projects__row-content">
            <h3 className="projects__row-content-title">Slot Booking Application</h3>
            <p className="projects__row-content-desc">
              The Slot-Booking Project theme is to make appointment booking between people a lot easier which avoids the usual process of exchanging emails between people till they find a convenient time.
            </p>
            <a href="https://github.com/saikumar1767/Slot-Booking" className="btn btn--med btn--theme dynamicBgClr" target="_blank">View more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsSection;
