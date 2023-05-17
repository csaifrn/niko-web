import { StyleHTMLAttributes } from "react";
import styled from "styled-components";

const ModalArea = styled.div`
  position: fixed;
  width: 60%;
  top: calc(30% - 2em);
  left: calc(20% - 2em);
  padding: 2em;
  background-color: #393e4b;
  align-items: center;
  color: white;
  font-family: "Rubik";
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ModalContent = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

const NameClose = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
`;

const ChooseLote = styled.div`
  width: 100%;
  height: 40vh;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: auto;
  scroll-behavior: auto;
`;

const Lote = styled.div`
  padding: 1.5em 2em;
  border-radius: 5px;
  cursor: pointer;
`;

const Recused = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: #191C24;
  border: none;
  color: white;
  font-family: "Rubik";
`;

const Delete = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: #F32D2D;
  border: none;
  color: white;
  font-family: "Rubik";
`;

const ModalBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1040;
  background-color: rgba(25, 28, 36, 0.5);;
`;

export { ModalArea, ModalContent, NameClose, ChooseLote, Lote, Recused, Delete, ModalBackdrop };
