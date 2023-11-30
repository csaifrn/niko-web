import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: end;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(25, 28, 36, 0.7);
  transition: transform 1s;
`;

export const Wrapper = styled.div`
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 2em;
  gap: 2em;
  transform: scale(0);
  transform: translateY(100%);
  transition: transform 0.7s ease-in-out;
  color: white;
`;

export const ContainerData = styled.div`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
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
  overflow-x: auto;
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
  height: 150px;
  gap: 1em;
  padding: 1em;
  border-radius: 5px;
`;

export const TextComment = styled.div`
  resize: none;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors['gray/700']};
  display: flex;
  border: none;
  width: 100%;
  height: 80px;
  overflow-y: auto;
  gap: 1em;
  padding: 1em;
  border-radius: 5px;
`;

export const DataFaseDois = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
`;

export const Titulo = styled.h1`
  font-family: 'Rubik';
  font-size: 18px;
`;

export const QtdLotes = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
`;

export const Close = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors['white']};
  font-family: 'Rubik';
  display: flex;
  padding: 5px 8px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border-radius: 3px;
`;

export const Prioridade = styled.p`
  background-color: ${({ theme }) => theme.colors['red/500']};
  font-family: Rubik;
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5em 1em;
  border-radius: 5px;
`;

export const BlackButton = styled.button`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  font-family: Rubik;
  color: white;
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
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors['red/300']};
  font-size: 10px;
`;

export const Barra = styled.div`
  height: 8px;
  align-self: center;
  width: 50%;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border-radius: 8px;
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

export const LabelRadio = styled.label``;

export const InputRadio = styled.input``;

const Lote = styled.div`
  font-family: 'Rubik';
  position: relative;
  padding: 0.8em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 5px;
  color: white;
  filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.25));
`;

const LoteEdit = styled.div`
  font-family: 'Rubik';
  padding: 0.8em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 5px;
  color: white;
  max-width: 400px;
  min-width: 230px;
  filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.25));
`;

const LoteArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 0;
  font-family: 'Rubik';
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-left {
    justify-self: left;
  }
`;

const Envolvido = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Pa = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const PaTextDiv = styled.div`
  height: 24px;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: 'white';
    margin-bottom: '0';
  }
`;

const fotoEnv = styled.img`
  width: 32px;
  height: 32px;
  margin-left: -10px;
  border-radius: 100%;
`;

const Btn = styled.button`
  font-family: 'Rubik';
  cursor: pointer;
  padding: 0.5em;
  display: flex;
  align-items: center;
  gap: 0.5em;
  color: ${({ theme }) => theme.colors['gray/700']};
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.colors['green/400']};
  border-radius: 5px;
  border: none;
  :hover {
  }
  p {
    font-family: 'Rubik';
    color: ${({ theme }) => theme.colors['gray/700']};
  }
`;

export { Lote, LoteArea, Content, Envolvido, Pa, PaTextDiv, fotoEnv, LoteEdit, Btn };
