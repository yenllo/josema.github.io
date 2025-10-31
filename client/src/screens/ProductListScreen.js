import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';

const ProductListScreen = () => {
  return (
    <>
      <h1 style={{ marginBottom: '2rem', fontWeight: 'bold' }}>Tienda</h1>
      <Row>
        {products.map((product, index) => (
          <Col
            key={product._id}
            sm={12}
            md={6}
            lg={4}
            xl={3}
            style={{
              marginBottom: '2rem',
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
            }}
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductListScreen;
