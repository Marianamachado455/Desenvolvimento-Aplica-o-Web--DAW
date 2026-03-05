import React from 'react';
import { Container, Button, Nav, NavDropdown } from 'react-bootstrap';
import randFraseCor from '../Services/Randomizador';
import { useState } from 'react';

function HeroSection() {

  const [fraseTraduzida, setFraseTraduzida] = useState("");
  const [autor, setAutor] = useState("");
  const [cor, setCor] = useState("Baby Blue");
  const[valorHex, setValorHex] = useState("#aae3f0");
  const [carregando, setCarregando] = useState(false);
  const [fraseCopiada, setFraseCopiada] = useState(false);

  async function gerarFraseICorFundo() {

    setFraseCopiada(false);
    setCarregando(true);
    const resultado = await randFraseCor();

    setFraseTraduzida(resultado.fraseTraduzida);
    setAutor(resultado.autor);
    setCor(resultado.cor);
    setValorHex(resultado.valorHex);

    setCarregando(false);
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: valorHex || "#aae3f0",
        transition: "background-color 0.5s", minHeight: "100vh"}}>

      <div className="p-4 text-center HeroSection">

        <div className="hero-texto">
          <label className="fw-bold hero-fonte-cursiva" style={{fontSize: "38px"}}>
            Deseja melhorar o seu dia com uma frase inspiradora?
          </label>

          <label className="fw-bold hero-fonte-cursiva destaque" style={{fontSize: "32px"}}>
            Clique no botão abaixo!
          </label>
        </div>

        <div className="mb-3">
          <Button className='btn-frase texto-normal' 
          onClick={gerarFraseICorFundo}>Gerar frase</Button>
        </div>

        {carregando && (
          <div className="mt-2 texto-normal" style={{ fontSize: "24px" }}>
            ⏳ Carregando...
          </div>
        )}


        {fraseTraduzida && (
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            <label className="fw-bold mb-1 hero-fonte-cursiva fs-2">“{fraseTraduzida}”</label>

            <div style={{display: "flex", justifyContent: "space-between",
            alignItems: "center", padding: "6px 20px"}}>
              {autor && (
                <div
                  className="texto-normal fs-4"
                  style={{ textAlign: "left", marginLeft: "10px", opacity: 0.8}} >
                  — {autor}
                </div>
              )}

              <div>
                <Button className='texto-normal btn-copiar' onClick={(() => {
                navigator.clipboard.writeText(fraseTraduzida);
                setFraseCopiada(true);
              })}>
                Copiar frase
              </Button>

                {fraseCopiada && (
                  <label className='fw-bold texto-normal' style={{fontSize: "13px"}}>
                    Frase copiada!
                  </label>
                )}
              </div>
            </div>
          </div>
        )}

        <label className='fs-5' 
        style={{position: "absolute", bottom: "10px", right: "10px",
        backgroundColor: "rgba(255,255,255,0.6)", padding: "5px 10px",
        borderRadius: "8px", fontWeight: "bold",}}>
          Cor de fundo: {cor}
        </label>

  
      </div>
    </div>
  );
}

export default HeroSection;
