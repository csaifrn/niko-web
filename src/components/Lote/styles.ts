import styled from 'styled-components';
const Lote = styled.div`
  font-family: 'Rubik';
  padding: 0.8em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 5px;
  color: white;
  min-height: 80px;
  width: 100%;
  height: 100%;
  min-width: 230px;
  filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.25));
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/400']};
    transform: translateY(-5%) translateX(2%);
  }
`;

const LoteEdit = styled.div`
  font-family: 'Rubik';
  padding: 0.8em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 5px;
  color: white;
  max-width: 400px;
  min-width: 230px;
  min-height: 200px;
  filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.25));
`;

const LoteArea = styled.div`
  display: flex;
  gap: 1em;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const LoteDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: space-between;
`;

const LoteNumAvisos = styled.div`
  display: flex;
  gap: 2em;
  justify-content: space-between;
  align-items: center;
  align-left {
    justify-self: left;
  }
`;

export const PendPrioridade = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Prioridade = styled.div`
  height: 24px;
  background-color: ${({ theme }) => theme.colors['red/700']};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    margin-bottom: 0;
    padding: 0 0.5em;
  }
`;

const Envolvido = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Categoria = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

export const Categories = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/450']};
  box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;

  width: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 8px;
  color: white;
  border-radius: 3px;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  display: none;
  font-family: 'Rubik';

  p:last-child {
    border: none !important;
  }
`;

export const ToolText = styled.p`
  color: white;
  padding: 5px;
  display: block;
  border-bottom: 1px ${({ theme }) => theme.colors['gray/400']} solid;
`;

const CategoriaTextDiv = styled.div`
  position: relative;
  height: 24px;
  background-color: ${({ theme }) => theme.colors['gray/700']};
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: 'white';
    margin-bottom: '0';
  }
  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;

const fotoEnv = styled.img`
  width: 32px;
  height: 32px;
  margin-left: -10px;
  border-radius: 100%;
`;

const Btn = styled.button`
  padding: 0.5em;
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.colors['green/400']};
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  :hover {
  }
  p {
    font-family: 'Rubik';
    color: ${({ theme }) => theme.colors['gray/700']};
  }
`;

export const Icone = styled.img``;

export const AtribuirAlguem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors['gray/900']};
  border: none;
  border-radius: 5px;
`;
export const AtribuirButton = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  font-family: 'Rubik';
`;

export { Lote, LoteArea, LoteNumAvisos, Prioridade, Envolvido, Categoria, CategoriaTextDiv, fotoEnv, LoteEdit, Btn };
