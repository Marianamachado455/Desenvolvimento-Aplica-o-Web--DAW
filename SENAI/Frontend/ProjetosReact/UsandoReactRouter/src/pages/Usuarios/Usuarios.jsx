import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Button from "react-bootstrap/Button";
import ModalEditar from "../../components/ModalEditar";
import { listarTodos, excluirUsuario } from "../../data/Services";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [usuarioParaEditar, setUsuarioParaEditar] = useState(null);

  useEffect(() => {
    setUsuarios(listarTodos());
  }, []);

  function handleEdit(usuario) {
    setUsuarioParaEditar(usuario);
    setShowModal(true);
  }

  function handleDelete(email) {
    excluirUsuario(email);
    setUsuarios(usuarios.filter((usuario) => usuario.email !== email));
  }

  function fecharModal() {
    setShowModal(false);
    setUsuarioParaEditar(null);
    setUsuarios(listarTodos()); // atualiza a lista após editar
  }

  return (
    <>
      <Header />

      <div className="container mt-4">
        {usuarios.length === 0 && (
          <p className="text-center">Nenhum usuário cadastrado.</p>
        )}

        {usuarios.map((usuario) => (
          <div
            key={usuario.email}
            className="d-flex justify-content-between align-items-center border p-3 mb-2"
          >
            <ul className="mb-0">
              <li><strong>Nome:</strong> {usuario.nome}</li>
              <li><strong>Email:</strong> {usuario.email}</li>
            </ul>

            <div>
              <Button
                variant="warning"
                className="me-2"
                onClick={() => handleEdit(usuario)}
              >
                Editar
              </Button>

              <Button
                variant="danger"
                onClick={() => handleDelete(usuario.email)}
              >
                Excluir
              </Button>
            </div>
          </div>
        ))}
      </div>

      {usuarioParaEditar && (
        <ModalEditar
          show={showModal}
          onHide={fecharModal}
          usuario={usuarioParaEditar}
        />
      )}
    </>
  );
}
