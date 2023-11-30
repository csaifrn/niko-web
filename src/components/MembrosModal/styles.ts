import Select from 'react-select';
import styled from 'styled-components';
import media from 'styled-media-query';

const ModalArea = styled.div`
  width: 90vw;
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
  font-size: 12px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 500px;
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: ${({ theme }) => theme.colors['gray/500']} url('/Select.svg') 90% 50% no-repeat;
    padding: 0 3em 0 1em;
  }
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

export const EmailTodo = styled.div`
  display: flex;
  padding: 1em 0em;
  width: 100%;
  justify-content: space-between;
  ${media.greaterThan('large')`
  `}
`;

export const EmailInputSelect = styled.div`
  display: flex;
  border-radius: 10px;
  height: 44px;
  width: 80%;
  ${media.greaterThan('large')`
    width: 87%;
  `}
`;

export const EscolherFuncao = styled(Select)`
  width: 180px;
  border-left: 1px solid #888c99;
  .react-select__control {
    border: none;
    border-radius: 0px 5px 5px 0px;
    background-color: ${({ theme }) => theme.colors['gray/700']} !important; /* Cor de fundo do controle */
    color: ${({ theme }) => theme.colors.white} !important;
    min-height: 44px;
  }

  .react-select__placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  .react-select__single-value {
    color: ${({ theme }) => theme.colors.white};
  }

  .react-select__menu {
    background-color: ${({ theme }) => theme.colors['gray/500']} !important;
  }

  .react-select__option {
    background-color: ${({ theme }) => theme.colors['gray/500']};
    color: ${({ theme }) => theme.colors.white}; /* Cor do texto das opções */
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors['gray/500']}; /* Cor de fundo da opção selecionada */
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.colors['gray/700']}; /* Cor de fundo da opção selecionada */
  }

  .react-select__indicator-separator {
    background-color: ${({ theme }) => theme.colors['gray/200']}; /* Cor do separador entre indicadores */
  }

  .react-select__value-container .react-select__input {
    color: ${({ theme }) => theme.colors.white} !important;
  }
  ${media.greaterThan('large')`
    width: 220px;
  `}
`;

export const EscolherFuncaoBlack = styled(Select)`
  width: 180px;
  .react-select__control {
    //z-index: 98;
    border: none;
    border-radius: 0px 5px 5px 0px;
    background-color: ${({ theme }) => theme.colors['gray/900']} !important; /* Cor de fundo do controle */
    color: ${({ theme }) => theme.colors.white} !important;
    min-height: 44px;
  }

  .react-select__placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  .react-select__single-value {
    color: ${({ theme }) => theme.colors.white};
  }

  .react-select__menu {
    background-color: ${({ theme }) => theme.colors['gray/500']} !important;
  }

  .react-select__option {
    background-color: ${({ theme }) => theme.colors['gray/500']};
    color: ${({ theme }) => theme.colors.white}; /* Cor do texto das opções */
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors['gray/500']}; /* Cor de fundo da opção selecionada */
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.colors['gray/700']}; /* Cor de fundo da opção selecionada */
  }

  .react-select__indicator-separator {
    background-color: ${({ theme }) => theme.colors['gray/200']}; /* Cor do separador entre indicadores */
  }

  .react-select__value-container .react-select__input {
    color: ${({ theme }) => theme.colors.white} !important;
  }
  ${media.greaterThan('large')`
    width: 220px;
  `}
`;

const ChooseLote = styled.div`
  width: 100%;
  max-height: 30vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: auto;
  scroll-behavior: auto;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 8px;
  }
  webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.white};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors['gray/400']} !important;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors['gray/400']};
  }
`;

export const User = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/900']};
  padding: 1em 1em;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120%;
  ${media.greaterThan('large')`
    width: 100%;
  `}/* div {
    width: 50%;
    display: flex;
    gap: 1em;
    align-items: center;
    select {
      width: 10em;
      height: 44px;
    }
  }
  .error {
    border: 1px solid red;
  } */
`;

const AtribuirButton = styled.button`
  z-index: 0;
  height: 44px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['green/400']};
  border: none;
  color: ${({ theme }) => theme.colors['gray/900']};
  font-family: 'Rubik';
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['green/600']};
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
  background-color: rgba(25, 28, 36, 0.5);
`;

export const EnviarEmail = styled.button`
  font-size: 10px;
  border: none;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors['orange/400']};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['orange/500']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['orange/500']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export { ModalArea, ModalContent, NameClose, ChooseLote, AtribuirButton, ModalBackdrop };
