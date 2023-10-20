import styled from 'styled-components';

const ModalArea = styled.div`
  width: 80vw;
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

export const Exit = styled.button`
  height: 2em;
  width: 2em;
  background-color: #090e09;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;

const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const Lote = styled.div`
  padding: 1.5em 2em;
  border-radius: 5px;
  cursor: pointer;
`;

const Recused = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: #191c24;
  border: none;
  color: white;
  font-family: 'Rubik';
`;

export const Delete = styled.button`
  height: 44px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['red/500']};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0em 1em;
  gap: 1em;
  font-family: 'Rubik';
  background-color: ${({ theme }) => theme.colors['red/700']};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['red/500']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['red/600']};
    transform: translateY(-5%) translateX(2%);
  }
`;

const ModalBackdrop = styled.div`
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

export { ModalArea, ModalContent, NameClose, ChooseLote, Lote, Recused, ModalBackdrop };
