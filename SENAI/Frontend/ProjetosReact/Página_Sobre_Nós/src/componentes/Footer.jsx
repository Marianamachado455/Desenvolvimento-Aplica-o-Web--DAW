import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Footer() {
    return (
        <Navbar expand="lg" fixed="bottom" bg="light" style={{height: "150px"}}>
            <Container>
                <Navbar.Brand className="fs-6 fst-italic" href="#home" style={{color: "#1a0dab", paddingTop: "80px"}}>
                      © 2025 - Aula de React - SENAI
                    </Navbar.Brand>
            
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
                    <Navbar.Collapse
                      id="basic-navbar-nav"
                      className="justify-content-end"
                    >
                      <Nav className="ms-auto fs-5 mt-5">
                        <Nav.Link href="#home">Facebook</Nav.Link>
                        <Nav.Link href="#link">Instagram</Nav.Link>
                        <Nav.Link href="#link">Linkedlin</Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
        </Navbar>
    )
};

export default Footer;