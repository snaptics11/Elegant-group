import React, { useState } from "react";
import "./Contact.css";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import { BiX } from "react-icons/bi"; // Using a Bootstrap Icon

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
  });

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

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("mobile", formData.mobile);
      data.append("location", formData.location);

      const response = await fetch(
        "http://localhost/Elegant-group/htdocs/backend/contact-form.php",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.text();

      if (result.trim() === "success") {
        setShowSubmitPopup(true);
        setFormData({ name: "", mobile: "", location: "" });
      } else {
        alert("Submission failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Failed to submit form. Please try again.");
    }
  };

  const handleCloseSubmitPopup = () => {
    setShowSubmitPopup(false);
    setShowPopup(false);
    setFormData({ name: "", mobile: "", location: "" });
  };

  return (
    <div id="Contact" className="py-5">
      <div>
        <Row className="bg-primary text-white text-center py-md-5 py-3">
          <Col>
            <h2>Get in Touch, Let's Turn Your Investment into Reality!</h2>
            <Button
              variant="light"
              className="mt-md-3 mt-2"
              onClick={handleContactUsClick}
            >
              CONTACT US
            </Button>
          </Col>
        </Row>
        <Row className="py-md-5 py-4" style={{ backgroundColor: "#f8f9fa" }}>
          <Col md={6} className="offset-md-1 mt-md-0 mt-3">
            <div className="card p-md-4 p-3">
              <h3 className="text-center mb-md-4 mb-3">Contact Us</h3>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mobile">
                  <Form.Label>Mobile Number*</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Your Location"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <div className="d-grid">
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={4} className="mt-md-0 mt-3">
            <div className="card p-md-4 p-3">
              <iframe
                title="Property Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0218744334165!2d78.1733864!3d16.934247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bca338d67099e35%3A0xe7bdc0631a49a1ce!2sIconia%20by%20Primeland!5e1!3m2!1sen!2sin!4v1753688624184!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </div>

      {/* Contact Details Popup */}
      <Modal show={showPopup} onHide={handleClosePopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Phone:</strong>+91 9966764646
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

      {/* Submission Successful Popup */}
      <Modal show={showSubmitPopup} onHide={handleCloseSubmitPopup} centered>
        <Modal.Header closeButton>
          <Modal.Title>Submitted Successfully!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for your submission!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseSubmitPopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
