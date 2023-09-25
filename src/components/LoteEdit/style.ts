import Select from 'react-select';
import styled from 'styled-components';

export const Titulo2 = styled.h2`
  font-weight: normal;
`;

export const CustomSelect = styled(Select)`
  .react-select__control {
    border: none;
    background-color: ${({ theme }) => theme.colors['gray/500']} !important; /* Cor de fundo do controle */
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
    background-color: ${({ theme }) => theme.colors['gray/500']} !important;
  }

  .react-select__option {
    background-color: ${({ theme }) => theme.colors['gray/500']};
    color: ${({ theme }) => theme.colors.white}; /* Cor do texto das opções */
  }

  .react-select__option {
    background-color: ${({ theme }) => theme.colors['gray/500']};
    color: ${({ theme }) => theme.colors.white}; /* Cor do texto das opções */
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors['gray/700']}; /* Cor de fundo da opção selecionada */
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.colors['gray/700']}; /* Cor de fundo da opção selecionada */
  }

  .react-select__indicator-separator {
    background-color: ${({ theme }) => theme.colors['gray/50']}; /* Cor do separador entre indicadores */
  }

  .react-select__value-container .react-select__input {
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;

export const ModalContent = styled.form`
  z-index: 100;
  padding: 2em;
  color: white;
  transition: transform 0.9s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 8em 0em 8em 0em;
  font-family: 'Rubik', Helvetica, sans-serif;
  h2 {
    font-weight: normal;
  }
`;

export const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Close = styled.div`
  display: flex;
  background-color: #393e4b;
  width: auto;
  border: none;
`;

export const ProtocoloDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Protocolo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
  border-radius: 3px;
  color: white;
  font-family: 'Rubik';
  background-color: #393e4b;
`;

export const Arquivos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ArquivosDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export const ArquivosFisicos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ArquivosDigitais = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ArquivosInput = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  width: 56px;
  background-color: #393e4b;
  color: white;
  font-family: 'Rubik', Helvetica, sans-serif;
  border: none;
  border-radius: 5px;
  min-width: 100px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    background: url('/carets.svg') no-repeat center center;
    width: 3em;
    border-left: 1px solid #bbb;
    opacity: 0.5; /* shows Spin Buttons per default (Chrome >= 39) */
    position: absolute;
    border-left: none;
    top: 0;
    right: 0;
    bottom: 0;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

export const NameInput = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  width: 56px;
  background-color: #393e4b;
  color: white;
  font-family: 'Rubik', Helvetica, sans-serif;
  border: none;
  border-radius: 5px;
  width: 100%;
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

export const CatTipol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FilterCatTipol = styled.div``;

export const ButtonCatTipol = styled.div``;

export const MostrarCategTipolEscolhida = styled.div`
  display: flex;
  gap: 8px;
`;

export const CategEscolhida = styled.div`
  background-color: #393e4b;
  padding: 5px;
  border-radius: 3px;
`;

export const TipolEscolhida = styled.div`
  background-color: #393e4b;
  padding: 5px;
  border-radius: 3px;
`;

export const Categoria = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1.5em 2em;
  border-radius: 5px;
  cursor: pointer;
`;

export const Tipologia = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1.5em 2em;
  border-radius: 5px;
  cursor: pointer;
`;

export const ChooseCatTipol = styled.div`
  width: 100%;
  height: 20vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  scroll-behavior: auto;
  padding: 0;
  margin: 0 0;
  overflow-y: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;
`;

export const SalvarEditButton = styled.button`
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