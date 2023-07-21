import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
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

export const ContainerNumber = styled.div`
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

export const DataAcao = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
  justify-content: center;
  align-items: center;
`;

export const TextAlerta = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  display: flex;
  width: 100%;
  height: 6.25rem;
  gap: 1em;
  padding: 1em;
  justify-content: center;
  border-radius: 5px;
`;

export const DataFaseDois = styled.div`
  display: grid;
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

export const Prioridade = styled.p`
  background-color: ${({ theme }) => theme.colors['red/500']};
  font-family: Rubik;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5em 1em;
  border-radius: 5px;
`;

export const YelloButton = styled.button`
  background-color: ${({ theme }) => theme.colors['yellow/300']};
  font-family: Rubik;
  color: ${({ theme }) => theme.colors['gray/900']};
  padding: 2em;
  width: 100%;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  transition: all 300ms;
  :hover {
    filter: brightness(110%);
  }
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

export const TituloH2 = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Rubik;
  font-size: 22px;
`;
