import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <div className="container">
        
        <Navbar.Brand href="/">JOHN DOE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item className="mr-3">
              <Nav.Link className="nav-link small-text" as={Link} to="/home">ACCUEIL</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <Nav.Link className="nav-link small-text" as={Link} to="/service">SERVICES</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <Nav.Link className="nav-link small-text" as={Link} to="/realisations">RÉALISATIONS</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <Nav.Link className="nav-link small-text" as={Link} to="/blog">BLOG</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <Nav.Link className="nav-link small-text" as={Link} to="/contact">ME CONTACTER</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;






