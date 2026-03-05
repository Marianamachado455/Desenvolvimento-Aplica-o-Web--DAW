import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ModalUsuario from './ModalUsuario';

function Formulario() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [showModal, setShowModal] = useState(false);

  function cadastrar(e) {
    e.preventDefault();

    const usuario = {
      nome: nome,
      email: email,
      senha: senha
    }
    console.log(usuario);
    setShowModal(true);
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <Form style={{ maxWidth: '500px' }} onSubmit={cadastrar}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Fulano da Silva" onChange={(value) => setNome(value.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="aceventuranetto@gmail.com" 
            onChange={(value) => setEmail(value.target.value)}
          />
          <Form.Text className="text-muted">
            Não iremos compartilhar o seu e-mail com ninguém.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Escolha a sua senha" 
            onChange={(value) => setSenha(value.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label>Confirme a senha</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Confirme a sua senha" 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>

      <ModalUsuario mostrar={showModal} esconder={() => setShowModal(false)}/>
    </div>
  );
}

export default Formulario;