// src/LandingPage.jsx
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';

// 1) Global styles
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  html { font-size: 16px; }
  body {
    font-family: 'Barlow Condensed', sans-serif;
    background-color: #0f1820;
    color: #fff;
    overflow-x: hidden;
  }
`;

// 2) Hero Section
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

// 3) Features Section
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

// 4) Video Section
const VideoSection = styled.section`
  background: #0f1820;
  padding: 0.25rem 0.5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 480px) {
    padding: 0.5rem 0.5rem;
  }
`;
const VideoTitle = styled.h2`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
    margin-bottom: 0.6rem;
  }
`;
const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;

  video {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 8px;

    @media (max-width: 1024px) {
      max-width: 70%;
    }
    @media (max-width: 768px) {
      max-width: 70%;
    }
    @media (max-width: 480px) {
      max-width: 70%;
    }
  }
`;
const MoreButton = styled.a`
  display: inline-block;
  margin-top: 0.75rem;
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
    font-size: 1.1rem;
    padding: 0.9rem 2.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.3rem;
    padding: 1.1rem 2.5rem;
  }
`;

// 5) Footer Section
const FooterContainer = styled.footer`
  background: #0f1820;
  color: #fff;
  padding: 1rem 1rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  border-top: 10px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem 1rem 0.25rem;
    gap: 0.5rem;
    align-items: center;
  }
`;

const LeftColumn = styled.div`
  flex: 0 1 auto; /* Ajusta al contenido */
  text-align: center;
  margin-top: 20px;

  /* En pantallas grandes, empuja un poco hacia la izquierda */
  @media (min-width: 769px) {
    margin-right: 4rem;
  }

  h3 {
    margin: 0 0 0.5rem;
    font-size: 1.5rem;
    @media (max-width: 480px) {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
  }

  p {
    margin: 0.2rem 0;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.2rem;
      height: 1.2rem;
      fill: #fab521;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
      margin: 0.2rem 0;
    }
  }
`;

const RightColumn = styled.div`
  flex: 0 1 auto; /* Ajusta al contenido */
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    /* Íconos en una sola fila bien juntos */
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 0.4rem;
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  transition: color 0.2s ease;
  font-size: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    color: #fab521;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const BottomBar = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #ccc;

  a {
    color: #fab521;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.2s ease;

    &:hover {
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0.25rem;
    font-size: 0.85rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-top: 0.2rem;
  }
`;

// SVG íconos para la columna izquierda
const DocIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM15 3.5V9h4.5L15 3.5zM8 11h8v2H8v-2zm0 4h8v2H8v-2z" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l1.79-1.79a1 1 0 0 1 .91-.27 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.2 2.53.58 3.68a1 1 0 0 1-.27.91l-1.79 1.79z" />
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
  </svg>
);

export default function LandingPage() {
  return (
    <>
      <GlobalStyle />
      <Navbar currentPage="Home" />

      {/* Hero */}
      <Hero>
        <HeroContent>
          <HeroTitle>Bienvenido a DC Lawyers Associates</HeroTitle>
          <HeroSubtitle>
            "Defendemos lo justo. A tu lado, hasta la última instancia."
          </HeroSubtitle>
          <CTAButton href="https://wa.me/573224142500?text=Hola%20Abogados%20DC%20requiero%20asesor%C3%ADa" target="_blank">Contáctanos</CTAButton>
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

      {/* Video */}
      <VideoSection>
        <VideoTitle>Video</VideoTitle>
        <VideoWrapper>
          <video src="/img/video/demanda.mp4" controls muted={false} />
        </VideoWrapper>
        <MoreButton
          href="https://www.instagram.com/dc_abogados_soluciones/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver más
        </MoreButton>
      </VideoSection>

      {/* Footer */}
      <FooterContainer id="footer">
        <LeftColumn>
          <h3>DC LAWYERS ASSOCIATES SAS</h3>
          <p>
            <DocIcon /> Nit 901.128.012-8
          </p>
          <p>
            <PhoneIcon /> 3218581603
          </p>
          <p>
            <EmailIcon /> abogadosdc@outlook.com
          </p>
        </LeftColumn>

        <RightColumn>
          <SocialIcon
            href="https://www.instagram.com/dc_abogados_soluciones/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </SocialIcon>
          <SocialIcon
            href="https://www.facebook.com/dc_abogados_soluciones"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </SocialIcon>
          <SocialIcon
            href="https://www.tiktok.com/@dfmoragrimaldo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <i className="fab fa-tiktok" />
          </SocialIcon>
          <SocialIcon
            href="https://www.youtube.com/c/dc_abogados_soluciones"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube" />
          </SocialIcon>
        </RightColumn>

        <BottomBar>
          DC Lawyers Associates © 2025, página creada por{' '}
          <a href="/jair-roa-calvo" target="_blank" rel="noopener noreferrer">
            Jair Roa Calvo
          </a>
        </BottomBar>
      </FooterContainer>
    </>
  );
}
