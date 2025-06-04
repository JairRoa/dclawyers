// src/pages/Biografia.jsx
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

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ddd;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export default function Biografia() {
  return (
    <>
      <GlobalStyle />
      <Navbar />

      <Container>
        <Title>Quiénes somos</Title>
        <Paragraph>
          Aquí puedes incluir la biografía de tus abogados, la misión, visión
          y valores de DC Lawyers Associates SAS. Por ejemplo, podrías hablar de
          la experiencia de tu equipo, la historia de la firma, etc.
        </Paragraph>
      </Container>
    </>
  );
}
