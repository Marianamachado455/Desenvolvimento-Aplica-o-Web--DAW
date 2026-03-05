import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ModalUsuario from "./ModalUsuario";
import { adicionarUsuario } from "../data/Services";
import { Modal } from "react-bootstrap";

function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showModal, setShowModal] = useState(false);

  function cadastrar(e) {
    e.preventDefault();

    const usuario = {
      nome,
      email,
      senha,
    };

    adicionarUsuario(usuario);
    setShowModal(true);
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <Form onSubmit={cadastrar} style={{ maxWidth: "500px" }}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Fulano da Silva"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Escolha sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>

        <ModalUsuario
          mostrar={showModal}
          esconder={() => setShowModal(false)}
        />
      </Form>
    </div>
  );
}

export default Formulario;
