import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" bg="light" fixed="top">
      <Container>
        <Navbar.Brand className="fs-2 fw-bold fst-italic" href="#home" style={{color: "#1a0dab"}}>
          SENAI
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="ms-auto fs-5">
            <Nav.Link href="#home">Início</Nav.Link>
            <Nav.Link href="#link">Sobre nós</Nav.Link>
            <Nav.Link href="#link">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
