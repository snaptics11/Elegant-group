import React, { useState, useRef, useEffect } from "react";
import PopupForm from "../brochure/PopupForm";
import logo from "../../assets/logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);
  const navbarRef = useRef(null);

  const handleOpenEnquiryPopup = () => {
    setShowEnquiryPopup(true);
  };

  const handleCloseEnquiryPopup = () => {
    setShowEnquiryPopup(false);
  };

  const handleNavLinkClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = navbarRef.current.offsetHeight;
      const offsetTop = element.offsetTop - navbarHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => handleNavLinkClick(id), 100);
    }
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className="navbar navbar-expand-lg navbar-light sticky-top px-3"
        style={{ backgroundColor: "white", zIndex: 1020 }}
      >
        <div className="container-fluid">
          {/* Logo (left-aligned) */}
          <div
            className="navbar-brand d-flex align-items-center"
            onClick={() => handleNavLinkClick("Logo")}
            style={{ cursor: "pointer" }}
          >
            <img src={logo} alt="Logo" style={{ height: "60px" }} />
          </div>

          {/* Toggle button for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Right-aligned menu items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center text-center">
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => handleNavLinkClick("Home")}
                >
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => handleNavLinkClick("About")}
                >
                  About Project
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => handleNavLinkClick("Highlights")}
                >
                  Highlights
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => handleNavLinkClick("why")}
                >
                  Why
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => handleNavLinkClick("Gallery")}
                >
                  Gallery
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={() => handleNavLinkClick("location-highlights")}
                >
                  Location Highlights
                </span>
              </li>
              <li className="nav-item mt-3 mt-lg-0">
                <button
                  className="btn btn-outline-primary w-100 w-lg-auto"
                  onClick={handleOpenEnquiryPopup}
                >
                  Download Brochure
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Popup Form */}
      <PopupForm
        show={showEnquiryPopup}
        handleClose={handleCloseEnquiryPopup}
      />
    </>
  );
};

export default Navbar;
