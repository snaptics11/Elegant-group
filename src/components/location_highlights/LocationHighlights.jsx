import React, { useState } from "react";
import {
  Accordion,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./LocationHighlights.css";
import mapImage from "../../assets/locationmap.jpg";
import projectApproved from "../../assets/project-approved.jpg";
import brochureFile from "../../assets/Elegant-Iconia-Presentation.pdf";

const majorLandmarks = [
  ["Hyderabad-Bangalore National Highway", "1 KM"],
  ["Proposed Regional Ring Road (RRR)", "3 KM"],
  ["Balanagar Town & Railway Station", "5 MIN"],
  ["1600 Acres Jadcherla Green Industrial Park (Polepally SEZ)", "10 MIN"],
  ["NMIMS University", "10 MIN"],
  ["Shadnagar Town & MMTS", "10 MIN"],
  ["Mahbubnagar IT Towers", "15 MIN"],
  ["Amar Raja Battery Corridor", "15 MIN"],
  ["Statue of Equality", "20 MIN"],
  ["Kanha Shanti Vanam", "20 MIN"],
  ["ORR", "35 MIN"],
  ["Wonderla", "45 MIN"],
  ["Hyderabad International Airport", "45 MIN"],
];

const plotOptions = [
  "165 - 200 Sq. Yds",
  "200 - 300 Sq. Yds",
  "300 - 400 Sq. Yds",
];

const LocationHighlights = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false); // ✅ New state
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    plotRange: "",
    agree: false,
  });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("mobile", formData.mobile);
      data.append("plotRange", formData.plotRange);

      const isLocalhost = window.location.hostname === "localhost";
      const apiUrl = isLocalhost
        ? "http://localhost/Elegant-group/htdocs/backend/send-email.php"
        : "https://myelegantgroup.com/landing/send-email.php";

      const response = await fetch(apiUrl, {
        method: "POST",
        body: data,
      });

      const result = await response.text();

      if (result.trim() === "success") {
        handleClose();

        // Trigger PDF download using a hidden link
        const link = document.createElement("a");
        link.href = brochureFile;
        link.download = "Elegant-Iconia-Presentation.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Redirect after short delay
        setTimeout(() => {
          navigate("/thank-you");
        }, 1500);
      } else {
        alert("Email failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="location-highlights"
      className="py-5"
      style={{ backgroundColor: "beige" }}
    >
      <Container>
        <h2 className="fw-bold mb-4 text-center">LOCATION HIGHLIGHTS</h2>
        <p
          className="text-muted text-center mb-5"
          style={{ fontSize: "1.25rem" }}
        >
          When it comes to land, location is everything. <strong>Iconia</strong>{" "}
          is a community of luxury villa plots in Balanagar near Shadnagar – one
          of Hyderabad's fastest-growing hubs.
        </p>

        <Row className="g-4 align-items-start">
          <Col xs={12} md={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Major Landmarks</Accordion.Header>
                <Accordion.Body>
                  <ul className="list-unstyled mb-0">
                    {majorLandmarks.map(([name, time], i) => (
                      <li
                        key={i}
                        className="d-flex justify-content-between py-1"
                      >
                        <span>{name}</span>
                        <span className="text-primary fw-semibold">{time}</span>
                      </li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div className="mt-3 d-flex justify-content-center">
              <Button
                variant="primary"
                className="px-4 py-2"
                onClick={handleShow}
              >
                ENQUIRE NOW
              </Button>
            </div>
          </Col>

          <Col xs={12} md={6}>
            <img
              src={mapImage}
              alt="Map"
              className="img-fluid rounded shadow-sm w-100"
              style={{ objectFit: "cover", minHeight: 220 }}
            />
          </Col>
        </Row>
      </Container>

      <div className="d-flex justify-content-center pt-5">
        <img
          src={projectApproved}
          alt="Approved Project"
          className="img-fluid rounded shadow-sm"
          style={{ width: "100%", maxWidth: 1000 }}
        />
      </div>

      <div className="d-flex justify-content-center pt-5">
        <div style={{ width: "100%", height: "500px" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UvepndSicLc?si=83Ie27n8eePcHrs4&controls=0"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Download Brochure</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                placeholder="Enter your 10-digit mobile number"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Select Your Plot Range</Form.Label>
              <Form.Select
                name="plotRange"
                value={formData.plotRange}
                onChange={handleChange}
                required
              >
                <option value="">Select Range</option>
                {plotOptions.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 form-check">
              <Form.Check
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
                label="I agree and authorize the team to contact me. This overrides DNC/NDNC registry."
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit & Download"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default LocationHighlights;
