import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Portal Berita Online</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Nasional</Nav.Link>
          <Nav.Link href="#">Teknologi</Nav.Link>
          <Nav.Link href="#">Olahraga</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;