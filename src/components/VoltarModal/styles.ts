import styled from 'styled-components';

const ModalArea = styled.div`
  width: 75vw;
  padding:2em;
  position: relative;
  background: #393E4B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: white;
  font-family: 'Rubik';
`;

const ModalContent = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;

`;

const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2em;
`;

const Voltar = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: #FCDE42;
  border: none;
  color: #191C24;
  font-family: 'Rubik';
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 2em;
  gap: 1em;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1040;
  background-color: rgba(25, 28, 36, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { ModalArea, ModalContent, NameClose, ChooseLote, Lote, Recused, Voltar, ModalBackdrop };
