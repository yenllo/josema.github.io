import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const GiftCardScreen = () => {
  const giftCardOptions = [
    { amount: 25000, color: '#f5e6e8' },
    { amount: 50000, color: '#e8f5e9' },
    { amount: 100000, color: '#e3f2fd' },
  ];

  return (
    <Container>
      <Row className='justify-content-md-center my-5'>
        <Col md={8} style={{ textAlign: 'center' }}>
          <h1>Gift Card LBC</h1>
          <p className='my-4'>
            Regala la libertad de elegir. Nuestras gift cards son la opción
            perfecta para que esa persona especial pueda escoger la pieza de
            cerámica que más le hable.
          </p>
        </Col>
      </Row>
      <Row>
        {giftCardOptions.map((card, index) => (
          <Col key={index} md={4} className='mb-4'>
            <Card style={{ backgroundColor: card.color, border: 'none' }}>
              <Card.Body style={{ textAlign: 'center' }}>
                <Card.Title>Gift Card</Card.Title>
                <Card.Text as='h2' className='my-3'>
                  ${card.amount.toLocaleString('es-CL')}
                </Card.Text>
                <Button variant='dark'>Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GiftCardScreen;
