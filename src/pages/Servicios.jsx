// src/pages/Servicios.jsx
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

const PageContainer = styled.div`
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
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #ddd;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    background: rgba(255, 255, 255, 0.05);
    margin: 0.75rem 0;
    padding: 1rem 1.5rem;
    border-radius: 6px;
    font-size: 1.1rem;
    transition: background 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 768px) {
      font-size: 1.3rem;
      padding: 1.2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.5rem;
      padding: 1.4rem;
    }
  }
`;

export default function Servicios() {
  return (
    <>
      <GlobalStyle />
      <Navbar />

      <PageContainer>
        <Title>Servicios</Title>
        <Subtitle>
          A continuación encontrarás un listado de los principales servicios
          jurídicos que ofrecemos:
        </Subtitle>

        <ServiceList>
          <li>Asesoría legal integral en derecho civil</li>
          <li>Representación en juicios mercantiles</li>
          <li>Defensa penal y litigios penales</li>
          <li>Asesoría en derecho laboral y parafiscal</li>
          <li>Servicios de mediación y conciliación</li>
          <li>Trámites notariales y contractuales</li>
          <li>Asesoría en temas de familia y sucesiones</li>
          <li>Consultoría en cumplimiento normativo</li>
        </ServiceList>
      </PageContainer>
    </>
  );
}
