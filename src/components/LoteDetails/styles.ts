import styled from "styled-components";

const areaClick = styled.div`
  color: white;
  z-index: 9999990;
  padding: 2em;
  transition: transform 0.9s ease-in-out;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin: 0.5em 0em 10em 0em;
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
const Icons = styled.img`

`

const TituloLote = styled.h1`

`

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

const LoteEditConfig = styled.div`
  display:flex;
  justify-content:space-between;
  padding: 1em 0em 0em 0em;
`;

const EditConfig = styled.div`
  display:flex;
  gap:0.5em;
`;

const Edit = styled.div`
  height: 2em;
  width: 2em;  
  background-color: #393E4B;
  border-radius: 3px;
  margin-bottom: 0.5em;
  display: flex;
  justify-content:center;
  align-items:center;
`;

const Config = styled.div`
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
  padding: 1em 0em 0em 0em;
`;

const Protocolo = styled.div`
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
  width: 3.5em;
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

const ArquivFisicos = styled.div`
  background-color: #393E4B;
  height: 2em;
  width: 4em;
  display: flex;
  align-items:center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 3px;
`;

const ArquivDigitais = styled.div`
  background-color: #393E4B;
  height: 2em;
  width: 4em;
  display: flex;
  align-items:center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 3px;
`;

const Categoria = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  padding: 1em 0em 0em 0em;
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

const Text = styled.p `
  padding: "0 0.5em";
  align-content: left;
`

const FaseEnvolvAtual = styled.div `
  display:flex;
  justify-content: flex-start;
  gap:0.5em;
  padding: 2em 0em 0em 0em;
`

const ObsBotoes = styled.div `
  padding: 2em 0em 0em 0em;
  display:flex;
  flex-direction: column;
  gap:2em;
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
  padding: 2em;
`;

const ObsDivBlack = styled.div`
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
  padding: 0em 2em ;
  height:44px;
  width:calc(50%);
  border-radius: 5px 0px 0px 5px;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const EscolherFase = styled.select`
  background-color: #393E4B;
  width:calc(50%);
  display:flex;
  padding: 0em 2em ;
  height:44px;
  border:none;
  border-radius: 0px 5px 5px 0px;
  border-left: 1px solid #FFF;
  color:white;
  font-family: 'Rubik', Helvetica, sans-serif;
`;

const OptionFases = styled.option`
  background-color: #393E4B;
  width:calc(50%);
  display:flex;
  padding: 2em;
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
  padding: 0em 2em ;
  height:44px;
  width:calc(100%-6em);
  border-radius: 5px;
`;

const DetalFase = styled.div`
  padding: 2em 0em 0em 0em;
  display:flex;
  flex-direction: column;
  gap: 2em;
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
`;

const TimeBeginDiv = styled.div`
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
  font-style:normal;
  line-height: 14px;
  font-weight: 400;
`;

const TimeFinishDiv = styled.div`
  margin-top: 0.5em;
  display: flex;
  align-items: center;
  gap: 1em;
  font-style:normal;
  line-height: 14px;
  font-weight: 400;
`;

const Time = styled.div`
  display:flex;
  align-items: center;
  gap:1em;
  font-style:normal;
  line-height: 14px;
  font-weight: 400;
`;

const EnvolvidosDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;  
  gap: 0.5em;
  margin-top:0.5em;
`;

export { areaClick,Icons, TituloLote, Exit,CloseDiv, DetalhesLote, Edit, Config, LoteEditConfig, EditConfig, Protocolo, Estante, ArquivFisicos, ArquivDigitais, Categoria ,Prioridade ,NomeCategoriaTextDiv ,TextDiv , FaseIconDiv, TimeBeginDiv, TimeFinishDiv, Time, EnvolvidosDiv,Text, ProtocoloTextDiv, FaseEnvolvAtual, ObsBotoes, Observações, ObsDivBlack,BotaoMudarFase, VoltarAvancar, EscolherFase, OptionFases, Botao, DetalFase, Fase };
