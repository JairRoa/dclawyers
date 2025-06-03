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
  min-height: 70vh;
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

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
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
    font-size: 3.6rem;
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

// 4) Sección de Video local
const VideoSection = styled.section`
  background: #0f1820;
  padding: 2rem 2rem;       /* Reducción del espacio superior */
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
  }
`;

const VideoTitle = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 0.8rem;
  }
`;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  video {
    width: 100%;
    max-width: 300px;       /* Limita el ancho en pantallas grandes */
    height: auto;
    border-radius: 8px;

    @media (max-width: 1024px) {
      max-width: 90%;
    }
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;

const MoreButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 2rem;
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
    padding: 1rem 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 1.2rem 3rem;
  }
`;

// 5) Sección de Contacto
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
          <HeroTitle>Bienvenido a DC Lawyers Associates</HeroTitle>
          <HeroSubtitle>
            "Defendemos lo justo. A tu lado, hasta la última instancia."
          </HeroSubtitle>
          <CTAButton href="#contact">Contáctanos</CTAButton>
        </HeroContent>
      </Hero>

      {/* Features */}
      <Features>
        <FeatureCard>
          <FeatureIcon>🏆</FeatureIcon>
          <FeatureTitle>+2000</FeatureTitle>
          <FeatureText>Casos llevados de forma exitosa.</FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>🔒</FeatureIcon>
          <FeatureTitle>Confianza</FeatureTitle>
          <FeatureText>
            Nuestros clientes están seguros de que estarán bien representados.
          </FeatureText>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon>⚖️</FeatureIcon>
          <FeatureTitle>Protección Legal</FeatureTitle>
          <FeatureText>
            Expertos en diversas ramas del Derecho para darte una protección de
            360°.
          </FeatureText>
        </FeatureCard>
      </Features>

      {/* Video local (demanda.mp4) */}
      <VideoSection>
        <VideoTitle>Video</VideoTitle>
        <VideoWrapper>
          <video
            src="/img/video/demanda.mp4"
            controls
            autoPlay
            muted={false}
          />
        </VideoWrapper>
        <MoreButton
          href="https://www.instagram.com/dc_abogados_soluciones/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más
        </MoreButton>
      </VideoSection>

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
