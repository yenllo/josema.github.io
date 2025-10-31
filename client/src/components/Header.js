import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='secondary' variant='light' expand='lg' collapseOnSelect style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand style={{ fontWeight: 'bold' }}>
              La Belleza de Crear
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/store'>
                <Nav.Link style={{ fontWeight: '500' }}>Tienda</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/mundo-lbc'>
                <Nav.Link style={{ fontWeight: '500' }}>Mundo LBC</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/gift-card'>
                <Nav.Link style={{ fontWeight: '500' }}>Gift Card</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link style={{ fontWeight: '500' }}>
                  <i className='fas fa-shopping-cart'></i> Carrito
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
