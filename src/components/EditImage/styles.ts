import styled from 'styled-components';

const ModalArea = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  align-items: center;
  color: white;
  font-family: 'Rubik';
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ModalContent = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 1em;
`;

export const ButtonCheck = styled.button`
  margin-top: 1em;
  height: 44px;
  width: 44px;
  color: white;
  background-color: ${({ theme }) => theme.colors['green/400']};
  border: none;
  border-radius: 5px;
  font-family: 'Rubik';
  transition: background-color 500ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors['green/500']};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors['green/600']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const ButtonX = styled.button`
  margin-top: 1em;
  height: 44px;
  width: 44px;
  color: white;
  background-color: ${({ theme }) => theme.colors['red/500']};
  border: none;
  border-radius: 5px;
  font-family: 'Rubik';
  transition: background-color 500ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors['red/500']};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors['red/500']};
    transform: translateY(-5%) translateX(2%);
  }
`;

const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChooseLote = styled.div`
  width: 100%;
  height: 40vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: auto;
  scroll-behavior: auto;
`;

const Lote = styled.div`
  padding: 1.5em 2em;
  border-radius: 5px;
  cursor: pointer;
`;

const Recused = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  border: none;
  color: white;
  font-family: 'Rubik';
`;

const Delete = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: #f32d2d;
  border: none;
  color: white;
  font-family: 'Rubik';
`;

const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(25, 28, 36, 0.5);
`;

export { ModalArea, ModalContent, NameClose, ChooseLote, Lote, Recused, Delete, ModalBackdrop };
