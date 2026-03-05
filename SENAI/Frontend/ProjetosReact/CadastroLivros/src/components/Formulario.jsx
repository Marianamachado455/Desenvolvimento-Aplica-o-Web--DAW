import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ModalConfirmacao from "./ModalConfirmacao";
import { adicionarLivro } from "../data/Services";
import { Modal } from "react-bootstrap";

function Formulario() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [showModal, setShowModal] = useState(false);

  function confirmar(e) {
    e.preventDefault();

    const livro = {
      titulo,
      autor,
    };

    adicionarLivro(livro);
    setShowModal(true);
  }
  return (
    <div className="d-flex justify-content-center mt-5">
      <Form style={{ maxWidth: "500px", width: "100%" }}>
        <Form.Group className="mb-3">
          <Form.Label>Título</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Coloque o título do livro" 
          onChange={(e) => setTitulo(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Autor</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Coloque o nome do autor" 
          onChange={(e) => setAutor(e.target.value)}/>
        </Form.Group>

        <Button onClick={confirmar} variant="primary" type="button">
          Confirmar
        </Button>
        <ModalConfirmacao
          mostrar={showModal}
          esconder={() => setShowModal(false)}
        />
      </Form>
    </div>
  );
}

export default Formulario;
