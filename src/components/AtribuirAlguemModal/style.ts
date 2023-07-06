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

const Fechar = styled.button``;

const ChooseUser = styled.div`
  width: 100%;
  height: 40vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: auto;
  scroll-behavior: auto;
`;

const User = styled.div`
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const NameFotoUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
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

export { ModalArea, ModalContent, NameClose, Fechar, ChooseUser, User, NameFotoUser, AtribuirButton, ModalBackdrop };
