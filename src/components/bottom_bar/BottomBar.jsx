import React from "react";
import "./BottomBar.css";

const BottomBar = () => {
  return (
    <div className="bottom-bar d-md-none">
      <a href="tel:+919966764646" className="bar-button phone-button">
        <i className="bi bi-telephone-fill icon"></i>
        <span>Phone</span>
      </a>
      <a
        href="https://wa.me/919966764646"
        target="_blank"
        rel="noopener noreferrer"
        className="bar-button whatsapp-button"
      >
        <i className="bi bi-whatsapp icon"></i>
        <span>WhatsApp</span>
      </a>
    </div>
  );
};

export default BottomBar;
