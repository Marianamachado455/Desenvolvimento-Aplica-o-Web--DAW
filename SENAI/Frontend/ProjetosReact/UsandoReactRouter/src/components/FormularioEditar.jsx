import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { editarUsuario } from "../data/Services";

function FormularioEditar({novosDados}) {
  const [nome, setNome] = useState(novosDados.nome);
  const [email, setEmail] = useState(novosDados.email);
  const [senha, setSenha] = useState(novosDados.senha);

  function editar(e) {
    e.preventDefault();

    const usuario = {
      nome: nome,
      email: email,
      senha: senha,
    };

    editarUsuario(novosDados.email, usuario);
  }
  return (
    <div className="d-flex justify-content-center mt-5">
    <Form onSubmit={editar} style={{ width: "500px" }}>
      
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nome</Form.Label>
        <Form.Control
          type="text"
          placeholder={novosDados.nome}
          onChange={(value) => setNome(value.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder={novosDados.email}
          onChange={(value) => setEmail(value.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder={novosDados.senha}
          onChange={(value) => setSenha(value.target.value)}
        />
      </Form.Group>

      <Button  type="submit">
        Confirmarvariant="primary"
      </Button>

    </Form>
  </div>
  );
};

export default FormularioEditar;