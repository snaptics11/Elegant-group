import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import "./Highlights.css";
import clubhouse from "../../assets/clubhouse.png";

const Highlights = () => {
  return (
    <div id="Highlights">
      <div className="project py-5" style={{ backgroundColor: "#c3d7e99a" }}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="mb-4">
              <h1 className="section-title">PROJECT HIGHLIGHTS</h1>
              <ul className="custom-list">
                <li>
                  <FaCheckCircle
                    style={{ color: "#187efb", marginRight: "10px" }}
                  />{" "}
                  Total land area of 100 acres
                </li>
                <li>
                  <FaCheckCircle
                    style={{ color: "#187efb", marginRight: "10px" }}
                  />{" "}
                  Phase 1, 2, 3 & 4 – 60 acres, 800 Plots
                </li>
                <li>
                  <FaCheckCircle
                    style={{ color: "#187efb", marginRight: "10px" }}
                  />{" "}
                  DTCP & RERA Approved Project
                </li>
                <li>
                  <FaCheckCircle
                    style={{ color: "#187efb", marginRight: "10px" }}
                  />{" "}
                  Fully Developed Play Zone
                </li>
                <li>
                  <FaCheckCircle
                    style={{ color: "#187efb", marginRight: "10px" }}
                  />{" "}
                  1km from Hyd-Bangalore national highway
                </li>
                <li>
                  <FaCheckCircle
                    style={{ color: "#187efb", marginRight: "10px" }}
                  />{" "}
                  3km from proposed regional ring road
                </li>
                <li>
                  <FaCheckCircle
                    style={{ color: "#187efb", marginRight: "10px" }}
                  />{" "}
                  Plot sizes ranging from 165 to 660 Sq. Yards
                </li>
                <li>
                  <FaCheckCircle
                    style={{ color: "#187efb", marginRight: "10px" }}
                  />{" "}
                  Clubhouse with 20+ amenities
                </li>
                <li>
                  <FaCheckCircle
                    style={{ color: "#187efb", marginRight: "10px" }}
                  />{" "}
                  BT roads
                </li>
                <li>
                  <FaCheckCircle
                    style={{ color: "#187efb", marginRight: "10px" }}
                  />{" "}
                  Fully secured gated community
                </li>
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={clubhouse}
                className="img-fluid rounded"
                alt="Club House"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Highlights;
