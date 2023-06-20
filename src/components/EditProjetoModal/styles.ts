import styled from 'styled-components';

const ModalArea = styled.div`
  position: fixed;
  padding: 2em;
  width: 90vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  background-color: #393e4b;
  align-items: center;
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
  color: white;
  font-family: 'Rubik';
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
  z-index: 1040;
  background-color: rgba(25, 28, 36, 0.5);
`;

export { ModalArea, ModalContent, NameClose, ChooseLote, Lote, AtribuirButton, ModalBackdrop };
