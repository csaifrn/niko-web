import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 2em;
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #191c24 url('/Select.svg') 90% 50% no-repeat;
    padding: 0 3em 0 1em;
    width: 10em;
    height: 44px;
    border: none;
    border-radius: 4px;
  }
`;

export const FiltrarPorPeriodo = styled.div`
  display: flex; 
  gap: 16px; 
  flex-direction: column ;
`;

export const FiltrarTitulo = styled.h2`
`;

export const EscolherDatas = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 16px;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const DataInicial = styled.div`
  display: flex;
  gap: 8px; 
  align-items: center;
`;

export const DataInvalidaMessage = styled.p`
  color: ${({ theme }) => theme.colors['red/700']};
`;

export const DataFinal = styled.div`
  display: flex;
  gap: 8px; 
  align-items: center;
`;

export const DataText = styled.h3`
  
`;

export const BotaoFiltrar = styled.button`
  border-radius: 3px;
  font-family: 'Rubik';
  color: #ffffff;
  background-color: #F3802D;
  border: none;
  padding: 8px;
  cursor: pointer;
  width: 4em;
  &:hover {
    background-color: ${({ theme }) => theme.colors['orange/500']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['orange/500']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const BotaoFiltrarDesativado = styled.button`
  color: #4A4A4A;
  background-color: #734625;
  border-radius: 3px;
  font-family: 'Rubik';
  border: none;
  width: 4em;
  padding: 8px;
`;

export const PainelTitulo = styled.h1`
  font-family: 'Rubik';
  color: #ffffff;
`;


export const ContainerData = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  font-family: 'Rubik';
  color: #ffffff;
`;

export const ContainerFilterNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  /* @media (min-width: 520px) {
    justify-content: flex-start;
    gap: 16px;
  } */
`;

export const Filter = styled.input`
  border: none;
  border-radius: 5px;
  font-family: 'Rubik';
  background-color: ${({ theme }) => theme.colors['gray/700']};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 1rem;
  color-scheme: dark;
`;

export const Opiton = styled.option`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 1rem;
`;



export const ContainerDataFase = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 0.5rem;
  height: 100%;
  align-items: center;
  width: 100%;
  gap: 1rem;
  border-radius: 5px;
`;
export const NumberOrangeTitle = styled.span`
  color: ${({ theme }) => theme.colors['orange/400']};
  font-size: 18px;
  font: bold;
`;

export const NumberOrange = styled.span`
  color: ${({ theme }) => theme.colors['orange/400']};
  font-size: 12px;
  font: bold;
`;
export const NumberGreen = styled.span`
  color: ${({ theme }) => theme.colors['green/400']};
  font-size: 18px;
  font: bold;
`;
export const NumberRed = styled.span`
  color: ${({ theme }) => theme.colors['red/400']};
  font-size: 18px;
  font: bold;
`;

export const NumberTextData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const NumberTextDataUnic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5em;

  @media (min-width: 520px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const NumberName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ContainerImg = styled.img`
  &:hover {
    filter: brightness(0.9);
  }
`;

export const DataFase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const DataFaseDois = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-column: span 2;
  gap: 16px;
  @media (min-width: 767px) {
    display: flex;
    width: 50%;
    flex-direction: column;
  }
`;

export const FasesDoMeio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
  }
`;

export const QtdLotes = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;

export const DataFaseTxt = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
`;

export const NumberTxt = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
`;

export const DataFaseTxtCenter = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Rubik';
  font-style: normal;
  text-align: center;
  font-weight: 500;

  @media (max-width: 370px) {
    word-break: break-all;
  }
`;
