import styled from 'styled-components';

export const ModalArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 1em;
  font-family: 'Rubik';
  color: white;
  position: fixed;
  width: 285px;
  height: 510px;
  background-color: #393e4b;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const ModalContent = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChooseUser = styled.div`
  width: 100%;
  height: 40vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: auto;
  scroll-behavior: auto;
  padding: 1em 0em 0em 0em;
`;

export const Categoria = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1em 2em;
  border-radius: 5px;
  cursor: pointer;
`;

export const AtribuirButton = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: #43db6d;
  border: none;
  color: white;
  font-family: 'Rubik';
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999999999999999999;
  background-color: rgba(25, 28, 36, 0.5);
`;
