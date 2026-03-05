import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from "react";
import ModalIcones from "./ModalIcones";

function Header() {
  const [showHelp, setShowHelp] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  return (
    <>
      <Navbar expand="lg">
      <Container className="position-relative">
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className="position-absolute start-0"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="align-items-center gap-3 gap-md-5 fw-bold"> {/* testar outros gaps */}
            <i
                className="bi bi-question-circle fs-4"
                style={{ cursor: "pointer" }}
                onClick={() => setShowHelp(true)}
              ></i>
            <Navbar.Brand href="#home" id="titulo" className="fs-1 m-0 titulo">Statmon</Navbar.Brand>
            <i
                className="bi bi-sliders fs-4 mt-1"
                style={{ cursor: "pointer" }}
                onClick={() => setShowSettings(true)}
              ></i>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

      <Container>
        <ModalIcones mostrar={showHelp} esconder={() => setShowHelp(false)} titulo="Ajuda">
          Conteúdo da ajuda aqui...sssssssssssssss
        </ModalIcones>

        <ModalIcones mostrar={showSettings} esconder={() => setShowSettings(false)} titulo="Configurações">
          Conteúdo das configurações aqui...
        </ModalIcones>
      </Container>
    </>
  );
}

export default Header;