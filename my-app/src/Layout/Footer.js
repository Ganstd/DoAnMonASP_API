import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col md={4}>
            <h4>C O M P A N Y</h4>
            <p>About us</p>
            <p>Afflliate Program</p>
            <p>Press</p>
          </Col>
          <Col md={4}>
            <h4>L E G A L</h4>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
            <p>Terms of Service</p>
          </Col>
          <Col md={4}>
            <h4>S U B S C R I B E</h4>
            <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
