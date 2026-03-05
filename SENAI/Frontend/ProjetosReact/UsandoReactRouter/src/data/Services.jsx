const usuarios = [
  { nome: "Alexander", email: "alexander@gmail.com", senha: "123456" },
  { nome: "Vanessa", email: "vanessa@yahoo.com", senha: "654321" },
  { nome: "Paulo", email: "paulo@gmail.com", senha: "246" }
];

export function listarTodos() {
  return usuarios;
}

export function adicionarUsuario(usuario) {
  usuarios.push(usuario);
}

export function editarUsuario(emailUsuario, novosDados) {
  const index = usuarios.findIndex(
    user => user.email === emailUsuario
  );

  if (index !== -1) {
    usuarios[index] = { ...usuarios[index], ...novosDados };
    alert("Usuário editado com sucesso");
  } else {
    alert("Usuário não encontrado");
  }
}

export function excluirUsuario(emailUsuario) {
  const index = usuarios.findIndex(
    user => user.email === emailUsuario
  );

  if (index !== -1) {
    usuarios.splice(index, 1);
    alert("Usuário excluído com sucesso");
  } else {
    alert("Usuário não encontrado");
  }
}
