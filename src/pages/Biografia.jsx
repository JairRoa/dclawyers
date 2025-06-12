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

// 2) Layout
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

// 3) Sections grid
const SectionsGrid = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  @media (max-width: 768px) { flex-direction: column; }
`;

// 4) Info sections
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

// 5) Footer
const FooterContainer = styled.footer`
  background: #0f1820;
  color: #fff;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  border-top: 10px solid rgba(255,255,255,0.1);
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
    gap: 0.5rem;
  }
`;

const LeftColumn = styled.div`
  text-align: center;
  h3 { margin-bottom: 0.5rem; font-size: 1.5rem; }
  p { margin: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; color: #ddd; svg { fill: #fab521; width: 1.2rem; height: 1.2rem; } }
`;

const RightColumn = styled.div`
  display: flex;
  gap: 0.5rem;
  @media (max-width: 768px) { overflow-x: auto; }
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
  a { color: #fab521; text-decoration: none; }
`;

// Icons
const PhoneIcon = () => <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l1.79-1.79a1 1 0 0 1 .91-.27 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.2 2.53.58 3.68a1 1 0 0 1-.27.91l-1.79 1.79z"/></svg>;
const EmailIcon = () => <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>;

export default function Biografia() {
  return (
    <>
      <Helmet>
        <title>Quiénes Somos | DC Lawyers Associates</title>
        <meta name="description" content="Conoce la misión, visión y trayectoria de DC Lawyers Associates." />
        <link rel="icon" href="/img/logos/icon.png" />
      </Helmet>

      <GlobalStyle />
      <Navbar currentPage="Quienes somos" />

      <Container>
        <Title>Quiénes Somos</Title>
        <Paragraph>
          DC Lawyers Associates es un despacho líder en asesoría legal integral,
          con experiencia en derecho civil, penal, laboral, mercantil y
          administrativo. Combinamos conocimiento técnico y visión estratégica
          para ofrecer soluciones personalizadas y efectivas.
        </Paragraph>

        <SectionsGrid>
          <InfoSection>
            <InfoContent>
              <InfoTitle>Misión</InfoTitle>
              <InfoText>
                Defender los derechos constitucionales de nuestros clientes,
                brindando servicios legales de alta calidad, basados en
                innovación, investigación y un enfoque práctico orientado a
                resultados.
              </InfoText>
            </InfoContent>
          </InfoSection>

          <InfoSection>
            <InfoContent>
              <InfoTitle>Visión</InfoTitle>
              <InfoText>
                Ser reconocidos a nivel nacional como referencia en servicios
                jurídicos de excelencia, previniendo y resolviendo conflictos
                con eficiencia y ética profesional.
              </InfoText>
            </InfoContent>
          </InfoSection>
        </SectionsGrid>
      </Container>

      <FooterContainer>
        <LeftColumn>
          <h3>DC LAWYERS ASSOCIATES SAS</h3>
          <p><PhoneIcon /> 3218581603</p>
          <p><EmailIcon /> abogadosdc@outlook.com</p>
        </LeftColumn>
        <RightColumn>
          <SocialIcon href="https://www.instagram.com/dc_abogados_soluciones/?hl=es"><i className="fab fa-instagram"/></SocialIcon>
          <SocialIcon href="https://www.facebook.com/dc_abogados_soluciones"><i className="fab fa-facebook-f"/></SocialIcon>
          <SocialIcon href="https://www.tiktok.com/@dc_abogados_soluciones"><i className="fab fa-tiktok"/></SocialIcon>
          <SocialIcon href="https://www.youtube.com/c/dc_abogados_soluciones"><i className="fab fa-youtube"/></SocialIcon>
        </RightColumn>
        <BottomBar>
          DC Lawyers Associates © 2025, creada por{' '}
          <a href="https://jair-roa-calvo.netlify.app/" target="_blank" rel="noopener noreferrer">Jair Roa Calvo</a>
        </BottomBar>
      </FooterContainer>
    </>
  );
}
