/*function ordenarArray() {

    let numeros = [5,1,9,3,7,0];

    numeros.sort();
    console.log(numeros);
}

ordenarArray();


//Exercicio 1 
 let aluno = ["Ana", "Maria", "Joao", "Pedro", "Natalia"];

for (let i = 0; i < aluno.length;i++)
{
    console.log(aluno[i]);
}


//Exercicio 2
let carro = {
  marca: "",
  modelo: "",
  ano: ""
};

console.log(carro);

//Exercicio 3 
aluno.push("Carlos");

for (let i = 0; i < aluno.length;i++)
{
    console.log(aluno[i]);
} 



let numeros = [1,5,2,7,9];

numeros[1] = 0;

numeros.push(3);

numeros.sort();

console.log(numeros);


let produto = [
    { nome:"Teclado", preco:99.90 },
    { nome:"Mouse", preco:49.90 },
    { nome: "Monitor", preco:599.90}
];

produto.forEach(produto => {
    console.log(`Produto: ${produto.nome} - Preço: R$ ${produto.preco}0`);
});

*/

function mudarTitulo() {
    let titulo = document.getElementById("titulo");
    titulo.innerText = "T"
}