import styled from 'styled-components';

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
    background: ${({ theme }) => theme.colors['gray/700']} url('/Select.svg') 90% 50% no-repeat;
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
  flex-direction: column;
`;

export const FiltrarTitulo = styled.h2``;

export const EscolherDatas = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const DataInicial = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DataFinal = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DataText = styled.h3``;

export const BotaoFiltrar = styled.button`
  border-radius: 3px;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors['orange/400']};

  border: none;
  padding: 8px;
  width: 4em;
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors['orange/500']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['orange/500']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const BotaoFiltrarDesativado = styled.button`
  color: ${({ theme }) => theme.colors['gray/200']};
  background-color: #734625;
  border-radius: 3px;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors['gray/100']};
  border: none;
  width: 4em;
  padding: 8px;
`;

export const PainelTitulo = styled.h1`
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors.white};
`;

export const ContainerData = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  align-self: stretch;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors.white};
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

export const DivRemessasRecepcao = styled.div`
  width: 100%;
  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }
`;

export const ContainerDataFase = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 5em;
  width: 100%;
  @media (min-width: 767px) {
    grid-template-columns: 1fr 4fr;
  }
`;

export const ContainerDataFaseRecepcao = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
  width: 100%;
  @media (min-width: 767px) {
    grid-template-columns: 1fr 4fr;
  }
`;

export const DivIconeFase = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  height: 100%;
  align-items: center;
  width: 100%;
  border-radius: 5px 0px 0px 5px;
`;

export const NumberOrangeTitle = styled.span`
  color: ${({ theme }) => theme.colors['orange/400']};
  font-weight: 500;
  font-size: 20px;
`;

export const NumberOrange = styled.span`
  color: ${({ theme }) => theme.colors['orange/400']};
  font-size: 12px;
  font: bold;
`;
export const NumberGreen = styled.span`
  color: ${({ theme }) => theme.colors['green/400']};
  font-size: 18px;
  font-weight: 500;
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
  }
`;

export const NumberTextDataUnic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 0.5em;

  @media (min-width: 520px) {
    flex-direction: row;
    align-items: center;
    height: 60px;
  }
`;

export const NumberName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NumberNameArquivamento = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 19px;
  margin-bottom: 19px;
`;

export const ContainerImg = styled.img`
  &:hover {
    filter: brightness(0.9);
  }
`;

export const CardFaseColorful = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 0px 0px 5px;
  width: 100%;
  height: 100%;
  &:hover {
    filter: brightness(0.8);
  }
  transition: all 500ms;
  cursor: pointer;
`;

export const CardFaseBlack = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 0px 5px 5px 0px;
  height: 100%;
  width: 100%;
  padding: 8px 8px 8px 16px;
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
  width: 100%;
  @media (min-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    height: 100%;
  }
`;

export const PainelPorFaseLotes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  @media (min-width: 767px) {
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
  font-weight: 500;
  font-size: 20px;

  @media (max-width: 370px) {
    word-break: break-all;
  }
`;
