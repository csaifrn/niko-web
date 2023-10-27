import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(25, 28, 36, 0.7);
  transition: transform 1s;
`;

export const Wrapper = styled.div`
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
  
`;

export const ContainerData = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const ContainerNumber = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Fase = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
  align-items: center;
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
  padding: 0.5rem;
  border-radius: 5px;
  width: 100%;
`;

export const ContainerDataDependencias = styled.form`
  color: ${({ theme }) => theme.colors.white};
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

export const ContainerImg = styled.img`
  object-fit: cover;
`;

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
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const DataOkX = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;
  justify-content: end;
  align-items: center;
  input[type='radio'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const DataOk = styled.input`
  display: flex;
  width: 100%;
  gap: 1em;
  justify-content: end;
  align-items: center;
`;

export const TextAlerta = styled.textarea`
  resize: none;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors['gray/700']};
  display: flex;
  border: none;
  width: 100%;
  height: 100px;
  gap: 16px;
  padding: 1em;
  border-radius: 5px;
`;

export const TextComment = styled.div`
  resize: none;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors['gray/700']};
  display: flex;
  align-items: flex-start;
  border: none;
  width: 100%;
  height: 80px;
  overflow-y: auto;
  gap: 1em;
  padding: 1em;
  border-radius: 5px;
`;

export const PendIconText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

export const Exit = styled.button`
  height: 2em;
  width: 2em;
  background-color: #191c24;
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
  color: ${({ theme }) => theme.colors['gray/700']};
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
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(110%);
    transform: translateY(-5%) translateX(2%);
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors['red/300']};
  font-size: 10px;
`;

export const DataFaseTxt = styled.p`
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
  word-break: normal;
  font-weight: 500;
`;

export const TituloH2 = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Rubik;
  font-size: 22px;
`;

export const LabelRadio = styled.label``;

export const InputRadio = styled.input``;
