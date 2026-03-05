async function gerarImagemRand(ultimovalor) {
    
    let resposta, linkImagem;
    let animal;
    let valor;

    do {
        valor = Math.floor(Math.random() * 3);
    }   while (valor == ultimovalor);

    if (valor == 0 )
    {
        resposta = await fetch("https://dog.ceo/api/breeds/image/random");
        const dados = await resposta.json();
        linkImagem = dados.message;
    }
    
    else if (valor == 1)
    {
        resposta = await fetch("https://api.thecatapi.com/v1/images/search");
        const dados = await resposta.json();
        linkImagem = dados[0].url;
    }

    else if (valor == 2)
    {
        resposta = await fetch("https://randomfox.ca/floof/");
        const dados = await resposta.json();
        linkImagem = dados.image;
    }

   return { linkImagem, valor }

}

export default gerarImagemRand;