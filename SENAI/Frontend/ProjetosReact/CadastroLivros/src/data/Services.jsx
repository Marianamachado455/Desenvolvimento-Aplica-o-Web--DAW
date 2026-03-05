const livros = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis" },
  { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Capitães da Areia", autor: "Jorge Amado" },
];

export function listarLivros() {
  return livros;
}

export function adicionarLivro(livro) {
  livros.push(livro);
}

export function editarLivro(titulolivro, novosDados) {
  const index = livros.findIndex(
    livro => livro.titulo === titulolivro
  );

  if (index !== -1) {
    livros[index] = { ...livros[index], ...novosDados };
    alert("Informações do livro editadas com sucesso");
  } else {
    alert("Livro não encontrado");
  }
}

export function excluirLivro(titulolivro) {
  const index = livros.findIndex(
    livro => livro.titulo === titulolivro
  );

  if (index !== -1) {
    livros.splice(index, 1);
    alert("Livro excluído com sucesso");
  } else {
    alert("Livro não encontrado");
  }
}
