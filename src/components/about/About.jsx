import React from "react";
import mountainIcon from "../../assets/mountain-icon.png";
import moneyIcon from "../../assets/money-icon.png";
import construtionIcon from "../../assets/constrution-icon.png";
import globeIcon from "../../assets/globe-icon.png";
import highwayIcon from "../../assets/highway-icon.png";
import tickIcon from "../../assets/tick.png";
import villaPlotImage from "../../assets/gallery4.jpg";
import treeIcon from "../../assets/tree-icon.png";
import locationIcon from "../../assets/location-icon.png";
// import builderIcon from "../../assets/builder-icon.png";
import landIcon from "../../assets/land-icon.png";
import plotIcon from "../../assets/plot-icon.png";
import areaIcon from "../../assets/area-icon.png";
import amenitiesIcon from "../../assets/amenities-icon.png";

function About() {
  return (
    <div id="About project">
      <div
        className="px-3 px-sm-4 px-md-5 py-5"
        style={{ backgroundColor: "#d0e9fda5" }}
      >
        {/* Top Section */}
        <div className="row align-items-center gy-5">
          {/* Text Content */}
          <div className="col-12 col-md-6">
            <h1
              className="fw-bold text-dark text-uppercase mb-4"
              style={{
                fontSize: "clamp(1.5rem, 5vw, 2.2rem)",
                lineHeight: "1.4",
              }}
            >
              Villa Plots That Bring You{" "}
              <span className="text-primary">Luxury &amp; Future</span>
            </h1>

            <p className="text-muted fs-6">
              <strong>
                Luxury Villa Plots for Sale in Balanagar, Shadnagar - By My
                Elegant Group
              </strong>
              <br />
              <br />
              Nestled amidst nature and rapid development,{" "}
              <strong>Iconia</strong> offers a once-in-a-lifetime opportunity to
              own a villa plot in one of Hyderabad’s fastest-growing corridors —
              right off the Hyderabad–Bangalore Highway and near the proposed
              RRR.
              <br />
              <br />
              This gated community combines luxury, nature, and appreciation
              potential — the perfect setting for your dream villa.
            </p>

            <ul className="list-unstyled mt-4">
              {[
                {
                  icon: treeIcon,
                  text: "A Lifestyle Opportunity You Deserve",
                },
                {
                  icon: tickIcon,
                  text: "MUDA & DTCP-Approved Premium Plots",
                },
                {
                  icon: highwayIcon,
                  text: "Located on the Hyderabad–Bangalore National Highway",
                },
                {
                  icon: globeIcon,
                  text: "Near RRR & Future Infrastructure Projects",
                },
                {
                  icon: construtionIcon,
                  text: "Ready-to-Build Plots in a Secure Gated Layout",
                },
                {
                  icon: moneyIcon,
                  text: "High Potential for Appreciation & Rental Income",
                },
                {
                  icon: mountainIcon,
                  text: "Surrounded by Nature, Designed for Modern Living",
                },
                {
                  icon: locationIcon,
                  text: "A Well-Developed Location with Growth Prospects",
                },
              ].map((item, index) => (
                <li key={index} className="d-flex align-items-start mb-3">
                  <img
                    src={item.icon}
                    alt="Feature Icon"
                    className="me-3"
                    style={{ width: "32px", height: "32px", minWidth: "32px" }}
                  />
                  <span className="text-dark" style={{ fontSize: "1rem" }}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <p className="text-muted fs-6">
                <strong>Shadnagar</strong> is emerging as a top-tier investment
                zone, thanks to:
              </p>
              <ul className="ps- text-muted fs-6 list-unstyled">
                <li>✔️ Pharma City</li>
                <li>✔️ Amazon Data Center</li>
                <li>✔️ International Airport Cargo Zone</li>
                <li>✔️ Seamless Highway &amp; Rail Connectivity</li>
              </ul>
            </div>

            {/* CTA Box */}
            <div className="mt-4 p-4 bg-light rounded shadow-sm">
              <h5 className="fw-semibold mb-2">
                💬 Own the Plot, Build Your Legacy
              </h5>
              <p className="mb-1 text-muted fs-6">
                Secure your premium plot at{" "}
                <strong>Iconia by My Elegant Group</strong> — where nature,
                luxury, and investment meet.
              </p>
              <a
                href="https://wa.me/919966764646"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 text-primary fw-bold"
              >
                👉 Book a Free Site Visit Now!
              </a>

              <p className="small text-secondary">
                Limited plots available | Call Now | EMI Options Available
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="col-12 col-md-6 text-center d-flex align-items-center justify-content-center">
            <img
              src={villaPlotImage}
              alt="Villa Plot Aerial View"
              className="img-fluid rounded shadow"
              style={{
                maxHeight: 450,
                objectFit: "cover",
                width: "100%",
                minHeight: 220,
              }}
            />
          </div>
        </div>

        {/* Statistics Section */}
        <div className="row mt-5 g-4 justify-content-center text-center">
          <div className="col-6 col-sm-6 col-md-3">
            <div className="p-3 border border-2 border-dark rounded-2 h-100">
              <img
                src={landIcon}
                alt="Acres"
                style={{ width: "40px", height: "40px" }}
                className="mb-2"
              />
              <div className="h4 mb-1">60</div>
              <small className="text-muted">Acres</small>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <div className="p-3 border border-2 border-dark rounded-2 h-100">
              <img
                src={plotIcon}
                alt="Plots"
                style={{ width: "40px", height: "40px" }}
                className="mb-2"
              />
              <div className="h4 mb-1">800</div>
              <small className="text-muted">Plots</small>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <div className="p-3 border border-2 border-dark rounded-2 h-100">
              <img
                src={areaIcon}
                alt="Sq. yds"
                style={{ width: "40px", height: "40px" }}
                className="mb-2"
              />
              <div className="h4 mb-1">165–660</div>
              <small className="text-muted">Sq. yds</small>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3">
            <div className="p-3 border border-2 border-dark rounded-2 h-100">
              <img
                src={amenitiesIcon}
                alt="Amenities"
                style={{ width: "40px", height: "40px" }}
                className="mb-2"
              />
              <div className="h4 mb-1">20+</div>
              <small className="text-muted">Acre of Amenities</small>
            </div>
          </div>
        </div>
      </div>
      {/* Extra responsive tweaks for mobile */}
      <style>
        {`
          @media (max-width: 767px) {
            #About\\ project h1 {
              font-size: 1.4rem !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default About;
