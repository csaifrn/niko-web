import styled from 'styled-components';
import media from 'styled-media-query';

export const Titulo2 = styled.p`
  font-weight: normal;
  font-family: 'Rubik';
  font-size: 18px;
`;

export const ModalContent = styled.div`
  z-index: 9999990;
  padding: 2em;
  color: white;
  transition: transform 0.9s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 8em 0em 8em 0em;
  font-family: 'Rubik', Helvetica, sans-serif;
  h2 {
    font-weight: normal;
  }
  ${media.greaterThan('large')`
    width: 500px;
  `}
`;

export const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: '5px 5px';
  border-radius: '5px';
`;

export const Exit = styled.button`
  height: 2em;
  width: 2em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

export const SearchDiv = styled.div`
  width: 100%;
`;

export const NameClose = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Close = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  width: auto;
  border: none;
`;

export const ProtocoloDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Protocolo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5px;
  border-radius: 3px;
  color: white;
  font-family: 'Rubik';
  background-color: ${({ theme }) => theme.colors['gray/500']};
`;

export const Arquivos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ArquivosDiv = styled.div`
  display: flex;
  gap: 16px;
`;

export const ArquivosFisicos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ArquivosDigitais = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ArquivosInput = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15px;
  width: 60px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
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

export const CatTipol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FilterCatTipol = styled.div``;

export const ButtonCatTipol = styled.button`
  border: none;
  cursor: pointer;
`;

export const MostrarCategTipolEscolhida = styled.div`
  display: flex;
  gap: 8px;
`;

export const CategEscolhida = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  padding: 5px;
  border-radius: 3px;
`;

export const TipolEscolhida = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  padding: 5px;
  border-radius: 3px;
`;

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
  height: 20vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  scroll-behavior: auto;
  padding: 0;
  margin: 0 0;
  overflow-y: scroll;
  scroll-behavior: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 0.8em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['gray/700']};
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a2e38;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 0em;
  }
  ${media.greaterThan('large')`
  `}
`;

export const SalvarEditButton = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: #43db6d;
  border: none;
  color: #0a090e;
  font-family: 'Rubik';
  bottom: 0;
  left: 0;
  cursor: pointer;
  ${media.greaterThan('large')`
    width: 110px;
  `}
`;

export const Switch = styled.input`
  width: 43.2px;
  height: 24px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;
