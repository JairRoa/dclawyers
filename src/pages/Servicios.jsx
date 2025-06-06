// src/pages/Servicios.jsx
import React, { useState } from 'react';
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

// 2) Contenedores generales para la página de Servicios
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

  /* Fondo predeterminado (cerrado) */
  background: rgba(255, 255, 255, 0.05);

  /* Cuando está “open”, ponemos la imagen de fondo */
  background-image: ${props => (props.open ? `url(${props.bg})` : 'none')};
  background-size: cover;
  background-position: center;

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

  /* Capa oscura encima de la imagen para mejorar contraste:
     - Si está cerrado (open=false), dejamos la capa con opacidad 0.7
     - Si está abierto (open=true), subimos la opacidad a 0.9 */
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
  &.open > .main .arrow {
    transform: rotate(180deg);
  }

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

    @media (max-width: 768px) {
      font-size: 1.05rem;
    }
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
  &.open > .detail {
    max-height: 300px; /* Ajusta según el texto de detalle que pongas */
    opacity: 1;
  }
`;

// -----------------------------------------------------------------------------------
// 3) Footer (idéntico al de la landing page)
// -----------------------------------------------------------------------------------
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

// Íconos SVG para la columna izquierda del footer
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

// -----------------------------------------------------------------------------------
// 4) Componente principal
// -----------------------------------------------------------------------------------
export default function Servicios() {
  // Lista de servicios con título, ruta de imagen y descripción
  const servicios = [
    {
      title: 'Asesoría legal integral en derecho laboral',
      bg: '/img/servicios/servicio1.png',
      description:
        'Brindamos orientación integral en casos laborales: negociación de contratos, despidos, compensaciones y litigios ante el Ministerio de Trabajo.'
    },
    {
      title: 'Representación jurídica corporativa y comercial',
      bg: '/img/servicios/servicio2.png',
      description:
        'Defendemos los intereses de empresas en fusiones, adquisiciones, redacción y negociación de contratos comerciales y cumplimiento de regulaciones.'
    },
    {
      title: 'Asesoría en contratación y reclamación estatal',
      bg: '/img/servicios/servicio10.png',
      description:
        'Gestionamos licitaciones públicas, revisión de pliegos, presentación de ofertas y seguimiento de reclamaciones ante entidades estatales. Somos expertos en Derecho Administrativo.'
    },
    {
      title: 'Defensa penal y litigios penales',
      bg: '/img/servicios/servicio3.png',
      description:
        'Acompañamiento en casos penales: delitos económicos, crímenes de cuello blanco, violencia intrafamiliar y asesoría en procesos de conciliación penal.'
    },
    {
      title: 'Asesoría legal integral en derecho civil',
      bg: '/img/servicios/servicio4.png',
      description:
        'Atención en casos civiles: contratos de arrendamiento, sucesiones, particiones, reclamaciones por incumplimiento de contrato y negociaciones extrajudiciales.'
    },
    {
      title: 'Servicios de mediación y conciliación',
      bg: '/img/servicios/servicio5.png',
      description:
        'Facilitamos procesos de mediación en conflictos familiares, vecinales y comerciales, buscando soluciones consensuadas antes de acudir a instancias judiciales.'
    },
    {
      title: 'Trámites notariales y contractuales',
      bg: '/img/servicios/servicio6.png',
      description:
        'Realizamos todo tipo de escrituras notariales, autenticaciones, certificados y trámites contractuales para garantizar la validez jurídica de tus documentos.'
    },
    {
      title: 'Asesoría en temas de familia y sucesiones',
      bg: '/img/servicios/servicio7.png',
      description:
        'Acompañamos procesos de divorcio, alimentos, custodia, adopciones y sucesiones hereditarias, asegurando un acuerdo justo para todas las partes.'
    },
    {
      title: 'Consultoría en cumplimiento normativo',
      bg: '/img/servicios/servicio8.png',
      description:
        'Asesoramos a empresas en implementación de políticas internas, prevención de lavado de activos y cumplimiento de regulaciones sectoriales.'
    }
  ];

  // Estado que controla qué índice está abierto
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = index => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <>
      <GlobalStyle />
      {/* Pasamos currentPage para que Navbar oculte “Servicios” en el menú */}
      <Navbar currentPage="Servicios" />

      <PageContainer>
        <Title>Servicios</Title>
        <Subtitle>
          A continuación encontrarás un listado de los principales servicios
          jurídicos que ofrecemos:
        </Subtitle>

        <ServiceList>
          {servicios.map((svc, idx) => (
            <ServiceItem
              key={idx}
              bg={svc.bg}
              open={openIndex === idx}
              className={openIndex === idx ? 'open' : ''}
              onClick={() => toggleItem(idx)}
            >
              <div className="main">
                <span>{svc.title}</span>
                <span className="arrow">
                  {openIndex === idx ? '▲' : '▼'}
                </span>
              </div>
              <div className="detail">{svc.description}</div>
            </ServiceItem>
          ))}
        </ServiceList>
      </PageContainer>

      {/* ----------------- Footer (idéntico al de la landing) ----------------- */}
      <FooterContainer id="footer">
        <LeftColumn>
          <h3>DC LAWYERS ASSOCIATES SAS</h3>
          <p>
            <DocIcon /> Nit 901.128.012-8
          </p>
          <p>
            <PhoneIcon /> Tel 3218581603
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
            href="https://www.tiktok.com/@dc_abogados_soluciones"
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
