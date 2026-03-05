async function randFraseCor() {

  let respostaFrase = await fetch("https://quoteslate.vercel.app/api/quotes/random");
  const dadosFrase = await respostaFrase.json();

  let frase = dadosFrase.quote;
  let autor = dadosFrase.author;
  console.log(`Frase original: ${frase}`);

  //API de tradução
  let respostaTraducao = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(frase)}&langpair=en|pt`);
  const dadosTraducao = await respostaTraducao.json();

  let fraseTraduzida = dadosTraducao.responseData.translatedText;
  console.log(`Frase traduzida: ${fraseTraduzida}`);

  //Como sortear um hex e impedir cores muito escuras e claras:
  //(Atrapalham da leitura do texto)
  const r = Math.floor(Math.random() * (200 - 70) + 70);
  const g = Math.floor(Math.random() * (200 - 70) + 70);
  const b = Math.floor(Math.random() * (200 - 70) + 70);

  const sortearCor = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  let respostaCor = await fetch(`https://www.thecolorapi.com/id?hex=${sortearCor}`);
  const dadosCor = await respostaCor.json();

  let valorHex = dadosCor.hex.value; 
  let cor = dadosCor.name.value;  


  return { fraseTraduzida, autor, valorHex, cor};
}

export default randFraseCor;

