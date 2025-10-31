import React, { useState, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';
import products from '../products';
import { CartContext } from '../context/CartContext';

const ProductScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p._id === id);
  const { addToCart } = useContext(CartContext);

  const [qty, setQty] = useState(1);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const addToCartHandler = () => {
    addToCart(product, Number(qty));
    navigate('/cart');
  };

  const cardStyle = {
    borderRadius: '12px',
    border: '1px solid var(--color-border)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  };

  return (
    <>
      <Link className='btn btn-secondary my-3' to='/store'>
        Volver a la Tienda
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid style={{ borderRadius: '12px' }}/>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item style={{ backgroundColor: 'transparent' }}>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: 'transparent' }}>
              Descripción: {product.description}
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: 'transparent', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
              Precio: ${product.price}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card style={cardStyle}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Precio:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Estado:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'Disponible' : 'Agotado'}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Cantidad</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className='btn-primary btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Añadir al Carrito
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
