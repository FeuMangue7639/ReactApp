import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './apple-touch-icon.png'; // Importez votre logo

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <div className="container">
        {/* Utilisez votre logo comme source de l'image */}
        <Navbar.Brand href="/"><img src={logo} alt="Votre logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item className="mr-3">
              <Nav.Link className="nav-link" as={Link} to="/home">Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <Nav.Link className="nav-link" as={Link} to="/contact">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <Nav.Link className="nav-link" as={Link} to="/realisations">Realisations</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <Nav.Link className="nav-link" as={Link} to="/blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item className="mr-3">
              <Nav.Link className="nav-link" as={Link} to="/service">Service</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;






