import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import brochureFile from "../../assets/Elegant-Iconia-Presentation.pdf";
import "./ThankYou.css";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thank-you-container d-flex flex-column align-items-center justify-content-center text-center p-4">
      <img
        src={logo}
        alt="Elegant Group Logo"
        className="mb-4"
        style={{ height: "150px" }}
      />

      <h1 className="thank-you-title mb-4">
        Thank You for Your Interest in Iconia Balanagar 🎉
      </h1>

      <p className="thank-you-message lead mb-4">
        Our experts will get in touch with you shortly...<br />
        Click the button below to download our E-Brochure.
      </p>

      <a
        href={brochureFile}
        download
        className="btn btn-outline-primary mb-3"
      >
        Download Brochure
      </a>

      <button className="btn btn-outline-primary" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default ThankYou;
