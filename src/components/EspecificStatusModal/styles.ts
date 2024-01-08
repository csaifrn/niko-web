import Select from 'react-select';
import styled from 'styled-components';

export const Texto = styled.p`
  color: white;
`;

export const EscolherFaseSelect = styled(Select)`
  margin-top: 1em;
  .react-select__control {
    cursor: pointer;
    border: none;
    border-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: ${({ theme }) => theme.colors['gray/500']} !important; /* Cor de fundo do controle */
    color: ${({ theme }) => theme.colors.white} !important;
    min-height: 44px;
  }

  .react-select__placeholder {
    color: #ffffff;
  }

  .react-select__single-value {
    color: ${({ theme }) => theme.colors.white};
  }

  .react-select__menu {
    background-color: ${({ theme }) => theme.colors['gray/500']} !important;
  }

  .react-select__option {
    cursor: pointer;
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
`;

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
  color: ${({ theme }) => theme.colors['gray/900']};
  font-family: 'Rubik';
`;

export const InputCheck = styled.input`
  all: unset;
  border: 1px solid ${({ theme }) => theme.colors.white};
  width: 18px;
  height: 18px;
  display: inline-block;
  border-radius: 4px;
  transition: all 0.3s;

  &:checked {
    background-color: ${({ theme }) => theme.colors['green/400']};
    width: 18px;
    height: 18px;
  }
`;

export const LabelCheck = styled.label`
  display: flex;
`;

export const CheckContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 1em;
  cursor: pointer;
  span {
    position: relative;
    background-color: ${({ theme }) => theme.colors['gray/500']};
    width: 20px;
    height: 20px;
    border-radius: 4px;
  }
`;

const ModalContent = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
`;

export const Titulo = styled.h2`
  color: ${({ theme }) => theme.colors['white']};
`;

export const PendDivBlack = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border-radius: 5px;
  gap: 10px;
  padding: 10px;
  width: calc(100%-2em);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PendenciaTextIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ArquivosInput = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  width: 60px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
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
`;

export const AlertIcon = styled.img``;

export const LabelPendencia = styled.label``;

export const SelectPendencia = styled.input`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2px 19px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: red;
`;

export const SpanPendencia = styled.span``;

const Recused = styled.button`
  height: 44px;
  border-radius: 5px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors['gray/700']};
  font-family: 'Rubik';
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/900']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/900']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const RecusedAvancar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const IconeAvancar = styled.img``;

const Avancar = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Rubik';
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  gap: 16px;
  cursor: pointer;
`;

export const CatalogacaoArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const ButtonNoCategory = styled.div`
  padding: 3px 5px;
  cursor: pointer;
  align-self: center;
  &:hover {
    filter: brightness(0.9);
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(25, 28, 36, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PegarLoteButton = styled.button`
  cursor: pointer;
  height: 44px;
  display: flex;
  gap: 0.5em;
  width: 100%;
  padding: 1em;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/900']};
  border: none;
  color: ${({ theme }) => theme.colors['white']};
  font-family: 'Rubik';
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/700']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/700']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const ExcluirLoteButton = styled.button`
  cursor: pointer;
  height: 44px;
  display: flex;
  gap: 0.5em;
  width: 100%;
  padding: 1em;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['red/700']};
  border: none;
  color: ${({ theme }) => theme.colors['white']};
  font-family: 'Rubik';
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.9);
  }
`;

export const ConcluirLoteButton = styled.button`
  cursor: pointer;
  height: 44px;
  display: flex;
  justify-content: center;
  gap: 0.5em;
  width: 100%;
  padding: 1em;
  align-items: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['green/500']};
  border: none;
  color: ${({ theme }) => theme.colors['gray/900']};
  font-family: 'Rubik';
  &:hover {
    background-color: ${({ theme }) => theme.colors['green/600']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['green/600']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export { ModalArea, ModalContent, NameClose, Recused, Avancar, ModalBackdrop };
