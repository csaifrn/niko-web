import styled from 'styled-components';

export const ModalContent = styled.div`
  z-index: 9999990;
  padding: 2em;
  color:white;
  transition: transform 0.9s ease-in-out;
  display:flex;
  flex-direction: column;
  gap: 16px;
  margin: 0em 0em 8em 0em;
  font-family: 'Rubik', Helvetica, sans-serif;
  h2{
    font-weight: normal;
  }
`;

export const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Close = styled.div`
  display: flex;
  background-color: #393E4B;
  width: auto;
  border: none;
`;

export const ProtocoloDiv = styled.div`
  display:flex;
  flex-direction:column;
  gap: 16px;
  justify-content:flex-start;
  align-items:flex-start;
`;

export const Protocolo = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  padding: 5px;
  border-radius: 3px;
  color: white;
  font-family: 'Rubik';
  background-color: #393E4B;
`;

export const Arquivos = styled.div`
  display:flex;
  flex-direction:column;
  gap:16px;
`;

export const ArquivosDiv = styled.div`
  display:flex;
  gap:16px;
`;

export const ArquivosFisicos = styled.div`
  display:flex;
  flex-direction:column;
  gap: 8px;
`;

export const ArquivosDigitais = styled.div`
  display:flex;
  flex-direction:column;
  gap: 8px;
`;

export const ArquivosInput = styled.input`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  padding: 15px;
  width: 56px;
  background-color: #393E4B;
  color: white;
  font-family: 'Rubik', Helvetica, sans-serif;
  border: none;
  border-radius: 5px;
`;

export const LocalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Local = styled.input`
  padding: 1.5em 2em;
  border-radius: 5px;
  color: white;
  border: none;
  font-family: 'Rubik';
`;

export const Categorias = styled.div``;

export const Categoria = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1.5em 2em;
  border-radius: 5px;
  cursor: pointer;
`;

export const Tipologia = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 1.5em 2em;
  border-radius: 5px;
  cursor: pointer;
`;

export const ChooseCatTipol = styled.div`
  width: 100%;
  height: 20vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: auto;
  scroll-behavior: auto;
  padding: 0;
  margin: 1em 0;
  overflow-y: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;
`;

export const SalvarEditButton = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: #43db6d;
  border: none;
  color: white;
  font-family: 'Rubik';
  bottom: 0;
  left: 0;
`;

export const Switch = styled.input`
  width: 43.2px;
  height: 24px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;
