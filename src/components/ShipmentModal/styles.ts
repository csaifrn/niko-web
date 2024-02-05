import styled from 'styled-components';

export const ModalArea = styled.div`
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

export const ModalContent = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TituloDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Titulo = styled.input`
  height: 44px;
  padding: 0 2em;
  border-radius: 5px;
  color: white;
  border: none;
  font-family: 'Rubik';
`;

export const LocalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Local = styled.input`
  height: 44px;
  padding: 0 1em;
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
  max-height: 20vh;
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
  background-color: ${({ theme }) => theme.colors['green/400']};
  border: none;
  color: white;
  font-family: 'Rubik';
  bottom: 0;
  left: 0;
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
