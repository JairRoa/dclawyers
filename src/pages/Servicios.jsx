import React, { useState } from 'react';
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

// 2) Layout containers
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

  @media (max-width: 768px) { font-size: 2.8rem; }
  @media (max-width: 480px) { font-size: 3rem; }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #ddd;
  text-align: center;

  @media (max-width: 768px) { font-size: 1.4rem; }
  @media (max-width: 480px) { font-size: 1.6rem; }
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  position: relative;
  margin: 0.75rem 0;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.2s ease;

  background: rgba(255, 255, 255, 0.05);
  background-image: ${props => (props.open ? `url(${props.bg})` : 'none')};
  background-size: cover;
  background-position: center;

  &:hover { background: rgba(255, 255, 255, 0.1); }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 1.4rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props =>
      props.open ? 'rgba(15, 24, 32, 0.8)' : 'rgba(15, 24, 32, 0.7)'};
    border-radius: 6px;
    pointer-events: none;
    transition: background 0.3s ease;
  }

  & > .main {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > .main .arrow {
    margin-left: 1rem;
    transition: transform 0.3s ease;
    font-size: 1.2rem;
    color: #fab521;
  }

  &.open > .main .arrow { transform: rotate(180deg); }

  & > .detail {
    position: relative;
    z-index: 1;
    margin-top: 0.75rem;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.3s ease, opacity 0.3s ease;
    overflow: hidden;
    color: #ddd;
    line-height: 1.5;
    font-size: 0.95rem;

    @media (max-width: 768px) { font-size: 1.05rem; }
    @media (max-width: 480px) { font-size: 1.1rem; }
  }

  &.open > .detail {
    max-height: 300px;
    opacity: 1;
  }
`;

// 3) Footer (idéntico al de la landing page)
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

  @media (min-width: 769px) {
    margin-right: 4rem;
  }

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
  transition: color 0.2s ease;
  font-size: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover { color: #fab521; }

  @media (max-width: 768px) { font-size: 1.6rem; }
  @media (max-width: 480px) { font-size: 1.4rem; }
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
  }
`;

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.093 15.093 0 0 0 6.59 6.59l1.79-1.79a1 1 0 0 1 .91-.27 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.2 2.53.58 3.68a1 1 0 0 1-.27.91l-1.79 1.79z"/></svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16 2-2V6a2 2 0 0 0-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
);

// 4) Main component
export default function Servicios() {
  const servicios = [
    { title: 'Asesoría legal integral en derecho laboral', bg: '/img/servicios/servicio1.png', description: 'Brindamos orientación integral en casos laborales: negociación de contratos, despidos, compensaciones y litigios ante el Ministerio de Trabajo.' },
    { title: 'Representación jurídica corporativa y comercial', bg: '/img/servicios/servicio2.png', description: 'Defendemos los intereses de empresas en fusiones, adquisiciones, redacción y negociación de contratos comerciales y cumplimiento de regulaciones.' },
    { title: 'Asesoría en contratación y reclamación estatal', bg: '/img/servicios/servicio10.png', description: 'Gestionamos licitaciones públicas, revisión de pliegos, presentación de ofertas y seguimiento de reclamaciones ante entidades estatales.' },
    { title: 'Defensa penal y litigios penales', bg: '/img/servicios/servicio3.png', description: 'Acompañamiento en casos penales: delitos económicos, crímenes de cuello blanco, violencia intrafamiliar y asesoría en conciliación penal.' },
    { title: 'Asesoría legal integral en derecho civil', bg: '/img/servicios/servicio4.png', description: 'Atención en casos civiles: contratos de arrendamiento, sucesiones, reclamaciones por incumplimiento y negociaciones.' },
    { title: 'Servicios de mediación y conciliación', bg: '/img/servicios/servicio5.png', description: 'Facilitamos procesos de mediación en conflictos familiares, vecinales y comerciales.' },
    { title: 'Trámites notariales y contractuales', bg: '/img/servicios/servicio6.png', description: 'Realizamos escrituras notariales, autenticaciones y certificados.' },
    { title: 'Asesoría en temas de familia y sucesiones', bg: '/img/servicios/servicio7.png', description: 'Acompañamos procesos de divorcio, alimentos, custodia y sucesiones hereditarias.' },
    { title: 'Consultoría en cumplimiento normativo', bg: '/img/servicios/servicio8.png', description: 'Asesoramos en políticas internas, prevención de lavado de activos y regulaciones sectoriales.' }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleItem = idx => setOpenIndex(prev => prev === idx ? null : idx);

  return (
    <>
      <Helmet>
        <title>Servicios | DC Lawyers Associates</title>
        <link rel="icon" href="/img/logos/icon.png" />
      </Helmet>

      <GlobalStyle />
      <Navbar currentPage="Servicios" />

      <PageContainer>
        <Title>Servicios</Title>
        <Subtitle>Descubre los servicios jurídicos que ofrecemos para proteger tus derechos.</Subtitle>

        <ServiceList>
          {servicios.map((svc, i) => (
            <ServiceItem key={i} bg={svc.bg} open={openIndex === i} className={openIndex === i ? 'open' : ''} onClick={() => toggleItem(i)}>
              <div className="main">
                <span>{svc.title}</span>
                <span className="arrow">{openIndex === i ? '▲' : '▼'}</span>
              </div>
              <div className="detail">{svc.description}</div>
            </ServiceItem>
          ))}
        </ServiceList>
      </PageContainer>

      <FooterContainer id="footer">
        <LeftColumn>
          <h3>DC LAWYERS ASSOCIATES SAS</h3>
          <p><PhoneIcon /> 3218581603</p>
          <p><EmailIcon /> abogadosdc@outlook.com</p>
        </LeftColumn>

        <RightColumn>
          <SocialIcon href="https://www.instagram.com/dc_abogados_soluciones/?hl=es" aria-label="Instagram"><i className="fab fa-instagram"/></SocialIcon>
          <SocialIcon href="https://www.facebook.com/dc_abogados_soluciones" aria-label="Facebook"><i className="fab fa-facebook-f"/></SocialIcon>
          <SocialIcon href="https://www.tiktok.com/@dc_abogados_soluciones" aria-label="TikTok"><i className="fab fa-tiktok"/></SocialIcon>
          <SocialIcon href="https://www.youtube.com/c/dc_abogados_soluciones" aria-label="YouTube"><i className="fab fa-youtube"/></SocialIcon>
        </RightColumn>

        <BottomBar>DC Lawyers Associates © 2025, página creada por <a href="/jair-roa-calvo" target="_blank" rel="noopener noreferrer">Jair Roa Calvo</a></BottomBar>
      </FooterContainer>
    </>
  );
}
