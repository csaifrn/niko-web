import styled from "styled-components";

const areaClick = styled.div`
  color: white;
  z-index: 9999990;
  padding: 2em;
  transition: transform 0.9s ease-in-out;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin: 1em;
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

const CloseDiv = styled.div`
  display: flex;
  justify-content:flex-end;
`

const Exit = styled.div`
  height: 2em;
  width: 2em;  
  background-color: #393E4B;
  border-radius: 3px;
  margin-bottom: 0.5em;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const DetalhesLote = styled.div`
  display: flex;
  gap: 0.5em;
`;

const Protocolo = styled.div`
  height: 2em;
  display: flex;
  align-items:center;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const ProtocoloTextDiv = styled.div`
  height: 2em;
  display: flex;
  align-items:center;
  background-color: #393E4B;
  border-radius: 3px;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const Estante = styled.div`
  height: 2em;
  width: 4em;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #393E4B;
  border-radius: 3px;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const Categoria = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const NomeCategoriaTextDiv = styled.div`
  height: 2em;
  width: auto;
  background-color: #191c24;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #393E4B;
  margin-top: 1em;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const Prioridade = styled.div`
  height: 24px;
  background-color: #f32d2d;
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

const TextDiv = styled.div`
  height: 2em;
  display: flex;
  margin-left:0em;
  align-items:center;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const FaseIconDiv = styled.div`
  height: 2em;
  margin-top: 1em;  
  display: flex;
  align-items:center;
  gap: 1em;
  h2{
    color: "white";
    margin-bottom: "0";
  }
`;

const Fase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: calc(100%-6em);
  background: #393E4B;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 2em;
`;

const TimeBeginDiv = styled.div`
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const TimeFinishDiv = styled.div`
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const Time = styled.div`
  display:flex;
  align-items: center;
  gap:1em;
`;

const EnvolvidosDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;  
  gap: 0.5em;
  margin-top:0.5em;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const Text = styled.p `
  padding: "0 0.5em";
  align-content: left;
`

const Observações = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;
  width: calc(100%-6em);
  background: #393E4B;
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top:2em;
  padding: 2em;
`;

const ObsDiv = styled.div`
  background-color:#191C24;
  border-radius: 5px;
  gap: 1em;
  padding:1em;
  display:flex;
  align-items:center;
  justify-content:center;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

const BotaoMudarFase = styled.div`
  display:flex;

`;

const VoltarAvancar = styled.div`
  background-color: #393E4B;
  display: flex;
  align-items:center;
  gap: 1em;
  padding: 2em;
  width:calc(50%);
  border-radius: 5px 0px 0px 5px;
  margin-top: 1.5em;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const EscolherFase = styled.select`
  background-color: #393E4B;
  width:calc(50%);
  display:flex;
  padding: 2em;
  margin-top: 1.5em;
  border-radius: 0px 5px 5px 0px;
  color:white;
  font-family: 'Rubik', Helvetica, sans-serif;
`;

const OptionFases = styled.option`
  background-color: #393E4B;
  width:calc(50%);
  display:flex;
  padding: 2em;
  margin-top: 1.5em;
  border-radius: 0px 5px 5px 0px;
  fase:hover{
    background-color:#191C24;
  }
`;

const Botao = styled.div`
  background-color: #393E4B;
  display: flex;
  align-items:center;
  gap: 1em;
  padding: 2em;
  width:calc(100%-6em);
  border-radius: 5px;
  margin-top: 1.5em;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const DetalFase = styled.div`
  margin-top: 2em;
`;


export { areaClick, Exit,CloseDiv, DetalhesLote, Protocolo, Estante, Categoria ,Prioridade ,NomeCategoriaTextDiv ,TextDiv , FaseIconDiv, TimeBeginDiv, TimeFinishDiv, Time, EnvolvidosDiv,Text, ProtocoloTextDiv, Observações, ObsDiv,BotaoMudarFase, VoltarAvancar, EscolherFase, OptionFases, Botao, DetalFase, Fase };
