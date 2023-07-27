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

export const Filter = styled.select`
  font-family: 'Rubik';
  background-color: ${({ theme }) => theme.colors['gray/700']};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 1rem;
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
  align-items: center;
  width: 100%;
  gap: 1rem;
  border-radius: 5px;
`;

export const NumberOrange = styled.span`
  color: ${({ theme }) => theme.colors['orange/400']};
`;
export const NumberGreen = styled.span`
  color: ${({ theme }) => theme.colors['green/400']};
`;
export const NumberRed = styled.span`
  color: ${({ theme }) => theme.colors['red/400']};
`;

export const NumberTextData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
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

export const DataFaseTxt = styled.p`
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
  word-break: normal;
  font-weight: 500;
`;