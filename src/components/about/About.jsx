import React from "react";
import "./About.css";

// Icons & Images
import mountainIcon from "../../assets/mountain-icon.png";
import moneyIcon from "../../assets/money-icon.png";
import construtionIcon from "../../assets/constrution-icon.png";
import globeIcon from "../../assets/globe-icon.png";
import highwayIcon from "../../assets/highway-icon.png";
import tickIcon from "../../assets/tick.png";
import treeIcon from "../../assets/tree-icon.png";
import locationIcon from "../../assets/location-icon.png";
import landIcon from "../../assets/land-icon.png";
import plotIcon from "../../assets/plot-icon.png";
import areaIcon from "../../assets/area-icon.png";
import amenitiesIcon from "../../assets/amenities-icon.png";
import villaPlotImage from "../../assets/gallery4.jpg";

function About() {
  const features = [
    { icon: treeIcon, text: "A Lifestyle Opportunity You Deserve" },
    { icon: tickIcon, text: "MUDA & DTCP-Approved Premium Plots" },
    { icon: highwayIcon, text: "Located on the Hyderabad–Bangalore National Highway" },
    { icon: globeIcon, text: "Near RRR & Future Infrastructure Projects" },
    { icon: construtionIcon, text: "Ready-to-Build Plots in a Secure Gated Layout" },
    { icon: moneyIcon, text: "High Potential for Appreciation & Rental Income" },
    { icon: mountainIcon, text: "Surrounded by Nature, Designed for Modern Living" },
    { icon: locationIcon, text: "A Well-Developed Location with Growth Prospects" },
  ];

  const stats = [
    { icon: landIcon, label: "Acres", value: "60" },
    { icon: plotIcon, label: "Plots", value: "800" },
    { icon: areaIcon, label: "Sq. yds", value: "165–660" },
    { icon: amenitiesIcon, label: "Acre of Amenities", value: "20+" },
  ];

  return (
    <section id="About project" className="about-section">
      <div className="text-center mb-4">
        <h1 className="about-heading">
          Villa Plots That Bring You <span className="text-primary">Luxury &amp; Future</span>
        </h1>
        <p className="about-text">
          <strong>Luxury Villa Plots for Sale in Balanagar, Shadnagar - By My Elegant Group</strong>
          <br /><br />
          Nestled amidst nature and rapid development, <strong>Iconica</strong> offers a once-in-a-lifetime
          opportunity to own a villa plot in one of Hyderabad’s fastest-growing corridors — right off the
          Hyderabad–Bangalore Highway and near the proposed RRR.
          <br /><br />
          This gated community combines luxury, nature, and appreciation potential — the perfect setting for
          your dream villa.
        </p>
      </div>

      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Features List */}
          <div className="col-12 col-md-6">
            <ul className="feature-list list-unstyled">
              {features.map((item, idx) => (
                <li key={idx}>
                  <img src={item.icon} alt="Feature Icon" />
                  <span className="feature-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="col-12 col-md-6 text-center d-flex align-items-center justify-content-center">
            <img
              src={villaPlotImage}
              alt="Villa Plot Aerial View"
              className="about-image"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="row stats-container g-4 justify-content-center text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-6 col-sm-6 col-md-3">
              <div className="stats-box bg-white">
                <img src={stat.icon} alt={stat.label} />
                <div className="stats-number">{stat.value}</div>
                <div className="stats-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
