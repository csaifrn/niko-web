import { StyleHTMLAttributes } from "react";
import styled from "styled-components";

const Lote = styled.div`
  font-family: "Rubik";

  padding: 0.8em;
  background-color: #393e4b;
  border-radius: 5px;
  color: white;
  filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.25));
`;

const LoteEdit = styled.div`
  font-family: "Rubik";

  padding: 0.8em;
  background-color: #393e4b;
  border-radius: 5px;
  color: white;
  max-width: 300px;
  filter: drop-shadow(0px 4px 1px rgba(0, 0, 0, 0.25));
`;

const LoteArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Prioridade = styled.div`
  height: 2em;
  background-color: #dd3b3b;
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

const Envolvido = styled.div`
  display: flex;
  margin-left: 10px;
`;

const Pa = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

const PaTextDiv = styled.div`
  height: 2em;
  background-color: #191c24;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: "white";
    margin-bottom: "0";
  }
`;

const fotoEnv = styled.img`
  width: 32px;
  height: 32px;
  margin-left: -10px;
  border-radius: 100%;
`;

export {
  Lote,
  LoteArea,
  Content,
  Prioridade,
  Envolvido,
  Pa,
  PaTextDiv,
  fotoEnv,
  LoteEdit,
};