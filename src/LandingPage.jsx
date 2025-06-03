// src/LandingPage.jsx
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// 1) GlobalStyle: la fuente ya se carga en public/index.html
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Barlow Condensed', sans-serif;
    background-color: #0f1820;
    color: #fff;
  }
`;

// 2) Paleta de colores
const palette = {
  dark: '#0f1820',
  accent: '#ab182d',
  highlight: '#fab521'
};

// 3) Styled components para la estructura

const Container = styled.div``;

/* Navbar principal */
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${palette.dark};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

/* Logo como imagen */
const LogoImg = styled.img`
  height: 60px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

/* Ícono “hamburguesa” para móviles */
const Burger = styled.div`
  display: none;      /* Solo visible en pantallas <= 768px */
  cursor: pointer;
  z-index: 1001;      /* Para que quede encima del menú */

  div {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

/* Contenedor de enlaces de navegación */
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;

  /* Estilos para escritorio: enlaces en fila */
  li a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: ${palette.highlight};
    }
  }

  /* Estilos para pantallas <= 768px:
     - si open=true, display:flex en columna (menú visible)
     - si open=false, display:none (menú oculto)
     - se superpone con position: absolute */
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    background: ${palette.dark};
    flex-direction: column;
    padding-top: 80px; /* Para dejar espacio debajo del Navbar */
    display: ${({ open }) => (open ? 'flex' : 'none')};
    transition: all 0.3s ease-in-out;

    li {
      margin: 1rem 0;
      text-align: center;
    }
  }
`;

/* Hero con fondo */
const Hero = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: url('/img/background/justice1.png') center/cover no-repeat;
  min-height: 400px;
`;

/* Título principal y subtítulo con ajuste responsive */
const HeroTitle = styled.h2`
  font-size: 3rem;
  margin: 0;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 3.6rem; /* 20% más grande */
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  color: #ddd;

  @media (max-width: 768px) {
    font-size: 1.44rem; /* 20% más grande */
  }
`;

/* Botón CTA con hover y tamaño responsivo */
const CTAButton = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background: ${palette.highlight};
  color: ${palette.dark};
  text-decoration: none;
  font-weight: 700;
  border-radius: 4px;
  transition: background 0.3s ease;

  &:hover {
    background: ${palette.accent}; /* #ab182d */
  }

  @media (max-width: 768px) {
    font-size: 1.2rem; /* 20% más grande */
  }
`;

/* Sección de características */
const Features = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  background: ${palette.dark};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureCard = styled.div`
  flex: 1;
  max-width: 300px;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 6px;
  text-align: center;
  margin: 1rem;
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: ${palette.highlight};
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  margin-bottom: 0.5rem;
  color: ${palette.accent};
`;

const FeatureText = styled.p`
  color: #ccc;
  font-size: 0.95rem;
`;

/* 4) Componente principal con estado para abrir/cerrar menú hamburguesa */
export default function LandingPage() {
  const [open, setOpen] = useState(false);

  /* Cuando el usuario hace clic en un enlace, cerramos el menú */
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Navbar>
          {/* Logo */}
          <LogoImg src="/img/logos/vertical.png" alt="DC Lawyers Logo" />

          {/* Ícono hamburguesa: aparece solo en pantallas <=768px */}
          <Burger onClick={() => setOpen(!open)}>
            <div
              style={{
                transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }}
            />
            <div style={{ opacity: open ? 0 : 1 }} />
            <div
              style={{
                transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }}
            />
          </Burger>

          {/* Enlaces de navegación */}
          <NavLinks open={open}>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Pages
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Attorney
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Practice Areas
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Case Study
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Blog
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick}>
                Features
              </a>
            </li>
          </NavLinks>
        </Navbar>

        {/* Sección Hero */}
        <Hero>
          <HeroTitle>Welcome to Attorna</HeroTitle>
          <HeroSubtitle>
            We are a leading law firm in financial & business industry. With more than 20 years of experience.
          </HeroSubtitle>
          <CTAButton href="#contact">Contact Now</CTAButton>
        </Hero>

        {/* Sección de Features */}
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
      </Container>
    </>
  );
}
