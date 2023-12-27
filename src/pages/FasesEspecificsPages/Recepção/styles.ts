import styled from 'styled-components';
import media from 'styled-media-query';

export const RecepcaoPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1140px;
  margin: 9em 2em 5em 2em;
  font-family: 'Rubik';
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 767px) {
    justify-content: center;
    margin: 10em 0em 2em 0em;
  }
`;

export const NumeroDeRemessasDiv = styled.div`
  display: flex;
  gap: 8px;
`;

export const NumDeRemessasGreen = styled.h2`
  display: flex;
  color: ${({ theme }) => theme.colors['green/400']};
`;

export const RemessasTitle = styled.h2`
  color: ${({ theme }) => theme.colors['white']};
`;

export const RemessasMain = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 1em;
  border-radius: 5px;
  height: 55vh;
  width: 100%;
  @media screen and (min-width: 767px) {
    min-height: 50vh;
    width: 70vh;
  }
`;

export const RemessasCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow-y: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;

  // A barra de rolagem inteira
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 1em;
  }

  // O caminho (barra de progresso) da barra de rolagem
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  // A barra arrastável de rolagem
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors['gray/400']};
    border-radius: 20px;
  }
`;

export const RemessaCardCinzaClaro = styled.div`
  color: white;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  padding: 2em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;
  width: 100%;
`;

const FooterHome = styled.footer`
  height: 4em;
  background: ${({ theme }) => theme.colors['gray/700']};
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
`;

const spanLinear = styled.span`
  color: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
`;

const Btn = styled.button`
  padding: 0.5em;
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.colors['green/400']};
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  :hover {
  }
  @media screen and (min-width: 767px) {
    width: 20%;
  }
  p {
    font-family: 'Rubik';
  }
`;

export { FooterHome, spanLinear, Btn };
