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
import "./LocationHighlights.css";
import mapImage from "../../assets/locationmap.jpg";
import projectApproved from "../../assets/project-approved.jpg";

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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally validate or send to API
    const link = document.createElement("a");
    link.href = "../../assets/Galleria-Gardens-brochure.pdf";
    link.download = "Urbanrise_Brochure.pdf";
    link.click();
    handleClose();
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
          When it comes to land, location is everything. <strong>IConia</strong>{" "}
          is a community of Luxury villa plots in Balanagar near Shadnagar, one
          of Hyderabad's fastest-growing hubs.
        </p>

        <Row className="g-4 align-items-start">
          {/* Accordion Section */}
          <Col xs={12} md={6}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Major Land Marks</Accordion.Header>
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
          {/* Map */}
          <Col xs={12} md={6}>
            <img
              src={mapImage}
              alt="map"
              className="img-fluid rounded shadow-sm w-100"
              style={{ objectFit: "cover", minHeight: 220 }}
            />
          </Col>
        </Row>
      </Container>

      {/* Project Approved Image - Responsive */}
      <div className="d-flex justify-content-center pt-5">
        <img
          src={projectApproved}
          alt="Approved"
          className="img-fluid rounded shadow-sm"
          style={{ width: "100%", maxWidth: 800 }}
        />
      </div>

      {/* Youtube Video - Responsive Embed */}
      <div className="d-flex justify-content-center pt-5">
        <div
          style={{ width: "100%", height: "500px", }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UvepndSicLc?si=83Ie27n8eePcHrs4&amp;controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Modal */}
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
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
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
                label="I agree and authorize the team to contact me. This will override the registry with DNC / NDNC."
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Download
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default LocationHighlights;
