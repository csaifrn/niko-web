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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 99999999999999;
  background-color: rgba(25, 28, 36, 0.7);
  transition: transform 1s;
`;

export { ModalArea, ModalContent, NameClose, Fechar, ChooseUser, User, NameFotoUser, AtribuirButton, ModalBackdrop };
