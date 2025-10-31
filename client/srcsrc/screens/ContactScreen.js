import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ContactScreen = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title as="h1" className="text-center mb-4">
                Contacto
              </Card.Title>
              <p>
                Si tienes alguna pregunta sobre las piezas, pedidos especiales o simplemente quieres saludar, ¡no dudes en escribir!
              </p>
              <div className="text-center">
                <p>
                  <i className="fas fa-envelope mr-2"></i>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contacto@labellezadecrear.com">
                    contacto@labellezadecrear.com
                  </a>
                </p>
                <p>
                  <i className="fab fa-instagram mr-2"></i>
                  <strong>Instagram:</strong>{' '}
                  <a
                    href="https://www.instagram.com/labellezadecrear/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @labellezadecrear
                  </a>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
