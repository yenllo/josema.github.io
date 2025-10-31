import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutScreen = () => {
  return (
    <Container>
      <Row className="justify-content-md-center text-center">
        <Col md={8}>
          <h1>Sobre la Artista</h1>
          <Image
            src="https://i.ibb.co/5nGxX3B/artista.jpg" // Imagen de ejemplo
            roundedCircle
            fluid
            className="my-4"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
          <p className="lead">
            <strong>La Belleza de Crear</strong> nació de la pasión por moldear la tierra y darle vida a través del fuego.
          </p>
          <p>
            Mi mamá, [Nombre de la artista], ha dedicado años a perfeccionar su técnica en la cerámica gres, encontrando inspiración en la naturaleza y en las formas orgánicas. Cada pieza es única, hecha a mano con dedicación y amor, buscando llevar un trocito de belleza artesanal a tu hogar.
          </p>
          <p>
            Desde su pequeño taller, explora con esmaltes y texturas para crear objetos que no solo son funcionales, sino que también cuentan una historia.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutScreen;
