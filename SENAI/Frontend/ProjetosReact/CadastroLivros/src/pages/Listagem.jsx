import React, { useState, useEffect } from "react";
import Header from "../components/Header"
import Button from "react-bootstrap/Button";
import FormularioEditar from "../components/FormularioEditar";
import { listarLivros, excluirLivro } from "../data/Services";
import { Modal } from "react-bootstrap";

export default function Livros() {
  const [livros, setLivros] = useState([]);
  const [livroEditar, setLivroEditar] = useState(null);

  useEffect(() => {
    setLivros(listarLivros());
  }, []);

  function atualizarLista() {
    setLivros([...listarLivros()]);
  }

  function handleDelete(titulo) {
    excluirLivro(titulo);
    atualizarLista();
  }

  function handleEditar(livro) {
    setLivroEditar(livro);
  }

  return (
    <>
      <Header />

      <div className="container mt-4">
        {livros.length === 0 && (
          <p className="text-center">Nenhum livro cadastrado.</p>
        )}

        {livros.map((livro) => (
          <div
            key={livro.titulo}
            className="d-flex justify-content-between align-items-center border p-3 mb-2"
          >
            <ul className="mb-0">
              <li><strong>Título:</strong> {livro.titulo}</li>
              <li><strong>Autor:</strong> {livro.autor}</li>
            </ul>

            <div>
              <Button
                onClick={() => handleEditar(livro)}
                variant="warning"
                className="me-2"
              >
                Editar
              </Button>

              <Button
                variant="danger"
                onClick={() => handleDelete(livro.titulo)}
              >
                Excluir
              </Button>
            </div>
          </div>
        ))}
      </div>

    {livroEditar && (
        <Modal show={true} onHide={() => setLivroEditar(null)}>
            <Modal.Header closeButton>
            <Modal.Title>Editar Livro</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <FormularioEditar
                novosDados={livroEditar}
                finalizarEdicao={() => setLivroEditar(null)}
            />
            </Modal.Body>
        </Modal>
    )}

    </>
  );
}
