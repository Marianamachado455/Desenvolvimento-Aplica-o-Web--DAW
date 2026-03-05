import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalUsuario({ mostrar, esconder }) {
  return (
    <Modal show={mostrar} onHide={esconder}>
      <Modal.Header closeButton>
        <Modal.Title>Sucesso!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Você foi cadastrado(a) com sucesso no sistema!</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={esconder}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalUsuario;