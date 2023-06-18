import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/' className='product-link'>home</Link>
            
            </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
