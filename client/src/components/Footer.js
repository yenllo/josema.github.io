import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-secondary)', paddingTop: '20px', paddingBottom: '20px', marginTop: '40px' }}>
      <Container>
        <Row>
          <Col className='text-center'>
            Copyright &copy; La Belleza de Crear
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
