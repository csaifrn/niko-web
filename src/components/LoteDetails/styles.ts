import styled from 'styled-components';

const areaClick = styled.div`
  color: white;
  z-index: 9999990;
  padding: 2em;
  transition: transform 0.9s ease-in-out;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin: 0em 0em 8em 0em;
  font-family: 'Rubik', Helvetica, sans-serif;
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
const Icons = styled.img``;

const TituloLote = styled.h1``;

const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: '5px 5px';
  border-radius: '5px';
`;

const Exit = styled.div`
  height: 2em;
  width: 2em;
  background-color: #393e4b;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoteEditConfig = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 0em 0em 0em;
`;

const EditConfig = styled.div`
  display: flex;
  gap: 0.5em;
`;

const Edit = styled.div`
  height: 2em;
  width: 2em;
  background-color: #393e4b;
  border-radius: 3px;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Config = styled.div`
  height: 2em;
  width: 2em;
  background-color: #393e4b;
  border-radius: 3px;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetalhesLote = styled.div`
  display: flex;
  gap: 0.5em;
  padding: 1.5em 0em 0em 0em;
`;

const Protocolo = styled.div`
  height: 2em;
  display: flex;
  align-items: center;
  background-color: #393e4b;
  border-radius: 3px;
`;

const Estante = styled.div`
  height: 2em;
  width: 3.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #393e4b;
  border-radius: 3px;
`;

const ArquivFisicos = styled.div`
  background-color: #393e4b;
  height: 2em;
  width: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 3px;
`;

const ArquivDigitais = styled.div`
  background-color: #393e4b;
  height: 2em;
  width: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 3px;
`;

const CategoriaPrioridade = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  padding: 2em 0em 0em 0em;
`;

const Categoria = styled.div`
  width: 72px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #393e4b;
  border-radius: 3px;
`;

const Prioridade = styled.div`
  width: 72px;
  height: 24px;
  background-color: #f32d2d;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

const TextDiv = styled.div`
  height: 2em;
  display: flex;
  margin-left: 0em;
  align-items: center;
`;

const Text = styled.p`
  padding: '0 0.5em';
  align-content: left;
`;

const FaseEnvolvAtual = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.5em;
  padding: 2em 0em 0em 0em;
`;

const ObsBotoes = styled.div`
  padding: 3em 0em 0em 0em;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const Observações = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
  width: calc(100%-6em);
  background: #393e4b;
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 2em;
`;

const ObsDivBlack = styled.div`
  background-color: #191c24;
  border-radius: 5px;
  gap: 1em;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const BotaoMudarFase = styled.div`
  display: flex;
`;

const VoltarAvancar = styled.div`
  background-color: #393e4b;
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0em 2em;
  height: 44px;
  width: calc(50%);
  border-radius: 5px 0px 0px 5px;
  p {
    color: 'white';
    margin-bottom: '0';
  }
`;

const EscolherFase = styled.select`
  background-color: #393e4b;
  width: calc(50%);
  display: flex;
  padding: 0em 2em;
  height: 44px;
  border: none;
  border-radius: 0px 5px 5px 0px;
  border-left: 1px solid #fff;
  color: white;
  font-family: 'Rubik', Helvetica, sans-serif;
`;

const OptionFases = styled.option`
  background-color: #393e4b;
  width: calc(50%);
  display: flex;
  padding: 2em;
  border-radius: 0px 5px 5px 0px;
  fase:hover {
    background-color: #191c24;
  }
`;

const Botao = styled.div`
  background-color: #393e4b;
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0em 2em;
  height: 44px;
  width: calc(100%-6em);
  border-radius: 5px;
`;

const DetalFase = styled.div`
  padding: 3em 0em 0em 0em;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

const FaseIconDiv = styled.div`
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

const Fase = styled.div`
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

const TimeBeginDiv = styled.div`
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
  font-style: normal;
  line-height: 14px;
  font-weight: 400;
`;

const TimeFinishDiv = styled.div`
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
  font-style: normal;
  line-height: 14px;
  font-weight: 400;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  font-style: normal;
  line-height: 14px;
  font-weight: 400;
`;

const EnvolvidosDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-top: 0.5em;
`;

export {
  areaClick,
  Icons,
  TituloLote,
  Exit,
  CloseDiv,
  DetalhesLote,
  Edit,
  Config,
  LoteEditConfig,
  EditConfig,
  Protocolo,
  Estante,
  ArquivFisicos,
  ArquivDigitais,
  CategoriaPrioridade,
  Prioridade,
  Categoria,
  TextDiv,
  FaseIconDiv,
  TimeBeginDiv,
  TimeFinishDiv,
  Time,
  EnvolvidosDiv,
  Text,
  FaseEnvolvAtual,
  ObsBotoes,
  Observações,
  ObsDivBlack,
  BotaoMudarFase,
  VoltarAvancar,
  EscolherFase,
  OptionFases,
  Botao,
  DetalFase,
  Fase,
};
