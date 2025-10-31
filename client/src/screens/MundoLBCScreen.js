import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const MundoLBCScreen = () => {
  return (
    <Container>
      <Row className='justify-content-md-center my-5'>
        <Col md={8}>
          <Image
            src='https://i.ibb.co/yBNp212/mundo-lbc-banner.jpg'
            alt='Mundo LBC'
            fluid
          />
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col md={8}>
          <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Mundo LBC
          </h1>
          <p style={{ textAlign: 'justify' }}>
            La Belleza de Crear (LBC) nace de la pasión de Carolina, una artista
            que encontró en la cerámica gres una forma de expresión única. Cada
            pieza es modelada a mano, con dedicación y amor, buscando capturar
            la belleza de lo imperfecto y lo natural.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Nuestro taller es un espacio de creatividad y calma, donde la arcilla
            se transforma en objetos que cuentan una historia. Creemos en el
            valor de lo artesanal, en la conexión con los materiales y en el
            placer de crear objetos que acompañen a las personas en su día a
            día.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MundoLBCScreen;
