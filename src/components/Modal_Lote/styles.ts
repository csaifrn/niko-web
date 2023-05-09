import styled from "styled-components";

const areaClick = styled.div`
  color: white;
  z-index: 9999990;
  width: 60%;
  height: 70%;
  padding: 2em;
  background: #393e4b;
  transition: transform 0.9s ease-in-out;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
  overflow-y: scroll;
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

const blur = styled.div`
  background-color: rgb(0,0,0, 0.5);
  position: fixed;
  color: white;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
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

  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const CategoriaTextDiv = styled.div`
  height: 2em;
  display: flex;
  align-items:center;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const EtapaIconDiv = styled.div`
  height: 2em;
  margin-top: 5em;  
  display: flex;
  align-items:center;
  gap:2em;
  h2{
    color: "white";
    margin-bottom: "0";
  }
`;

const TimeDiv = styled.div`
  margin-top: 2em;
  margin-left: 0.8em;
  display: flex;
  align-content: center;
  gap: 3em;
  p{
    color: "white";
    margin-bottom: "0";
  }
`;

const StartEnd = styled.div`
  display: flex;
  flex-wrap:wrap;
  align-items: center;
`;

const EnvolvidosDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;  
  margin-top: 1.5em;
  margin-left: 0.8em;
  gap: 3em;
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

export { areaClick, Exit,CloseDiv, Categoria ,Prioridade ,NomeCategoriaTextDiv ,CategoriaTextDiv , EtapaIconDiv, TimeDiv, StartEnd, EnvolvidosDiv, UsuariosDiv, blur , Text  };
