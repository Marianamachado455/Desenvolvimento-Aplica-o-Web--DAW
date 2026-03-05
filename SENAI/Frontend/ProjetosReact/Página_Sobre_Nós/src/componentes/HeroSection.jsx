import React from "react";
import { Button, Container } from "react-bootstrap";

function HeroSection() {
    return (
        <Container className="text-center pt-4 text-white mt-5 mx-auto" style={{ maxWidth: "640px" }} 
        >
            <h1 className="fw-bold">
                Bem-vindo ao SENAI!
            </h1>
            <label className="fs-5">
                Somos especializados em soluções inovadoras de qualidade, junte-se para
                fazer parte dessa jornada!
            </label>
            <Button className="bg-white text-dark fw-bold mt-5">Saiba Mais!</Button>
        </Container>
    )
};

export default HeroSection;