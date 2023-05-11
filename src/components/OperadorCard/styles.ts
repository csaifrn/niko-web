import { StyleHTMLAttributes } from "react";
import styled from "styled-components";

const totalArea = styled.div`
    background-color: #393E4B;
    align-items:center;
    color: white;
    font-family: "Rubik";
    border-radius: 5px;
`;


const CardArea = styled.div`
    display:flex;
    padding: 2em;   
    background-color: #393E4B;
    align-items:center;
    justify-content: space-between;
    color: white;
    font-family: "Rubik";
    border-radius: 5px;
`;

const dataUser = styled.div`
display: flex; 
align-items: center;
gap: 1em;
`
const dataLote = styled.div`
display: flex; 
align-items: center;
gap: 1em;
`
const textLote = styled.p`
display: flex; 
align-items: center;
height: 32px;
padding: 0em 1em;
color: white;
background-color: #191C24; 
border-radius: 5px;
`;
interface IFooter {
    setHeight: number;
}

const Footer = styled.div<IFooter>`
  width: 100%;
  height: 0px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden; 
  span {
    padding: 12px 0;
  }

  .accodion {
    padding: 2em;
  }

  &.show {
    height: ${({ setHeight }) => setHeight}px;
  }
`;


export {CardArea,dataUser,dataLote, textLote, Footer, totalArea};