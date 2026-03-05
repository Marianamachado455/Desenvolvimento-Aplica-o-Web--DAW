import React from "react";
import { Modal, Button } from "react-bootstrap";

function ModalConfirmacao({ mostrar, esconder }) {
  return (
    <Modal show={mostrar} onHide={esconder}>
      <Modal.Header closeButton>
        <Modal.Title>Sucesso!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Você foi cadastrou um livro com sucesso no sistema!</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={esconder}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalConfirmacao;