import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 5em 0em 5em 0em;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999990;
`;


export const ModalArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  gap: 1em;
  font-family: 'Rubik';
  color: white;
  position: fixed;
  max-width: 400px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  overflow-y: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;
`;

export const ModalContent = styled.div`
  display: flex;
  gap: 2em;
  flex-direction: column;
`;

export const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Close = styled.div`
  display: flex;
  background-color: #393E4B;
  width: auto;
  border: none;
`;

export const ProtocoloDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Protocolo = styled.input`
  padding: 5px;
  border-radius: 3px;
  color: white;
  border: none;
  font-family: 'Rubik';
  background-color: #393E4B;
`;

export const ArquivsFiscos = styled.div`
  background-color: #393E4B;
`;

export const LocalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Local = styled.input`
  padding: 1.5em 2em;
  border-radius: 5px;
  color: white;
  border: none;
  font-family: 'Rubik';
`;

export const Categorias = styled.div``;

export const Categoria = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1.5em 2em;
  border-radius: 5px;
  cursor: pointer;
`;

export const ChooseUser = styled.div`
  width: 100%;
  height: 20vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: auto;
  scroll-behavior: auto;
  padding: 0;
  margin: 1em 0;
  overflow-y: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;
`;

export const AtribuirButton = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: #43db6d;
  border: none;
  color: white;
  font-family: 'Rubik';
  bottom: 0;
  left: 0;
`;

export const Switch = styled.input`
  width: 43.2px;
  height: 24px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;
