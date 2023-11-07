import styled from 'styled-components';

export const ModalArea = styled.div`
  font-family: 'Rubik';
  color: white;
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
`;

export const ModalContent = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3em;
`;

export const TituloDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Exit = styled.button`
  height: 2em;
  width: 2em;
  background-color: #393e4b;
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

export const Titulo = styled.input`
  padding: 1.5em 2em;
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
  z-index: 100;
  background-color: rgba(25, 28, 36, 0.5);
`;

export const Compartilhamento = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5em;
`;

export const Prioridade = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5em;
`;

export const SwitchButton = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

export const Slider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0a090e;
  border-radius: 34px;
  cursor: pointer;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
  display: none;
  &:checked + ${Slider} {
    background-color: #43db6d;
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;
