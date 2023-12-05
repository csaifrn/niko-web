import styled from 'styled-components';
import media from 'styled-media-query';
import Select from 'react-select';

const Main = styled.section`
  transition: 1s all;
  scroll-behavior: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Wrapper = styled.div`
  font-family: Rubik;
  padding: 2em;
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr;
  gap: 2em;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 6em;
  margin: 8em 0em 8em 0em;
  width: 100%;
  max-width: 570px;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 2em;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  flex-direction: column;
`;

export const BallStatus = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transition: 200ms all;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
`;

export const LabelForm = styled.label`
  display: flex;
  height: 150px;
  border: dashed 1px ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background: rgba(57, 62, 75, 0.5);
`;

export const InputText = styled.input`
  box-sizing: border-box;
  height: 44px;
  width: 100%;
  padding: 0 1em;
  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors['gray/400']};
  color: white;
  font-family: 'Rubik';
  ${media.greaterThan('large')`
  `}
`;

export const ButtonGray = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors['white']};
  border-radius: 5px;
  height: 44px;
  width: 100%;
  font-family: Rubik;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/600']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const ButtonGreen = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors['gray/700']};
  border-radius: 5px;
  height: 44px;
  width: 100%;
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
`;

export const ButtonEnviar = styled.button`
  font-size: 10px;
  border: none;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
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

export const ContentButtonGreen = styled.div`
  display: flex;
  justify-content: center;
  ${media.greaterThan('large')`
    
  `}
`;

export const AdressContainer = styled.div`
  display: grid;
  height: 44px;
  gap: 1em;
  grid-template-columns: 30fr 1fr;
`;

export const EscolherFuncao = styled(Select)`
  width: calc(60%);
  border-left: 1px solid ${({ theme }) => theme.colors['gray/150']};
  .react-select__control {
    border: none;
    border-radius: 0px 5px 5px 0px;
    background-color: ${({ theme }) => theme.colors['gray/400']} !important; /* Cor de fundo do controle */
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
`;

export { Main };
