import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';

const ProductListScreen = () => {
  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3'>
            <i className='fas fa-plus'></i> Create Product
          </Button>
        </Col>
      </Row>
      <Table striped bordered hover responsive className='table-sm'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* We will map through products here */}
        </tbody>
      </Table>
    </>
  );
};

export default ProductListScreen;
