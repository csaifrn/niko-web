import { StyleHTMLAttributes } from "react";
import styled from "styled-components";

const CardsArea = styled.div`
    display:flex;
    margin: 3em;  
    gap: 1em;
    flex-direction: column;
`;

const Footer = styled.div`
  background-color: rgb(242, 247, 251);
  width: 100%;
  height: 35px; /* changed */
  font-size: 12px;
  line-height: 12px;
  color: #4f4f4f;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out; /* added */
  overflow: hidden; /* added */

  span {
    padding: 12px 0;
  }

  .accodion {
    padding: 10px 15px 15px; /* changed */
  }

  &.show {
    height: ${({ setHeight }) => setHeight}px;
  }
`;


export {CardsArea, Footer};