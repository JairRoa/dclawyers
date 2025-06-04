// src/pages/Galeria.jsx
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from '../components/Navbar';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Barlow Condensed', sans-serif;
    background-color: #0f1820;
    color: #fff;
    overflow-x: hidden;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    margin: 1.5rem auto;
    padding: 0 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export default function Galeria() {
  return (
    <>
      <GlobalStyle />
      <Navbar />

      <Container>
        <Title>Galería</Title>
        {/* Aquí podrías insertar tu galería de imágenes (Grid, Lightbox, etc.) */}
      </Container>
    </>
  );
}
