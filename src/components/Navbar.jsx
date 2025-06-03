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
  { key: 'Home', path: '/' },
  { key: 'Pages', path: '/pages' },
  { key: 'Attorney', path: '/attorney' },
  { key: 'Practice Areas', path: '/practice-areas' },
  { key: 'Case Study', path: '/case-study' },
  { key: 'Blog', path: '/blog' },
  { key: 'Features', path: '/features' }
];

// 3) Styled-components

// Contenedor general del Navbar
const NavContainer = styled.nav`
  width: 100%;
  background: ${palette.dark};
  padding: 1rem 2rem;
  box-sizing: border-box;

  @media (max-width: 800px) {
    padding: 0.75rem 1rem;
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
    justify-content: flex-start; /* Logo a la izquierda */
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
  margin: 0;
  padding: 0;

  /* 1) Móvil (≤800px): oculto por default, visible si open=true */
  @media (max-width: 800px) {
    display: ${(props) => (props.open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;          /* Cubre todo el viewport */
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${palette.dark};
    z-index: 1000;

    li {
      margin: 1rem 0; /* Reducido de 1.5rem a 1rem */
      a {
        text-decoration: none;
        color: ${palette.text};
        font-size: 1.4rem;   /* Reducido de 1.75rem a 1.4rem */
        font-weight: 600;
        transition: color 0.2s ease;
        &:hover {
          color: ${palette.highlight};
        }
      }
    }
  }

  /* 2) Pantallas ≥801px: menú horizontal */
  @media (min-width: 801px) {
    display: flex !important;  /* fuerza que en desktop siempre esté flex */
    flex-direction: row;
    gap: 2rem;
    align-items: center;
    position: static;
    height: auto;
    background: none;

    li {
      margin: 0;
      a {
        font-size: 1.25rem;  /* 20px con html=16px */
        text-decoration: none;
        color: ${palette.text};
        font-weight: 600;
        transition: color 0.2s ease;
        &:hover {
          color: ${palette.highlight};
        }
      }
    }
  }

  /* 3) Tablet mediano: 801px ≤ ancho ≤ 1024px */
  @media (min-width: 801px) and (max-width: 1024px) {
    li a {
      font-size: 1.3rem; /* ~20.8px */
    }
  }
`;

export default function Navbar({ currentPage }) {
  const [open, setOpen] = useState(false);

  // Filtramos la página actual
  const visiblePages = ALL_PAGES.filter((page) => page.key !== currentPage);

  // Al hacer clic en un enlace en móvil, cerramos el menú
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

        {/* Burger (solo aparece en ≤800px) */}
        <BurgerButton onClick={() => setOpen((prev) => !prev)}>
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
          {visiblePages.map((page) => (
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
