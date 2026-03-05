import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Header() {
  return (
    <Navbar expand="lg" className="bg-light shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          Meu Projeto
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to={"/"}>Início</Link>
            <Link to={"#link"}>Sobre nós</Link>
            <Link to={"#link"}>Contato</Link>
            <NavDropdown title="Serviços" id='basic-nav-dropdown'>
              <Link to={"/usuarios"}>Visualizar usuários</Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;