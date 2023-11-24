import styled from 'styled-components';
import media from 'styled-media-query';

export const FaseKanbanPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  //max-width: 1140px;

  gap: 2em;
  //Mobile
  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 8em;
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
  gap: 16px;

  @media screen and (min-width: 767px) {
    //justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 0;
    //margin-bottom: 2em;
  }
`;

export const WrapperEmpty = styled.div`
  font-family: 'Rubik';
  background-color: ${({ theme }) => theme.colors['gray/900']};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  padding: 4em;
`;

export const WrapperEmptyKanban = styled.div`
  font-family: 'Rubik';
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  padding: 4em;
`;

const kanbanSection = styled.div`
  min-width: 308px;
  width: 100%;
  gap: 1em;
  padding: 2em;
  color: #ffffff;
  background-color: #191c24;
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
  color: #ffffff;
  overflow-x: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;
  height: 150px;
  width: 100%;
  padding: 1em;
  background-color: ${({ theme }) => theme.colors['gray/700']};

  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
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
    max-width: 300px;
    height: 60vh;
    width: 100%;
  }
`;

const btnPrioridade = styled.button`
  padding: 0.5em;
  background-color: #393e4b;
  border-radius: 0.5em;
  border: 1px solid #393e4b;
  color: white;
  :hover {
    border: 1px solid #b1b1b1;
  }
`;

const inputPrioridade = styled.input`
  padding: 0.5em;
  background-color: #393e4b;
  border-radius: 0.5em;
  border: 1px solid #393e4b;
  color: white;
  :hover {
    border: 1px solid #b1b1b1;
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

export const divChildren = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: start;
  }
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
  background-color: #191c24;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.2em;
  }

  &::-webkit-scrollbar-track {
    background: #191c24;
    width: 0.2em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a2e38;
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
      background-color: #2a2e38;
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
      background-color: #2a2e38;
      border-radius: 20px;
    }
  }
  @media screen and (min-width: 1250px) {
    width: fit-content;
  }
`;

export const btnPrioridadeOperador = styled.button`
  padding: 0.5em;
  background-color: #393e4b;
  border-radius: 0.5em;
  border: 1px solid #393e4b;
  color: white;
  :hover {
    border: 1px solid #b1b1b1;
  }
`;

export const inputPrioridadeOperador = styled.input`
  padding: 0.5em;
  background-color: #393e4b;
  border-radius: 0.5em;
  border: 1px solid #393e4b;
  color: white;
  :hover {
    border: 1px solid #b1b1b1;
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
