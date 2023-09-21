import styled from 'styled-components';

export const Texto = styled.p``;

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
  color: white;
  font-family: 'Rubik';
`;

export const InputCheck = styled.input`
  all: unset;
  border: 1px solid #fff;
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

export const Titulo = styled.h2``;

export const PendDivBlack = styled.div`
  background-color: #191c24;
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
  border: 1px solid #fff;
  background: red;
`;

export const SpanPendencia = styled.span``;

const Recused = styled.button`
  height: 44px;
  border-radius: 5px;
  padding: 0 16px;
  background-color: #fcde42;
  border: none;
  color: #191c24;
  font-family: 'Rubik';
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecusedVoltar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const IconeVoltar = styled.img``;

export const Voltar = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: #191c24;
  border: none;
  color: #ffffff;
  font-family: 'Rubik';
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  gap: 16px;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1040;
  background-color: rgba(25, 28, 36, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { ModalArea, ModalContent, NameClose, Recused };
