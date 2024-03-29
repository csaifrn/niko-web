import styled from 'styled-components';
import media from 'styled-media-query';

export const ModalArea = styled.div`
  width: 80vw;
  max-height: 80vh;
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
  ${media.greaterThan('large')`
    max-height: 70vh;
  `}
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
  height: 20vh;
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
    background-color: ${({ theme }) => theme.colors['gray/550']};
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
  color: white;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors['gray/700']};
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
interface CategoriaProps {
  selected: boolean;
}

export const Categorias = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  //margin-bottom: 1em;
`;

export const Nome = styled.p``;

export const Categoria = styled.div<CategoriaProps>`
  padding: 0.5em;
  border-radius: 4px;
  background-color: ${(props) =>
    props.selected ? ({ theme }) => theme.colors['gray/900'] : ({ theme }) => theme.colors['gray/600']};
  color: ${(props) => (props.selected ? ({ theme }) => theme.colors.white : ({ theme }) => theme.colors['gray/100'])};
  cursor: pointer;
`;

export { ModalContent, NameClose, ChooseLote, Lote, AtribuirButton };
