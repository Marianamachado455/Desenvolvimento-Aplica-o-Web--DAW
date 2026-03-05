const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout});

//Exercicio 1
function ParImpar() {

    rl.question("Forneça um número: ", num => {
    num = Number(num);

    //Checar num impar ou par
    if (num % 2 == 0)
    {
        console.log("O numero é par");
    }

    else 
    {
        console.log("O numero é impar");
    }    

    rl.close();
    });
}

//Exercicio 2
function Maioridade() {

    rl.question("Qual a sua idade? ", idade => {
    idade = Number(idade);

    if (idade < 18)
    {
        console.log("Menor de idade");
    }

    else 
    {
        console.log("Maior de idade");
    }    

    rl.close();
    });
}

//Exercicio 3
function AprovacaoEscolar() {

    rl.question("1 nota: ", nota1 => {
    nota1 = Number(nota1);

        rl.question("2 nota: ", nota2 => {
        nota2 = Number(nota2);

            rl.question("3 nota: ", nota3 => {
            nota3 = Number(nota3);

            //Calcular media
            let media = (nota1+nota2+nota3)/3;

            if (media < 7)
            {
                console.log("Reprovado");
            }

            else
            {
                console.log("Aprovado");
            }

            rl.close();
            });
        });
    });
}

//Exercicio 4
function ComparacaoNumeros() {

    rl.question("Forneça o 1 numero:", num1 => {
    num1 = Number(num1);

        rl.question("Forneça o 2 numero:", num2 => {
        num2 = Number(num2);

        if (num1 > num2)
        {
            console.log("%s é maior que %s", num1, num2);
        }

        else if (num2 > num1)
        {
            console.log("%s é maior que %s", num2, num1);
        }
        
        else
        {
            console.log("Os numeros sao iguais");
        }

        rl.close();
        });
    });
}

//Exercicio 5
function LoginSimples() {

    rl.question("Usuario:", usuario => {

        rl.question("Senha:", senha => {
        senha = Number(senha);

        if (usuario == 'admin' && senha == 1234)
        {
            console.log("Acesso concedido");
        }

        else
        {
            console.log("Acesso negado");
        }

        rl.close();
        });
    });
}

//Exercicio 6
function CalculadoraIMC() {

    rl.question("Peso:", peso => {
    peso = Number(peso);

        rl.question("Altura:", altura => {
        altura = Number(altura);

        let imc = peso / (altura * altura);

        if (imc < 18.5)
        {
            console.log("Abaixo do peso");
        }

        else if (imc < 24.9)
        {
            console.log("Peso normal");
        }

        else
        {
             console.log("Acima do peso");
        }

        rl.close();
        });
    });
}

//Exercicio 7
function VerificacaoClima() {

    rl.question("Qual a temperatura atual:", temperatura => {
    temperatura = Number(temperatura);

        if (temperatura < 15)
        {
            console.log("Está frio");
        }

        else if (temperatura < 25)
        {
            console.log("Clima agradável");
        }

        else
        {
             console.log("Está calor");
        }

        rl.close();
    });
}

//Exercicio 8
function DiadaSemana() {

    rl.question("Forneça um numero de 1 a 7:", num => {
    num = Number(num);

        switch(num) {
            case 1:
                console.log("Domingo");
                break;

            case 2:
                console.log("Segunda");
                break;
            
            case 3:
                console.log("Terça");
                break;

            case 4:
                console.log("Quarta");
                break;

            case 5:
                console.log("Quinta");
                break;

            case 6:
                console.log("Sexta");
                break;

            case 7:
                console.log("Sabado");
                break;

            default:
                console.log("Número inválido");
                break;
        }
        rl.close();

    });
}

//Exercicio 9
function DescontoProduto() {

    rl.question("Qual o valor do produto?", valor => {
    valor = Number(valor);

        if (valor > 100)
        {
            valor *= 0.9;
            console.log("O novo valor do produto com desconto é $" + valor.toFixed(2));
        }

        else
        {
            console.log("O valor do produto continua $" + valor.toFixed(2));
        }

        rl.close();
    });
}

//Exercicio 10
function SistemaEmpréstimo() {

    rl.question("Qual o valor do empréstimo?", valorDoEmprestimo => {
    valorDoEmprestimo = Number(valorDoEmprestimo);

    rl.question("Qual o salário mensal?", salarioMensal => {
    salarioMensal = Number(salarioMensal);

    rl.question("Qual o score de crédito?", scoreDeCredito  => {
    scoreDeCredito  = Number(scoreDeCredito );

    rl.question("Quantos meses para pagar?", mesesParaPagar  => {
    mesesParaPagar  = Number(mesesParaPagar );

    if (mesesParaPagar < 12)
    {
        let valorDesconto = valorDoEmprestimo*0.05;
        valorDoEmprestimo -= valorDesconto;
    }

    let parcelaMensal = valorDoEmprestimo / mesesParaPagar;

        if (parcelaMensal <= (0.3*salarioMensal)
            && scoreDeCredito >= 300)
        {
            if (scoreDeCredito > 700)
            {
                console.log("Empréstimo concedido");
                rl.close(); 
            }

            else
            {
                console.log("Empréstimo só pode ser aceito, se for aceiita uma garantia");
                
                rl.question("Aceita a garantia(Digite S para 'Sim' e N para 'Não')?", garantia => {
                garantia = garantia.toUpperCase();

                if (garantia == 'S')
                {
                   console.log("Empréstimo concedido"); 
                }

                else if (garantia == 'N')
                {
                    console.log("Empréstimo negado");
                }

                 rl.close();
                 });
            }
        }

        else
        {
           console.log("Empréstimo negado");
           rl.close();
        }

       
    });
    });
    });
    });
}

//Testar um dos exercicios
SistemaEmpréstimo();


//let valorDoEmprestimo, salarioMensal, scoreDeCredito, mesesParaPagar;