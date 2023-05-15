import { StyleHTMLAttributes } from "react";
import styled from "styled-components";

const ModalArea = styled.div`
  position: fixed;
  width: 60%;
  top: calc(10% - 2em);
  left: calc(20% - 2em);
  padding: 2em;
  background-color: #393e4b;
  align-items: center;
  color: white;
  font-family: "Rubik";
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export { ModalArea };
