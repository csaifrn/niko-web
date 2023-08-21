import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 6.5em 2em 2em 2em;
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

export const ContainerData = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
`;

export const ContainerFilterNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: 100%;
  @media (min-width: 520px) {
    display: grid;
    gap: 1.5em;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContainerDataFase = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 0.5rem;

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
  font-size: 12px;
  font: bold;
`;
export const NumberRed = styled.span`
  color: ${({ theme }) => theme.colors['red/400']};
  font-size: 12px;
  font: bold;
`;

export const NumberTextData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
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
  gap: 1em;
`;

export const ContainerImg = styled.img``;

export const DataFase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DataFaseDois = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
`;

export const QtdLotes = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;

export const DataFaseTxt = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
`;

export const NumberTxt = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
`;

export const DataFaseTxtCenter = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Rubik;
  font-style: normal;
  text-align: center;
  font-weight: 500;

  @media (max-width: 370px) {
    word-break: break-all;
  }
`;
