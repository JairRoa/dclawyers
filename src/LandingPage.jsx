// src/LandingPage.jsx
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar'; // Ajusta la ruta si difiere

// 1) Global styles con ajustes de tamaño de fuente responsivo
const GlobalStyle = createGlobalStyle`
  /* Reset básico */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
  }

  /* Ajuste de fuente base */
  html {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    html {
      font-size: 16px; /* Texto 12.5% más grande en tablet/pequeño */
    }
  }
  @media (max-width: 480px) {
    html {
      font-size: 16px; /* Texto 25% más grande en móvil pequeño */
    }
  }

  body {
    font-family: 'Barlow Condensed', sans-serif;
    background-color: #0f1820;
    color: #fff;
    overflow-x: hidden;
  }

  /* Ancla de contacto para desplazamiento */
  #contact {
    scroll-margin-top: 80px;
  }
`;

// 2) Sección Hero con imagen de fondo reducida
const Hero = styled.section`
  position: relative;
  text-align: center;
  padding: 4rem 2rem;
  background: url('/img/background/justice1.png') center/cover no-repeat;
  background-size: cover;
  min-height: 70vh; /* Altura reducida para no ocupar 100vh */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(15, 24, 32, 0.6);
    z-index: 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 90%;
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  margin: 0;
  color: #fff;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 3.6rem; /* 20% más grande */
  }
  @media (max-width: 480px) {
    font-size: 4rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0 2rem;
  color: #ddd;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.44rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #fab521;
  color: #0f1820;
  text-decoration: none;
  font-weight: 700;
  border-radius: 6px;
  transition: background 0.3s ease, transform 0.2s ease;
  font-size: 1rem;

  &:hover {
    background: #ab182d;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1.2rem 3rem;
  }
  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 1.4rem 3.2rem;
  }
`;

// 3) Sección de Features
const Features = styled.section`
  background: #0f1820;
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  flex: 1 1 300px;
  max-width: 320px;

  @media (max-width: 768px) {
    max-width: 90%;
    margin-bottom: 2rem;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #fab521;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 3.5rem;
  }
`;

const FeatureTitle = styled.h3`
  color: #ab182d;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const FeatureText = styled.p`
  color: #ccc;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

// 4) Sección de Contacto
const ContactSection = styled.section`
  background: #1a2430;
  padding: 4rem 2rem;
  color: #fff;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const ContactContainer = styled.div`
  max-width: 500px;
  width: 100%;
`;

const ContactTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 3.5rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 1.2rem;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 1rem 1.2rem;
  }
`;

const SubmitButton = styled.button`
  padding: 1rem 0;
  background: #fab521;
  color: #0f1820;
  border: none;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #ab182d;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1.2rem 0;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
    padding: 1.4rem 0;
  }
`;

export default function LandingPage() {
  return (
    <>
      <GlobalStyle />

      {/* Navbar común, currentPage="Home" */}
      <Navbar currentPage="Home" />

      {/* Hero */}
      <Hero>
        <HeroContent>
          <HeroTitle>Welcome to Attorna</HeroTitle>
          <HeroSubtitle>
            We are a leading law firm in financial & business industry. With more than 20 years of experience.
          </HeroSubtitle>
          <CTAButton href="#contact">Contact Now</CTAButton>
        </HeroContent>
      </Hero>

      {/* Features */}
      <Features>
        <FeatureCard>
          <FeatureIcon>🏆</FeatureIcon>
          <FeatureTitle>2018 Winning Award</FeatureTitle>
          <FeatureText>Far far away, behind the word mountains...</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>🔒</FeatureIcon>
          <FeatureTitle>Private</FeatureTitle>
          <FeatureText>Far far away, behind the word mountains...</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>⚖️</FeatureIcon>
          <FeatureTitle>Legal Protection</FeatureTitle>
          <FeatureText>Far far away, behind the word mountains...</FeatureText>
        </FeatureCard>
      </Features>

      {/* Contacto */}
      <ContactSection id="contact">
        <ContactContainer>
          <ContactTitle>Contáctanos</ContactTitle>
          <ContactForm>
            <Input type="text" placeholder="Nombre" required />
            <Input type="email" placeholder="Correo electrónico" required />
            <TextArea rows="5" placeholder="Tu mensaje..." required />
            <SubmitButton type="submit">Enviar</SubmitButton>
          </ContactForm>
        </ContactContainer>
      </ContactSection>
    </>
  );
}
