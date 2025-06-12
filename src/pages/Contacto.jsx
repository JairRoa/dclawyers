// src/pages/Contacto.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import { init, sendForm } from '@emailjs/browser';
import Navbar from '../components/Navbar';

// Inicializa EmailJS con tu Public Key
init('epKrRD5PRmq675FeG');

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

const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;
  @media (max-width: 768px) { margin: 1.5rem auto; }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  @media (max-width: 768px) { font-size: 2.8rem; }
  @media (max-width: 480px) { font-size: 3rem; }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
`;
const Input = styled.input`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
`;
const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
`;
const FileInput = styled.input`
  font-size: 0.9rem;
`;
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  input { width: auto; }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;
const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: #fab521;
  color: #0f1820;
  border: none;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover { background: #ab182d; }
`;
const WhatsappButton = styled.a`
  padding: 0.75rem 1.5rem;
  background: #25d366;
  color: #fff;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  transition: background 0.3s ease;
  &:hover { background: #1ebe5d; }
`;

const Confirmation = styled.div`
  background: rgba(255,255,255,0.1);
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  font-size: 1.2rem;
  color: #fab521;
`;

const FooterContainer = styled.footer`
  background: #0f1820;
  color: #fff;
  padding: 1rem 1rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  border-top: 10px solid rgba(255,255,255,0.1);

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
  @media (min-width:769px) { margin-right: 4rem; }
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
  @media (max-width:768px){ overflow-x:auto; gap:0.4rem; }
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

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    sendForm(
      'service_pir22qf',    // Service ID
      'template_sg8eqka',   // Template ID
      e.target,
      'epKrRD5PRmq675FeG'   // Public Key
    )
      .then(() => {
        setSent(true);
        e.target.reset();
      })
      .catch(err => {
        console.error('EmailJS error:', err);
        alert('Error al enviar. Intenta de nuevo.');
      });
  };

  return (
    <>
      <Helmet>
        <title>Contacto | DC Lawyers Associates</title>
        <meta name="description" content="Contáctanos para asesoría legal." />
      </Helmet>

      <GlobalStyle />
      <Navbar currentPage="Contacto" />

      <Container>
        <Title>Contacto</Title>

        {sent ? (
          <Confirmation>
            Hemos enviado tu mensaje, pronto recibirás respuesta de nuestros profesionales
          </Confirmation>
        ) : (
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="user_name">Nombre</Label>
              <Input id="user_name" name="user_name" type="text" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="user_phone">Teléfono</Label>
              <Input id="user_phone" name="user_phone" type="tel" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="user_email">Correo</Label>
              <Input id="user_email" name="user_email" type="email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="subject">Asunto</Label>
              <Input id="subject" name="subject" type="text" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Mensaje</Label>
              <TextArea id="message" name="message" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="attachment">Adjuntar archivo (opcional)</Label>
              <FileInput id="attachment" name="attachment" type="file" />
            </FormGroup>
            <CheckboxContainer>
              <Input id="policy" name="policy" type="checkbox" required />
              <Label htmlFor="policy">Acepto la política de tratamiento de datos</Label>
            </CheckboxContainer>
            <ButtonGroup>
              <SubmitButton type="submit">Enviar</SubmitButton>
              <WhatsappButton
                href="https://wa.me/573224142500?text=Quiero%20asesoría%20legal"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </WhatsappButton>
            </ButtonGroup>
          </Form>
        )}
      </Container>

      <FooterContainer id="footer">
        <LeftColumn>
          <h3>DC LAWYERS ASSOCIATES SAS</h3>
          <p><i className="fas fa-phone" aria-hidden="true" /> 3218581603</p>
          <p><i className="fas fa-envelope" aria-hidden="true" /> abogadosdc@outlook.com</p>
        </LeftColumn>
        <RightColumn>
          <SocialIcon href="https://instagram.com/dc_abogados_soluciones"><i className="fab fa-instagram" /></SocialIcon>
          <SocialIcon href="https://facebook.com/dc_abogados_soluciones"><i className="fab fa-facebook-f" /></SocialIcon>
          <SocialIcon href="https://tiktok.com/@dc_abogados_soluciones"><i className="fab fa-tiktok" /></SocialIcon>
          <SocialIcon href="https://youtube.com/c/dc_abogados_soluciones"><i className="fab fa-youtube" /></SocialIcon>
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
