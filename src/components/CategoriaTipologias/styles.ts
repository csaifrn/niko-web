import styled from 'styled-components';

export const ModalArea = styled.div`
  width: 80vw;
  max-height: 90vh;
  overflow-y: auto;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 2em;
  transform: scale(0);
  transition: transform 0.3s ease-in-out;
  color: white;
  font-family: 'Rubik';
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const ModalContent = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChooseLote = styled.div`
  width: 100%;
  height: 40vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: auto;
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    width: 0.8em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['gray/700']};
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a2e38;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 0em;
  }
`;

const Lote = styled.div`
  padding: 1.5em 2em;
  border-radius: 5px;
  cursor: pointer;
`;

const AtribuirButton = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['green/400']};
  border: none;
  color: ${({ theme }) => theme.colors['gray/700']};
  font-family: 'Rubik';
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['green/600']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['green/600']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(25, 28, 36, 0.7);
  transition: transform 1s;
`;

export const Exit = styled.button`
  height: 2em;
  width: 2em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/400']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const ButtonCatTipol = styled.button`
  height: 44px;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

export const DivEscolherCatTipol = styled.div`
  display: flex;
  color: white;
  overflow: hiddenwhite;
  border-radius: 5pxwhite;
  display: flexwhite;
  width: 15.3em;
`;

export const Nome = styled.p`
  font-family: 'Rubik';
`;

export { ModalContent, NameClose, ChooseLote, Lote, AtribuirButton };
