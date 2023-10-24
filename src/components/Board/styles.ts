import styled from 'styled-components';
import media from 'styled-media-query';

export const FaseKanbanPage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1140px;
  gap: 2em;

  //Mobile
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  
`;

const kanban = styled.div`
  font-family: 'Rubik';
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0em 0em 1em 0em;
  gap: 16px;
  scroll-behavior: auto;
  scrollbar-width: thin;
  overflow-x: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    width: 0.3em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background: #191c24;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a2e38;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 0em 2em;
  }

  @media screen and (min-width: 767px) {
    //justify-content: center;
    flex-direction: row;
    margin: 0em 0em 2em 0em;
  }
`;

const kanbanSection = styled.div`
  min-width: 308px;
  width: 100%;
  gap: 1em;
  height: 35vh;
  padding: 1em;
  color: white;
  background-color: #191c24;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 0.6em;
  }

  &::-webkit-scrollbar-track {
    background: #191c24;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a2e38;
    border-radius: 20px;
  }
  @media screen and (min-width: 767px) {
    justify-content: center;
    width: 20vh;
    height: 60vh;
  }
  /* ${media.greaterThan('large')`
    justify-content: center;
    width: 20vh;
    height: 60vh;
  `} */
`;

const kanbanSectionContent = styled.div`
  display: flex;
  flex-direction: row;
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
  @media screen and (min-width: 767px) {
    flex-direction: column;
    &::-webkit-scrollbar-thumb {
      background-color: #2a2e38;
      border-radius: 20px;
      flex-direction: column;
    }
  }

  /* ${media.greaterThan('large')`
    flex-direction: column;
    &::-webkit-scrollbar-thumb {
      background-color: #2a2e38;
      border-radius: 20px;
      flex-direction: column;
    }
  `} */
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

export const IconeFase = styled.img`
`;




export const divTitulo = styled.div`
  display: flex;
  gap: 1em;
  margin-left: 1em;
`;

export { kanban, kanbanSection, kanbanSectionContent, btnPrioridade, inputPrioridade };
