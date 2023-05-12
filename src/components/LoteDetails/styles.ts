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
  background-color: #191c24;
  border-radius: 5px;
  margin-bottom: 0.5em;
  display: flex;
  justify-content:center;
  align-items:center;
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

const Prioridade = styled.div`
  height: 24px;
  background-color: #f32d2d;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: white;
    margin-bottom: 0;
    padding: 0 0.5em;
  }
`;

const NomeCategoriaTextDiv = styled.div`
  height: 2em;
  width: auto;
  background-color: #191c24;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #393E4B;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const CategoriaTextDiv = styled.div`
  height: 2em;
  display: flex;
  margin-left:1em;
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
  gap:2em;
  h2{
    color: "white";
    margin-bottom: "0";
  }
`;

const TimeFinishDiv = styled.div`
  margin-top: 0.5em;
  display: flex;
  align-content: center;
  gap: 1.3em;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const Start = styled.div`
  display: flex;
  flex-wrap:wrap;
  align-items: center;
`;

const End = styled.div`
  display: flex;
  flex-wrap:wrap;
  align-items: center;
`;

const EnvolvidosDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;  
  gap: 3em;
  margin-top:0.5em;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const UsuariosDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;  
  gap: 1em;
`;

const Text = styled.p `
  padding: "0 0.5em";
  align-content: left;
`
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
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const Observações = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 10px;
  width: calc(100%-6em);
  height: 10em;
  background: #393E4B;
  border-radius: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top:2em;
`;

const Botao = styled.div`
  display: flex;
  align-items:center;
  background-color: #393E4B;
  height: 5em;
  width:calc(100%-6em);
  border-radius: 5px;
  margin-top:2em;
  p{
    color: "white";
    margin-bottom: "0";
  }
  .excluir{
    display: flex;
    align-items:center;
    background-color: #393E4B;
    height: 5em;
    width:calc(100%-6em);
    border-radius: 5px;
    margin-top:2em;
    background-color:red;
  }
`;

const DetalFase = styled.div`
  margin-top: 2em;
`;

const Fase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: calc(100%-6em);
  height: 16em;
  background: #393E4B;
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-top: 2em;
`;

export { areaClick, Exit,CloseDiv, Categoria ,Prioridade ,NomeCategoriaTextDiv ,CategoriaTextDiv , FaseIconDiv, TimeFinishDiv, Start, End, EnvolvidosDiv, UsuariosDiv,Text, Protocolo, ProtocoloTextDiv, Observações, Botao, DetalFase, Fase };
