// src/pages/Biografia.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import Navbar from '../components/Navbar';

// 1) Global styles
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

// 2) Layout de la página
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
  @media (max-width: 768px) { font-size: 2.8rem; }
  @media (max-width: 480px) { font-size: 3rem; }
`;
const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #ddd;
  text-align: justify;
  @media (max-width: 768px) { font-size: 1.4rem; }
  @media (max-width: 480px) { font-size: 1.6rem; }
`;

// 3) Grid para Secciones Misión y Visión
const SectionsGrid = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// 4) Secciones Misión / Visión con fondo de torre
const InfoSection = styled.section`
  position: relative;
  flex: 1;
  padding: 2rem;
  border-radius: 8px;
  overflow: hidden;
  color: #fff;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url('/img/background/torre.png') center/cover no-repeat;
    opacity: 0.4;
    z-index: 0;
  }
`;
const InfoContent = styled.div`
  position: relative;
  z-index: 1;
`;
const InfoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fab521;
  @media (max-width: 768px) { font-size: 1.8rem; }
  @media (max-width: 480px) { font-size: 1.6rem; }
`;
const InfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #eee;
  @media (max-width: 768px) { font-size: 1rem; }
  @media (max-width: 480px) { font-size: 0.95rem; }
`;

// 5) Footer (idéntico al de LandingPage)
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
  flex: 0 1 auto;
  text-align: center;
  margin-top: 20px;
  @media (min-width: 769px) { margin-right: 4rem; }
  h3 { margin: 0 0 0.5rem; font-size: 1.5rem; }
  p {
    margin: 0.2rem 0;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg { width: 1.2rem; height: 1.2rem; fill: #fab521; }
  }
`;
const RightColumn = styled.div`
  flex: 0 1 auto;
  display: flex;
  gap: 0.5rem;
  @media (max-width: 768px) {
    overflow-x: auto;
    gap: 0.4rem;
  }
`;
const SocialIcon = styled.a`
  color: #fff;
  font-size: 2rem;
  transition: color 0.2s;
  &:hover { color: #fab521; }
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
    &:hover { color: #fff; }
  }
`;

// íconos SVG
const DocIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM15 3.5V9h4.5L15 3.5zM8 11h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l1.79-1.79a1 1 0 0 1 .91-.27 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.2 2.53.58 3.68a1 1 0 0 1-.27.91l-1.79 1.79z"/></svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
);

export default function Biografia() {
  return (
    <>
      {/* HEAD */}
      <Helmet>
        <title>Quiénes Somos | DC Lawyers Associates</title>
        <link rel="icon" href="/img/logos/icon.png" />
      </Helmet>

      {/* GLOBAL & NAV */}
      <GlobalStyle />
      <Navbar currentPage="Quienes somos" />

      {/* CONTENIDO */}
      <Container>
        <Title>Quiénes Somos</Title>
        <Paragraph>
          DC Lawyers Associates es un despacho de abogados líder en el
          asesoramiento integral y la representación jurídica en múltiples
          áreas del Derecho (civil, penal, laboral, mercantil y administrativo).
          Nuestra firma combina un profundo conocimiento técnico con una visión
          estratégica orientada a resultados, diseñando soluciones innovadoras,
          prudentes y adaptadas a las necesidades específicas de cada cliente.
        </Paragraph>

        {/* MISIÓN & VISIÓN */}
        <SectionsGrid>
          <InfoSection>
            <InfoContent>
              <InfoTitle>Misión</InfoTitle>
              <InfoText>
                Somos una firma de abogados dedicada a prestar servicios legales
                de altísima calidad, orientados a defender los derechos
                constitucionales de nuestros clientes. Diseñamos alternativas
                legales y soluciones de negocio efectivas, prudentes y
                oportunas, basadas en un enfoque práctico e innovador,
                sustentado en la investigación y el conocimiento, que genere
                relaciones exitosas y duraderas con un costo razonable.
              </InfoText>
            </InfoContent>
          </InfoSection>

          <InfoSection>
            <InfoContent>
              <InfoTitle>Visión</InfoTitle>
              <InfoText>
                Consolidarnos como una de las mejores firmas de abogados a nivel
                nacional, ofreciendo un apoyo integral que se adapte a las
                diferentes necesidades legales de nuestros clientes. Previniendo
                conflictos y resolviendo los existentes con eficiencia, buscamos
                optimizar recursos y posicionarnos como referentes en la
                prestación de servicios jurídicos de excelencia.
              </InfoText>
            </InfoContent>
          </InfoSection>
        </SectionsGrid>
      </Container>

      {/* FOOTER */}
      <FooterContainer id="footer">
        <LeftColumn>
          <h3>DC LAWYERS ASSOCIATES SAS</h3>
          <p><PhoneIcon /> 3218581603</p>
          <p><EmailIcon /> abogadosdc@outlook.com</p>
        </LeftColumn>
        <RightColumn>
          <SocialIcon href="https://www.instagram.com/dc_abogados_soluciones/?hl=es" aria-label="Instagram">
            <i className="fab fa-instagram" />
          </SocialIcon>
          <SocialIcon href="https://www.facebook.com/dc_abogados_soluciones" aria-label="Facebook">
            <i className="fab fa-facebook-f" />
          </SocialIcon>
          <SocialIcon href="https://www.tiktok.com/@dc_abogados_soluciones" aria-label="TikTok">
            <i className="fab fa-tiktok" />
          </SocialIcon>
          <SocialIcon href="https://www.youtube.com/c/dc_abogados_soluciones" aria-label="YouTube">
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
