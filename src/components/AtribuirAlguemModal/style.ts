import Select from 'react-select';
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

export const CustomSelect = styled(Select)`
  .react-select__multi-value {
    background-color: ${({ theme }) => theme.colors['gray/500']} !important;
  }

  .react-select__multi-value__label {
    color: white;
  }

  .react-select__control {
    border: none;
    background-color: ${({ theme }) => theme.colors['gray/700']} !important; /* Cor de fundo do controle */
    color: ${({ theme }) => theme.colors.white} !important;
    min-height: 44px;
  }

  .react-select__placeholder {
    color: ${({ theme }) => theme.colors.white / 10} !important;
  }

  .react-select__single-value {
    color: ${({ theme }) => theme.colors['gray/200']};
  }

  .react-select__menu {
    background-color: ${({ theme }) => theme.colors['gray/700']} !important;
  }

  .react-select__option {
    background-color: ${({ theme }) => theme.colors['gray/700']};
    color: ${({ theme }) => theme.colors.white}; /* Cor do texto das opções */
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors['gray/500']}; /* Cor de fundo da opção selecionada */
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.colors['gray/500']}; /* Cor de fundo da opção selecionada */
  }

  .react-select__indicator-separator {
    background-color: ${({ theme }) => theme.colors['gray/500']}; /* Cor do separador entre indicadores */
  }

  .react-select__value-container .react-select__input {
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;

const ModalContent = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const ButtonGreen = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors['gray/900']};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0px 16px 0px;
  width: 150px;
  font-family: Rubik;
  background-color: ${({ theme }) => theme.colors['green/400']};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['green/600']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['green/600']};
    transform: translateY(-5%) translateX(2%);
  }
  @media screen and (max-width: 767px){
    width: 100%;
  }
`;

const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
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

const Fechar = styled.button``;

const ChooseUser = styled.div`
  width: 100%;
  height: 30vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: auto;
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    width: 0.6em;
    height: 1em;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['gray/700']};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors['gray/700']};
    border-radius: 20px;
  }
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
  background-color: ${({ theme }) => theme.colors['green/500']};
  border: none;
  color: ${({ theme }) => theme.colors['gray/900']};
  font-family: 'Rubik';
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['green/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['green/600']};
    transform: translateY(-5%) translateX(2%);
  }
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

export { ModalArea, ModalContent, NameClose, Fechar, ChooseUser, User, NameFotoUser, AtribuirButton, ModalBackdrop };
