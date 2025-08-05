import React, { useState } from "react";
import "./Contact.css";
import { Container, Row, Col, Button, Form, Modal, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
  });

  const navigate = useNavigate();

  const handleContactUsClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("mobile", formData.mobile);
      data.append("location", formData.location);

      const isLocalhost = window.location.hostname === "localhost";
      const url = isLocalhost
        ? "http://localhost/Elegant-group/htdocs/backend/contact-form.php"
        : "https://myelegantgroup.com/landing/contact-form.php";

      const response = await fetch(url, {
        method: "POST",
        body: data,
      });

      const result = await response.text();
      setSubmitting(false);

      if (result.trim().toLowerCase() === "success") {
        navigate("/thank-you");
      } else {
        alert("Submission failed. Server response: " + result);
      }
    } catch (error) {
      setSubmitting(false);
      console.error("Error submitting contact form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div id="Contact" className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="fw-bold">Let’s Turn Your Investment into Reality!</h2>
            <Button variant="primary" className="mt-3" onClick={handleContactUsClick}>
              CONTACT US
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center align-items-start g-4">
          <Col md={6}>
            <Card className="shadow-sm p-4">
              <h4 className="mb-4 text-center fw-semibold">Enquire Now</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mobile">
                  <Form.Label>Mobile Number*</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your location"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <div className="d-grid">
                  <Button type="submit" variant="primary" disabled={submitting}>
                    {submitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>

          <Col md={5}>
            <Card className="shadow-sm">
              <iframe
                title="Property Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0218744334165!2d78.1733864!3d16.934247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca338d67099e35%3A0xe7bdc0631a49a1ce!2sIconia%20by%20Primeland!5e1!3m2!1sen!2sin!4v1753688624184!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Details Popup */}
      <Modal show={showPopup} onHide={handleClosePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Phone:</strong> +91 9966764646
          </p>
          <p>
            <strong>Address:</strong> My Home Hub, 7th Floor, Block 2, Madhapur,
            Hitechcity, Hyderabad, India
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
