import { StyleHTMLAttributes } from "react";
import styled from "styled-components";

const DataUser = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3em;
  padding: 2em;
`;

const SideUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Fase = styled.div`
  display: flex;
  gap: 1em;
`;

const Icon = styled.img`
  height: 28px;
  width: 28px;
`;

const TotalFase = styled.p`
  color: white;
`;

const PerecentageFase = styled.p`
  color: #c3c3c3;
  font-size: 10px;
`;

export {Fase, SideUser, Icon, TotalFase, PerecentageFase, DataUser}