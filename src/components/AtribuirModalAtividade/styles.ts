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
  z-index: 9999999999;
  background-color: rgba(25, 28, 36, 0.5);
`;

interface CategoriaProps {
  selected: boolean;
}

export const Categorias = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;

export const Categoria = styled.div<CategoriaProps>`
  padding: 0.5em;
  border-radius: 4px;
  background-color: ${(props) => (props.selected ? '#090E09' : '#2D303B')};
  color: ${(props) => (props.selected ? '#fff' : '#838383')};
  cursor: pointer;
`;

export { ModalArea, ModalContent, NameClose, ChooseLote, Lote, AtribuirButton, ModalBackdrop };
