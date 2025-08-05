import React, { useState, useEffect } from "react";
import social1 from "../../assets/gallery/social-zone/social-one.jpg";
import social2 from "../../assets/gallery/social-zone/social-two.jpg";
import social3 from "../../assets/gallery/social-zone/social-three.jpg";
import social4 from "../../assets/gallery/social-zone/social-four.jpg";
import social5 from "../../assets/gallery/social-zone/social-five.jpg";
import social6 from "../../assets/gallery/social-zone/social-six.jpg";
import active1 from "../../assets/gallery/active-zone/active-one.jpg";
import active2 from "../../assets/gallery/active-zone/active-two.jpg";
import active3 from "../../assets/gallery/active-zone/active-three.jpg";
import active4 from "../../assets/gallery/active-zone/active-four.jpg";
import active5 from "../../assets/gallery/active-zone/active-five.jpg";
import active6 from "../../assets/gallery/active-zone/active-six.jpg";
import green1 from "../../assets/gallery/green-zone/green-one.jpg";
import green2 from "../../assets/gallery/green-zone/green-two.jpg";
import green3 from "../../assets/gallery/green-zone/green-three.jpg";
import other1 from "../../assets/gallery/other-zone/other-one.jpg";
import other2 from "../../assets/gallery/other-zone/other-two.jpg";
import other3 from "../../assets/gallery/other-zone/other-three.jpg";
import "./Gallery.css";

const galleryData = {
  "Proposed Developments": [
    { src: social1, alt: "Social 1" },
    { src: social2, alt: "Social 2" },
    { src: social3, alt: "Social 3" },
    { src: social4, alt: "Social 4" },
    { src: social5, alt: "Social 5" },
    { src: social6, alt: "Social 6" },
    { src: green1, alt: "Green 1" },
    { src: green2, alt: "Green 2" },
    { src: green3, alt: "Green 3" },
  ],
  "Completed Developments": [
    { src: active1, alt: "Active 1" },
    { src: active2, alt: "Active 2" },
    { src: active3, alt: "Active 3" },
    { src: active4, alt: "Active 4" },
    { src: active5, alt: "Active 5" },
    { src: active6, alt: "Active 6" },
    { src: other1, alt: "Other 1" },
    { src: other2, alt: "Other 2" },
    { src: other3, alt: "Other 3" },
  ],
  // "Green  Zone": [
    
  // ],
  // "Other Amenities": [
    
  // ],
};

const preloadImages = () => {
  Object.values(galleryData)
    .flat()
    .forEach((item) => {
      const img = new window.Image();
      img.src = item.src;
    });
};

const Gallery = () => {
  const [activeZone, setActiveZone] = useState("Proposed Developments");
  const [modalImg, setModalImg] = useState(null);
  const zones = Object.keys(galleryData);

  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <div id="Gallery">
      <div className="bg-light py-5 text-center">
        <h2 className="fw-bold display-5 mb-4 text-uppercase">Gallery</h2>
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {zones.map((zone) => (
            <button
              key={zone}
              onClick={() => setActiveZone(zone)}
              className={`btn ${
                activeZone === zone ? "btn-primary" : "btn-outline-primary"
              }`}
            >
              {zone}
            </button>
          ))}
        </div>
        <div className="container mb-5">
          <div className="row g-4">
            {galleryData[activeZone].map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card shadow h-100">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="card-img-top"
                    style={{
                      height: "300px",
                      objectFit: "cover",
                      cursor: "pointer",
                    }}
                    loading="lazy"
                    onClick={() => setModalImg(item)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* MODAL */}
        {modalImg && (
          <div className="gallery-modal" onClick={() => setModalImg(null)}>
            <img
              src={modalImg.src}
              alt={modalImg.alt}
              className="gallery-modal-img"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="gallery-modal-close"
              onClick={() => setModalImg(null)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
