import styled from 'styled-components';
import media from 'styled-media-query';

const kanban = styled.div`
  font-family: 'Rubik';
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: column;
  gap: 16px;
  margin: 0 2em 2em 2em;
  padding: 16px 0px 16px;
  scroll-behavior: auto;
  scrollbar-width: thin;
  overflow-x: scroll;
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

  @media screen and (min-width: 1008px) {
    justify-content: center;
    flex-direction: row;
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
  ${media.greaterThan('large')`
    justify-content: center;
    width: 20vh;
    height: 60vh;
  `}
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
  ${media.greaterThan('large')`
    flex-direction: column;
    &::-webkit-scrollbar-thumb {
      background-color: #2a2e38;
      border-radius: 20px;
      flex-direction: column;
    }
  `}
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
  margin: 0em 2em 0em 2em;
  display: flex;
  justify-content: flex-start;
  gap: 0.5em;
  ${media.greaterThan('large')`
    display: none;
  `}
`;

export const divImgMaior = styled.div`
  margin: 0em 2em 0em 2em;
  display: none;
  justify-content: flex-start;
  gap: 0.5em;
  ${media.greaterThan('large')`
    display: flex;
    justify-content: center;
  `}
`;

export const IconeFase = styled.img`
  ${media.greaterThan('large')`
  `}
`;




export const divTitulo = styled.div`
  display: flex;
  gap: 1em;
  margin-left: 1em;
`;

export { kanban, kanbanSection, kanbanSectionContent, btnPrioridade, inputPrioridade };
