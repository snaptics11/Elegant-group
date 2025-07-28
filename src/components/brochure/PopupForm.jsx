import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import brochureFile from '../../assets/Galleria-Gardens-brochure.pdf';
import './Brochure.css';

const PopupForm = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    plotRange: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
                                  // i should update this line    
   const response = await fetch("https://yourdomain.com/send-email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: formData.name,
          mobile: formData.mobile,
          plotRange: formData.plotRange,
        }),
      });

      const result = await response.text();

      if (result === "success") {
        alert("Form submitted successfully! Your brochure is downloading...");
        const link = document.createElement('a');
        link.href = brochureFile;
        link.download = "Galleria-Gardens-brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        handleClose(); 
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (err) {
      console.error("Submit failed:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
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
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter mobile number"
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
              <option value="range1">165 - 200 Sq. Yds</option>
              <option value="range2">200 - 300 Sq. Yds</option>
              <option value="range3">300 - 400 Sq. Yds</option>
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
          <Button variant="primary" type="submit">
            Download Brochure
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default PopupForm;
