import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className='product-card my-3 p-3'>
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant='top'
          style={{
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            objectFit: 'cover',
            height: '250px',
          }}
        />
      </Link>
      <Card.Body style={{ textAlign: 'center' }}>
        <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
          <Card.Title
            as='div'
            style={{
              color: 'var(--color-text)',
              fontWeight: '600',
              fontSize: '1.1rem',
            }}
          >
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text
          as='h3'
          style={{
            color: 'var(--color-primary)',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            marginTop: '10px',
          }}
        >
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
