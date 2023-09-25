import styled from 'styled-components';
import media from 'styled-media-query';

export const areaClick = styled.div`
  color: white;
  padding: 2em;
  transition: transform 0.9s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 8em 0em 8em 0em;
  font-family: 'Rubik', Helvetica, sans-serif;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &::-webkit-scrollbar {
    width: 0.8em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background: #191c24;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2a2e38;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 0em;
  }
`;

export const Texto = styled.p`
  color: #191c24;
`;

export const Teste = styled.h1`
  color: white;
`;

export const Icons = styled.img``;

export const EnvolvAtual = styled.img``;

export const TituloLote = styled.h1``;

export const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: '5px 5px';
  border-radius: '5px';
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
`;

export const LoteInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LoteEditConfig = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: -0.5em;
`;

export const EditConfig = styled.div`
  display: flex;
  gap: 8px;
`;

export const Edit = styled.a`
  height: 2.25em;
  width: 2.25em;
  background-color: #393e4b;
  border-radius: 3px;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Config = styled.button`
  height: 2em;
  width: 2em;
  background-color: #393e4b;
  border-radius: 3px;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
`;

export const DetalhesLote = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const Protocolo = styled.div`
  height: 2em;
  display: flex;
  align-items: center;
  background-color: #393e4b;
  border-radius: 3px;
`;

export const Estante = styled.div`
  height: 2em;
  width: 3.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #393e4b;
  border-radius: 3px;
`;

export const ArquivFisicos = styled.div`
  background-color: #393e4b;
  height: 2em;
  width: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 3px;
`;

export const ArquivDigitais = styled.div`
  background-color: #393e4b;
  height: 2em;
  width: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 3px;
`;

export const CategoriaPrioridade = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

export const Prioridade = styled.div`
  width: 72px;
  height: 24px;
  background-color: #f32d2d;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const Categoria = styled.div`
  padding: 5px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #393e4b;
  border-radius: 3px;
`;

export const Tipologias = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

export const Tipologia = styled.div`
  padding: 5px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #626a7d;
  border-radius: 3px;
`;

export const TextDiv = styled.div`
  height: 2em;
  display: flex;
  margin-left: 0em;
  align-items: center;
`;

export const Text = styled.p`
  padding: '0 0.5em';
  align-content: left;
`;

export const FaseEnvolvAtual = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
`;

export const Envolvidos = styled.div`
  display: flex;
  gap: 0px;
`;

export const PendObservacaoBotoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  ${media.greaterThan('large')`
    display: grid;
  `}
`;

export const PendObservacao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  ${media.greaterThan('large')`
    display: grid;
    justify-content: space-between;
  `}
`;
export const PendenciaTitulo = styled.p`
  font-size: 12px;
  ${media.greaterThan('large')`
    font-size: 16px;
  `}
`;

export const ObservacaoTitulo = styled.p`
  font-size: 12px;
  ${media.greaterThan('large')`
    font-size: 16px;
  `}
`;

export const Pendencias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #393e4b;
  border-radius: 5px;
  order: 0;
  flex-grow: 0;
  padding: 16px;
`;

export const Observações = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #393e4b;
  border-radius: 5px;
  order: 0;
  flex-grow: 0;
  padding: 16px;
`;

export const PendDivBlack = styled.div`
  background-color: #191c24;
  border-radius: 5px;
  gap: 10px;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const PendenciaTextIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BotaoResolverPend = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #fcde42;
  color: #191c24;
  padding: 1.5em;
  width: 100%;
  border: none;
  font-family: 'Rubik';
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow/300']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['yellow/200']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const ObsDivBlack = styled.div`
  background-color: #191c24;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  padding: 15px;
  width: calc(100%-2em);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  order: 1;
  flex-grow: 0;
`;

export const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${media.greaterThan('large')`
    justify-content: space-between;
  `}
`;

export const Botao = styled.button`
  background-color: #393e4b;
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0em 15px;
  height: 44px;
  width: calc(100%-6em);
  border-radius: 5px;
  border: none;
  font-family: 'Rubik';
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/400']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const BotaoDeletarLote = styled.button`
  background-color: #F32D2D;
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0em 15px;
  height: 44px;
  width: calc(100%-6em);
  border-radius: 5px;
  border: none;
  font-family: 'Rubik';
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['red/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['red/400']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const BotaoMudarFase = styled.button`
  display: flex;
  border: none;
  font-family: 'Rubik';
  color: #ffffff;
  background-color: #393e4b;
  border-radius: 5px;
`;

export const VoltarAvancar = styled.button`
  background-color: #393e4b;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0em 15px;
  height: 44px;
  width: calc(50%);
  border-radius: 5px 0px 0px 5px;
  border: none;
  cursor: pointer;
  font-family: 'Rubik';
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/400']};
    transform: translateY(-5%) translateX(2%);
  }
  
`;

export const EscolherFase = styled.select`
  background-color: #393e4b;
  width: calc(50%);
  display: flex;
  padding: 0em 2em;
  height: 44px;
  border: none;
  border-radius: 0px 5px 5px 0px;
  border-left: 1px solid #888c99;
  color: white;
  font-family: 'Rubik';
`;

export const OptionFases = styled.option`
  background-color: #393e4b;
  width: calc(50%);
  display: flex;
  padding: 2em;
  :hover {
    background-color: red;
  }
`;

export const DetalFase = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetalhamentoTitulo = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const DetalhamentoGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  ${media.greaterThan('large')`
    grid-template-columns: 2fr 2fr 2fr;
  `}
`;

export const NomeDaFase = styled.h2``;

export const TodasAsPendencias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${media.greaterThan('large')`
    height: 20vh;
    overflow-y: scroll;
    scroll-behavior: auto;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 0.3em;
      height: 0.5em;
    }

    &::-webkit-scrollbar-track {
      background: #191c24;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #2a2e38;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      margin: 0em 2em;
    }
  `}
`;

export const TodasAsObservacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  ${media.greaterThan('large')`
    height: 20vh;
    overflow-y: scroll;
    scroll-behavior: auto;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 0.3em;
      height: 0.5em;
    }

    &::-webkit-scrollbar-track {
      background: #191c24;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #2a2e38;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      margin: 0em 2em;
    }
  `}
`;

export const Fase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: calc(100%-6em);
  background: #393e4b;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const FaseIconDiv = styled.div`
  height: 2em;
  margin-top: 1em;
  display: flex;
  align-items: center;
  gap: 8px;
  h2 {
    color: 'white';
    margin-bottom: '0';
  }
`;

export const TimeBeginDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-style: normal;
  line-height: 14px;
  font-weight: 400;
`;

export const TimeFinishDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-style: normal;
  line-height: 14px;
  font-weight: 400;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-style: normal;
  line-height: 14px;
  font-weight: 400;
`;

export const EnvolvidosDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
`;
