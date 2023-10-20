import styled from 'styled-components';
import media from 'styled-media-query';

export const EditarAtivArea = styled.div`
  font-family: 'Rubik';
  margin: 2em;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  gap: 2em;
  margin-bottom: 10em;
  margin-top: 10em;
  max-width: 1140px;
  width: 100%;
  ${media.greaterThan('large')`
  `}
`;

export const Titulo = styled.h1`
  color: #ffffff;
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

export const Titulo2 = styled.h2`
  color: #ffffff;
  font-weight: 400;
  ${media.greaterThan('large')`
  `}
`;

export const TituloBotaoAdd = styled.div`
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  gap: 8;
  display: inline-flex;
  ${media.greaterThan('large')`
    justify-content: flex-start;
    gap: 16px;
  `}
`;

export const AtribuirLoteButton = styled.button`
  padding: 8px;
  background-color: #43db6d;
  border-radius: 5px;
  gap: 10;
  display: flex;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['green/600']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['green/600']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const BotaoAdd = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/300']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/300']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const Tarefas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  ${media.greaterThan('large')`
  `}
`;

export const TarefasCardsArea = styled.div`
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  display: inline-flex;
  flex-wrap: wrap;
  ${media.greaterThan('large')`
    display: flex;
    flex-wrap: none;
  `}
`;

export const CategTipol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  ${media.greaterThan('large')`
  `}
`;

export const Usuarios = styled.div`
  align-self: stretch;
  flex-direction: column;
  gap: 16px;
  display: flex;
  ${media.greaterThan('large')`
  `}
`;

export const IconeTituloFase = styled.div`
  display: flex;
  color: white;
  font-family: 'Rubik';
  gap: 16px;
  align-items: center;
  ${media.greaterThan('large')`
  `}
`;

export const UsuariosPorFase = styled.div`
  width: 100%;
  flex-direction: column;
  gap: 32px;
  display: flex;
  ${media.greaterThan('large')`
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    flex-direction: row;
  `}
`;

export const UsuariosDeUmaFase = styled.div`
  flex-direction: column;
  display: flex;
  gap: 16px;
  width: 100%;
  ${media.greaterThan('large')`
  `}
`;

export const EspecificacoesAtiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${media.greaterThan('large')`
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
  `}
`;

export const Data = styled.div``;

export const EditAtivAtivado = styled.button`
  font-family: 'Rubik';
  font-weight: 500;
  align-self: stretch;
  height: 44px;
  padding: 10px;
  background: #43db6d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
  border: none;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['green/600']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['green/600']};
    transform: translateY(-5%) translateX(2%);
  }
  ${media.greaterThan('large')`
    width: fit-content;
    `}
`;

export const EditAtivDesativado = styled.button`
  font-family: 'Rubik';
  font-weight: 500;
  align-self: stretch;
  height: 44px;
  padding: 10px;
  background: #43db6d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
  border: none;
  opacity: 50%;
  width: 100%;
  ${media.greaterThan('large')`
    width: fit-content;
    `}
`;
