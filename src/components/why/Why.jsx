import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import Savings from '../../assets/savings.png';

const Why = () => {
  return (
    <div id='why'>
      <div className="py-5" style={{ backgroundColor: '#e0e9c39a' }}>
        <Container>
          <Row className="align-items-center g-4">
            {/* Image Column */}
            <Col xs={12} md={6} className="text-center">
              <img
                src={Savings}
                className="img-fluid rounded shadow"
                alt="Investment Opportunity"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Col>

            {/* Text Column */}
            <Col xs={12} md={6}>
              <h2 className="fw-bold mb-4">WHY ICONIA?</h2>
              <ul className="list-unstyled">
                {[
                  'Potential Investment Opportunity',
                  'Safe, Secure, & Trustworthy Investment',
                  'Multiple Infrastructural Developments In & Around Shadnagar',
                  'Convenient Access & Seamless Connectivity',
                  'Strategic Location: Hyderabad-Bangalore Highway',
                  'Growth & Expansion Plans Proposed',
                  'Proximity to Various Facilities',
                ].map((item, index) => (
                  <li key={index} className="mb-3 d-flex align-items-start">
                    <FaCheckCircle style={{ color: '#187efb', marginRight: '10px', marginTop: '4px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Why;
