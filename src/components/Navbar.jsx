// src/components/Navbar.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

// 1) Paleta de colores
const palette = {
  dark: '#0f1820',
  text: '#fff',
  highlight: '#fab521',
  accent: '#ab182d'
};

// 2) Listado de páginas y rutas
const ALL_PAGES = [
  { key: 'Inicio', path: '/' },
  { key: 'Servicios', path: '/servicios' },
  { key: 'Quienes somos', path: '/biografia' },
  { key: 'Blog', path: '/blog' },
  { key: 'Galería', path: '/galeria' },
  { key: 'Contacto', path: '/contacto' }
];

// 3) Styled-components

// Contenedor general del Navbar
const NavContainer = styled.nav`
  width: 100%;
  background: ${palette.dark};
  padding: 0.75rem 2rem;      /* se redujo un poco el padding superior */
  box-sizing: border-box;

  /* Empuja 50px hacia abajo el contenido siguiente */
  margin-bottom: 10px;

  @media (max-width: 800px) {
    padding: 0.5rem 1rem;
  }
`;

// Interno que alinea logo y burger/menu
const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 800px) {
    justify-content: flex-start; /* Logo a la izquierda en móvil */
  }
`;

// Logo (izquierda) con tamaño aumentado
const LogoImg = styled.img`
  height: 60px;

  @media (max-width: 1024px) {
    height: 55px;
  }
  @media (max-width: 800px) {
    height: 50px;
  }
  @media (max-width: 480px) {
    height: 45px;
  }
`;

// Botón hamburguesa (aparece en ≤800px)
const BurgerButton = styled.div`
  display: none; /* Oculto en pantallas grandes */

  @media (max-width: 800px) {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 1100;

    /* Tres barras internas */
    div {
      width: 30px;
      height: 4px;
      background-color: ${palette.text};
      margin: 5px 0;
      transition: background-color 0.2s ease, transform 0.3s ease;
    }
    &:hover div {
      background-color: ${palette.highlight};
    }
  }
`;

// Lista de enlaces
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;

  li a {
    text-decoration: none;
    color: ${palette.text};
    font-size: 1.25rem;
    font-weight: 400;
    transition: color 0.2s ease;

    &:hover {
      color: ${palette.highlight};
    }
  }

  @media (max-width: 1024px) {
    li a {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 800px) {
    /* En móvil, posición fija completa si open=true */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${palette.dark};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    display: ${props => (props.open ? 'flex' : 'none')};

    /* Para que quede siempre encima */
    z-index: 1050;

    li {
      margin: 1.5rem 0;

      a {
        font-size: 1.75rem;
      }
    }
  }
`;

// Componente principal
export default function Navbar({ currentPage }) {
  const [open, setOpen] = useState(false);

  // Filtrar la página actual para que no aparezca como enlace
  const visiblePages = ALL_PAGES.filter(page => page.key !== currentPage);

  // Cierra el menú en móvil cuando se hace clic en un enlace
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <NavContainer>
      <NavInner>
        {/* Logo a la izquierda */}
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <LogoImg src="/img/logos/vertical.png" alt="DC Lawyers Logo" />
        </a>

        {/* Burger centrado en móvil (≤800px) */}
        <BurgerButton onClick={() => setOpen(prev => !prev)}>
          <div
            style={{
              transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }}
          />
          <div style={{ opacity: open ? 0 : 1 }} />
          <div
            style={{
              transform: open
                ? 'rotate(-45deg) translate(5px, -5px)'
                : 'none'
            }}
          />
        </BurgerButton>

        {/* Enlaces de navegación */}
        <NavLinks open={open}>
          {visiblePages.map(page => (
            <li key={page.key}>
              <a href={page.path} onClick={handleLinkClick}>
                {page.key}
              </a>
            </li>
          ))}
        </NavLinks>
      </NavInner>
    </NavContainer>
  );
}
