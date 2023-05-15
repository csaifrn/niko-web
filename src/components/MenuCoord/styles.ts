import { StyleHTMLAttributes } from "react";
import styled from "styled-components";

const MenuImg = styled.img``;

const MenuLeft = styled.div`
  display: flex;
  gap: 0.5em;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const MenuArea = styled.div`
  z-index: 999999999999;
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  padding: 1.5em 3em;
  width: calc(100vw - 6em);
  background: #191c24;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const textIcon = styled.p`
  color: white;
  font-weight: bold;
`;

const link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  tex-align: center;
  text-decoration: none;
  font-family: "Rubik";
`;

export { MenuImg, MenuArea, MenuLeft, textIcon, link };
