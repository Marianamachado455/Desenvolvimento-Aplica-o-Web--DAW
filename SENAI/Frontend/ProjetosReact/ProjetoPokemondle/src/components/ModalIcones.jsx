import React from "react";
import { Modal, Button } from "react-bootstrap";

function Modalcone({ mostrar, esconder, titulo, children }) {
  return (
    <Modal show={mostrar} onHide={esconder} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {children}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={esconder}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modalcone;