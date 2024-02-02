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

export const Exit = styled.button`
  height: 2em;
  width: 2em;
  background-color: transparent;
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

const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border: none;
  color: white;
  font-family: 'Rubik';
`;

const Delete = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['red/500']};
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
  z-index: 100;
  background-color: rgba(25, 28, 36, 0.7);
  transition: transform 1s;
`;

export const InputObservation = styled.textarea`
  font-size: 16px;
  border-radius: 4px;
  border: none;
  outline: none;
  min-height: 44px;
  overflow: hidden;
  resize: none;
  display: grid;
  font-family: 'Rubik';
  padding: 1em;
  background-color: ${({ theme }) => theme.colors['gray/700']}; /* ${({ theme }) => theme.colors['gray/700']}; */
  color: ${({ theme }) => theme.colors['gray/50']};
  font: inherit;

  :focus {
    outline: solid white 2px;
  }
`;

export const ButtonBlack = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors['white']};
  border-radius: 5px;
  height: 44px;
  width: 100%;
  font-family: Rubik;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/500S']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/600']};
    transform: translateY(-5%) translateX(2%);
  }
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
  background-color: ${({ theme }) => theme.colors['gray/900']};
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
    background-color: ${({ theme }) => theme.colors['green/400']};
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;

export { ModalArea, ModalContent, NameClose, ChooseLote, Lote, Recused, Delete, ModalBackdrop };
