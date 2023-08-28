import styled from 'styled-components';

const ModalArea = styled.div`
  position: fixed;
  width: 80vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  background-color: #393e4b;
  align-items: center;
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
`;

const Lote = styled.div`
  padding: 1.5em 2em;
  border-radius: 5px;
  cursor: pointer;
`;

const AtribuirButton = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: #43db6d;
  border: none;
  color: white;
  font-family: 'Rubik';
`;

const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1040;
  background-color: rgba(25, 28, 36, 0.5);
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

export const ButtonCatTipol = styled.button`
  height: 44px;
  color: white;
  border: none;
  padding: 8px 16px;
`;

export const DivCatTipol = styled.div`
  color: white;
  overflow: hiddenwhite;
  border-radius: 5pxwhite;
  display: flexwhite;
  width: 15.3em;
`;

export { ModalArea, ModalContent, NameClose, ChooseLote, Lote, AtribuirButton, ModalBackdrop };
