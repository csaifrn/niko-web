import styled from 'styled-components';

export const areaClick = styled.div`
  color: white;
  z-index: 9999990;
  padding: 2em;
  transition: transform 0.9s ease-in-out;
  display:flex;
  flex-direction: column;
  gap: 24px;
  margin: 0em 0em 8em 0em;
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
export const Icons = styled.img``;

export const TituloLote = styled.h1``;

export const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: '5px 5px';
  border-radius: '5px';
`;

export const Exit = styled.div`
  height: 2em;
  width: 2em;
  background-color: #393e4b;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoteInfos = styled.div`
  display:flex;
  flex-direction:column;
  gap: 16px;
`;


export const LoteEditConfig = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const EditConfig = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const Edit = styled.div`
  height: 2em;
  width: 2em;
  background-color: #393e4b;
  border-radius: 3px;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Config = styled.div`
  height: 2em;
  width: 2em;
  background-color: #393e4b;
  border-radius: 3px;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Categoria = styled.div`
  width: 72px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #393e4b;
  border-radius: 3px;
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
  gap: 0.5em;
`;

export const PendObsBotoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Pendencias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #393e4b;
  border-radius: 5px;
  order: 0;
  flex-grow: 0;
  padding: 16px;
`;

export const Observações = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  padding: 10px;
  width: calc(100%-2em);
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ObsDivBlack = styled.div`
  background-color: #191c24;
  border-radius: 5px;
  gap: 10px;
  padding: 10px;
  width: calc(100%-2em);
  display: flex;
  align-items: center;
  justify-content: center;
  order: 1;
  flex-grow: 0;
`;

export const BotaoMudarFase = styled.div`
  display: flex;
`;

export const VoltarAvancar = styled.div`
  background-color: #393e4b;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0em 15px;
  height: 44px;
  width: calc(40%);
  border-radius: 5px 0px 0px 5px;
  p {
    color: 'white';
    margin-bottom: '0';
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
  font-family: 'Rubik', Helvetica, sans-serif;
`;

export const OptionFases = styled.option`
  background-color: #393e4b;
  width: calc(50%);
  display: flex;
  padding: 2em;
  :hover{
    background-color:red;
  }
`;

export const Botao = styled.div`
  background-color: #393e4b;
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0em 15px;
  height: 44px;
  width: calc(100%-6em);
  border-radius: 5px;
`;

export const DetalFase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FaseIconDiv = styled.div`
  height: 2em;
  margin-top: 1em;
  display: flex;
  align-items: center;
  gap: 1em;
  h2 {
    color: 'white';
    margin-bottom: '0';
  }
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

export const TimeBeginDiv = styled.div`
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
  font-style: normal;
  line-height: 14px;
  font-weight: 400;
`;

export const TimeFinishDiv = styled.div`
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
  font-style: normal;
  line-height: 14px;
  font-weight: 400;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  font-style: normal;
  line-height: 14px;
  font-weight: 400;
`;

export const EnvolvidosDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-top: 0.5em;
`;
