import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './Project_details.css';

const ProjectDetails = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', plotRange: '', agree: false });

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    const link = document.createElement('a');
    link.href = '../../assets/Elegant-Iconia-Presentation.pdf';
    link.download = 'Urbanrise_Brochure.pdf';
    link.click();
    handleClose();
  };

  const plotData = [
    { size: '165 – 200 Sq.Yd' },
    { size: '200 – 300 Sq.Yds' },
    { size: '300 – 400 Sq.Yds' },
  ];

  return (
    <div className="future-section py-5 px-3">
      <Container className="text-center">
        <h2 className="text-white mb-4">The Future is Here</h2>
        <Row className="justify-content-center">
          {plotData.map((plot, index) => (
            <Col key={index} lg={3} md={4} sm={6} xs={12} className="mb-4">
              <Card className="glass-card text-white h-100">
                <Card.Body>
                  <FaMapMarkerAlt size={30} className="mb-2" />
                  <Card.Title>{plot.size}</Card.Title>
                  <Button variant="primary" className="mt-2" onClick={handleShow}>
                    Unlock Price
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>  

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
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
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
                <option value="range1">165 - 200 Sq. Yds</option>
                <option value="range2">200 - 300 Sq. Yds</option>
                <option value="range3">300 - 400 Sq. Yds</option>
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
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Download
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default ProjectDetails;
