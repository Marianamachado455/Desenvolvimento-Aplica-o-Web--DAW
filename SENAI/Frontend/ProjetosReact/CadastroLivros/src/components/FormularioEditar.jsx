import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { editarLivro } from "../data/Services";

function FormularioEditar({novosDados, finalizarEdicao}) {
  const [titulo, setTitulo] = useState(novosDados.titulo);
  const [autor, setAutor] = useState(novosDados.autor);

  function editar(e) {
    e.preventDefault();

    const livro = {
      titulo: titulo,
      autor: autor,
    };

    editarLivro(novosDados.titulo, livro);
    finalizarEdicao();
  }
  return (
    <div className="d-flex justify-content-center mt-5">
    <Form onSubmit={editar} style={{ width: "500px" }}>
      
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Titulo</Form.Label>
        <Form.Control
          type="text"
          placeholder={novosDados.titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Autor</Form.Label>
        <Form.Control
          type="text"
          placeholder={novosDados.autor}
          onChange={(e) => setAutor(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Confirmar
      </Button>




    </Form>
  </div>
  );
};

export default FormularioEditar;