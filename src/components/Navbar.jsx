// src/components/Navbar.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

// 1) Paleta de colores
const palette = {
  dark: '#0f1820',
  highlight: '#fab521',
  accent: '#ab182d',
  text: '#fff'
};

// 2) Listado de páginas (key debe coincidir con currentPage)
const ALL_PAGES = [
  { key: 'Home', path: '/' },
  { key: 'Pages', path: '/pages' },
  { key: 'Attorney', path: '/attorney' },
  { key: 'Practice Areas', path: '/practice-areas' },
  { key: 'Case Study', path: '/case-study' },
  { key: 'Blog', path: '/blog' },
  { key: 'Features', path: '/features' }
];

// 3) Styled‐components

// Contenedor principal del Navbar
const NavContainer = styled.nav`
  width: 100%;
  background: ${palette.dark};
  padding: 0.5rem 2rem;
  box-sizing: border-box;
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

// Capa interna para centrar/espaciar logo + hamburger o enlaces
const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    /* En móviles, centrar *solo* el logo y el ícono hamburguesa */
    justify-content: center;
  }
`;

// Logo
const LogoImg = styled.img`
  height: 50px;

  @media (max-width: 768px) {
    height: 45px;
  }
  @media (max-width: 480px) {
    height: 40px;
  }
`;

// Botón hamburguesa
const BurgerButton = styled.div`
  display: none;       /* Solo visible en móviles (≤768px) */
  cursor: pointer;
  z-index: 1100;

  div {
    width: 25px;
    height: 3px;
    background-color: ${palette.text};
    margin: 4px 0;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 1rem;       /* derecha antes de la media query */
    /* Para centrarlo, movemos right / left */
    left: 50%;
    transform: translateX(-50%);
  }
`;

// Lista de enlaces de navegación
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;

  li a {
    text-decoration: none;
    color: ${palette.text};
    font-weight: 500;
    transition: color 0.2s ease;
    &:hover {
      color: ${palette.highlight};
    }
  }

  @media (max-width: 768px) {
    /* En móviles queda oculto si open=false, y visible en columna si open=true */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;           /* Cubrir toda la pantalla */
    background: ${palette.dark};
    flex-direction: column;
    align-items: center;
    justify-content: center;

    display: ${({ open }) => (open ? 'flex' : 'none')};
    padding: 0;

    li {
      margin: 1rem 0;

      a {
        font-size: 1.5rem;   /* Texto grande para móvil */
      }
    }
  }
`;

export default function Navbar({ currentPage }) {
  const [open, setOpen] = useState(false);

  // Filtrar la página actual de la lista
  const visiblePages = ALL_PAGES.filter(page => page.key !== currentPage);

  // Cierra menú al hacer clic en un enlace (móvil)
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <NavContainer>
      <NavInner>
        {/* Logo: ajusta el href si tu Home es otra ruta */}
        <a href="/">
          <LogoImg src="/img/logos/vertical.png" alt="DC Lawyers Logo" />
        </a>

        {/* Botón hamburguesa (solo en ≤768px) */}
        <BurgerButton onClick={() => setOpen(prev => !prev)}>
          <div style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ opacity: open ? 0 : 1 }} />
          <div style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
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
