import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import brochureFile from "../../assets/Elegant-Iconia-Presentation.pdf";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Brochure.css";

const initialForm = {
  name: "",
  mobile: "",
  plotRange: "",
  agree: false,
};

const PopupForm = ({ show, handleClose }) => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // ✅ Correctly placed outside handleSubmit

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleModalClose = () => {
    setFormData(initialForm);
    handleClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.mobile || !formData.plotRange || !formData.agree) {
      alert("Please fill out all fields and accept terms.");
      return;
    }

    setIsSubmitting(true);

    try {
      const isLocal = window.location.hostname === "localhost";
      const url = isLocal
        ? "http://localhost/Elegant-group/htdocs/backend/send-email.php"
        : "https://myelegantgroup.com/landing/send-email.php";

      const formBody = new URLSearchParams({
        name: formData.name,
        mobile: formData.mobile,
        plotRange: formData.plotRange,
      });

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      const result = await response.text();

      if (result.trim().toLowerCase() === "success") {
        alert("Form submitted successfully! Your brochure is downloading...");

        // Trigger brochure download
        const link = document.createElement("a");
        link.href = brochureFile;
        link.download = "Elegant-Iconia-Presentation.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // ✅ Navigate to thank-you page
        navigate("/thank-you");

        // Reset form and close modal
        handleModalClose?.();
        setFormData(initialForm);
      } else {
        alert("Submission failed: " + result);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong. Please check your internet or try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <Modal show={show} onHide={handleModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Download Brochure</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              name="mobile"
              required
              pattern="[0-9]{10}"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter 10-digit number"
            />
            <Form.Text className="text-muted">
              Numbers only, no country code.
            </Form.Text>
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
              <option value="165 - 200 Sq. Yds">165 - 200 Sq. Yds</option>
              <option value="200 - 300 Sq. Yds">200 - 300 Sq. Yds</option>
              <option value="300 - 400 Sq. Yds">300 - 400 Sq. Yds</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3 form-check">
            <Form.Check
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              label="I agree and authorize the team to contact me. This will override the registry with DNC / NDNC."
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Download Brochure"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

PopupForm.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PopupForm;
