import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';

const PaymentScreen = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('Transferencia');

  const submitHandler = (e) => {
    e.preventDefault();
    // Here we would save the payment method
    console.log('Payment method submitted');
    navigate('/placeorder');
  };

  return (
    <div>
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
          <Col>
            <Form.Check
              type='radio'
              label='Transferencia Bancaria'
              id='Transferencia'
              name='paymentMethod'
              value='Transferencia'
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>

        <Button type='submit' variant='primary' className='my-3'>
          Continue
        </Button>
      </Form>
    </div>
  );
};

export default PaymentScreen;
