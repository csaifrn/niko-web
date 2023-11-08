import styled from 'styled-components';

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
  font-size: 12px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  max-width: 500px;
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #393e4b url('Select.svg') 90% 50% no-repeat;
    padding: 0 3em 0 1em;
  }
`;

export const Exit = styled.button`
  height: 2em;
  width: 2em;
  background-color: #393e4b;
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

const ModalContent = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChooseLote = styled.div`
  width: 100%;
  max-height: 50vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: auto;
  scroll-behavior: auto;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 8px;
  }
  webkit-scrollbar-track {
    background: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5c6170;
    border-radius: 6px;
    border: 1px solid #5c6170;
  }
`;

const Lote = styled.div`
  padding: 1em 1em;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  align-items: center;
  justify-content: space-between;

  div {
    width: 50%;
    display: flex;
    gap: 1em;
    align-items: center;
    select {
      width: 10em;
      height: 44px;
    }
  }
  .error {
    border: 1px solid red;
  }
`;

const AtribuirButton = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: #43db6d;
  border: none;
  color: #191c24;
  font-family: 'Rubik';
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['green/600']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['green/600']};
    transform: translateY(-5%) translateX(2%);
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(25, 28, 36, 0.5);
`;

export { ModalArea, ModalContent, NameClose, ChooseLote, Lote, AtribuirButton, ModalBackdrop };
