import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import Header from "./componentes/Header";
import HeroSection from "./componentes/HeroSection";
import Footer from "./componentes/Footer";


function App() {
  return (
    <>
      <Header/>
        <main style={{ paddingTop: "200px" }}>
          <HeroSection />
        </main>
      <Footer/>
    </>
  )
}

export default App
