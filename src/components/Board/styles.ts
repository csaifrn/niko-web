import styled from 'styled-components';
import media from 'styled-media-query';

export const FaseKanbanPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  //max-width: 1140px;
  gap: 2em;
  margin: 0 auto;
  //Mobile
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const kanban = styled.div`
  font-family: 'Rubik';
  display: flex;
  justify-content: center;
  //justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0em 0em 1em 0em;
  margin-bottom: 8em;
  gap: 16px;
  width: 100%;
  @media screen and (min-width: 767px) {
    //justify-content: center;
    flex-direction: row;
    //margin-bottom: 2em;
  }
`;

const kanbanSection = styled.div`
  min-width: 308px;
  width: 100%;
  gap: 1em;
  padding: 2em;
  color: ${({ theme }) => theme.colors['white']};
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 767px) {
    justify-content: flex-start;
    width: 20vh;
    height: 60vh;
  }
`;

const kanbanSectionContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  color: ${({ theme }) => theme.colors.white};
  overflow-x: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;

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

  @media screen and (min-width: 767px) {
    flex-direction: column;
    overflow-x: auto;
    overflow-y: scroll;
  }
`;

const btnPrioridade = styled.button`
  padding: 0.5em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors['gray/500']};
  color: white;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors['gray/300']} !important;
  }
`;

const inputPrioridade = styled.input`
  padding: 0.5em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors['gray/500']};
  color: white;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors['gray/300']} !important;
  }
`;

export const divImg = styled.div`
  //margin: 0em 2em 0em 2em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  /* ${media.greaterThan('large')`
    display: none;
  `} */
  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const divImgMaior = styled.div`
  //margin: 0em 2em 0em 2em;
  display: none;
  justify-content: center;
  align-items: center;
  gap: 16px;
  /* ${media.greaterThan('large')`
    display: flex;
  `} */
  @media screen and (min-width: 767px) {
    display: flex;
  }
`;

export const IconeFase = styled.img``;

export const divTitulo = styled.div`
  display: flex;
  gap: 1em;
`;

export { kanban, kanbanSection, kanbanSectionContent, btnPrioridade, inputPrioridade };

export const kanbanOperador = styled.div`
  font-family: 'Rubik';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1em;
  margin: 0 2em 2em 0em;

  @media screen and (min-width: 1250px) {
    flex-direction: row;
    justify-content: center;
    align-items: start;
  }
`;

export const kanbanSectionOperador = styled.div`
  width: 100%;
  gap: 1em;
  min-width: 250px;
  gap: 1em;
  padding: 1em;
  color: white;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.2em;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['gray/700']};
    width: 0.2em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors['gray/550']};
    border-radius: 5px;
    width: 0.2em;
  }
  @media screen and (min-width: 1250px) {
    flex-direction: column;
    height: 60vh;
    min-width: 280px;
    max-width: 350px;
  }
`;

export const kanbanSectionContentOperador = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 0.5em;
  padding-left: 1.1em;
  color: white;
  height: 65vh;
  overflow-y: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.6em;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 20px;
  }
  @media screen and (min-width: 1008px) {
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors['gray/550']};
      border-radius: 20px;
    }
  }
`;

export const BlackButton = styled.button`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  font-family: Rubik;
  color: white;
  padding: 0 1em;
  width: 100%;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 0.5em;
  align-items: center;
  height: 44px;
  transition: all 300ms;
  &:hover {
    filter: brightness(110%);
  }
`;

export const kanbanSectionContentOperadorBefore = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 0.5em;
  padding-left: 1.1em;
  color: white;
  width: 100%;

  &::-webkit-scrollbar {
    width: 0.6em;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 20px;
  }
  @media screen and (min-width: 1008px) {
    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors['gray/550']};
      border-radius: 20px;
    }
  }
  @media screen and (min-width: 1250px) {
    width: fit-content;
  }
`;

export const btnPrioridadeOperador = styled.button`
  padding: 0.5em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors['gray/500']};
  color: white;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors['gray/300']} !important;
  }
`;

export const inputPrioridadeOperador = styled.input`
  padding: 0.5em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 0.5em;
  border: 1px solid ${({ theme }) => theme.colors['gray/500']};
  color: white;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors['gray/300']} !important;
  }
`;

export const divImgOperador = styled.div`
  margin: 0em 2em 0em 3em;
  display: flex;
  justify-content: flex-end;
  gap: 0.5em;
`;

export const divTituloOperador = styled.div`
  display: flex;
  gap: 1em;
  margin-left: 1em;
`;
