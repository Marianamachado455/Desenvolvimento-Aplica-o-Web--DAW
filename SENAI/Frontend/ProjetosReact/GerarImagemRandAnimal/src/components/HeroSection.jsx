import React from 'react';
import { Container, Button } from 'react-bootstrap';
import gerarImagemRand from '../Services/animalRand';
import { useState } from 'react';

function HeroSection() {

  const [valor, setValor] = useState(0)
  const [animal, setAnimal] = useState("");
  const [imagem, setImagem] = useState("");
  const [contCao, setCao] = useState(0);
  const [contGato, setGato] = useState(0);
  const [contRaposa, setRaposa] = useState(0);
  const [ultimoValor, setUltimoValor] = useState(-1);
  const [carregando, setCarregando] = useState(false);

  async function gerarImagem() {
    const resultado = await gerarImagemRand(ultimoValor);
    setValor(resultado.valor);
    setImagem(resultado.linkImagem);
    setCarregando(true);

    if (resultado.valor === 0) {
      setAnimal("cachorro");
      setCao(prev => prev + 1);

    } else if (resultado.valor === 1) {
      setAnimal("gato");
      setGato(prev => prev + 1);

    } else if (resultado.valor === 2) {
      setAnimal("raposa");
      setRaposa(prev => prev + 1);
    }
    setUltimoValor(resultado.valor);
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}>
      <div className="border border-dark p-4 text-center bg-white">

        <label className="fw-bold mb-3" style={{ fontSize: "1.4rem" }}>
          Gerador aleatório de animais
        </label>

        <div className="mb-3">
          <Button onClick={gerarImagem}>Gerar imagem</Button>
        </div>

        {carregando && (
          <div className="fw-bold mt-2">
            ⏳ Carregando imagem...
          </div>
        )}

        {animal && (
          <>
            <div className="fw-bold mb-2">
              Você sorteou: {animal}
            </div>

            <img onLoad={() => setCarregando(false)}
              src={imagem}
              alt={animal}
              style={{ maxWidth: "300px" }}
            />

            <div className="mt-3 fw-bold">
              <div>Já foram sorteados:</div>
              <div className="mt-1">🐶 {contCao} cachorros</div>
              <div>🐱 {contGato} gatos</div>
              <div>🦊 {contRaposa} raposas</div>
            </div>
          </>
        )}

      </div>
    </Container>
  );
}

export default HeroSection;
