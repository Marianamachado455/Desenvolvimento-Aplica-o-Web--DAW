import React from "react";
import { Modal, Button } from "react-bootstrap";
import FormularioEditar from "./FormularioEditar";

function ModalEditar({ show, onHide, usuario }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Editando usuário: {usuario.nome}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <FormularioEditar novosDados={usuario} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalEditar;
