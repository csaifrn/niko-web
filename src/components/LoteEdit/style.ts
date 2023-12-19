import Select from 'react-select';
import styled from 'styled-components';
import media from 'styled-media-query';

export const Titulo2 = styled.p`
  font-weight: normal;
  font-family: 'Rubik';
  font-size: 18px;
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

export const EditLoteArea = styled.div`
  color: white;
  transition: transform 0.9s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 8em 2em 8em 2em;
  font-family: 'Rubik', Helvetica, sans-serif;
  width: 100%;
  max-width: 1140px;
  h2 {
    font-weight: normal;
  }
  @media screen and (min-width: 1140px) {
    margin: 10em 0em 8em 0em;
  }
`;

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1140px) {
  }
`;

export const CloseDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: '5px 5px';
  border-radius: '5px';
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

export const SearchDiv = styled.div`
  width: 100%;
`;

export const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Close = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors['gray/900']};
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
  background-color: ${({ theme }) => theme.colors['gray/900']};
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
  width: 60px;
  background-color: ${({ theme }) => theme.colors['gray/900']};
  color: white;
  font-family: 'Rubik', Helvetica, sans-serif;
  border: none;
  border-radius: 5px;
  min-width: 100px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    background: url('/carets.svg') no-repeat center center;
    width: 3em;
    border-left: 1px solid ${({ theme }) => theme.colors['gray/50']};
    opacity: 0.5; /* shows Spin Buttons per default (Chrome >= 39) */
    position: absolute;
    border-left: none;
    top: 0;
    right: 0;
    bottom: 0;
    transition: all 0.5s;
    &:hover {
      opacity: 0.8;
    }
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
  background-color: ${({ theme }) => theme.colors['gray/500']};
  color: white;
  font-family: 'Rubik', Helvetica, sans-serif;
  border: none;
  border-radius: 5px;
  width: 100%;
  @media screen and (min-width: 767px) {
    width: 15em;
  }
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

export const ButtonCatTipol = styled.button`
  border: none;
  cursor: pointer;
`;

export const MostrarCategTipolEscolhida = styled.div`
  display: flex;
  gap: 8px;
`;

export const CategEscolhida = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/900']};
  padding: 5px;
  border-radius: 3px;
`;

export const TipolEscolhida = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/900']};
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

export const SalvarEditButton = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['green/400']};
  border: none;
  color: ${({ theme }) => theme.colors['gray/900']};
  font-family: 'Rubik';
  bottom: 0;
  left: 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['green/600']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['green/600']};
    transform: translateY(-5%) translateX(2%);
  }
  @media screen and (min-width: 767px) {
    width: 125px;
  }
`;

export const Switch = styled.input`
  width: 43.2px;
  height: 24px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;
